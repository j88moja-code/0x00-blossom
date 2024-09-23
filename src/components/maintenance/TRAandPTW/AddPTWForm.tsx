import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";

import AddFormModal from "../../common/AddFormModal";
import {
  type ApiError,
  type MaintenancePTWCreate,
  RequestsAndTicketsService,
  MaintenanceSettingsService,
} from "@/client";
import Textarea from "@/components/common/form/textarea";
import Select from "@/components/common/form/select";
import Input from "@/components/common/form/input";
import BooleanToggle from "@/components/common/form/toggle-button";
import { handleError } from "@/utils";

import { useToastStore } from "@/hooks/useToastStore";

type AddPTWProps = {
  open: boolean;
  onClose: () => void;
};

const AddPTW: React.FC<AddPTWProps> = ({ open, onClose }) => {
  const queryClient = useQueryClient();
  const showToast = useToastStore((state) => state.showToast);
  const { data: maintenanceTRAs } = useSuspenseQuery({
    queryKey: ["maintenance-tra"],
    queryFn: () =>
      RequestsAndTicketsService.getMaintenanceTraApiV1MaintenanceTraGet({}),
  });

  const { data: departments } = useSuspenseQuery({
    queryKey: ["maintenance-departments"],
    queryFn: () =>
      MaintenanceSettingsService.getDepartmentsApiV1MaintenanceDepartmentsGet(),
  });

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<MaintenancePTWCreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      requestor_name: "",
      maintenance_tra_id: 0,
      department_id: 0,
      start_time: "",
      end_time: "",
      work_description: "",
      is_completed: false,
      remarks: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: MaintenancePTWCreate) =>
      RequestsAndTicketsService.createMaintenancePtwApiV1MaintenancePtwPost({
        mainternanceTraId: data.maintenance_tra_id,
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("PTW created successfully", "success");
      reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["maintenance-ptw"] });
    },
  });

  const onSubmit: SubmitHandler<MaintenancePTWCreate> = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <AddFormModal
        open={open}
        disabled={isSubmitting}
        onClose={onClose}
        title="Add Permit To Work"
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
      >
        <Controller
          name="maintenance_tra_id"
          control={control}
          render={({ field }) => (
            <Select
              label="Maintenance TRA"
              {...field}
              register={register("maintenance_tra_id", { required: true })}
              options={maintenanceTRAs?.m_steps.map((tra) => ({
                label: tra.ra_number,
                value: tra.id,
              }))}
              error={errors.maintenance_tra_id?.message}
            />
          )}
        />
        <Controller
          name="requestor_name"
          control={control}
          render={({ field }) => (
            <Input
              label="Requestor Name"
              {...field}
              register={register("requestor_name", { required: true })}
              error={errors.requestor_name?.message}
            />
          )}
        />

        <Controller
          name="department_id"
          control={control}
          render={({ field }) => (
            <Select
              label="Department"
              {...field}
              register={register("department_id", { required: true })}
              options={departments?.departments.map((department) => ({
                label: department.name,
                value: department.id,
              }))}
              error={errors.department_id?.message}
            />
          )}
        />

        <Controller
          name="start_time"
          control={control}
          render={({ field }) => (
            <Input
              label="Start Time"
              type="datetime-local"
              {...field}
              register={register("start_time", { required: true })}
              error={errors.start_time?.message}
            />
          )}
        />

        <Controller
          name="end_time"
          control={control}
          render={({ field }) => (
            // @ts-ignore
            <Input
              label="End Time"
              type="datetime-local"
              {...field}
              register={register("end_time", { required: true })}
              error={errors.end_time?.message}
            />
          )}
        />

        <Textarea
          label="Work To Be Done"
          name="work_description"
          register={register("work_description", { required: true })}
          placeholder="Enter work to be done..."
        />

        <Controller
          name="is_completed"
          control={control}
          render={({ field }) => (
            // @ts-ignore
            <BooleanToggle
              label="Has the PTW Been Completed?"
              {...field}
              onChange={field.onChange}
            />
          )}
        />

        <Textarea
          label="Remarks"
          name="remarks"
          register={register("remarks")}
          placeholder="Enter remarks..."
        />
      </AddFormModal>
    </>
  );
};

export default AddPTW;
