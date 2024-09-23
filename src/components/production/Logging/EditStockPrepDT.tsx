import Textarea from "@/components/common/form/textarea";
import Select from "@/components/common/form/select";
import Input from "@/components/common/form/input";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";

import {
  type ApiError,
  type StockPrepDowntimeUpdate,
  type StockPrepDowntimeRead,
  type ProductionLog,
  ProductionLogsService,
  EquipmentService,
} from "../../../client";

import { useToastStore } from "@/hooks/useToastStore";
import { DowntimeDepartment } from "../../../constants/Data";
import EditFormModal from "../../common/EditFormModal";
import { handleError } from "@/utils";

interface EditDowntimeOnProdLogProps {
  open: boolean;
  onClose: () => void;
  log: ProductionLog;
  downtime: StockPrepDowntimeRead;
}

const EditSPDowntimeOnProductionLog: React.FC<EditDowntimeOnProdLogProps> = ({
  open,
  onClose,
  log,
  downtime,
}) => {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const { data: equipment } = useSuspenseQuery({
    queryKey: ["equipment"],
    queryFn: () =>
      EquipmentService.getAllEquipmentApiV1EquipmentGet({
        location: "Stock preparation",
      }),
  });
  const {
    register,
    handleSubmit,
    control,
    getValues,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<StockPrepDowntimeUpdate>({
    mode: "onBlur",
    criteriaMode: "all",
    // @ts-ignore
    defaultValues: downtime,
  });

  const mutation = useMutation({
    mutationFn: (data: StockPrepDowntimeUpdate) =>
      ProductionLogsService.updateStockPrepDowntimeApiV1ProductionLogsSpDowntimesIdPut(
        {
          // @ts-ignore
          id: downtime.id,
          requestBody: data,
        }
      ),
    onSuccess: () => {
      showToast("Downtime updated successfully", "success");
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["production-logs"] });
    },
  });

  const onSubmit: SubmitHandler<StockPrepDowntimeUpdate> = async (data) => {
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
        title={`Edit Downtime for Prod Log ${log.log_number}`}
        onSubmit={handleSubmit(onSubmit)}
        isDirty={isDirty}
        isSubmitting={isSubmitting}
      >
        <Controller
          name="department"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              label="Department"
              name="department"
              defaultValue={downtime.department}
              error={errors.department?.message}
              register={register("department", {
                required: "Department is required",
              })}
              options={DowntimeDepartment}
            />
          )}
        />
        <Controller
          name="equipment_id"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              label="Equipment"
              name="equipment_id"
              defaultValue={downtime.equipment_id}
              error={errors.equipment_id?.message}
              register={register("equipment_id", {
                required: "Equipment is required",
              })}
              options={equipment?.equipments.map((eq) => ({
                label: `${eq.asset_number} - ${eq.name}`,
                value: eq.id,
              }))}
            />
          )}
        />
        <Textarea
          label="Description"
          name="description"
          register={register("description", {
            required: "Description is required",
          })}
          error={errors.description?.message}
        />
        <div className="grid grid-cols-1 gap-4 mb-4">
          <Input
            label="Start Time"
            name="start_time"
            register={register("start_time", {
              required: "Start time is required",
            })}
            type="datetime-local"
            error={errors.start_time?.message}
          />
          <Input
            label="End Time"
            name="end_time"
            register={register("end_time", {
              required: "End time is required",
              // @ts-ignore
              validate: (val) => val > getValues("start_time"),
            })}
            type="datetime-local"
            error={errors.end_time?.message}
          />
        </div>
      </EditFormModal>
    </>
  );
};

export default EditSPDowntimeOnProductionLog;
