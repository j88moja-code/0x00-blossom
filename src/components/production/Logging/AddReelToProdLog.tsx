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
      // @ts-ignore
      production_log_id: productionLog.id,
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

  const onSubmit: SubmitHandler<ReelCreate> = (data) => {
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
      </AddFormModal>
    </>
  );
};

export default AddReelToProductionLog;
