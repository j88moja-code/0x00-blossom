import Textarea from "@/components/common/form/textarea";
import Select from "@/components/common/form/select";
import Input from "@/components/common/form/input";
import BooleanToggle from "@/components/common/form/toggle-button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";

import {
  type ApiError,
  type SHEIncidentCreate,
  SafetyService,
} from "../../../client";
import { useToastStore } from "@/hooks/useToastStore";
import AddFormModal from "../../common/AddFormModal";
import { handleError } from "@/utils";
import { SHEIncidentType } from "../../../constants/Data";

type AddSHEIncidentFormProps = {
  open: boolean;
  onClose: () => void;
};

const AddSHEIncidentForm: React.FC<AddSHEIncidentFormProps> = ({
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
  } = useForm<SHEIncidentCreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      incident_date: "",
      incident_type: "",
      employee_name: "",
      incident_title: "",
      incident_description: "",
      incident_location: "",
      incident_injured: "",
      incident_witness: "",
      incident_reported: false,
      incident_remarks: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: SHEIncidentCreate) =>
      SafetyService.createOsha300LogApiV1SafetyOsha300LogsPost({
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("Incident added successfully", "success");
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

  const onSubmit: SubmitHandler<SHEIncidentCreate> = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <AddFormModal
        open={open}
        onClose={onClose}
        title="Add SHE Incident"
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
      </AddFormModal>
    </>
  );
};

export default AddSHEIncidentForm;
