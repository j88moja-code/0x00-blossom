import Textarea from "@/components/common/form/textarea";
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
  type ItemCreate,
  type ItemRead,
  StoresService,
} from "../../../client";

import { useToastStore } from "@/hooks/useToastStore";
import EditFormModal from "../../common/EditFormModal";
import { handleError } from "@/utils";

interface ItemEditModalProps {
  open: boolean;
  onClose: () => void;
  item: ItemRead;
}

const EditItem: React.FC<ItemEditModalProps> = ({ open, onClose, item }) => {
  const { data: categories } = useSuspenseQuery({
    queryKey: ["categories"],
    queryFn: () => StoresService.getAllCategoriesApiV1StoresCategoriesGet(),
  });
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { isSubmitting, isDirty },
  } = useForm<ItemCreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: item,
  });

  const mutation = useMutation({
    mutationFn: (data: ItemCreate) =>
      StoresService.createItemApiV1StoresItemsPost({
        categoryId: data.category_id,
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("Spare item created successfully", "success");
      reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["spare-items"] });
    },
  });

  const onSubmit: SubmitHandler<ItemCreate> = async (data) => {
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
        onClose={onCancel}
        title={`Edit Item for - ${item.item_code}`}
        onSubmit={handleSubmit(onSubmit)}
        isDirty={isDirty}
        isSubmitting={isSubmitting}
        onCancel={onCancel}
      >
        <Input
          name="item_code"
          label="Item code"
          register={register("item_code", {
            required: "Item code is required",
          })}
        />
        <Input
          name="name"
          label="Item name"
          register={register("name", { required: "Name is required" })}
        />

        <Input
          name="unit_price"
          label="Unit price"
          type="number"
          register={register("unit_price", {
            required: "Unit price is required",
          })}
        />
        <Textarea
          name="description"
          label="Description"
          register={register("description")}
        />
        <Controller
          name="category_id"
          control={control}
          render={({ field }) => (
            <Select
              label="Category"
              options={categories?.categories.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
              register={register("category_id", {
                required: "Category is required",
              })}
              {...field}
            />
          )}
        />
        <Textarea
          name="remarks"
          label="Remarks"
          register={register("remarks")}
        />
      </EditFormModal>
    </>
  );
};

export default EditItem;
