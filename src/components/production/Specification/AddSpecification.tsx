import Textarea from "@/components/common/form/textarea";
import BooleanToggle from "@/components/common/form/toggle-button";
import Input from "@/components/common/form/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, type SubmitHandler, Controller } from "react-hook-form";

import {
  type ApiError,
  type ProductSpecificationCreate,
  ProductionSpecificationsService,
} from "../../../client";
import { useToastStore } from "@/hooks/useToastStore";
import AddFormModal from "../../common/AddFormModal";
import { handleError } from "@/utils";

interface AddSpecificationProps {
  open: boolean;
  onClose: () => void;
}

const AddProductSpecification: React.FC<AddSpecificationProps> = ({
  open,
  onClose,
}) => {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();

  // Using useForm hook
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProductSpecificationCreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      product_code: "",
      description: "",
      grammage_high: 0,
      grammage_target: 0,
      grammage_low: 0,
      md_tensile_high: 0,
      md_tensile_target: 0,
      md_tensile_low: 0,
      cd_tensile_high: 0,
      cd_tensile_target: 0,
      cd_tensile_low: 0,
      stretch_high: 0,
      stretch_target: 0,
      stretch_low: 0,
      L_value_high: 0,
      L_value_target: 0,
      L_value_low: 0,
      a_value_high: 0,
      a_value_target: 0,
      a_value_low: 0,
      b_value_high: 0,
      b_value_target: 0,
      b_value_low: 0,
      brightness_high: 0,
      brightness_target: 0,
      brightness_low: 0,
      is_active: false,
      is_wet_strength: false,
      remarks: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: ProductSpecificationCreate) =>
      ProductionSpecificationsService.createSpecificationApiV1ProductionSpecificationsPost(
        { requestBody: data }
      ),
    onSuccess: () => {
      showToast("Specification added successfully", "success");
      reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["specifications"] });
    },
  });

  const onSubmit: SubmitHandler<ProductSpecificationCreate> = (data) => {
    mutation.mutate(data);
  };

  // Reusable component for text fields
  const renderTextField = (
    label: string,
    field: keyof ProductSpecificationCreate,
    register: any,
    errors: any,
    required = false
  ) => (
    <Input
      label={label}
      type="number"
      register={register(field, {
        required: required ? `${label} is required` : false,
      })}
      error={errors[field]?.message}
    />
  );

  return (
    <>
      <AddFormModal
        open={open}
        onClose={onClose}
        title="Add Specification"
        onSubmit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
        disabled={isSubmitting}
      >
        <div className="grid grid-cols-1 gap-4 mb-4">
          <Input
            label="Product Code"
            name="product_code"
            register={register("product_code", {
              required: "Product Code is required",
            })}
            error={errors.product_code?.message}
          />

          <Textarea
            label="Description"
            name="description"
            register={register("description", {
              required: "Description is required",
            })}
            error={errors.description?.message}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {renderTextField(
            "Grammage High",
            "grammage_high",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Grammage Target",
            "grammage_target",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Grammage Low",
            "grammage_low",
            register,
            errors,
            true
          )}

          {renderTextField(
            "Md Tensile High",
            "md_tensile_high",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Md Tensile Target",
            "md_tensile_target",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Md Tensile Low",
            "md_tensile_low",
            register,
            errors,
            true
          )}

          {renderTextField(
            "Cd Tensile High",
            "cd_tensile_high",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Cd Tensile Target",
            "cd_tensile_target",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Cd Tensile Low",
            "cd_tensile_low",
            register,
            errors,
            true
          )}

          {renderTextField(
            "Stretch High",
            "stretch_high",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Stretch Target",
            "stretch_target",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Stretch Low",
            "stretch_low",
            register,
            errors,
            true
          )}

          {renderTextField(
            "L-value High",
            "L_value_high",
            register,
            errors,
            true
          )}
          {renderTextField(
            "L-value Target",
            "L_value_target",
            register,
            errors,
            true
          )}
          {renderTextField(
            "L-value Low",
            "L_value_low",
            register,
            errors,
            true
          )}

          {renderTextField(
            "a-value High",
            "a_value_high",
            register,
            errors,
            true
          )}
          {renderTextField(
            "a-value Target",
            "a_value_target",
            register,
            errors,
            true
          )}
          {renderTextField(
            "a-value Low",
            "a_value_low",
            register,
            errors,
            true
          )}

          {renderTextField(
            "b-value High",
            "b_value_high",
            register,
            errors,
            true
          )}
          {renderTextField(
            "b-value Target",
            "b_value_target",
            register,
            errors,
            true
          )}
          {renderTextField(
            "b-value Low",
            "b_value_low",
            register,
            errors,
            true
          )}

          {renderTextField(
            "Brightness High",
            "brightness_high",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Brightness Target",
            "brightness_target",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Brightness Low",
            "brightness_low",
            register,
            errors,
            true
          )}
        </div>
        <Controller
          control={control}
          name="is_wet_strength"
          render={({ field }) => (
            <BooleanToggle
              label="Does this product have wet strength?"
              {...field}
              onChange={field.onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="is_active"
          render={({ field }) => (
            <BooleanToggle
              label="Is Active?"
              {...field}
              onChange={field.onChange}
            />
          )}
        />

        {/* Remarks field */}
        <Textarea
          label="Remarks"
          name="remarks"
          register={register("remarks")}
          error={errors.remarks?.message}
          className="mb-4"
        />
      </AddFormModal>
    </>
  );
};

export default AddProductSpecification;
