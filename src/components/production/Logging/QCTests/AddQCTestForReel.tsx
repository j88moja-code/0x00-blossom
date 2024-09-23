import Textarea from "@/components/common/form/textarea";
import Input from "@/components/common/form/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type SubmitHandler, useForm } from "react-hook-form";

import {
  type ApiError,
  type QualityInspectionItemCreate,
  type ReelRead,
  ProductionLogsService,
} from "../../../../client";
import { useToastStore } from "@/hooks/useToastStore";
import AddFormModal from "../../../common/AddFormModal";
import { handleError } from "@/utils";

interface AddQCTestForReelProps {
  open: boolean;
  onClose: () => void;
  reel: ReelRead;
}

const AddQCTestForReel: React.FC<AddQCTestForReelProps> = ({
  open,
  onClose,
  reel,
}) => {
  const showToast = useToastStore((state) => state.showToast);

  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QualityInspectionItemCreate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      // @ts-ignore
      reel_id: reel.id,
      grammage: reel.grammage,
      md_tensile: 0,
      cd_tensile: 0,
      stretch: 0,
      L_value: 0,
      a_value: 0,
      b_value: 0,
      brightness: 0,
      remark: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: QualityInspectionItemCreate) =>
      ProductionLogsService.createProductionQciApiV1ProductionLogsQciPost({
        // @ts-ignore
        reelId: reel.id,
        requestBody: data,
      }),
    onSuccess: () => {
      showToast("QCI added successfully", "success");
      onClose();
      reset();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["production-logs"] });
    },
  });

  const onSubmit: SubmitHandler<QualityInspectionItemCreate> = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <AddFormModal
        open={open}
        onClose={onClose}
        title={`Add QCI for ${reel.reel_number}`}
        isSubmitting={isSubmitting}
        disabled={isSubmitting}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Grammage"
          type="number"
          name="grammage"
          register={register("grammage", {
            required: "Grammage is required",
          })}
          error={errors.grammage?.message}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Input
            label="MD tensile"
            type="number"
            name="md_tensile"
            register={register("md_tensile", {
              required: "MD tensile is required",
            })}
            error={errors.md_tensile?.message}
          />
          <Input
            label="CD tensile"
            type="number"
            name="cd_tensile"
            register={register("cd_tensile", {
              required: "CD tensile is required",
            })}
            error={errors.cd_tensile?.message}
          />
          <Input
            label="Stretch"
            type="number"
            name="stretch"
            register={register("stretch", {
              required: "Stretch is required",
            })}
            error={errors.stretch?.message}
          />
          <Input
            label="L value"
            type="number"
            name="L_value"
            register={register("L_value", {
              required: "L value is required",
            })}
            error={errors.L_value?.message}
          />
          <Input
            label="A value"
            type="number"
            name="a_value"
            register={register("a_value", {
              required: "A value is required",
            })}
            error={errors.a_value?.message}
          />
          <Input
            label="B value"
            type="number"
            name="b_value"
            register={register("b_value", {
              required: "B value is required",
            })}
            error={errors.b_value?.message}
          />
          <Input
            label="Brightness"
            type="number"
            name="brightness"
            register={register("brightness", {
              required: "Brightness is required",
            })}
            error={errors.brightness?.message}
          />
        </div>
        <Textarea
          label="Remarks"
          name="remarks"
          register={register("remark")}
          error={errors.remark?.message}
          className="mb-4"
        />
      </AddFormModal>
    </>
  );
};

export default AddQCTestForReel;
