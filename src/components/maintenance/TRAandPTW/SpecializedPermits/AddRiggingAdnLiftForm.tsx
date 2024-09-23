import React from "react";
import Select from "@/components/common/form/select";
import Input from "@/components/common/form/input";
import Textarea from "@/components/common/form/textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";

import {
  type ApiError,
  type RiggingAndLiftingPermitCreate,
  type MaintenancePTWRead,
  PermitsService,
} from "../../../../client";

import { LiftingPlan } from "@/constants/Data";
import { useToastStore } from "@/hooks/useToastStore";
import AddFormModal from "../../../../components/common/AddFormModal";

type AddSpecialPermitFormProps = {
  ptw: MaintenancePTWRead;
  open: boolean;
  onClose: () => void;
};

const AddRiggingAndLiftForm: React.FC<AddSpecialPermitFormProps> = ({
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
  } = useForm<RiggingAndLiftingPermitCreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      maintenance_ptw_id: ptw.id,
      supervisor_name: "",
      rigger_name: "",
      load_description: "",
      lifting_plan: "",
      remarks: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: RiggingAndLiftingPermitCreate) =>
      PermitsService.createRiggingAndLiftingPermitApiV1PermitsRiggingAndLiftingPermitsPost(
        {
          permitId: ptw.id,
          requestBody: data,
        }
      ),

    onSuccess: () => {
      showToast("Rigging and Lifting Permit added successfully", "success");
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

  const onSubmit: SubmitHandler<RiggingAndLiftingPermitCreate> = (data) => {
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
          register={register("rigger_name", { required: true })}
          label="Rigger Name"
          error={errors?.rigger_name?.message}
        />

        <Textarea
          register={register("load_description", { required: true })}
          label="Load Description"
          error={errors?.load_description?.message}
        />
        <Controller
          name="lifting_plan"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              label="Lifting Plan"
              register={register("lifting_plan", { required: true })}
              options={LiftingPlan}
              error={errors?.lifting_plan?.message}
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

export default AddRiggingAndLiftForm;
