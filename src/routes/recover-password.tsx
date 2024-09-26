import { createFileRoute, redirect } from "@tanstack/react-router";
import Input from "@/components/common/form/input";
import { useMutation } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { type SubmitHandler, useForm } from "react-hook-form";
import { isLoggedIn } from "../hooks/useAuth";
import { emailPattern, handleError } from "../utils";
import Logo from "../assets/images/logo.png";
import { type ApiError, AuthenticationService } from "@/client";
import { useToastStore } from "@/hooks/useToastStore";
import useTitle from "@/hooks/useTitle";

interface RecoverPassword {
  email: string;
}

export const Route = createFileRoute("/recover-password")({
  component: RecoverPassword,
  beforeLoad: async () => {
    if (isLoggedIn()) {
      throw redirect({
        to: "/",
      });
    }
  },
});

function RecoverPassword() {
  useTitle("Recover Password");
  const showToast = useToastStore((state) => state.showToast);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RecoverPassword>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      email: "",
    },
  });

  const recoverPassword = async (data: RecoverPassword) => {
    await AuthenticationService.recoverPasswordApiV1AuthPasswordRecoveryEmailPost(
      {
        email: data.email,
      }
    );
  };

  const mutation = useMutation({
    mutationFn: recoverPassword,
    onSuccess: () => {
      showToast(
        "Email has been sent with a link to reset your password",
        "success"
      );
      reset();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
  });

  const onSubmit: SubmitHandler<RecoverPassword> = async (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <img src={Logo} alt="CMOOS logo" className="mx-auto w-28 h-auto" />
        <h1 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
          Recover Password
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            type="email"
            error={errors.email?.message}
            register={register("email", {
              required: "Email is required",
              pattern: emailPattern,
            })}
          />
          <Button type="submit" className="w-full mt-6" disabled={isSubmitting}>
            Recover Password
          </Button>
        </form>
      </div>
    </div>
  );
}
