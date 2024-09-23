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

import EditFormModal from "@/components/common/EditFormModal";
import {
  type ApiError,
  type MaintenanceTicketUpdate,
  type MaintenanceTicketRead,
  RequestsAndTicketsService,
} from "@/client";

import { useToastStore } from "@/hooks/useToastStore";
import { handleError } from "@/utils";

type Props = {
  open: boolean;
  onClose: () => void;
  ticket: MaintenanceTicketRead;
};

const EditTicket = ({ open, onClose, ticket }: Props) => {
  const queryClient = useQueryClient();
  const showToast = useToastStore((state) => state.showToast);
  const { data: maintenanceRequest } = useSuspenseQuery({
    queryKey: ["maintenance-requests"],
    queryFn: () =>
      RequestsAndTicketsService.getMaintenanceRequestsApiV1MaintenanceRequestsGet(
        {
          // TODO: Add query params: get only open requests
        }
      ),
  });

  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { isSubmitting, isDirty },
  } = useForm<MaintenanceTicketUpdate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: ticket,
  });
  const mutation = useMutation({
    mutationFn: (data: MaintenanceTicketUpdate) =>
      RequestsAndTicketsService.updateMaintenanceTicketApiV1MaintenanceTicketsIdPut(
        {
          id: ticket.id,
          requestBody: data,
        }
      ),
    onSuccess: () => {
      showToast("Ticket updated successfully", "success");
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["maintenance-tickets", "maintenance-requests"],
      });
    },
  });

  const onSubmit: SubmitHandler<MaintenanceTicketUpdate> = async (data) => {
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
        onSubmit={handleSubmit(onSubmit)}
        title={`Edit Ticket - ${ticket.ticket_number}`}
        isDirty={isDirty}
        isSubmitting={isSubmitting}
        onCancel={onCancel}
      >
        <Controller
          name="maintenance_rq_id"
          control={control}
          rules={{ required: "Maintenance Request is required" }}
          render={({ field }) => (
            // @ts-ignore
            <Select
              label="Maintenance Request"
              register={register("maintenance_rq_id")}
              {...field}
              options={maintenanceRequest?.requests.map((rq) => ({
                value: rq.id,
                label: rq.rq_number,
              }))}
            />
          )}
        />

        <Textarea
          label="Work Performed"
          name="work_performed"
          register={register("work_performed", {
            required: "Work Performed is required",
            minLength: {
              value: 10,
              message: "Work Performed must be at least 10 characters",
            },
          })}
        />

        <Controller
          name="start_time"
          control={control}
          render={({ field, fieldState }) => (
            // @ts-ignore
            <Input
              label="Start Time"
              type="datetime-local"
              {...field}
              {...fieldState}
              register={register("start_time", {
                required: "Start Time is required",
              })}
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="end_time"
          control={control}
          render={({ field, fieldState }) => (
            // @ts-ignore
            <Input
              label="End Time"
              type="datetime-local"
              {...field}
              register={register("end_time", {
                required: "End Time is required",
              })}
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="is_completed"
          control={control}
          render={({ field, fieldState }) => (
            // @ts-ignore
            <BooleanToggle
              label="Has the Ticket Been Completed?"
              {...field}
              {...fieldState}
              onChange={field.onChange}
            />
          )}
        />
      </EditFormModal>
    </>
  );
};

export default EditTicket;
