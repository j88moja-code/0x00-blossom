import Select from "@/components/common/form/select";
import Input from "@/components/common/form/input";
import Textarea from "@/components/common/form/textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, type SubmitHandler, Controller } from "react-hook-form";

import { useToastStore } from "@/hooks/useToastStore";
import EditFormModal from "../../common/EditFormModal";
import {
  type ApiError,
  type ProcessVisorUpdate,
  type ProcessVisorResponse,
  ProcessVisorService,
} from "../../../client";
import { handleError } from "@/utils";

interface EditProcessVisorProps {
  open: boolean;
  onClose: () => void;
  processVisor: ProcessVisorResponse;
}

const EditProcessVisor: React.FC<EditProcessVisorProps> = ({
  open,
  onClose,
  processVisor,
}) => {
  const queryClient = useQueryClient();
  const showToast = useToastStore((state) => state.showToast);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ProcessVisorUpdate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: processVisor,
  });

  const mutation = useMutation({
    mutationFn: (data: ProcessVisorUpdate) =>
      ProcessVisorService.updateProcessVisorApiV1ProcessVisorsIdPut({
        id: processVisor.id,
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("Process Visor updated successfully", "success");
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["process-visors"] });
    },
  });

  const onSubmit: SubmitHandler<ProcessVisorUpdate> = async (data) => {
    mutation.mutate(data);
  };
  const onCancel = () => {
    reset();
    onClose();
  };
  return (
    <>
      <EditFormModal
        open={open}
        onClose={onClose}
        title={`Edit Process Visor: ${processVisor.visor_number}`}
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
        isDirty={isDirty}
        onCancel={onCancel}
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
              defaultValue={processVisor.shift}
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
        <Textarea
          label="Remarks"
          name="remarks"
          register={register("remarks")}
          error={errors.remarks?.message}
          className="mb-4"
        />
      </EditFormModal>
    </>
  );
};

export default EditProcessVisor;
