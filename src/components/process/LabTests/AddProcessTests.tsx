import Textarea from "@/components/common/form/textarea";
import Input from "@/components/common/form/input";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { type SubmitHandler, useForm } from "react-hook-form";

import { useToastStore } from "@/hooks/useToastStore";
import EditFormModal from "../../common/EditFormModal";
import {
  type ApiError,
  type ProcessTestUpdate,
  type ProcessVisorResponse,
  ProcessTestsService,
} from "../../../client";
import { handleError } from "@/utils";

interface AddProcessTestsProps {
  processVisor: ProcessVisorResponse;
  open: boolean;
  onClose: () => void;
}

const AddProcessTests: React.FC<AddProcessTestsProps> = ({
  processVisor,
  open,
  onClose,
}) => {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const { data: processTest } = useSuspenseQuery({
    queryKey: ["process-tests", processVisor.id],
    queryFn: () =>
      ProcessTestsService.readProcessTestByVisorIdApiV1PTestsPcvProcessVisorIdGet(
        {
          processVisorId: processVisor.id,
        }
      ),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ProcessTestUpdate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: processTest,
  });

  const mutation = useMutation({
    mutationFn: (data: ProcessTestUpdate) =>
      ProcessTestsService.updateProcessTestApiV1PTestsIdPut({
        id: processTest?.id,
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("Process test updated successfully", "success");
      // reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["process-tests", processVisor.id],
      });
    },
  });

  const onCancel = () => {
    reset();
    onClose();
  };

  const onSubmit: SubmitHandler<ProcessTestUpdate> = async (data) => {
    mutation.mutate(data);
  };

  // Reusable component for text fields
  const renderTextField = (
    label: string,
    field: keyof ProcessTestUpdate,
    register: any,
    errors: any,
    required = false
  ) => (
    <Input
      label={label}
      type="number"
      register={register(field, {
        required: required ? `${label} is required` : false,
      })}
      error={errors[field]?.message}
    />
  );

  return (
    <>
      <EditFormModal
        open={open}
        onCancel={onCancel}
        onClose={onClose}
        onSubmit={handleSubmit(onSubmit)}
        isDirty={isDirty}
        isSubmitting={isSubmitting}
        title={`Add Process Tests for ${processTest?.test_number}`}
      >
        <Input
          label="Slushing Consistency"
          type="number"
          register={register("slushing_consistency", {
            required: "Slushing Consistency is required",
          })}
          error={errors.slushing_consistency?.message}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {renderTextField(
            "Dump Chest Actual Consistency",
            "dump_chest_actual_consistency",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Dump Chest DCS Consistency",
            "dump_chest_dcs_consistency",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Intermediate Chest Actual Consistency",
            "intermediate_chest_actual_consistency",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Intermediate Chest DCS Consistency",
            "intermediate_chest_dcs_consistency",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Vario One Chute Actual Consistency",
            "vario_one_chute_actual_consistency",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Vario One Chute DCS Consistency",
            "vario_one_chute_dcs_consistency",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Vario One Handsheet Brightness",
            "vario_one_handsheet_brightness",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Vario Two Chute Actual Consistency",
            "vario_two_chute_actual_consistency",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Vario Two Chute DCS Consistency",
            "vario_two_chute_dcs_consistency",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Vario Two Handsheet Brightness",
            "vario_two_handsheet_brightness",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Disperger Chest Actual Consistency",
            "disperger_chest_actual_consistency",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Disperger Chest DCS Consistency",
            "disperger_chest_dcs_consistency",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Wire Press Out Actual Consistency",
            "wire_press_output_actual_consistency",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Delko Press Out Actual Consistency",
            "delko_press_output_actual_consistency",
            register,
            errors,
            true
          )}
        </div>
        {/* Remarks field */}
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

export default AddProcessTests;
