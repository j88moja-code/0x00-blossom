import Select from "@/components/common/form/select";
import Typography from "@mui/material/Typography";
import { MdAdd as AddIcon, MdRemove as RemoveIcon } from "react-icons/md";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";

import {
  type SubmitHandler,
  useForm,
  Controller,
  useFieldArray,
} from "react-hook-form";
import AddFormModal from "../../common/AddFormModal";
import { useToastStore } from "@/hooks/useToastStore";
import { handleError } from "@/utils";

import {
  type ApiError,
  type MaintenanceEventAddPlannedTickets,
  type MaintenanceEventRead,
  MaintenancePlanningService,
  RequestsAndTicketsService,
} from "../../../client";
import { Button } from "@/components/ui/button";

interface AddPlannedWorkToMaintenanceEventProps {
  open: boolean;
  onClose: () => void;
  maintenanceEvent: MaintenanceEventRead;
}

const AddPlannedWorkToMaintenanceEvent: React.FC<
  AddPlannedWorkToMaintenanceEventProps
> = ({ open, onClose, maintenanceEvent }) => {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const { data: incompleteTickects } = useSuspenseQuery({
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
    reset,
    register,
    formState: { isSubmitting },
  } = useForm<MaintenanceEventAddPlannedTickets>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      id: maintenanceEvent.id,
      maintenance_tickets: [
        {
          id: 0,
        },
      ],
    },
  });
  const mutation = useMutation({
    mutationFn: (data: MaintenanceEventAddPlannedTickets) =>
      MaintenancePlanningService.addTicketsToMaintenanceEventApiV1MaintenancePlanningEventsIdAddTickesPut(
        {
          id: data.id,
          requestBody: data,
        }
      ),
    onSuccess: () => {
      showToast("Planned work added successfully", "success");
      reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["maintenance_tickets", "maitenance-events"],
      });
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "maintenance_tickets",
  });

  const onSubmit: SubmitHandler<MaintenanceEventAddPlannedTickets> = async (
    data
  ) => {
    mutation.mutate(data);
  };

  return (
    <>
      <AddFormModal
        open={open}
        onClose={onClose}
        title={`Add Planned Work to ${maintenanceEvent.event_number}`}
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
        disabled={incompleteTickects?.tickets.length === 0}
      >
        {incompleteTickects?.tickets.length === 0 ? (
          <Typography variant="body1" color="error">
            No Incomplete Tickets Found
          </Typography>
        ) : (
          <>
            {fields.map((field, index) => (
              <div key={field.id} className="flex justify-items-center gap-2">
                <Controller
                  name={`maintenance_tickets.${index}.id`}
                  control={control}
                  render={({ field }) => (
                    <Select
                      label="Ticket"
                      {...field}
                      register={register(`maintenance_tickets.${index}.id`)}
                      options={incompleteTickects?.tickets.map((ticket) => ({
                        label: ticket.ticket_number,
                        value: ticket.id,
                      }))}
                    />
                  )}
                />
                <Button
                  className="rounded-md w-8 h-8"
                  size="icon"
                  variant="default"
                  onClick={() => remove(index)}
                >
                  <RemoveIcon />
                </Button>
              </div>
            ))}
          </>
        )}

        <Button
          className="w-full"
          variant="default"
          // @ts-ignore
          onClick={() => append({ id: 0 })}
        >
          <AddIcon />
          Add Ticket
        </Button>
      </AddFormModal>
    </>
  );
};

export default AddPlannedWorkToMaintenanceEvent;
