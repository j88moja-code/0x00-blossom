import Textarea from "@/components/common/form/textarea";
import Select from "@/components/common/form/select";
import BooleanToggle from "@/components/common/form/toggle-button";
import Input from "@/components/common/form/input";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { useForm, type SubmitHandler, Controller } from "react-hook-form";

import { useToastStore } from "@/hooks/useToastStore";
import {
  type ApiError,
  type ProductionKanbanUpdate,
  type ProductionKanban,
  ProductionKanbansService,
  ProductionSpecificationsService,
} from "../../../client";
import EditFormModal from "../../common/EditFormModal";
import { handleError } from "@/utils";

interface EditProductionKanbanProps {
  open: boolean;
  onClose: () => void;
  kanban: ProductionKanban;
}

const EditKanban: React.FC<EditProductionKanbanProps> = ({
  open,
  onClose,
  kanban,
}) => {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const { data: products } = useSuspenseQuery({
    queryKey: ["specifications"],
    queryFn: () =>
      ProductionSpecificationsService.getAllSpecificationsApiV1ProductionSpecificationsGet(
        {}
      ),
  });

  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ProductionKanbanUpdate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: kanban,
  });

  const mutation = useMutation({
    mutationFn: (data: ProductionKanbanUpdate) =>
      ProductionKanbansService.updateKanbanApiV1ProductionKanbansKanbanIdPut({
        // @ts-ignore
        kanbanId: kanban.id,
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("Kanban updated successfully", "success");
      onClose();
    },

    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["production-kanbans"] });
    },
  });

  const onCancel = () => {
    reset();
    onClose();
  };

  const onSubmit: SubmitHandler<ProductionKanbanUpdate> = async (data) => {
    mutation.mutate(data);
  };

  // Reusable component for text fields
  const renderTextField = (
    label: string,
    field: keyof ProductionKanbanUpdate,
    register: any,
    errors: any,
    required = false
  ) => (
    <Input
      label={label}
      type="number"
      step="any"
      register={register(field, {
        required: required ? `${label} is required` : false,
      })}
      error={errors[field]?.message}
    />
  );
  const availableProductionTime = watch("available_production_time");

  return (
    <>
      <EditFormModal
        open={open}
        onClose={onCancel}
        title="Edit Kanban"
        onSubmit={handleSubmit(onSubmit)}
        isDirty={isDirty}
        isSubmitting={isSubmitting}
        onCancel={onCancel}
      >
        <div className="flex flex-col gap-4">
          <Input
            label="Operator Name"
            name="operator_name"
            register={register("operator_name", {
              required: "Operator name is required",
            })}
            error={errors.operator_name?.message}
          />
          <Input
            label="Assistant Operator Name"
            name="assisst_name"
            register={register("assisst_name", {
              required: "Assistant Operator name is required",
            })}
            error={errors.assisst_name?.message}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Input
            label="Planned Date"
            name="planned_date"
            register={register("planned_date", {
              required: "Planned date is required",
            })}
            type="datetime-local"
            error={errors.planned_date?.message}
          />
          <Controller
            control={control}
            name="shift"
            render={({ field }) => (
              <Select
                {...field}
                label="Shift"
                register={register("shift", {
                  required: "Shift is required",
                })}
                error={errors.shift?.message}
                options={["day", "night"].map((shift) => ({
                  label: shift,
                  value: shift,
                }))}
              />
            )}
          />
        </div>

        <Controller
          control={control}
          name="planned_product_code"
          render={({ field }) => (
            <Select
              label="Planned Product Code"
              {...field}
              register={register("planned_product_code", {
                required: "Planned product code is required",
              })}
              options={products?.specifications.map((product) => ({
                label: product.product_code,
                value: product.product_code,
              }))}
              error={errors.planned_product_code?.message}
            />
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Controller
            control={control}
            name="available_production_time"
            render={({ field }) => (
              // @ts-ignore
              <Input
                {...field}
                label="Available Production Time"
                type="number"
                register={register("available_production_time", {
                  required: "Available production time is required",
                  max: {
                    value: 720,
                    message: "Production time cannot exceed 720",
                  },
                })}
                error={errors.available_production_time?.message}
              />
            )}
          />
          <Input
            label="Planned Down Time"
            type="number"
            name="planned_down_time"
            register={register("planned_down_time", {
              required: "Planned down time is required",
              validate: {
                lessThanAvailableTime: (value) =>
                  // @ts-ignore
                  value <= availableProductionTime ||
                  "Planned down time must be less than available production time",
              },
            })}
            error={errors.planned_down_time?.message}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {renderTextField(
            "Planned Quantity",
            "planned_quantity",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Planned Raw Material",
            "planned_raw_material",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Standard Electricity Consumption",
            "electricity_consumption",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Standard Water Consumption",
            "water_consumption",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Standard Energy Consumption",
            "energy_consumption",
            register,
            errors,
            true
          )}
        </div>
        <Controller
          control={control}
          name="completed"
          render={({ field }) => (
            <BooleanToggle
              label="Has shift ended?"
              {...field}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="started"
          render={({ field }) => (
            <BooleanToggle
              label="Has shift started?"
              {...field}
              onChange={field.onChange}
            />
          )}
        />
        <Textarea
          label="Remarks"
          name="remarks"
          register={register("remarks")}
          error={errors.remarks?.message}
          className="mb-4"
        />
      </EditFormModal>
    </>
  );
};

export default EditKanban;
