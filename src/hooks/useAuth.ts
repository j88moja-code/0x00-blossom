import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useToastStore } from "@/hooks/useToastStore";
import { handleError } from "@/utils";
import { AxiosError } from "axios";
import {
  type Body_login_access_token_api_v1_auth_login_access_token_post as AccessToken,
  type ApiError,
  AuthenticationService,
  type User,
} from "../client";
interface DecodedToken {
  exp: number;
  [key: string]: any; // other JWT claims
}

const isTokenExpired = (token: string): boolean => {
  try {
    const decodedToken = jwtDecode<DecodedToken>(token);
    const currentTime = Date.now() / 1000; // Convert to seconds
    return decodedToken.exp < currentTime;
  } catch (err) {
    return true; // Consider token expired if decoding fails
  }
};
// Helper function to check if the user is logged in
const isLoggedIn = () => {
  return localStorage.getItem("access_token") !== null;
};

const useAuth = () => {
  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem("access_token")
  );
  const [refreshToken, setRefreshToken] = useState<string | null>(
    localStorage.getItem("refresh_token")
  );
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const showToast = useToastStore((state) => state.showToast);

  const saveTokens = (newAccessToken: string, newRefreshToken: string) => {
    localStorage.setItem("access_token", newAccessToken);
    localStorage.setItem("refresh_token", newRefreshToken);
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);
  };

  const clearAuth = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setAccessToken(null);
    setRefreshToken(null);
  };

  const refreshAccessToken = async (): Promise<string> => {
    if (!refreshToken) throw new Error("No refresh token available");

    const response =
      await AuthenticationService.refreshTokenApiV1AuthRefreshPost({
        requestBody: refreshToken,
      });

    saveTokens(response.access_token, response.refresh_token);
    return response.access_token;
  };

  const fetchUser = async () => {
    if (accessToken && isTokenExpired(accessToken)) {
      try {
        const newAccessToken = await refreshAccessToken();
        setAccessToken(newAccessToken);
      } catch (error) {
        clearAuth();
        navigate({ to: "/login" });
        showToast("Your session has expired. Please log in again.", "error");
      }
    }

    return AuthenticationService.testTokenApiV1AuthLoginTestTokenPost();
  };

  // const refreshAccessToken = async () => {
  //   const refresh_token = localStorage.getItem("refresh_token");
  //    if (accessToken && refresh_token && isTokenExpired(accessToken)) {
  //      try {
  //        const response =
  //          await AuthenticationService.refreshTokenApiV1AuthRefreshPost({
  //            requestBody: refresh_token,
  //          });

  //        localStorage.setItem("access_token", response.access_token);
  //        localStorage.setItem("refresh_token", response.refresh_token);
  //      } catch (err) {
  //        clearAuth();
  //        navigate({ to: "/login" });
  //        showToast("Your session has expired. Please log in again.", "error");
  //      }
  //    }
  // }

  // Helper function to check if the user is logged in

  // Query to fetch the current user, refresh the token if necessary
  const { data: user, isLoading } = useQuery<User | null, Error>({
    queryKey: ["currentUser"],
    queryFn: fetchUser,
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
      navigate({ to: "/" });
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
						handleError(err, showToast);
    },
  });

  // Logout logic
  const logout = () => {
    clearAuth(); // Clear tokens from localStorage
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
