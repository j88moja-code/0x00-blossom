import Textarea from "@/components/common/form/textarea";
import BooleanToggle from "@/components/common/form/toggle-button";
import Input from "@/components/common/form/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, type SubmitHandler, Controller } from "react-hook-form";

import {
  type ApiError,
  type ProductSpecificationUpdate,
  type ProductSpecification,
  ProductionSpecificationsService,
} from "../../../client";
import { useToastStore } from "@/hooks/useToastStore";
import EditFormModal from "../../common/EditFormModal";
import { handleError } from "@/utils";

interface EditSpecificationProps {
  open: boolean;
  onClose: () => void;
  spec: ProductSpecification;
}

const EditProductSpecification: React.FC<EditSpecificationProps> = ({
  open,
  onClose,
  spec,
}) => {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();

  // Using useForm hook
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ProductSpecificationUpdate>({
    mode: "onBlur",
    defaultValues: spec,
  });

  const mutation = useMutation({
    mutationFn: (data: ProductSpecificationUpdate) =>
      ProductionSpecificationsService.updateSpecificationApiV1ProductionSpecificationsSpecificationIdPut(
        {
          // @ts-ignore
          specificationId: spec.id,
          requestBody: data,
        }
      ),
    onSuccess: () => {
      showToast("Specification updated successfully", "success");
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["specifications"] });
    },
  });

  const onSubmit: SubmitHandler<ProductSpecificationUpdate> = async (data) => {
    mutation.mutate(data);
  };

  const renderTextField = (
    label: string,
    field: keyof ProductSpecificationUpdate,
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

  const onCancel = () => {
    reset();
    onClose();
  };
  return (
    <>
      <EditFormModal
        open={open}
        onClose={onCancel}
        title={`Edit Specification for - ${spec.product_code}`}
        onSubmit={handleSubmit(onSubmit)}
        isDirty={isDirty}
        isSubmitting={isSubmitting}
        onCancel={onCancel}
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
      </EditFormModal>
    </>
  );
};

export default EditProductSpecification;
