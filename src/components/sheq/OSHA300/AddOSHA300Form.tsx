import Textarea from "@/components/common/form/textarea";
import Select from "@/components/common/form/select";
import Input from "@/components/common/form/input";
import BooleanToggle from "@/components/common/form/toggle-button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";

import {
  type ApiError,
  type OSHA300LogCreate,
  SafetyService,
} from "../../../client";
import { useToastStore } from "@/hooks/useToastStore";
import AddFormModal from "../../common/AddFormModal";
import { handleError } from "@/utils";
import {
  IncidentType,
  DowntimeDepartment,
  TreatmentType,
} from "../../../constants/Data";

type AddOSHA300FormProps = {
  open: boolean;
  onClose: () => void;
};

const AddOSHA300Form: React.FC<AddOSHA300FormProps> = ({ open, onClose }) => {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<OSHA300LogCreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      incident_date: "",
      incident_type: "",
      employee_name: "",
      job_title: "",
      department: "",
      location: "",
      description: "",
      is_treated: false,
      treatment_date: "",
      treatment_type: "",
      return_to_work_date: "",
      lost_time: false,
      lost_time_start: "",
      lost_time_end: "",
      lost_job_transfer: false,
      lost_days_restriction_start: "",
      lost_days_restriction_end: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: OSHA300LogCreate) =>
      SafetyService.createOsha300LogApiV1SafetyOsha300LogsPost({
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("OSHA 300 log added successfully", "success");
      reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["osha-300-logs"] });
    },
  });

  const onSubmit: SubmitHandler<OSHA300LogCreate> = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <AddFormModal
        open={open}
        onClose={onClose}
        title="Add OSHA 300 Log"
        onSubmit={handleSubmit(onSubmit)}
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
              options={IncidentType}
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
          label="Job Title"
          register={register("job_title", {
            required: "Job title is required",
          })}
          error={errors.job_title?.message}
        />
        <Controller
          control={control}
          name="department"
          render={({ field }) => (
            // @ts-ignore
            <Select
              label="Department"
              register={register("department")}
              options={DowntimeDepartment}
              {...field}
              error={errors.department?.message}
            />
          )}
        />
        <Input
          label="Location"
          type="text"
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
        <Controller
          control={control}
          name="is_treated"
          render={({ field }) => (
            // @ts-ignore
            <BooleanToggle
              label="Is Treated?"
              {...field}
              onChange={field.onChange}
            />
          )}
        />
        <Input
          label="Treatment Date"
          type="date"
          register={register("treatment_date")}
          error={errors.treatment_date?.message}
        />
        <Controller
          control={control}
          name="treatment_type"
          render={({ field }) => (
            // @ts-ignore
            <Select
              label="Treatment Type"
              register={register("treatment_type")}
              options={TreatmentType}
              {...field}
              error={errors.treatment_type?.message}
            />
          )}
        />
        <Input
          label="Return To Work Date"
          type="date"
          register={register("return_to_work_date")}
          error={errors.return_to_work_date?.message}
        />
        <Controller
          control={control}
          name="lost_time"
          render={({ field }) => (
            // @ts-ignore
            <BooleanToggle
              label="Lost Time?"
              {...field}
              onChange={field.onChange}
            />
          )}
        />
        <Input
          label="Lost Time Start"
          type="date-time-local"
          register={register("lost_time_start")}
          error={errors.lost_time_start?.message}
        />
        <Input
          label="Lost Time End"
          type="date-time-local"
          register={register("lost_time_end")}
          error={errors.lost_time_end?.message}
        />
        <Controller
          control={control}
          name="lost_job_transfer"
          render={({ field }) => (
            // @ts-ignore
            <BooleanToggle
              label="Lost Job Transfer?"
              {...field}
              onChange={field.onChange}
            />
          )}
        />
        <Input
          label="Lost Days Restriction Start"
          type="date-time-local"
          register={register("lost_days_restriction_start")}
          error={errors.lost_days_restriction_start?.message}
        />
        <Input
          label="Lost Days Restriction End"
          type="date-time-local"
          register={register("lost_days_restriction_end")}
          error={errors.lost_days_restriction_end?.message}
        />
      </AddFormModal>
    </>
  );
};

export default AddOSHA300Form;
