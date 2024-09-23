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
  type MachineDCSRelatedCheckUpdate,
  type ProcessVisorResponse,
  MCDcsChecksService,
} from "../../../../client";
import { handleError } from "@/utils";

type AddDCSRelatedChecksProps = {
  open: boolean;
  onClose: () => void;
  processVisor: ProcessVisorResponse;
};

const renderTextField = (
  label: string,
  field: keyof MachineDCSRelatedCheckUpdate,
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

function getMCDCSRelatedCheck(processVisor: ProcessVisorResponse) {
  return {
    queryKey: ["machine-dcs-checks", processVisor.id],
    queryFn: () =>
      MCDcsChecksService.readMachineDcsCheckByVisorIdApiV1McDcsChecksPcvVisorIdMcDcsCheckGet(
        {
          visorId: processVisor.id,
        }
      ),
  };
}

export function AddAFSDCSChecks({
  open,
  onClose,
  processVisor,
}: AddDCSRelatedChecksProps) {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const { data: machineDCSRelatedCheck } = useSuspenseQuery({
    ...getMCDCSRelatedCheck(processVisor),
  });
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<MachineDCSRelatedCheckUpdate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: machineDCSRelatedCheck,
  });

  const mutation = useMutation({
    mutationFn: (data: MachineDCSRelatedCheckUpdate) =>
      MCDcsChecksService.updateMachineDcsCheckAfsApiV1McDcsChecksIdAfsDcsPut({
        id: machineDCSRelatedCheck?.id,
        requestBody: data,
      }),

    onSuccess: () => {
      showToast("Machine DCS related check updated successfully", "success");
      reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["machine-dcs-checks", processVisor.id],
      });
    },
  });

  const onCancel = () => {
    reset();
    onClose();
  };

  const onSubmit: SubmitHandler<MachineDCSRelatedCheckUpdate> = async (
    data
  ) => {
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
        title={`Add Approach Flow DCS Checks for ${machineDCSRelatedCheck?.dcs_related_check_number}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {renderTextField(
            "Cold water tank level",
            "fresh_cold_water_tank_level",
            register,
            errors,
            true
          )}

          {renderTextField(
            "MC Chest 2 Consistency",
            "machine_chest2_consistency",
            register,
            errors,
            true
          )}

          {renderTextField(
            "Stock Flow Valve Position",
            "stock_flow_valve_opening",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Stock Flow Flow Rate",
            "stock_flow",
            register,
            errors,
            true
          )}
          <Controller
            control={control}
            name="ww1_makeup_open"
            render={({ field }) => (
              // @ts-ignore
              <BooleanToggle
                {...field}
                label="WW1 Makeup Open?"
                onChange={field.onChange}
              />
            )}
          />
          {renderTextField(
            "Fan Pump Motor Speed",
            "fan_pump_motor_speed",
            register,
            errors,
            true
          )}

          {renderTextField(
            "Fan Pump Motor Current Load",
            "fan_pump_motor_current_load",
            register,
            errors,
            true
          )}
        </div>
      </EditFormModal>
    </>
  );
}

export function AddCFSDCSChecks({
  open,
  onClose,
  processVisor,
}: AddDCSRelatedChecksProps) {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const { data: machineDCSRelatedCheck } = useSuspenseQuery({
    ...getMCDCSRelatedCheck(processVisor),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<MachineDCSRelatedCheckUpdate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: machineDCSRelatedCheck,
  });

  const mutation = useMutation({
    mutationFn: (data: MachineDCSRelatedCheckUpdate) =>
      MCDcsChecksService.updateMachineCfsApiV1McDcsChecksIdCfsDcsPut({
        id: machineDCSRelatedCheck?.id,
        requestBody: data,
      }),

    onSuccess: () => {
      showToast("Machine DCS related check updated successfully", "success");
      // reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["machine-dcs-checks", processVisor.id],
      });
    },
  });

  const onCancel = () => {
    reset();
    onClose();
  };

  const onSubmit: SubmitHandler<MachineDCSRelatedCheckUpdate> = async (
    data
  ) => {
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
        title={`Add Crescent Former Section DCS Checks for ${machineDCSRelatedCheck?.dcs_related_check_number}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {renderTextField(
            "Slice Opening Position",
            "slice_opening",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Jet-to-Wire Ratio",
            "jet_to_wire_ratio",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Headbox Pressure",
            "headbox_pressure",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Trim Nozzle Pressure",
            "trim_nozzle_pressure",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Uhle Box Guage Pressure",
            "uhle_box_pressure",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Suction Press DS Below Air Pressure",
            "spr_ds_air_pressure",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Suction Press NDS Below Air Pressure",
            "spr_nds_air_pressure",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Suction Press DS Nip Loading",
            "spr_ds_nip_loading",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Suction Press NDS Nip Loading",
            "spr_nds_nip_loading",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Second Press DS Below Air Pressure",
            "second_press_ds_air_pressure",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Second Press NDS Below Air Pressure",
            "second_press_nds_air_pressure",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Second Press DS Nip Loading",
            "second_press_ds_nip_loading",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Second Press NDS Nip Loading",
            "second_press_nds_nip_loading",
            register,
            errors,
            true
          )}
        </div>
      </EditFormModal>
    </>
  );
}

export function AddDESDCSChecks({
  open,
  onClose,
  processVisor,
}: AddDCSRelatedChecksProps) {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const { data: machineDCSRelatedCheck } = useSuspenseQuery({
    ...getMCDCSRelatedCheck(processVisor),
  });
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<MachineDCSRelatedCheckUpdate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: machineDCSRelatedCheck,
  });

  const mutation = useMutation({
    mutationFn: (data: MachineDCSRelatedCheckUpdate) =>
      MCDcsChecksService.updateMachineDesDcsApiV1McDcsChecksIdDesDcsPut({
        id: machineDCSRelatedCheck?.id,
        requestBody: data,
      }),

    onSuccess: () => {
      showToast("Machine DCS related check updated successfully", "success");
      // reset();
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["machine-dcs-checks", processVisor.id],
      });
    },
  });

  const onCancel = () => {
    reset();
    onClose();
  };

  const onSubmit: SubmitHandler<MachineDCSRelatedCheckUpdate> = async (
    data
  ) => {
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
        title={`Add Dry End Section DCS Checks for ${machineDCSRelatedCheck?.dcs_related_check_number}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {renderTextField(
            "Main Steam Pressure",
            "main_steam_pressure",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Yankee Steam Pressure",
            "yankee_steam_pressure",
            register,
            errors,
            true
          )}
          {renderTextField("Yankee DP", "yankee_dp", register, errors, true)}
          {renderTextField(
            "Blow Through Steam Pressure",
            "blow_through_steam_pressure",
            register,
            errors,
            true
          )}
          <Controller
            control={control}
            name="blow_through_steam_pressure"
            render={({ field }) => (
              // @ts-ignore
              <BooleanToggle
                label="Blow Through Steam Pressure?"
                {...field}
                onChange={field.onChange}
              />
            )}
          />
          {renderTextField(
            "Steambox Pressure",
            "steambox_pressure",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Steambox Temperature",
            "steambox_temperature",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Sprayboom Pressure",
            "sprayboom_pressure",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Mixing Pot Temperature",
            "mixing_pot_temperature",
            register,
            errors,
            true
          )}
          {renderTextField(
            "DE Hood Temperature",
            "de_hood_temperature",
            register,
            errors,
            true
          )}
          {renderTextField(
            "WE Hood Temperature",
            "we_hood_temperature",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Hoods Exhaust Humidity",
            "hoods_exhaust_humidity",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Hoods Exhaust Air Temperature",
            "hoods_exhaust_air_temperature",
            register,
            errors,
            true
          )}
          {renderTextField(
            "Average QCS Moisture",
            "average_qcs_moisture",
            register,
            errors,
            true
          )}
        </div>
      </EditFormModal>
    </>
  );
}

export function AddRemarksOnDCSRelatedChecks({
  open,
  onClose,
  processVisor,
}: AddDCSRelatedChecksProps) {
  const showToast = useToastStore((state) => state.showToast);
  const queryClient = useQueryClient();
  const { data: machineDCSRelatedCheck } = useSuspenseQuery({
    ...getMCDCSRelatedCheck(processVisor),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors, isDirty },
  } = useForm<MachineDCSRelatedCheckUpdate>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: machineDCSRelatedCheck,
  });

  const mutation = useMutation({
    mutationFn: (data: MachineDCSRelatedCheckUpdate) =>
      MCDcsChecksService.addRemarksApiV1McDcsChecksIdAddRemarksPut({
        id: machineDCSRelatedCheck?.id,
        // @ts-ignore
        remarks: data.remarks,
      }),

    onSuccess: () => {
      showToast("Machine DCS related check updated successfully", "success");
      onClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["machine-dcs-checks", processVisor.id],
      });
    },
  });
  const onCancel = () => {
    reset();
    onClose();
  };
  const onSubmit: SubmitHandler<MachineDCSRelatedCheckUpdate> = async (
    data
  ) => {
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
        title={`Add Remarks on Field Check for ${machineDCSRelatedCheck?.dcs_related_check_number}`}
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
