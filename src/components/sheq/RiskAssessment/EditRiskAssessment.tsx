import Textarea from "@/components/common/form/textarea";
import Select from "@/components/common/form/select";
import Input from "@/components/common/form/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";

import {
  type ApiError,
  type RiskAssessmentResponseModel,
  type RiskAssessmentUpdateModel,
  SafetyService,
} from "../../../client";
import { useToastStore } from "@/hooks/useToastStore";
import EditFormModal from "../../common/EditFormModal";
import { handleError } from "@/utils";

interface EditRiskAssessmentProps {
  open: boolean;
  onClose: () => void;
  assessment: RiskAssessmentResponseModel;
}

const EditRiskAssessment: React.FC<EditRiskAssessmentProps> = ({
  open,
  onClose,
  assessment,
}) => {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<RiskAssessmentUpdateModel>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: assessment,
  });

  const mutation = useMutation({
    mutationFn: (data: RiskAssessmentUpdateModel) =>
      SafetyService.updateRiskAssessmentApiV1SafetyRiskAssessmentsIdPut({
        id: assessment.id,
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("Risk assessment updated successfully", "success");
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["risk-assessments"] });
    },
  });

  const onSubmit: SubmitHandler<RiskAssessmentUpdateModel> = async (data) => {
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
        title="Edit Risk Assessment"
        onSubmit={handleSubmit(onSubmit)}
        isDirty={isDirty}
        isSubmitting={isSubmitting}
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
      </EditFormModal>
    </>
  );
};

export default EditRiskAssessment;
