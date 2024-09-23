import Textarea from "@/components/common/form/textarea";
import Select from "@/components/common/form/select";
import Input from "@/components/common/form/input";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";

import EditFormModal from "@/components/common/EditFormModal";
import {
  type ApiError,
  type MaintenanceTRAUpdate,
  type MaintenanceTRARead,
  RequestsAndTicketsService,
} from "@/client";

import { useToastStore } from "@/hooks/useToastStore";
import { handleError } from "@/utils";

type EditTRAProps = {
  open: boolean;
  onClose: () => void;
  tra: MaintenanceTRARead;
};

const EditTRA: React.FC<EditTRAProps> = ({ open, onClose, tra }) => {
  const queryClient = useQueryClient();
  const showToast = useToastStore((state) => state.showToast);
  const { data: maintenanceTickets } = useSuspenseQuery({
    queryKey: ["maintenance-tickets"],
    queryFn: () =>
      RequestsAndTicketsService.getMaintenanceTicketsApiV1MaintenanceTicketsGet(
        {
          isCompleted: false,
        }
      ),
  });

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors, isDirty },
  } = useForm<MaintenanceTRAUpdate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: tra,
  });

  const mutation = useMutation({
    mutationFn: (data: MaintenanceTRAUpdate) =>
      RequestsAndTicketsService.updateMaintenanceTraApiV1MaintenanceTraIdPut({
        id: tra.id,
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("TRA updated successfully", "success");
      reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["maintenance-tra"] });
    },
  });

  const onSubmit: SubmitHandler<MaintenanceTRAUpdate> = (data) => {
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
        onSubmit={handleSubmit(onSubmit)}
        title={`Edit TRA - ${tra.ra_number}`}
        isDirty={isDirty}
        isSubmitting={isSubmitting}
        onCancel={onCancel}
      >
        <Controller
          name="maintenance_ticket_id"
          control={control}
          render={({ field }) => (
            // @ts-ignore
            <Select
              label="Maintenance Ticket"
              {...field}
              register={register("maintenance_ticket_id")}
              options={maintenanceTickets?.tickets.map((ticket) => ({
                label: ticket.ticket_number,
                value: ticket.id,
              }))}
              error={errors.maintenance_ticket_id?.message}
            />
          )}
        />
        <Controller
          name="supervisor"
          control={control}
          render={({ field }) => (
            // @ts-ignore
            <Input
              label="Supervisor"
              {...field}
              register={register("supervisor", { required: true })}
              error={errors.supervisor?.message}
            />
          )}
        />

        <Textarea
          label="Steps"
          name="steps"
          register={register("steps")}
          placeholder="Enter steps, setp 1, step 2..."
        />

        <Textarea
          label="Hazards"
          name="hazards"
          register={register("hazards")}
          placeholder="Enter hazards, hazard for step 1, hazard for step 2..."
        />

        <Textarea
          label="Controls"
          name="controls"
          register={register("controls")}
          placeholder="Enter controls, control for hazard 1, control for hazard 2..."
        />
      </EditFormModal>
    </>
  );
};

export default EditTRA;
