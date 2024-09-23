import Textarea from "@/components/common/form/textarea";
import Select from "@/components/common/form/select";
import Input from "@/components/common/form/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";

import {
  type ApiError,
  type SafetyObservationResponseModel,
  type SafetyObservationUpdateModel,
  SafetyService,
} from "../../client";
import { useToastStore } from "@/hooks/useToastStore";
import EditFormModal from "../common/EditFormModal";
import { handleError } from "@/utils";

interface EditSafetyObservationProps {
  open: boolean;
  onClose: () => void;
  observation: SafetyObservationResponseModel;
}

const EditSafetyObservation: React.FC<EditSafetyObservationProps> = ({
  open,
  onClose,
  observation,
}) => {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<SafetyObservationUpdateModel>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: observation,
  });

  const mutation = useMutation({
    mutationFn: (data: SafetyObservationUpdateModel) =>
      SafetyService.updateSafetyObservationApiV1SafetySafetyObservationsIdPut({
        id: observation.id,
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("Safety observation updated successfully", "success");
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["safety-observations"] });
    },
  });

  const onSubmit: SubmitHandler<SafetyObservationUpdateModel> = async (
    data
  ) => {
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
        title="Edit Safety Observation"
        onSubmit={handleSubmit(onSubmit)}
        isDirty={isDirty}
        isSubmitting={isSubmitting}
      >
        <Input
          label="Observer Name"
          name="observer_name"
          register={register("observer_name", {
            required: "Observer name is required",
          })}
          error={errors.observer_name?.message}
        />
        <Input
          label="Location"
          name="location"
          register={register("location", {
            required: "Location is required",
          })}
          error={errors.location?.message}
        />
        <Textarea
          label="Description"
          name="description"
          register={register("description", {
            required: "Description is required",
          })}
          error={errors.description?.message}
        />
        <Input
          label="Date"
          name="date"
          register={register("date", {
            required: "Date is required",
          })}
          error={errors.date?.message}
          type="date"
        />
        <Controller
          control={control}
          name="severity"
          render={() => (
            <Select
              label="Severity"
              register={register("severity", {
                required: "Severity is required",
              })}
              error={errors.severity?.message}
              options={["Low", "Medium", "High"].map((severity) => ({
                label: severity,
                value: severity,
              }))}
            />
          )}
        />
        <Controller
          control={control}
          name="status"
          render={() => (
            <Select
              label="Status"
              register={register("status", {
                required: "Status is required",
              })}
              error={errors.status?.message}
              options={["Open", "Closed"].map((status) => ({
                label: status,
                value: status,
              }))}
            />
          )}
        />
      </EditFormModal>
    </>
  );
};

export default EditSafetyObservation;
