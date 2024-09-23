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
  type WaterTestUpdate,
  type ProcessVisorResponse,
  WaterTestsService,
} from "../../../client";
import { handleError } from "@/utils";

interface AddWaterTestsProps {
  processVisor: ProcessVisorResponse;
  open: boolean;
  onClose: () => void;
}

const AddWaterTests: React.FC<AddWaterTestsProps> = ({
  processVisor,
  open,
  onClose,
}) => {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const { data: waterTest } = useSuspenseQuery({
    queryKey: ["water-tests", processVisor.id],
    queryFn: () =>
      WaterTestsService.readWaterTestByVisorIdApiV1WTestsPcvProcessVisorIdGet({
        processVisorId: processVisor.id,
      }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<WaterTestUpdate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: waterTest,
  });

  const mutation = useMutation({
    mutationFn: (data: WaterTestUpdate) =>
      WaterTestsService.updateWaterTestApiV1WTestsIdPut({
        id: waterTest?.id,
        requestBody: data,
      }),

    onSuccess: () => {
      showToast("Water test updated successfully", "success");
      // reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["water-tests", processVisor.id],
      });
    },
  });

  const onCancel = () => {
    reset();
    onClose();
  };

  const onSubmit: SubmitHandler<WaterTestUpdate> = async (data) => {
    mutation.mutate(data);
  };

  const renderTextField = (
    label: string,
    field: keyof WaterTestUpdate,
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
        title={`Add Water System Tests for ${waterTest?.test_number}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {renderTextField(
            "DAF 1 Results",
            "daf_1_ppm",
            register,
            errors,
            true
          )}
          {renderTextField(
            "DAF 2 Results",
            "daf_2_ppm",
            register,
            errors,
            true
          )}
          {renderTextField(
            "DAF 3 Results",
            "daf_3_ppm",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Filtrate Out Results",
            "filtrate_tank_ppm",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Clarifier Out Results",
            "slc_ppm",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Effluent Dam In Results",
            "effluent_dam_in_ppm",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Effluent Dam Out Results",
            "effluent_dam_out_ppm",
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

export default AddWaterTests;
