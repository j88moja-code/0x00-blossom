import Textarea from "@/components/common/form/textarea";
import Select from "@/components/common/form/select";
import Input from "@/components/common/form/input";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";

import {
  type ApiError,
  type ReelUpdate,
  type Reel,
  type ProductionLog,
  ProductionLogsService,
  ProductionSpecificationsService,
} from "../../../client";

import { useToastStore } from "@/hooks/useToastStore";
import EditFormModal from "../../common/EditFormModal";
import { handleError } from "@/utils";
import BooleanToggle from "@/components/common/form/toggle-button";

interface EditReelOnProductionLogProps {
  open: boolean;
  onClose: () => void;
  productionLog: ProductionLog;
  reel: Reel;
}

const EditReelOnProductionLog: React.FC<EditReelOnProductionLogProps> = ({
  open,
  onClose,
  reel,
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
    control,
    reset,
    getValues,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ReelUpdate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: reel,
  });

  const mutation = useMutation({
    mutationFn: (data: ReelUpdate) =>
      ProductionLogsService.updateProductionReelApiV1ProductionLogsReelsIdPut({
        // @ts-ignore
        id: reel?.id,
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("Reel updated successfully", "success");
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["production-logs"] });
    },
  });

  const onSubmit: SubmitHandler<ReelUpdate> = async (data) => {
    mutation.mutate(data);
  };
  const onCancel = () => {
    reset();
    onClose();
  };
  const renderTextField = (
    label: string,
    field: keyof ReelUpdate,
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
  return (
    <>
      <EditFormModal
        open={open}
        onClose={onClose}
        onCancel={onCancel}
        title={`Edit Reel - ${reel.reel_number}`}
        onSubmit={handleSubmit(onSubmit)}
        isDirty={isDirty}
        isSubmitting={isSubmitting}
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
                defaultValue={reel?.specification_id}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {renderTextField("Weight", "weight", register, errors, true)}
          {renderTextField("Grammage", "grammage", register, errors, true)}
          {renderTextField("Deckle", "deckle", register, errors, true)}

          <Input
            label="Start Time"
            type="datetime-local"
            register={register("start_time", {
              required: "Start Time is required",
            })}
            error={errors.start_time?.message}
          />
          <Input
            label="End Time"
            type="datetime-local"
            register={register("end_time", {
              required: "End Time is required",
              validate: (val) => val > getValues("start_time"),
            })}
            error={errors.end_time?.message}
          />
          {renderTextField(
            "Machine Speed",
            "machine_speed",
            register,
            errors,
            true
          )}
          {renderTextField("Pope Speed", "pope_speed", register, errors, true)}
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
        <Textarea
          label="Remarks"
          name="remark"
          register={register("remark")}
          error={errors.remark?.message}
          className="mb-4"
        />
      </EditFormModal>
    </>
  );
};

export default EditReelOnProductionLog;
