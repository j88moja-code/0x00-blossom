import React from "react";
import Select from "@/components/common/form/select";
import Textarea from "@/components/common/form/textarea";
import Input from "@/components/common/form/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";

import {
  type ApiError,
  type ElectricalIsolationPermitCreate,
  type MaintenancePTWRead,
  PermitsService,
} from "../../../../client";

import { IsolationPlan } from "@/constants/Data";
import { useToastStore } from "@/hooks/useToastStore";
import AddFormModal from "../../../../components/common/AddFormModal";

type AddElectricalIsolateFormProps = {
  ptw: MaintenancePTWRead;
  open: boolean;
  onClose: () => void;
};

const AddElectricalIsolationForm: React.FC<AddElectricalIsolateFormProps> = ({
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
  } = useForm<ElectricalIsolationPermitCreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      maintenance_ptw_id: ptw.id,
      supervisor_name: "",
      electrician_name: "",
      isolation_plan: "",
      remarks: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: ElectricalIsolationPermitCreate) =>
      PermitsService.createElectricalIsolationPermitApiV1PermitsElectricalIsolationPost(
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
        queryKey: ["maintenance-ptws", "electrical-isolation-permits"],
      });
    },
  });

  const onSubmit: SubmitHandler<ElectricalIsolationPermitCreate> = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <AddFormModal
        open={open}
        onClose={onClose}
        title="Add Electrical Isolation Permit"
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
          register={register("electrician_name", { required: true })}
          label="Electrician Name"
          error={errors?.electrician_name?.message}
        />

        <Controller
          name="isolation_plan"
          control={control}
          render={({ field }) => (
            <Select
              label="Isolation Plan"
              {...field}
              register={register("isolation_plan", { required: true })}
              options={IsolationPlan}
              error={errors.isolation_plan?.message}
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

export default AddElectricalIsolationForm;
