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

import AddFormModal from "../../common/AddFormModal";
import {
  type ApiError,
  type MaintenanceTicketCreate,
  RequestsAndTicketsService,
} from "@/client";

import { useToastStore } from "@/hooks/useToastStore";
import { handleError } from "@/utils";

type Props = {
  open: boolean;
  onClose: () => void;
};

const AddTicket = ({ open, onClose }: Props) => {
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
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<MaintenanceTicketCreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      maintenance_rq_id: 0,
      work_performed: "",
      start_time: "",
      end_time: "",
      is_completed: false,
    },
  });
  const mutation = useMutation({
    mutationFn: (data: MaintenanceTicketCreate) =>
      RequestsAndTicketsService.createMaintenanceTicketApiV1MaintenanceTicketsPost(
        {
          maintenanceRequestId: data.maintenance_rq_id,
          requestBody: data,
        }
      ),
    onSuccess: () => {
      showToast("Ticket created successfully", "success");
      reset();
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

  const onSubmit: SubmitHandler<MaintenanceTicketCreate> = (data) => {
    mutation.mutate(data);
  };
  return (
    <>
      <AddFormModal
        open={open}
        disabled={isSubmitting}
        onClose={onClose}
        title="Add New Ticket"
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
      >
        <Controller
          name="maintenance_rq_id"
          control={control}
          rules={{ required: "Maintenance Request is required" }}
          render={({ field }) => (
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

        <Input
          label="Start Time"
          type="datetime-local"
          name="start_time"
          register={register("start_time", {
            required: "Start Time is required",
          })}
        />

        <Input
          label="End Time"
          type="datetime-local"
          name="end_time"
          register={register("end_time", {
            required: "End Time is required",
          })}
        />

        <Controller
          name="is_completed"
          control={control}
          render={({ field, fieldState }) => (
            <BooleanToggle
              label="Has the Ticket Been Completed?"
              {...field}
              {...fieldState}
            />
          )}
        />
      </AddFormModal>
    </>
  );
};

export default AddTicket;
