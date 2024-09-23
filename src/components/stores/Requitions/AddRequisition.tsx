import Select from "@/components/common/form/select";
import Input from "@/components/common/form/input";
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
import { Button } from "@/components/ui/button";

import {
  type ApiError,
  type OrderCreate,
  RequisitionsService,
  StoresService,
  RequestsAndTicketsService,
} from "../../../client";
import Textarea from "@/components/common/form/textarea";

type AddRequisitionProps = {
  open: boolean;
  onClose: () => void;
  withRequest?: boolean;
};

const AddRequisition: React.FC<AddRequisitionProps> = ({
  open,
  onClose,
  withRequest,
}) => {
  const showToast = useToastStore((state) => state.showToast);
  const { data: spares } = useSuspenseQuery({
    queryKey: ["spares"],
    queryFn: () => StoresService.getAllItemsApiV1StoresItemsGet({}),
  });

  const { data: maintenanceRequests } = useSuspenseQuery({
    queryKey: ["maintenance-requests"],
    queryFn: () =>
      RequestsAndTicketsService.getMaintenanceRequestsApiV1MaintenanceRequestsGet(
        {
          // TODO: Add query params: get only validated requests
        }
      ),
  });

  const queryClient = useQueryClient();

  const {
    handleSubmit,
    control,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm<OrderCreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      maintenance_requests_id: 0 || undefined,
      date: "",
      remarks: "",
      items: [{ item_id: 0, quantity: 1 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const withRequestIdMutation = useMutation({
    mutationFn: (data: OrderCreate) =>
      RequisitionsService.createOrderWithMaintenanceIdApiV1StoresRequisitionsMaintenanceRequestIdPost(
        {
          // @ts-ignore
          maintenanceRequestId: data.maintenance_requests_id,
          requestBody: data,
        }
      ),
    onSuccess: () => {
      showToast("Spare parts requisition created successfully", "success");
      reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["requisitions"] });
    },
  });

  const withoutRequestIdMutation = useMutation({
    mutationFn: (data: OrderCreate) =>
      RequisitionsService.createOrderWithoutMaintenanceIdApiV1StoresRequisitionsPost(
        {
          requestBody: data,
        }
      ),
    onSuccess: () => {
      showToast("Spare parts requisition created successfully", "success");
      reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["requisitions"] });
    },
  });

  const onSubmit: SubmitHandler<OrderCreate> = (data) => {
    if (withRequest) {
      withRequestIdMutation.mutate(data);
    } else {
      withoutRequestIdMutation.mutate(data);
    }
  };

  return (
    <>
      <AddFormModal
        open={open}
        onClose={onClose}
        title={
          withRequest
            ? "Create Spare Parts Requisition with Maintenance Request"
            : "Create Spare Parts Requisition without Maintenance Request"
        }
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
        disabled={isSubmitting}
      >
        {withRequest && (
          <Controller
            name="maintenance_requests_id"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              // @ts-ignore
              <Select
                label="Maintenance Request"
                {...field}
                register={register("maintenance_requests_id", {
                  required: true,
                })}
                options={maintenanceRequests?.requests.map((request) => ({
                  value: request.id,
                  label: request.rq_number,
                }))}
              />
            )}
          />
        )}

        {fields.map((item, index) => (
          <div
            className="flex flex-col md:flex-row md:items-center md:gap-4"
            key={item.id}
          >
            <Controller
              name={`items.${index}.item_id`}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  label="Item"
                  {...field}
                  register={register(`items.${index}.item_id`, {
                    required: true,
                  })}
                  options={spares?.items.map((item) => ({
                    value: item.id,
                    label: item.name,
                  }))}
                />
              )}
            />
            <Controller
              name={`items.${index}.quantity`}
              control={control}
              rules={{ required: true, min: 1 }}
              render={({ field }) => (
                <Input
                  label="Quantity"
                  type="number"
                  {...field}
                  register={register(`items.${index}.quantity`, {
                    required: true,
                    min: 1,
                  })}
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

        <Button
          color="primary"
          onClick={() => append({ item_id: 0, quantity: 1 })}
        >
          <AddIcon /> Add Item
        </Button>

        <Controller
          name="remarks"
          control={control}
          render={({ field }) => (
            // @ts-ignore
            <Textarea
              label="Remarks"
              {...field}
              register={register("remarks")}
              error={errors?.remarks?.message}
            />
          )}
        />
      </AddFormModal>
    </>
  );
};

export default AddRequisition;
