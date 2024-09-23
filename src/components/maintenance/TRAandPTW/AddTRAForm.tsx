import Textarea from "@/components/common/form/textarea";
import Select from "@/components/common/form/select";
import Input from "@/components/common/form/input";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";

import AddFormModal from "../../common/AddFormModal";
import {
  type ApiError,
  type MaintenanceTRACreate,
  RequestsAndTicketsService,
} from "@/client";
import { handleError } from "@/utils";
import { useToastStore } from "@/hooks/useToastStore";

type AddTRAFormProps = {
  open: boolean;
  onClose: () => void;
};

const AddTRA: React.FC<AddTRAFormProps> = ({ open, onClose }) => {
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
    formState: { isSubmitting, errors },
  } = useForm<MaintenanceTRACreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      maintenance_ticket_id: 0,
      supervisor: "",
      date: "",
      steps: "",
      hazards: "",
      controls: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: MaintenanceTRACreate) =>
      RequestsAndTicketsService.createMaintenanceTraApiV1MaintenanceTraPost({
        maintenanceTicketId: data.maintenance_ticket_id,
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("TRA created successfully", "success");
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

  const onSubmit: SubmitHandler<MaintenanceTRACreate> = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <AddFormModal
        open={open}
        disabled={isSubmitting}
        onClose={onClose}
        title="Add Task Risk Assessment"
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
      >
        <Controller
          name="maintenance_ticket_id"
          control={control}
          render={({ field }) => (
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
            <Input
              label="Supervisor"
              {...field}
              register={register("supervisor", { required: true })}
              error={errors.supervisor?.message}
            />
          )}
        />

        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            // @ts-ignore
            <Input
              label="Date"
              type="date"
              {...field}
              register={register("date", { required: true })}
              error={errors.date?.message}
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
      </AddFormModal>
    </>
  );
};

export default AddTRA;
