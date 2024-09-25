import Textarea from "@/components/common/form/textarea";
import Select from "@/components/common/form/select";
import Input from "@/components/common/form/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";

import {
  type ApiError,
  type SHEQInspectionUpdate,
  type SHEQInspectionRead,
  SafetyService,
} from "../../../client";
import { useToastStore } from "@/hooks/useToastStore";
import EditFormModal from "@/components/common/EditFormModal";
import { handleError } from "@/utils";
import { InspectionType } from "../../../constants/Data";

type EditSHEInspectionFormProps = {
  open: boolean;
  onClose: () => void;
  inspection: SHEQInspectionRead;
};

const EditSHEInspectionForm: React.FC<EditSHEInspectionFormProps> = ({
  open,
  onClose,
  inspection,
}) => {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<SHEQInspectionUpdate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: inspection,
  });

  const mutation = useMutation({
    mutationFn: (data: SHEQInspectionUpdate) =>
      SafetyService.updateSheInspectionApiV1SafetySheInspectionsIdPut({
        id: inspection.id,
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("Inspection updated successfully", "success");
      reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["she-inspections"] });
    },
  });

  const onSubmit: SubmitHandler<SHEQInspectionUpdate> = async (data) => {
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
        onCancel={onCancel}
        title={`Edit SHE Inspection ${inspection.log_number}`}
        onSubmit={handleSubmit(onSubmit)}
        isDirty={isDirty}
        isSubmitting={isSubmitting}
      >
        <Input
          label="Inspection Date"
          type="date"
          register={register("inspection_date", {
            required: "Inspection date is required",
          })}
          error={errors.inspection_date?.message}
        />
        <Controller
          control={control}
          name="inspection_type"
          render={({ field }) => (
            // @ts-ignore
            <Select
              label="Inspection Type"
              register={register("inspection_type")}
              options={InspectionType}
              {...field}
              error={errors.inspection_type?.message}
            />
          )}
        />
        <Input
          label="Inspection Location"
          type="text"
          register={register("inspection_location", {
            required: "Inspection Location is required",
          })}
          error={errors.inspection_location?.message}
        />
        <Textarea
          label="Inspection Description"
          name="inspection_description"
          register={register("inspection_description", {
            required: "Inspection Description is required",
          })}
          error={errors.inspection_description?.message}
        />
        <Input
          label="Inspector Name"
          type="text"
          register={register("inspection_inspector", {
            required: "Inspector Name is required",
          })}
          error={errors.inspection_inspector?.message}
        />
        <Textarea
          label="Inspection Remarks"
          name="inspection_remarks"
          register={register("inspection_remarks")}
          error={errors.inspection_remarks?.message}
        />
        <Input
          label="Inspection Duration"
          type="number"
          register={register("inspection_duration", {
            required: "Inspection Duration is required",
          })}
          error={errors.inspection_duration?.message}
        />
      </EditFormModal>
    </>
  );
};

export default EditSHEInspectionForm;
