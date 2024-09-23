import Textarea from "@/components/common/form/textarea";
import Input from "@/components/common/form/input";
import BooleanToggle from "@/components/common/form/toggle-button";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";

import { useToastStore } from "@/hooks/useToastStore";
import EditFormModal from "../../../common/EditFormModal";
import {
  type ApiError,
  type MachineFieldCheckUpdate,
  type ProcessVisorResponse,
  MCFieldChecksService,
} from "../../../../client";
import { handleError } from "@/utils";

type AddFieldChecksProps = {
  processVisor: ProcessVisorResponse;
  open: boolean;
  onClose: () => void;
};

const renderTextField = (
  label: string,
  field: keyof MachineFieldCheckUpdate,
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

function getMachineFieldCheck(processVisor: ProcessVisorResponse) {
  return {
    queryKey: ["machine-field-checks", processVisor.id],
    queryFn: () =>
      MCFieldChecksService.readFieldCheckByVisorIdApiV1McFieldChecksPcvProcessVisorIdMcFieldCheckGet(
        {
          processVisorId: processVisor.id,
        }
      ),
  };
}

export function AddForCrescentFormer({
  processVisor,
  open,
  onClose,
}: AddFieldChecksProps) {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const { data: machineFieldCheck } = useSuspenseQuery({
    ...getMachineFieldCheck(processVisor),
  });

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<MachineFieldCheckUpdate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: machineFieldCheck,
  });

  const mutation = useMutation({
    mutationFn: (data: MachineFieldCheckUpdate) =>
      MCFieldChecksService.updateCrescentFormerSectionApiV1McFieldChecksIdCfsFcPut(
        {
          id: machineFieldCheck?.id,
          requestBody: data,
        }
      ),

    onSuccess: () => {
      showToast("Crescent Former field checks updated successfully", "success");
      // reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["machine-field-checks", processVisor.id],
      });
    },
  });
  const onCancel = () => {
    reset();
    onClose();
  };
  const onSubmit: SubmitHandler<MachineFieldCheckUpdate> = async (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <EditFormModal
        open={open}
        onCancel={onCancel}
        onClose={onClose}
        onSubmit={handleSubmit(onSubmit)}
        isDirty={isDirty}
        isSubmitting={isSubmitting}
        title={`Add Crescent Former Field Check for ${machineFieldCheck?.field_check_number}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Input
            label="Wire Supplier/Make"
            name="wire_supplier"
            register={register("wire_supplier", { required: true })}
            error={errors.wire_supplier?.message}
          />
          {renderTextField(
            "Wire Tension",
            "wire_tension",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Wire HP Pressure",
            "wire_hp_pressure",
            register,
            errors,
            true
          )}
          <Controller
            control={control}
            name="wire_hp_shower_nozzles_blocked"
            render={({ field }) => (
              // @ts-ignore
              <BooleanToggle
                label="Is the Wire HP Shower Nozzles Blocked?"
                // @ts-ignore
                onChange={field.onChange}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="wire_hp_shower_oscillates"
            render={({ field }) => (
              // @ts-ignore
              <BooleanToggle
                label="Is the Wire HP Shower Oscillates?"
                // @ts-ignore
                onChange={field.onChange}
                {...field}
              />
            )}
          />
          <Input
            label="Felt Supplier/Make"
            name="felt_supplier"
            register={register("felt_supplier", { required: true })}
            error={errors.felt_supplier?.message}
          />
          {renderTextField("Felt Age", "felt_age", register, errors, true)}
          {renderTextField(
            "Felt Tension",
            "felt_tension",
            errors,
            register,
            true
          )}
          {renderTextField(
            "Felt HP Pressure",
            "felt_hp_pressure",
            register,
            errors,
            true
          )}
          <Controller
            control={control}
            name="felt_hp_shower_nozzles_blocked"
            render={({ field }) => (
              // @ts-ignore
              <BooleanToggle
                label="Is the Felt HP Shower Nozzles Blocked?"
                // @ts-ignore
                onChange={field.onChange}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="felt_hp_shower_oscillates"
            render={({ field }) => (
              // @ts-ignore
              <BooleanToggle
                label="Is the Felt HP Shower Oscillating?"
                // @ts-ignore
                onChange={field.onChange}
                {...field}
              />
            )}
          />
        </div>
      </EditFormModal>
    </>
  );
}

export function AddDESectionChecks({
  open,
  onClose,
  processVisor,
}: AddFieldChecksProps) {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const { data: machineFieldCheck } = useSuspenseQuery({
    ...getMachineFieldCheck(processVisor),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<MachineFieldCheckUpdate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: machineFieldCheck,
  });

  const mutation = useMutation({
    mutationFn: (data: MachineFieldCheckUpdate) =>
      MCFieldChecksService.updateDryEndSectionApiV1McFieldChecksIdDesFcPut({
        id: machineFieldCheck?.id,
        requestBody: data,
      }),

    onSuccess: () => {
      showToast("Dry End Section field checks updated successfully", "success");
      // reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["machine-field-checks", processVisor.id],
      });
    },
  });
  const onCancel = () => {
    reset();
    onClose();
  };
  const onSubmit: SubmitHandler<MachineFieldCheckUpdate> = async (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <EditFormModal
        open={open}
        onCancel={onCancel}
        onClose={onClose}
        onSubmit={handleSubmit(onSubmit)}
        isDirty={isDirty}
        isSubmitting={isSubmitting}
        title={`Add Dry End Section Field Check for ${machineFieldCheck?.field_check_number}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {renderTextField(
            "Creping Blade Pressure",
            "creping_blade_pressure",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Creping Blade Stickout",
            "creping_blade_stickout",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Cleaning Blade Pressure",
            "cleaning_blade_pressure",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Knock Off Blade Pressure",
            "knockoff_blade_pressure",
            register,
            errors,
            true
          )}
        </div>
      </EditFormModal>
    </>
  );
}

export function AddWaterSystemChecks({
  open,
  onClose,
  processVisor,
}: AddFieldChecksProps) {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const { data: machineFieldCheck } = useSuspenseQuery({
    ...getMachineFieldCheck(processVisor),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty },
  } = useForm<MachineFieldCheckUpdate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: machineFieldCheck,
  });

  const mutation = useMutation({
    mutationFn: (data: MachineFieldCheckUpdate) =>
      MCFieldChecksService.updateWaterSystemFieldCheckApiV1McFieldChecksIdWsFcPut(
        {
          id: machineFieldCheck?.id,
          requestBody: data,
        }
      ),

    onSuccess: () => {
      showToast("Water System field checks updated successfully", "success");
      // reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["machine-field-checks", processVisor.id],
      });
    },
  });
  const onCancel = () => {
    reset();
    onClose();
  };
  const onSubmit: SubmitHandler<MachineFieldCheckUpdate> = async (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <EditFormModal
        open={open}
        onCancel={onCancel}
        onClose={onClose}
        onSubmit={handleSubmit(onSubmit)}
        isDirty={isDirty}
        isSubmitting={isSubmitting}
        title={`Add Water System Field Check for ${machineFieldCheck?.field_check_number}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Controller
            control={control}
            name="purgo2_water_quality_good"
            render={({ field }) => (
              // @ts-ignore
              <BooleanToggle
                label="Is the water quality on DAF 2 acceptable?"
                // @ts-ignore
                onChange={field.onChange}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="purgo2_saturation_good"
            render={({ field }) => (
              // @ts-ignore
              <BooleanToggle
                label="Is the water saturation on DAF 2 acceptable?"
                // @ts-ignore
                onChange={field.onChange}
                {...field}
              />
            )}
          />
          <Controller
            name="purgo2_level_good"
            control={control}
            render={({ field }) => (
              // @ts-ignore
              <BooleanToggle
                label="Is the water level on DAF 2 acceptable?"
                // @ts-ignore
                onChange={field.onChange}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="auxiguard_dumping_rejects"
            render={({ field }) => (
              // @ts-ignore
              <BooleanToggle
                label="Auxiguard dumping rejects?"
                // @ts-ignore
                onChange={field.onChange}
                {...field}
              />
            )}
          />
        </div>
      </EditFormModal>
    </>
  );
}

export function AddHousekeepingChecks({
  open,
  onClose,
  processVisor,
}: AddFieldChecksProps) {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const { data: machineFieldCheck } = useSuspenseQuery({
    ...getMachineFieldCheck(processVisor),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty },
  } = useForm<MachineFieldCheckUpdate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: machineFieldCheck,
  });

  const mutation = useMutation({
    mutationFn: (data: MachineFieldCheckUpdate) =>
      MCFieldChecksService.updateHousekeepingFieldCheckApiV1McFieldChecksIdHousekeepingPut(
        {
          id: machineFieldCheck?.id,
          requestBody: data,
        }
      ),

    onSuccess: () => {
      showToast("Housekeeping field checks updated successfully", "success");
      // reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["machine-field-checks", processVisor.id],
      });
    },
  });
  const onCancel = () => {
    reset();
    onClose();
  };
  const onSubmit: SubmitHandler<MachineFieldCheckUpdate> = async (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <EditFormModal
        open={open}
        onCancel={onCancel}
        onClose={onClose}
        onSubmit={handleSubmit(onSubmit)}
        isDirty={isDirty}
        isSubmitting={isSubmitting}
        title={`Add Housekeeping Field Check for ${machineFieldCheck?.field_check_number}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Controller
            control={control}
            name="machine_floor_cleaned"
            render={({ field }) => (
              // @ts-ignore
              <BooleanToggle
                label="Is the Machine Floor Cleaned?"
                // @ts-ignore
                onChange={field.onChange}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="mezzanine_floor_cleaned"
            render={({ field }) => (
              // @ts-ignore
              <BooleanToggle
                label="Is the Mezzanine Floor Cleaned?"
                // @ts-ignore
                onChange={field.onChange}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="machine_frames_and_walkways_cleaned"
            render={({ field }) => (
              // @ts-ignore
              <BooleanToggle
                label="Is the Machine Frames and Walkways Cleaned?"
                // @ts-ignore
                onChange={field.onChange}
                {...field}
              />
            )}
          />
        </div>
      </EditFormModal>
    </>
  );
}

export function AddRemarksOnFieldChecks({
  open,
  onClose,
  processVisor,
}: AddFieldChecksProps) {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const { data: machineFieldCheck } = useSuspenseQuery({
    ...getMachineFieldCheck(processVisor),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<MachineFieldCheckUpdate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: machineFieldCheck,
  });

  const mutation = useMutation({
    mutationFn: (data: MachineFieldCheckUpdate) =>
      MCFieldChecksService.addFieldCheckRemarksApiV1McFieldChecksIdAddRemarksPut(
        {
          id: machineFieldCheck?.id,
          // @ts-ignore
          remarks: data.remarks,
        }
      ),

    onSuccess: () => {
      showToast("Field check remarks added successfully", "success");
      // reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["machine-field-checks", processVisor.id],
      });
    },
  });
  const onCancel = () => {
    reset();
    onClose();
  };
  const onSubmit: SubmitHandler<MachineFieldCheckUpdate> = async (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <EditFormModal
        open={open}
        onCancel={onCancel}
        onClose={onClose}
        onSubmit={handleSubmit(onSubmit)}
        isDirty={isDirty}
        isSubmitting={isSubmitting}
        title={`Add Remarks on Field Check for ${machineFieldCheck?.field_check_number}`}
      >
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
}
