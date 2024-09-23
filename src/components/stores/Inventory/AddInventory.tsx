import Select from "@/components/common/form/select";
import Input from "@/components/common/form/input";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";

import {
  type ApiError,
  type InventoryCreate,
  StoresService,
} from "../../../client";

import { useToastStore } from "@/hooks/useToastStore";
import AddFormModal from "../../common/AddFormModal";
import { handleError } from "@/utils";

type AddInventoryProps = {
  open: boolean;
  onClose: () => void;
};

const AddInventory = ({ open, onClose }: AddInventoryProps) => {
  const { data: spares } = useSuspenseQuery({
    queryKey: ["spare-items"],
    queryFn: () => StoresService.getAllItemsApiV1StoresItemsGet({}),
  });
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();

  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InventoryCreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      quantity: 1,
      item_id: 0,
      reorder_level: 0,
      reorder_quantity: 0,
    },
  });

  const mutation = useMutation({
    mutationFn: (data: InventoryCreate) =>
      StoresService.createInventoryApiV1StoresInventoryPost({
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("Spare added successfully", "success");
      reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["inventory"] });
    },
  });

  const onSubmit: SubmitHandler<InventoryCreate> = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <AddFormModal
        open={open}
        disabled={isSubmitting}
        onClose={onClose}
        title="Add Inventory"
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
      >
        <Controller
          name="item_id"
          control={control}
          rules={{ required: "Item is required" }}
          render={({ field }) => (
            <Select
              {...field}
              register={register("item_id")}
              label="Item"
              options={spares?.items.map((item) => ({
                label: `${item.item_code} - ${item.name}`,
                value: item.id,
              }))}
              error={errors.item_id?.message}
            />
          )}
        />
        <Input
          register={register("quantity", { required: true })}
          label="Quantity"
          type="number"
          error={errors.quantity?.message}
        />
        <Input
          register={register("reorder_level", { required: true })}
          label="Reorder Level"
          type="number"
          error={errors.reorder_level?.message}
        />
        <Input
          register={register("reorder_quantity", { required: true })}
          label="Reorder Quantity"
          type="number"
          error={errors.reorder_quantity?.message}
        />
      </AddFormModal>
    </>
  );
};

export default AddInventory;
