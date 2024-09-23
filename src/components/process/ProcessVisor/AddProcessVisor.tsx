import Select from "@/components/common/form/select";
import Input from "@/components/common/form/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";

import { useToastStore } from "@/hooks/useToastStore";
import AddFormModal from "../../common/AddFormModal";
import {
  type ApiError,
  type ProcessVisorCreate,
  ProcessVisorService,
} from "../../../client";
import { handleError } from "@/utils";

interface AddProcessVisorProps {
  open: boolean;
  onClose: () => void;
}

const AddProcessVisor: React.FC<AddProcessVisorProps> = ({ open, onClose }) => {
  const queryClient = useQueryClient();
  const showToast = useToastStore((state) => state.showToast);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ProcessVisorCreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      machine_operator_name: "",
      machine_assisst_name: "",
      stock_prep_operator_name: "",
      stock_prep_assisst_name: "",
      shift: "",
      started: false,
      completed: false,
      remarks: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: ProcessVisorCreate) =>
      ProcessVisorService.createProcessVisorApiV1ProcessVisorsPost({
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("Process Visor created successfully", "success");
      reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["process-visors"] });
    },
  });

  const onSubmit: SubmitHandler<ProcessVisorCreate> = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <AddFormModal
        open={open}
        onClose={onClose}
        title="Add Process Visor"
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
        disabled={isSubmitting}
      >
        <Input
          label="Machine Operator Name"
          name="machine_operator_name"
          register={register("machine_operator_name", {
            required: "Name of the operator is required",
          })}
          error={errors?.machine_operator_name?.message}
        />
        <Input
          label="Machine Assisst Name"
          name="machine_assisst_name"
          register={register("machine_assisst_name", {
            required: "Name of the assistant is required",
          })}
          error={errors?.machine_assisst_name?.message}
        />
        <Input
          label="Stock Prep Operator Name"
          name="stock_prep_operator_name"
          register={register("stock_prep_operator_name", {
            required: "Name of the operator is required",
          })}
          error={errors?.stock_prep_operator_name?.message}
        />
        <Input
          label="Stock Prep Assisst Name"
          name="stock_prep_assisst_name"
          register={register("stock_prep_assisst_name", {
            required: "Name of the assistant is required",
          })}
          error={errors?.stock_prep_assisst_name?.message}
        />
        <Controller
          control={control}
          name="shift"
          render={({ field }) => (
            <Select
              label="Shift"
              options={["day", "night"].map((shift) => ({
                label: shift,
                value: shift,
              }))}
              register={register("shift", {
                required: "Shift is required",
              })}
              error={errors.shift?.message}
              {...field}
            />
          )}
        />
      </AddFormModal>
    </>
  );
};

export default AddProcessVisor;
