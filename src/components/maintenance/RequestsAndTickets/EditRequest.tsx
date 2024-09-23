import Textarea from "@/components/common/form/textarea";
import Select from "@/components/common/form/select";
import BooleanToggle from "@/components/common/form/toggle-button";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";

import {
  type ApiError,
  type MaintenanceRequestRead,
  type MaintenanceRequestUpdate,
  RequestsAndTicketsService,
  MaintenanceSettingsService,
  EquipmentService,
} from "@/client";

import { useToastStore } from "@/hooks/useToastStore";
import EditFormModal from "@/components/common/EditFormModal";
import { handleError } from "@/utils";

type EditRequestProps = {
  request: MaintenanceRequestRead;
  open: boolean;
  onClose: () => void;
};

const EditRequest = ({ request, open, onClose }: EditRequestProps) => {
  const queryClient = useQueryClient();
  const showToast = useToastStore((state) => state.showToast);
  const { data: equipments } = useSuspenseQuery({
    queryKey: ["equipment"],
    queryFn: () => EquipmentService.getAllEquipmentApiV1EquipmentGet({}),
  });
  const { data: maintenanceTypes } = useSuspenseQuery({
    queryKey: ["maintenance-types"],
    queryFn: () =>
      MaintenanceSettingsService.getTypesApiV1MaintenanceTypesGet(),
  });
  const { data: maintenanceDepartments } = useSuspenseQuery({
    queryKey: ["maintenance-departments"],
    queryFn: () =>
      MaintenanceSettingsService.getDepartmentsApiV1MaintenanceDepartmentsGet(),
  });

  const { data: maintenanceCategory } = useSuspenseQuery({
    queryKey: ["maintenance-categories"],
    queryFn: () =>
      MaintenanceSettingsService.getCategoriesApiV1MaintenanceCategoriesGet(),
  });

  const { data: maintenanceStatus } = useSuspenseQuery({
    queryKey: ["maintenance-statuses"],
    queryFn: () =>
      MaintenanceSettingsService.getStatusesApiV1MaintenanceStatusesGet(),
  });
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<MaintenanceRequestUpdate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: request,
  });

  const mutation = useMutation({
    mutationFn: (data: MaintenanceRequestUpdate) =>
      RequestsAndTicketsService.updateMaintenanceRequestApiV1MaintenanceRequestsIdPut(
        {
          id: request.id,
          requestBody: data,
        }
      ),
    onSuccess: () => {
      showToast("Request updated successfully", "success");
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["maintenance-requests"] });
    },
  });

  const onSubmit: SubmitHandler<MaintenanceRequestUpdate> = async (data) => {
    if (isDirty) {
      mutation.mutate(data);
    }
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
        onSubmit={handleSubmit(onSubmit)}
        title={`Edit Request - ${request.rq_number}`}
        isDirty={isDirty}
        isSubmitting={isSubmitting}
      >
        <Controller
          name="equipment_id"
          control={control}
          rules={{ required: "Equipment is required" }}
          render={({ field }) => (
            // @ts-ignore
            <Select
              register={register("equipment_id")}
              label="Equipment"
              options={equipments?.equipments.map((equipment) => ({
                label: `${equipment.name} - ${equipment.asset_number}`,
                value: equipment.id,
              }))}
              {...field}
              error={errors.equipment_id?.message}
            />
          )}
        />

        <Controller
          name="type_id"
          control={control}
          rules={{ required: "Type is required" }}
          render={({ field }) => (
            // @ts-ignore
            <Select
              register={register("type_id")}
              label="Request Type"
              options={maintenanceTypes?.types.map((type) => ({
                label: type.name,
                value: type.id,
              }))}
              {...field}
              error={errors.type_id?.message}
            />
          )}
        />

        <Controller
          name="department_id"
          control={control}
          rules={{ required: "Department is required" }}
          render={({ field }) => (
            // @ts-ignore
            <Select
              register={register("department_id")}
              label="Department"
              options={maintenanceDepartments?.departments.map(
                (department) => ({
                  label: department.name,
                  value: department.id,
                })
              )}
              {...field}
              error={errors.department_id?.message}
            />
          )}
        />

        <Controller
          name="category_id"
          control={control}
          rules={{ required: "Category is required" }}
          render={({ field }) => (
            // @ts-ignore
            <Select
              register={register("category_id")}
              label="Category"
              options={maintenanceCategory?.categories.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
              {...field}
            />
          )}
        />
        <Textarea
          label="Description"
          register={register("description", {
            required: "Problem is required",
          })}
          error={errors.description?.message}
        />

        <Controller
          control={control}
          name="status_id"
          rules={{ required: "Status is required" }}
          render={({ field }) => (
            // @ts-ignore
            <Select
              register={register("status_id")}
              label="Status"
              options={maintenanceStatus?.statuses.map((status) => ({
                label: status.name,
                value: status.id,
              }))}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="is_a_call_out"
          render={({ field }) => (
            // @ts-ignore
            <BooleanToggle
              label="Is this request a call out?"
              {...field}
              onChange={field.onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="is_validated"
          render={({ field }) => (
            // @ts-ignore
            <BooleanToggle
              label="Is this request validated?"
              {...field}
              onChange={field.onChange}
            />
          )}
        />
      </EditFormModal>
    </>
  );
};

export default EditRequest;
