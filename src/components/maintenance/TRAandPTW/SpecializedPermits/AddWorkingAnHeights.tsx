import React from "react";
import Select from "@/components/common/form/select";
import Input from "@/components/common/form/input";
import Textarea from "@/components/common/form/textarea";
import BooleanToggle from "@/components/common/form/toggle-button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";

import {
  type ApiError,
  type WorkAtHeightPermitCreate,
  type MaintenancePTWRead,
  PermitsService,
} from "../../../../client";

import { FallProtectionType, WorkingAtHeightsType } from "@/constants/Data";
import { useToastStore } from "@/hooks/useToastStore";
import AddFormModal from "../../../../components/common/AddFormModal";

type AddSpecialPermitFormProps = {
  ptw: MaintenancePTWRead;
  open: boolean;
  onClose: () => void;
};

const AddWorkingAtHeightForm: React.FC<AddSpecialPermitFormProps> = ({
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
  } = useForm<WorkAtHeightPermitCreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      maintenance_ptw_id: ptw.id,
      supervisor_name: "",
      worker_name: "",
      work_at_height_type: "",
      fall_protection_required: false,
      fall_protection_type: "",
      remarks: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: WorkAtHeightPermitCreate) =>
      PermitsService.createRiggingAndLiftingPermitApiV1PermitsRiggingAndLiftingPermitsPost(
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
        queryKey: ["maintenance-ptws", "rigging-and-lifting-permits"],
      });
    },
  });

  const onSubmit: SubmitHandler<WorkAtHeightPermitCreate> = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <AddFormModal
        open={open}
        onClose={onClose}
        title="Add Rigging and Lifting Permit"
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
          register={register("worker_name", { required: true })}
          label="Worker Name"
          error={errors?.worker_name?.message}
        />
        <Controller
          name="work_at_height_type"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={WorkingAtHeightsType}
              label="Work At Height Type"
              register={register("work_at_height_type", { required: true })}
              error={errors?.work_at_height_type?.message}
            />
          )}
        />
        <Controller
          name="fall_protection_required"
          control={control}
          render={({ field }) => (
            // @ts-ignore
            <BooleanToggle
              {...field}
              label="Fall Protection Required?"
              onChange={field.onChange}
            />
          )}
        />

        <Controller
          name="fall_protection_type"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={FallProtectionType}
              label="Fall Protection Type"
              register={register("fall_protection_type", { required: true })}
              error={errors?.fall_protection_type?.message}
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

export default AddWorkingAtHeightForm;
