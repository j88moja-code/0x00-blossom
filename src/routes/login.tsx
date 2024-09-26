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
    <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <img src={Logo} alt="CMOOS logo" className="mx-auto h-auto" />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <Input
            label="Email"
            type="email"
            register={register("username", {
              required: "Username is required",
              pattern: emailPattern,
            })}
            error={errors?.username?.message}
          />

          <Input
            label="Password"
            type="password"
            register={register("password", {
              required: "Password is required",
            })}
            error={errors?.password?.message}
          />
          {/* Remember me */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Button type="submit" variant="default">
              {isSubmitting ? (
                <span className="spinner-loader"></span>
              ) : (
                "Log in"
              )}
            </Button>
            <RouterLink
              to="/recover-password"
              className="text-blue-500 hover:underline"
            >
              Forgot password?
            </RouterLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
