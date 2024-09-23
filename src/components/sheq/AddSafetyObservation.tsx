import Textarea from "@/components/common/form/textarea";
import Select from "@/components/common/form/select";
import Input from "@/components/common/form/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";

import {
  type ApiError,
  type SafetyObservationCreateModel,
  SafetyService,
} from "../../client";
import { useToastStore } from "@/hooks/useToastStore";
import AddFormModal from "../common/AddFormModal";
import { handleError } from "@/utils";

interface AddSafetyObservationProps {
  open: boolean;
  onClose: () => void;
}

const AddSafetyObservation: React.FC<AddSafetyObservationProps> = ({
  open,
  onClose,
}) => {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SafetyObservationCreateModel>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      observer_name: "",
      location: "",
      description: "",
      date: "",
      severity: "",
      status: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: SafetyObservationCreateModel) =>
      SafetyService.createSafetyObservationApiV1SafetySafetyObservationsPost({
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("Safety observation added successfully", "success");
      reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["safety-observations"] });
    },
  });

  const onSubmit: SubmitHandler<SafetyObservationCreateModel> = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <AddFormModal
        open={open}
        onClose={onClose}
        title="Add Safety Observation"
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
        disabled={isSubmitting}
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
      </AddFormModal>
    </>
  );
};

export default AddSafetyObservation;
