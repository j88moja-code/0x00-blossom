import Textarea from "@/components/common/form/textarea";
import Select from "@/components/common/form/select";
import BooleanToggle from "@/components/common/form/toggle-button";
import Input from "@/components/common/form/input";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";

import {
  type ApiError,
  type ReelCreate,
  type ProductionLog,
  ProductionLogsService,
  ProductionSpecificationsService,
} from "../../../client";

import { useToastStore } from "@/hooks/useToastStore";
import AddFormModal from "../../common/AddFormModal";
import { handleError } from "@/utils";

interface AddReelToProductionLogProps {
  open: boolean;
  onClose: () => void;
  productionLog: ProductionLog;
}

const AddReelToProductionLog: React.FC<AddReelToProductionLogProps> = ({
  open,
  onClose,
  productionLog,
}) => {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const { data: products } = useSuspenseQuery({
    queryKey: ["specifications"],
    queryFn: () =>
      ProductionSpecificationsService.getAllSpecificationsApiV1ProductionSpecificationsGet(
        {
          active: true,
        }
      ),
  });
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ReelCreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      reel_number: "",
      specification_id: 0,
      weight: 0,
      grammage: 0,
      deckle: 0,
      start_time: "",
      end_time: "",
      machine_speed: 0,
      pope_speed: 0,
      is_saleable: true,
      has_joint: false,
      production_log_id: productionLog.id || 0,
      remark: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: ReelCreate) =>
      ProductionLogsService.createProductionReelApiV1ProductionLogsReelsPost({
        requestBody: data,
        // @ts-ignore
        productionLogId: productionLog.id,
      }),
    onSuccess: () => {
      showToast("Reel Added", "success");
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

  const onSubmit: SubmitHandler<ReelCreate> = async (data) => {
    // Get the date from productionLog (assuming it's in ISO format)
    const productionLogDate = new Date(productionLog.created_at);

    // Extract the start and end times from the form data (expected in "HH:MM" format)
    const startTime = data.start_time; // Expected to be in "HH:MM" format
    const endTime = data.end_time; // Expected to be in "HH:MM" format

    // Ensure both start and end times are provided
    if (!startTime || !endTime) {
      console.error("Start or End time is missing");
      return;
    }

    // Parse the "HH:MM" time strings into hours and minutes
    const [startHours, startMinutes] = startTime.split(":").map(Number);
    const [endHours, endMinutes] = endTime.split(":").map(Number);

    // Check if the parsed times are valid
    if (
      isNaN(startHours) ||
      isNaN(startMinutes) ||
      isNaN(endHours) ||
      isNaN(endMinutes)
    ) {
      console.error("Invalid start or end time format");
      return;
    }

    const startDateTime = new Date(
      `${productionLogDate.toISOString().split("T")[0]}T${startTime}:00`
    );
    const endDateTime = new Date(
      `${productionLogDate.toISOString().split("T")[0]}T${endTime}:00`
    );

    // Strip time zone information by converting to local time
    const startTimeWithoutTimezone = startDateTime.toISOString().split(".")[0]; // Strips milliseconds and timezone info
    const endTimeWithoutTimezone = endDateTime.toISOString().split(".")[0];

    // Convert the final date and time to ISO string
    data.start_time = startTimeWithoutTimezone;
    data.end_time = endTimeWithoutTimezone;

    // Submit the data with mutation
    mutation.mutate(data);
  };

  const renderTextField = (
    label: string,
    field: keyof ReelCreate,
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

  const shift = productionLog?.kanban?.shift;

  return (
    <>
      <AddFormModal
        open={open}
        onClose={onClose}
        title={`Add Reel to Production Log ${productionLog.log_number}`}
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit(onSubmit)}
        disabled={isSubmitting}
      >
        <div className="grid grid-cols-1 gap-4 mb-4">
          <Controller
            name="specification_id"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                label="Specification"
                // @ts-ignore
                options={products?.specifications.map((product) => ({
                  value: product.id,
                  label: product.product_code,
                }))}
                error={errors.specification_id?.message}
                register={register("specification_id", {
                  required: "Specification is required",
                })}
              />
            )}
          />
        </div>
        <div className="flex justify-between mb-4">
          <Input
            label="Start Time"
            type="time"
            min={shift == "day" ? "06:00" : "18:00"}
            max={shift == "day" ? "18:00" : "06:00"}
            register={register("start_time", {
              required: "Start Time is required",
            })}
            error={errors.start_time?.message}
          />
          <Input
            label="End Time"
            type="time"
            min={shift == "day" ? "06:00" : "18:00"}
            max={shift == "day" ? "18:00" : "06:00"}
            register={register("end_time", {
              required: "End Time is required",
              validate: (val) => val > getValues("start_time"),
            })}
            error={errors.end_time?.message}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {renderTextField("Weight", "weight", register, errors, true)}
          {renderTextField("Grammage", "grammage", register, errors, true)}
          {renderTextField("Deckle", "deckle", register, errors, true)}

          {renderTextField(
            "Machine Speed",
            "machine_speed",
            register,
            errors,
            true
          )}
          {renderTextField("Pope Speed", "pope_speed", register, errors, true)}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Crepe Ratio
            </label>
            <input
              className="border dark:bg-gray-700 dark:text-gray-300 text-gray-700 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={(watch("machine_speed") / watch("pope_speed")).toFixed(2)}
            />
          </div>
        </div>
        <Controller
          name="is_saleable"
          control={control}
          render={({ field }) => (
            <BooleanToggle
              {...field}
              label="Is Saleable?"
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          name="has_joint"
          control={control}
          render={({ field }) => (
            <BooleanToggle
              {...field}
              label="Does the Reel have a Joint?"
              onChange={field.onChange}
            />
          )}
        />
        <Textarea
          label="Remarks"
          name="remark"
          register={register("remark")}
          error={errors.remark?.message}
          className="mb-4"
        />
      </AddFormModal>
    </>
  );
};

export default AddReelToProductionLog;
