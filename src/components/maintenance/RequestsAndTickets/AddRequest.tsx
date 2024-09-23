import Textarea from "@/components/common/form/textarea";
import Select from "@/components/common/form/select";
import BooleanToggle from "@/components/common/form/toggle-button";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";

import AddFormModal from "../../common/AddFormModal";
import {
  type ApiError,
  type MaintenanceRequestCreate,
  RequestsAndTicketsService,
  MaintenanceSettingsService,
  EquipmentService,
} from "@/client";

import { useToastStore } from "@/hooks/useToastStore";
import { handleError } from "@/utils";

type Props = {
  open: boolean;
  onClose: () => void;
};

const AddRequest = ({ open, onClose }: Props) => {
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
    handleSubmit,
    reset,
    register,
    formState: { isSubmitting, errors },
  } = useForm<MaintenanceRequestCreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      // rq_number: "",
      description: "",
      equipment_id: 0,
      category_id: 0,
      department_id: 0,
      status_id: 0,
      type_id: 0,
      is_validated: false,
      is_a_call_out: false,
    },
  });
  const mutation = useMutation({
    mutationFn: (data: MaintenanceRequestCreate) =>
      RequestsAndTicketsService.createMaintenanceRequestApiV1MaintenanceRequestsPost(
        {
          equipmentId: data.equipment_id,
          requestBody: data,
        }
      ),
    onSuccess: () => {
      showToast("Request created successfully", "success");
      reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["maintenance-requests", "equipment"],
      });
    },
  });

  const onSubmit: SubmitHandler<MaintenanceRequestCreate> = (data) => {
    mutation.mutate(data);
  };
  return (
    <>
      <AddFormModal
        open={open}
        disabled={isSubmitting}
        onClose={onClose}
        title="Add New Request"
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
      >
        <Controller
          name="equipment_id"
          control={control}
          rules={{ required: "Equipment is required" }}
          render={({ field }) => (
            <Select
              register={register("equipment_id")}
              label="Equipment"
              options={equipments?.equipments.map((equipment) => ({
                label: `${equipment.name} - ${equipment.asset_number}`,
                value: equipment.id,
              }))}
              {...field}
            />
          )}
        />

        <Controller
          name="type_id"
          control={control}
          rules={{ required: "Type is required" }}
          render={({ field }) => (
            <Select
              register={register("type_id")}
              label="Request Type"
              options={maintenanceTypes?.types.map((type) => ({
                label: type.name,
                value: type.id,
              }))}
              {...field}
            />
          )}
        />

        <Controller
          name="department_id"
          control={control}
          rules={{ required: "Department is required" }}
          render={({ field }) => (
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
            />
          )}
        />

        <Controller
          name="category_id"
          control={control}
          rules={{ required: "Category is required" }}
          render={({ field }) => (
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
            <BooleanToggle
              label="Is this request validated?"
              {...field}
              onChange={field.onChange}
            />
          )}
        />
      </AddFormModal>
    </>
  );
};

export default AddRequest;
