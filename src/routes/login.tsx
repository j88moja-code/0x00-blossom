import Input from "@/components/common/form/input";
import useTitle from "@/hooks/useTitle";

import { Button } from "@/components/ui/button";
import { type SubmitHandler, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// // import { useForm } from "react-hook-form";
// import { z } from "zod";
import {
  Link as RouterLink,
  createFileRoute,
  redirect,
} from "@tanstack/react-router";
// import { cn } from "@/lib/utils"; // Shadcn utility function for classNames
import Logo from "../assets/images/logo.png";
import AssetCare from "../assets/images/equipment.png";
import Build from "../assets/images/build.png";
import Reports from "../assets/images/dashboard_2328966.png";
import useAuth, { isLoggedIn } from "../hooks/useAuth";
import { emailPattern } from "../utils";
import type { Body_login_access_token_api_v1_auth_login_access_token_post as AccessToken } from "../client";

export const Route = createFileRoute("/login")({
  component: Login,
  beforeLoad: async () => {
    if (isLoggedIn()) {
      throw redirect({
        to: "/",
      });
    }
  },
});

// const loginSchema = z.object({
//   username:  z.string().email({ message: "Invalid email address" }),
//   password: z.string().min(1, { message: "Required" }),
// });

function Login() {
  useTitle("CMOOS-Login");
  const { loginMutation, resetError } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AccessToken>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<AccessToken> = async (data) => {
    if (isSubmitting) return;

    resetError();

    try {
      await loginMutation.mutateAsync(data);
    } catch {
      // error is handled by useAuth hook
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 dark:from-indigo-600 dark:via-indigo-700">
      {/* Interactive Features Section */}
      <div className="flex-1 mt-12 md:mt-0 text-center max-w-lg px-4 sm:px-6 md:px-8 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Welcome to Centralised Management of Operations Systems
          <br />
          <p className="text-base sm:text-lg text-gray-200">
            CMOOS is a web-based platform that allows users to manage day to day
            operations.
          </p>
          <div className="flex justify-center"></div>
        </h2>
        <p className="text-base sm:text-lg text-gray-200">
          By logging in, you can:
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-white">
          {/* Asset Tracking Feature */}
          <div className="flex flex-col items-center transition-transform hover:scale-105">
            <span className="material-icons text-4xl sm:text-5xl">
              Track changes
            </span>
            <img src={AssetCare} alt="Asset Care" className="w-12 h-12 mt-2" />
          </div>

          {/* Manage Maintenance Feature */}
          <div className="flex flex-col items-center transition-transform hover:scale-105">
            <span className="material-icons text-4xl sm:text-5xl">Build</span>
            <img src={Build} alt="Build" className="w-12 h-12 mt-2" />
          </div>

          {/* View Reports Feature */}
          <div className="flex flex-col items-center transition-transform hover:scale-105">
            <span className="material-icons text-4xl sm:text-5xl">
              Get advanced Analtics
            </span>
            <img src={Reports} alt="Reports" className="w-12 h-12 mt-2" />
          </div>
        </div>
        <p className="text-base sm:text-lg text-gray-200">
          Sign in now to experience these features and more.
        </p>
      </div>

      {/* Login Card */}
      <div className="flex-1 w-full max-w-xs sm:max-w-md p-6 sm:p-8 bg-white dark:bg-gray-800 shadow-xl rounded-lg transition-transform hover:scale-105">
        <img
          src={Logo}
          alt="CMOOS logo"
          className="h-auto w-auto sm:h-auto sm:w-auto object-contain"
        />

        {/* Login Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 sm:space-y-8"
        >
          <Input
            label="Email"
            type="email"
            register={register("username", {
              required: "Email is required",
              pattern: emailPattern,
            })}
            error={errors?.username?.message}
            className="transition-colors duration-300 focus:ring-2 focus:ring-blue-500 dark:focus:ring-indigo-300"
          />

          <Input
            label="Password"
            type="password"
            register={register("password", {
              required: "Password is required",
            })}
            error={errors?.password?.message}
            className="transition-colors duration-300 focus:ring-2 focus:ring-blue-500 dark:focus:ring-indigo-300"
          />

          {/* Remember Me and Forgot Password */}
          <div className="flex flex-wrap items-center justify-between mt-4">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm text-gray-900 dark:text-gray-300"
              >
                Trust this Device?
              </label>
            </div>

            <RouterLink
              to="/recover-password"
              className="text-blue-500 hover:underline dark:text-blue-400 mt-2 sm:mt-0"
            >
              Forgot password?
            </RouterLink>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="default"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-gradient-to-l hover:scale-105 transition-transform"
          >
            {isSubmitting ? <span className="spinner-loader"></span> : "Log in"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
