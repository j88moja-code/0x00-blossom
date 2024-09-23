import Textarea from "@/components/common/form/textarea";
import Select from "@/components/common/form/select";
import Input from "@/components/common/form/input";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";

import { type ApiError, type ItemCreate, StoresService } from "../../../client";

import { useToastStore } from "@/hooks/useToastStore";
import AddFormModal from "../../common/AddFormModal";
import { handleError } from "@/utils";

interface SpareCreateModalProps {
  open: boolean;
  onClose: () => void;
}

const AddItem: React.FC<SpareCreateModalProps> = ({ open, onClose }) => {
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
    formState: { isSubmitting },
  } = useForm<ItemCreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      name: "",
      item_code: "",
      unit_price: 0,
      description: "",
      category_id: 0,
      remarks: "" || null,
      is_active: true,
    },
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

  const onSubmit: SubmitHandler<ItemCreate> = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <AddFormModal
        open={open}
        onClose={onClose}
        title="Add Spare Item"
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
        disabled={isSubmitting}
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
      </AddFormModal>
    </>
  );
};

export default AddItem;
