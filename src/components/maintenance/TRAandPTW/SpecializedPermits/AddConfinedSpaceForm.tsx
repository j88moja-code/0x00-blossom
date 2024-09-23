import React from "react";
import Select from "@/components/common/form/select";
import Input from "@/components/common/form/input";
import Textarea from "@/components/common/form/textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";

import {
  type ApiError,
  type ConfinedSpacePermitCreate,
  type MaintenancePTWRead,
  PermitsService,
} from "../../../../client";

import { RescuePlan } from "@/constants/Data";
import { useToastStore } from "@/hooks/useToastStore";
import AddFormModal from "../../../../components/common/AddFormModal";

type AddConfinedSpaceFormProps = {
  ptw: MaintenancePTWRead;
  open: boolean;
  onClose: () => void;
};

const AddConfinedSpaceForm: React.FC<AddConfinedSpaceFormProps> = ({
  ptw,
  open,
  onClose,
}) => {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ConfinedSpacePermitCreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      maintenance_ptw_id: ptw.id,
      supervisor_name: "",
      entrant_name: "",
      rescue_plan: "",
      remarks: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: ConfinedSpacePermitCreate) =>
      PermitsService.createConfinedSpacePermitApiV1PermitsConfinedSpacePermitsPost(
        {
          permitId: ptw.id,
          requestBody: data,
        }
      ),

    onSuccess: () => {
      showToast("Permit created successfully", "success");
      reset();
      onClose();
    },
    onError: (err: ApiError) => {
      // Handle and stringify error details for debugging
      const errDetail = (err.body as any)?.detail;
      const errorMessage =
        typeof errDetail === "string"
          ? errDetail
          : JSON.stringify(errDetail) || "An error occurred";
      showToast(`Something went wrong ${errorMessage}`, "error");
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["maintenance-ptws", "confined-space-permits"],
      });
    },
  });

  const onSubmit: SubmitHandler<ConfinedSpacePermitCreate> = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <AddFormModal
        open={open}
        onClose={onClose}
        title="Add Confined Space Permit"
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
        disabled={isSubmitting}
      >
        <Input
          register={register("maintenance_ptw_id")}
          label="Maintenance PTW ID"
          value={ptw.id}
          disabled
          error={errors?.maintenance_ptw_id?.message}
        />

        <Input
          register={register("supervisor_name", { required: true })}
          label="Supervisor Name"
          error={errors?.supervisor_name?.message}
        />

        <Input
          register={register("entrant_name", { required: true })}
          label="Entrant Name"
          error={errors?.entrant_name?.message}
        />

        <Controller
          name="rescue_plan"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              label="Rescue Plan"
              options={RescuePlan}
              register={register("rescue_plan", { required: true })}
              error={errors?.rescue_plan?.message}
            />
          )}
        />

        <Textarea
          register={register("remarks")}
          label="Remarks"
          error={errors?.remarks?.message}
        />
      </AddFormModal>
    </>
  );
};

export default AddConfinedSpaceForm;
