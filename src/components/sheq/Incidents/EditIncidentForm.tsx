import Textarea from "@/components/common/form/textarea";
import Select from "@/components/common/form/select";
import Input from "@/components/common/form/input";
import BooleanToggle from "@/components/common/form/toggle-button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";

import {
  type ApiError,
  type SHEIncidentUpdate,
  type SHEIncidentRead,
  SafetyService,
} from "../../../client";
import { useToastStore } from "@/hooks/useToastStore";
import EditFormModal from "@/components/common/EditFormModal";
import { handleError } from "@/utils";
import { SHEIncidentType } from "../../../constants/Data";

type EditSHEIncidentFormProps = {
  open: boolean;
  onClose: () => void;
  log: SHEIncidentRead;
};

const EditSHEIncidentForm: React.FC<EditSHEIncidentFormProps> = ({
  open,
  onClose,
  log,
}) => {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<SHEIncidentUpdate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: log,
  });

  const mutation = useMutation({
    mutationFn: (data: SHEIncidentUpdate) =>
      SafetyService.updateSheIncidentApiV1SafetySheIncidentsIdPut({
        id: log.id,
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("Incident updated successfully", "success");
      reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["she-incidents"] });
    },
  });

  const onSubmit: SubmitHandler<SHEIncidentUpdate> = async (data) => {
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
        title={`Edit SHE Incident ${log.log_number}`}
        onSubmit={handleSubmit(onSubmit)}
        isDirty={isDirty}
        isSubmitting={isSubmitting}
      >
        <Input
          label="Incident Date"
          type="date"
          register={register("incident_date", {
            required: "Incident date is required",
          })}
          error={errors.incident_date?.message}
        />
        <Controller
          control={control}
          name="incident_type"
          render={({ field }) => (
            // @ts-ignore
            <Select
              label="Incident Type"
              register={register("incident_type")}
              options={SHEIncidentType}
              {...field}
              error={errors.incident_type?.message}
            />
          )}
        />
        <Input
          label="Employee Name"
          type="text"
          register={register("employee_name", {
            required: "Employee name is required",
          })}
          error={errors.employee_name?.message}
        />
        <Input
          label="Incident Title"
          type="text"
          register={register("incident_title", {
            required: "Incident title is required",
          })}
          error={errors.incident_title?.message}
        />
        <Input
          label="Location"
          type="text"
          register={register("incident_location", {
            required: "Location is required",
          })}
          error={errors.incident_location?.message}
        />
        <Textarea
          label="Incident Description"
          name="incident_description"
          register={register("incident_description", {
            required: "Incident description is required",
          })}
          error={errors.incident_description?.message}
        />
        <Controller
          control={control}
          name="incident_injured"
          render={({ field }) => (
            // @ts-ignore
            <BooleanToggle
              label="Is Injured?"
              {...field}
              onChange={field.onChange}
            />
          )}
        />
        <Input
          label="Incident Witness"
          type="text"
          register={register("incident_witness")}
          error={errors.incident_witness?.message}
        />
        <Controller
          control={control}
          name="incident_reported"
          render={({ field }) => (
            // @ts-ignore
            <BooleanToggle
              label="Is Reported?"
              {...field}
              onChange={field.onChange}
            />
          )}
        />
        <Textarea
          label="Incident Remarks"
          name="incident_remarks"
          register={register("incident_remarks")}
          error={errors.incident_remarks?.message}
        />
      </EditFormModal>
    </>
  );
};

export default EditSHEIncidentForm;
