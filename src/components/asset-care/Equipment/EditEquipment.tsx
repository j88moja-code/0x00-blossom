import Input from "@/components/common/form/input";
import Textarea from "@/components/common/form/textarea";
import Select from "@/components/common/form/select";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";

import {
  type ApiError,
  type EquipmentUpdateModel,
  type EquipmentResponseModel,
  EquipmentService,
} from "../../../client";
import { useToastStore } from "@/hooks/useToastStore";
import EditFormModal from "../../common/EditFormModal";
import {
  equipmentCategories,
  equipmentLocations,
  equipmentStatuses,
} from "../../../constants/Data";

interface EditEquipmentProps {
  open: boolean;
  onClose: () => void;
  equipment: EquipmentResponseModel;
}

const EditEquipment: React.FC<EditEquipmentProps> = ({
  open,
  onClose,
  equipment,
}) => {
  const queryClient = useQueryClient();
  const showToast = useToastStore((state) => state.showToast);
  const {
    handleSubmit,
    reset,
    control,
    register,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<EquipmentUpdateModel>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: equipment,
  });

  const mutation = useMutation({
    mutationFn: (data: EquipmentUpdateModel) =>
      EquipmentService.updateEquipmentApiV1EquipmentIdPut({
        id: equipment.id,
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("Equipment updated successfully", "success");
      onClose();
    },
    onError: (err: ApiError) => {
      const errDetail = (err.body as any)?.detail;
      const errorMessage =
        typeof errDetail === "string"
          ? errDetail
          : JSON.stringify(errDetail) || "An error occurred";
      showToast(`Something went wrong ${errorMessage}`, "error");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["equipment"] });
    },
  });

  const onSubmit: SubmitHandler<EquipmentUpdateModel> = async (data) => {
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
        onCancel={onCancel}
        title="Edit Equipment"
        onSubmit={handleSubmit(onSubmit)}
        isDirty={isDirty}
        isSubmitting={isSubmitting}
      >
        <Input
          label="Asset Number"
          register={register("asset_number")}
          error={errors.asset_number?.message}
        />
        <Input
          label="Name"
          register={register("name", {
            required: "Name is required",
          })}
          error={errors.name?.message}
        />

        <Textarea
          label="Description"
          register={register("description")}
          error={errors.description?.message}
        />

        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            // @ts-ignore
            <Select
              register={register("category")}
              label="Category"
              options={equipmentCategories}
              {...field}
            />
          )}
        />

        <Controller
          name="location"
          control={control}
          render={({ field }) => (
            // @ts-ignore
            <Select
              register={register("location")}
              label="Location"
              options={equipmentLocations}
              {...field}
            />
          )}
        />

        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            // @ts-ignore
            <Select
              register={register("status")}
              label="Status"
              options={equipmentStatuses}
              {...field}
            />
          )}
        />

        <Input
          label="Manufacturer"
          register={register("manufacturer")}
          error={errors.manufacturer?.message}
        />

        <Input
          label="Model"
          register={register("model")}
          error={errors.model?.message}
        />

        <Textarea
          label="Failure Modes"
          register={register("failure_modes")}
          error={errors.failure_modes?.message}
        />

        <Textarea
          label="Failure Effects"
          register={register("failure_effects")}
          error={errors.failure_effects?.message}
        />

        <Textarea
          label="Causes"
          register={register("causes")}
          error={errors.causes?.message}
        />

        <Textarea
          label="Controls"
          register={register("controls")}
          error={errors.controls?.message}
        />

        <Input
          label="Severity"
          type="number"
          register={register("severity")}
          error={errors.severity?.message}
        />

        <Input
          label="Detectability"
          type="number"
          register={register("detectability")}
          error={errors.detectability?.message}
        />

        <Input
          label="Occurrence"
          type="number"
          register={register("occurrence")}
          error={errors.occurrence?.message}
        />
      </EditFormModal>
    </>
  );
};

export default EditEquipment;
