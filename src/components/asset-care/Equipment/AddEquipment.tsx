import Input from "@/components/common/form/input";
import Textarea from "@/components/common/form/textarea";
import Select from "@/components/common/form/select";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";

import {
  type ApiError,
  type EquipmentCreateModel,
  // type EquipmentStatus,
  // type EquipmentCategory,
  // type EquipmentLocation,
  EquipmentService,
} from "../../../client";
import { useToastStore } from "@/hooks/useToastStore";

import AddFormModal from "../../common/AddFormModal";
import {
  equipmentCategories,
  equipmentLocations,
  equipmentStatuses,
} from "../../../constants/Data";

interface AddEquipmentProps {
  open: boolean;
  onClose: () => void;
  // selectedCategory: equipmentCategories;
  // selectedLocation: equipmentLocations;
  // selectedStatus: equipmentStatuses;
  // onChanges: (category: equipmentCategories, location: equipmentLocations, status: equipmentStatuses) => void;
}

const AddEquipment: React.FC<AddEquipmentProps> = ({ open, onClose }) => {
  const queryClient = useQueryClient();
  const {
    handleSubmit,
    reset,
    control,
    register,
    formState: { errors, isSubmitting },
  } = useForm<EquipmentCreateModel>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      name: "",
      description: "",
      category: "Mechanical",
      manufacturer: "",
      model: "",
      asset_number: "",
      status: "Operational",
      location: "Paper machine",
      failure_modes: "",
      failure_effects: "",
      causes: "",
      controls: "",
      severity: 0,
      detectability: 0,
      occurrence: 0,
    },
  });

  const showToast = useToastStore((state) => state.showToast);

  const mutation = useMutation({
    mutationFn: (data: EquipmentCreateModel) =>
      EquipmentService.createEquipmentApiV1EquipmentPost({
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("Equipment created successfully", "success");
      reset();
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

  const onSubmit: SubmitHandler<EquipmentCreateModel> = async (data) => {
    mutation.mutate(data);
  };

  return (
    <AddFormModal
      open={open}
      onClose={onClose}
      title="Add Equipment"
      onSubmit={handleSubmit(onSubmit)}
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
    </AddFormModal>
  );
};

export default AddEquipment;
