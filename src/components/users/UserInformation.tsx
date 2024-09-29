import { useState } from "react";
import Input from "@/components/common/form/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useToastStore } from "@/hooks/useToastStore";

import { type ApiError, type UserUpdate, UsersService } from "@/client";
import useAuth from "@/hooks/useAuth";
import { emailPattern, handleError } from "@/utils";

const UserInformation = () => {
  const showToast = useToastStore((state) => state.showToast);
  const { user: currentUser } = useAuth();
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors, isDirty },
  } = useForm<UserUpdate>({
    defaultValues: {
      email: currentUser?.email,
      first_name: currentUser?.first_name,
      last_name: currentUser?.last_name,
    },
  });

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const mutation = useMutation({
    mutationFn: (data: UserUpdate) =>
      UsersService.updateUserApiV1UsersUserIdPut({
        userId: currentUser?.id as string,
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("User information updated successfully", "success");
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries();
    },
  });

  const onSubmit: SubmitHandler<UserUpdate> = async (data) => {
    mutation.mutate(data);
  };

  const onCancel = () => {
    reset();
    toggleIsEditing();
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium mb-4">User Information</h3>
          <Button variant="outline" size="sm" onClick={toggleIsEditing}>
            {isEditing ? "Cancel" : "Edit"}
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          {isEditing
            ? "Edit your user information"
            : "View your user information"}
        </p>
      </div>
      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Email"
            id="email"
            type="email"
            disabled
            register={register("email", {
              pattern: emailPattern,
            })}
            error={errors.email?.message}
          />
          <Input
            label="First Name"
            id="first_name"
            type="text"
            register={register("first_name")}
            error={errors.first_name?.message}
          />
          <Input
            label="Last Name"
            id="last_name"
            type="text"
            register={register("last_name")}
            error={errors.last_name?.message}
          />
          <div className="flex justify-end space-x-2">
            <Button variant="outline" size="sm" onClick={onCancel}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="outline"
              size="sm"
              disabled={isSubmitting || !isDirty}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">Email</p>
          <p className="text-sm">{currentUser?.email}</p>
          <p className="text-sm text-muted-foreground">First Name</p>
          <p className="text-sm">{currentUser?.first_name}</p>
          <p className="text-sm text-muted-foreground">Last Name</p>
          <p className="text-sm">{currentUser?.last_name}</p>
        </div>
      )}
    </div>
  );
};

export default UserInformation;
