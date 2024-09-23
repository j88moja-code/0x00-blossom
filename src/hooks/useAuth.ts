import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

import { AxiosError } from "axios";
import {
  type Body_login_access_token_api_v1_auth_login_access_token_post as AccessToken,
  type ApiError,
  AuthenticationService,
  type User,
} from "../client";

// Helper function to check if the user is logged in
const isLoggedIn = () => {
  return localStorage.getItem("access_token") !== null;
};

// Helper function to refresh the access token using the refresh token
const refreshAccessToken = async () => {
  const refresh_token = localStorage.getItem("refresh_token");

  if (!refresh_token) throw new Error("No refresh token available");

  const response = await AuthenticationService.refreshTokenApiV1AuthRefreshPost(
    {
      requestBody: refresh_token,
    }
  );

  // Store the new access and refresh tokens
  localStorage.setItem("access_token", response.access_token);
  localStorage.setItem("refresh_token", response.refresh_token);
};

const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  // Query to fetch the current user, refresh the token if necessary
  const { data: user, isLoading } = useQuery<User | null, Error>({
    queryKey: ["currentUser"],
    queryFn: async () => {
      try {
        // Try fetching the current user
        return await AuthenticationService.testTokenApiV1AuthLoginTestTokenPost();
      } catch (err) {
        // If the error is due to an expired token, refresh the token
        if (err instanceof AxiosError && err.response?.status === 401) {
          await refreshAccessToken();
          // Retry fetching the user with the new token
          return await AuthenticationService.testTokenApiV1AuthLoginTestTokenPost();
        }
        throw err;
      }
    },
    enabled: isLoggedIn(),
  });

  // Login mutation to handle user login
  const login = async (data: AccessToken) => {
    const response =
      await AuthenticationService.loginAccessTokenApiV1AuthLoginAccessTokenPost(
        {
          formData: data,
        }
      );
    localStorage.setItem("access_token", response.access_token);
    localStorage.setItem("refresh_token", response.refresh_token); // Save the refresh token
  };

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate({ to: "/dash/home" });
    },
    onError: (err: ApiError) => {
      let errDetail = (err.body as any)?.detail;

      if (err instanceof AxiosError) {
        errDetail = err.message;
      }

      if (Array.isArray(errDetail)) {
        errDetail = "Something went wrong";
      }

      setError(errDetail);
    },
  });

  // Logout logic
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token"); // Clear the refresh token
    navigate({ to: "/login" });
  };

  return {
    loginMutation,
    logout,
    user,
    isLoading,
    error,
    resetError: () => setError(null),
  };
};

export { isLoggedIn };
export default useAuth;
