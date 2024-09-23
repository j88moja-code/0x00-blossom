import React from "react";
import Textarea from "@/components/common/form/textarea";
import Select from "@/components/common/form/select";
import Input from "@/components/common/form/input";
import BooleanToggle from "@/components/common/form/toggle-button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";

import {
  type ApiError,
  type HotWorkPermitCreate,
  type MaintenancePTWRead,
  PermitsService,
} from "../../../../client";

import { HotWorkType, FireExtinguisherType } from "@/constants/Data";
import { useToastStore } from "@/hooks/useToastStore";
import AddFormModal from "../../../../components/common/AddFormModal";

type AddSpecialPermitFormProps = {
  ptw: MaintenancePTWRead;
  open: boolean;
  onClose: () => void;
};

const AddHotWorkForm: React.FC<AddSpecialPermitFormProps> = ({
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
  } = useForm<HotWorkPermitCreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      maintenance_ptw_id: ptw.id,
      supervisor_name: "",
      fire_watch_name: "",
      fire_watch_required: false,
      type_of_fire_extinguisher: "",
      hot_work_type: "",
      remarks: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: HotWorkPermitCreate) =>
      PermitsService.createHotWorkPermitApiV1PermitsHotWorkPermitsPost({
        permitId: ptw.id,
        requestBody: data,
      }),

    onSuccess: () => {
      showToast("Hot Work Permit added successfully", "success");
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
        queryKey: ["maintenance-ptws", "hot-work-permits"],
      });
    },
  });

  const onSubmit: SubmitHandler<HotWorkPermitCreate> = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <AddFormModal
        open={open}
        onClose={onClose}
        title="Add Hot Work Permit"
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
          register={register("fire_watch_name", { required: true })}
          label="Fire Watch Name"
          error={errors?.fire_watch_name?.message}
        />

        {/* <Checkbox
          register={register("fire_watch_required", { required: true })}
          label="Fire Watch Required"
          // error={errors?.fire_watch_required?.message}
        /> */}
        <Controller
          name="fire_watch_required"
          control={control}
          render={({ field }) => (
            // @ts-ignore
            <BooleanToggle
              {...field}
              label="Fire Watch Required?"
              onChange={field.onChange}
            />
          )}
        />

        <Controller
          name="hot_work_type"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              label="Hot Work Type"
              options={HotWorkType}
              register={register("hot_work_type", { required: true })}
              error={errors?.hot_work_type?.message}
            />
          )}
        />

        <Controller
          name="type_of_fire_extinguisher"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              label="Type of Fire Extinguisher"
              options={FireExtinguisherType}
              register={register("type_of_fire_extinguisher", {
                required: true,
              })}
              error={errors?.type_of_fire_extinguisher?.message}
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

export default AddHotWorkForm;
