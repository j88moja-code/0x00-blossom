import Textarea from "@/components/common/form/textarea";
import Select from "@/components/common/form/select";
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
  type ProductionLogUpdate,
  type ProductionLog,
  ProductionKanbansService,
  ProductionLogsService,
} from "../../../client";
import EditFormModal from "../../common/EditFormModal";
import { handleError } from "@/utils";

interface EditProdLogProps {
  open: boolean;
  onClose: () => void;
  log: ProductionLog;
}

const EditProductionLog: React.FC<EditProdLogProps> = ({
  open,
  onClose,
  log,
}) => {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const { data: kanbans } = useSuspenseQuery({
    queryKey: ["production-kanbans"],
    queryFn: () =>
      ProductionKanbansService.readAllKanbansApiV1ProductionKanbansGet({
        completed: false,
        started: false,
      }),
  });

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ProductionLogUpdate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: log,
  });

  const mutation = useMutation({
    mutationFn: (data: ProductionLogUpdate) =>
      ProductionLogsService.updateProductionLogApiV1ProductionLogsIdPut({
        // @ts-ignore
        id: log.id,
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("Production Log updated successfully", "success");
      onClose();
    },

    onError: (err: ApiError) => {
      handleError(err, showToast);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["production-logs"] });
    },
  });

  const onCancel = () => {
    reset();
    onClose();
  };

  const onSubmit: SubmitHandler<ProductionLogUpdate> = async (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <EditFormModal
        open={open}
        onClose={onClose}
        onCancel={onCancel}
        title="Edit Production Log"
        onSubmit={handleSubmit(onSubmit)}
        isDirty={isDirty}
        isSubmitting={isSubmitting}
      >
        <Input
          label="Log Number"
          name="log_number"
          defaultValue={log.log_number}
          disabled
          error={errors.log_number?.message}
          register={register("log_number")}
        />
        <Controller
          name="kanban_id"
          control={control}
          render={() => (
            <Select
              label="Kanban"
              name="kanban_id"
              defaultValue={log.kanban_id}
              disabled
              error={errors.kanban_id?.message}
              register={register("kanban_id")}
              // @ts-ignore
              options={kanbans?.kanbans.map((kanban) => ({
                label: kanban.kanban_number,
                value: kanban.id,
              }))}
            />
          )}
        />
        <Textarea
          label="Remarks"
          name="remarks"
          error={errors.remarks?.message}
          register={register("remarks")}
        />
      </EditFormModal>
    </>
  );
};

export default EditProductionLog;
