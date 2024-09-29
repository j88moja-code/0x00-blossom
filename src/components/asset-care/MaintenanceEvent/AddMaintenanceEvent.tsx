import Textarea from "@/components/common/form/textarea";
import Input from "@/components/common/form/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type SubmitHandler, useForm } from "react-hook-form";

import {
  type ApiError,
  type MaintenanceEventCreate,
  MaintenancePlanningService,
} from "../../../client";
import AddFormModal from "../../common/AddFormModal";
import { useToastStore } from "@/hooks/useToastStore";
import { handleError } from "@/utils";

interface AddMaintenanceEventProps {
  open: boolean;
  onClose: () => void;
}

const AddMaintenanceEvent: React.FC<AddMaintenanceEventProps> = ({
  open,
  onClose,
}) => {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm<MaintenanceEventCreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      description: "",
      planned_start: "",
      planned_end: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: MaintenanceEventCreate) =>
      MaintenancePlanningService.createMaintenanceEventWithTicketsApiV1MaintenancePlanningEventsWithTicketsPost(
        {
          requestBody: data,
        }
      ),
    onSuccess: () => {
      showToast(
        "Maintenance event created successfully, proceed to add tickets",
        "success"
      );
      reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["maitenance-events"],
      });
    },
  });

  const onSubmit: SubmitHandler<MaintenanceEventCreate> = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <AddFormModal
        open={open}
        onClose={onClose}
        title="Add Maintenance Event"
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
      >
        <Textarea
          register={register("description")}
          name="description"
          label="Description"
          error={errors.description?.message}
        />
        <Input
          name="planned_start"
          label="Planned Start"
          register={register("planned_start")}
          error={errors.planned_start?.message}
          type="datetime-local"
        />
        <Input
          name="planned_end"
          label="Planned End"
          register={register("planned_end")}
          error={errors.planned_end?.message}
          type="datetime-local"
        />
      </AddFormModal>
    </>
  );
};

export default AddMaintenanceEvent;
