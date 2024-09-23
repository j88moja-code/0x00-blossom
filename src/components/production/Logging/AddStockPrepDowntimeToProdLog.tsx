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
  type StockPrepDowntimeCreate,
  type ProductionLog,
  ProductionLogsService,
  EquipmentService,
} from "../../../client";

import { useToastStore } from "@/hooks/useToastStore";
import { DowntimeDepartment } from "../../../constants/Data";
import AddFormModal from "../../common/AddFormModal";
import { handleError } from "@/utils";

interface AddDowntimeToProdLogProps {
  open: boolean;
  onClose: () => void;
  log: ProductionLog;
}

const AddStockPrepDowntimeToProductionLog: React.FC<
  AddDowntimeToProdLogProps
> = ({ open, onClose, log }) => {
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
    formState: { errors, isSubmitting },
  } = useForm<StockPrepDowntimeCreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      description: "",
      start_time: "",
      end_time: "",
      equipment_id: 0,
      department: "Production",
      // @ts-ignore
      production_log_id: log.id,
    },
  });

  const mutation = useMutation({
    mutationFn: (data: StockPrepDowntimeCreate) =>
      ProductionLogsService.createStockPrepDowntimeApiV1ProductionLogsSpDowntimesPost(
        {
          requestBody: data,
          // @ts-ignore
          productionLogId: log.id,
        }
      ),
    onSuccess: () => {
      showToast("Downtime added successfully", "success");
      onClose();
      reset();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["production-logs"] });
    },
  });

  const onSubmit: SubmitHandler<StockPrepDowntimeCreate> = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <AddFormModal
        open={open}
        onClose={onClose}
        title={`Add stock prep downtime to ${log.log_number}`}
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
        disabled={isSubmitting}
      >
        <Controller
          name="department"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              label="Department"
              name="department"
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
      </AddFormModal>
    </>
  );
};

export default AddStockPrepDowntimeToProductionLog;
