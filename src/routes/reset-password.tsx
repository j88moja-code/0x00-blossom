import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import Input from "@/components/common/form/input";
import { useMutation } from "@tanstack/react-query";
import useTitle from "@/hooks/useTitle";

import { Button } from "@/components/ui/button";
import { type SubmitHandler, useForm } from "react-hook-form";
import { isLoggedIn } from "../hooks/useAuth";
import { confirmPasswordRules, handleError, passwordRules } from "../utils";
import Logo from "../assets/images/logo.png";
import { type ApiError, AuthenticationService } from "@/client";
import { useToastStore } from "@/hooks/useToastStore";

interface ResetPasswordForm {
  new_password: string;
  confirm_password: string;
}

export const Route = createFileRoute("/reset-password")({
  component: ResetPassword,
  beforeLoad: async () => {
    if (isLoggedIn()) {
      throw redirect({
        to: "/",
      });
    }
  },
});

function ResetPassword() {
  useTitle("Reset Password");
  const showToast = useToastStore((state) => state.showToast);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordForm>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      new_password: "",
      confirm_password: "",
    },
  });

  const resetPassword = async (data: ResetPasswordForm) => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (!token) {
      return;
    }

    await AuthenticationService.resetPasswordApiV1AuthResetPasswordPost({
      requestBody: {
        new_password: data.new_password,
        token,
      },
    });
  };

  const mutation = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      showToast("Password has been reset", "success");
      navigate({ to: "/login" });
      reset();
    },
    onError: (error: ApiError) => {
      handleError(error, showToast);
    },
  });

  const onSubmit: SubmitHandler<ResetPasswordForm> = async (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <img src={Logo} alt="CMOOS logo" className="mx-auto w-28 h-auto" />
        <h1 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
          Please enter your new password and confirm it to reset your password.
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="New Password"
            id="new_password"
            type="password"
            register={register("new_password", passwordRules())}
            error={errors?.new_password?.message}
            autoComplete="new-password"
          />
          <Input
            label="Confirm Password"
            id="confirm_password"
            type="password"
            register={register(
              "confirm_password",
              confirmPasswordRules(getValues)
            )}
            error={errors?.confirm_password?.message}
            autoComplete="new-password"
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Reset Password
          </Button>
        </form>
      </div>
    </div>
  );
}
