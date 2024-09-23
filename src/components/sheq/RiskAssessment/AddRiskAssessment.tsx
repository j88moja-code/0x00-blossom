import Textarea from "@/components/common/form/textarea";
import Select from "@/components/common/form/select";
import Input from "@/components/common/form/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";

import {
  type ApiError,
  type RiskAssessmentCreateModel,
  SafetyService,
} from "../../../client";
import { useToastStore } from "@/hooks/useToastStore";
import AddFormModal from "../../common/AddFormModal";
import { handleError } from "@/utils";

interface AddRiskAssessmentProps {
  open: boolean;
  onClose: () => void;
}

const AddRiskAssessment: React.FC<AddRiskAssessmentProps> = ({
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
  } = useForm<RiskAssessmentCreateModel>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      assessor_name: "",
      date: "",
      location: "",
      description: "",
      hazards: "",
      controls: "",
      severity: "",
      likelihood: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: RiskAssessmentCreateModel) =>
      SafetyService.createRiskAssessmentApiV1SafetyRiskAssessmentsPost({
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("Risk assessment added successfully", "success");
      reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["risk-assessments"] });
    },
  });

  const onSubmit: SubmitHandler<RiskAssessmentCreateModel> = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <AddFormModal
        open={open}
        onClose={onClose}
        title="Add Risk Assessment"
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
        disabled={isSubmitting}
      >
        <Input
          label="Assessor Name"
          name="assessor_name"
          register={register("assessor_name", {
            required: "Assessor name is required",
          })}
          error={errors.assessor_name?.message}
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
        <Textarea
          label="Hazards"
          name="hazards"
          register={register("hazards", {
            required: "Hazards is required",
          })}
          error={errors.hazards?.message}
        />
        <Textarea
          label="Controls"
          name="controls"
          register={register("controls", {
            required: "Controls is required",
          })}
          error={errors.controls?.message}
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
          name="likelihood"
          render={() => (
            <Select
              label="Likelihood"
              register={register("likelihood", {
                required: "Likelihood is required",
              })}
              error={errors.likelihood?.message}
              options={["Low", "Medium", "High"].map((likelihood) => ({
                label: likelihood,
                value: likelihood,
              }))}
            />
          )}
        />
      </AddFormModal>
    </>
  );
};

export default AddRiskAssessment;
