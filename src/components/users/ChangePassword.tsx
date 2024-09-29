import Input from "@/components/common/form/input";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useToastStore } from "@/hooks/useToastStore";

import { type ApiError, type ChangePassword, UsersService } from "@/client";
import useAuth from "@/hooks/useAuth";
import { confirmPasswordRules, handleError, passwordRules } from "@/utils";

interface ChangePasswordForm extends ChangePassword {
  confirm_password: string;
}

const ChangePassword = () => {
  const showToast = useToastStore((state) => state.showToast);
  const { user: currentUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<ChangePasswordForm>({
    mode: "onBlur",
    criteriaMode: "all",
  });

  const mutation = useMutation({
    mutationFn: (data: ChangePassword) =>
      UsersService.updateUserPasswordApiV1UsersPasswordUserIdPut({
        userId: currentUser?.id as string,
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("Password updated successfully", "success");
      reset();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
  });

  const onSubmit: SubmitHandler<ChangePassword> = async (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h3 className="text-lg font-medium">Change Password</h3>
        <Input
          label="Current Password"
          type="password"
          register={register("old_password")}
          error={errors.old_password?.message}
        />
        <Input
          label="New Password"
          type="password"
          register={register("new_password", passwordRules())}
          error={errors.new_password?.message}
        />
        <Input
          label="Confirm Password"
          type="password"
          register={register(
            "confirm_password",
            confirmPasswordRules(getValues)
          )}
          error={errors.confirm_password?.message}
        />
        <Button type="submit" variant="default" disabled={isSubmitting}>
          Save
        </Button>
      </form>
    </div>
  );
};

export default ChangePassword;
