// import { useRef } from "react";
// import TextField from "@mui/material/TextField";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { type SubmitHandler, useForm, Controller } from "react-hook-form";

// import {
//   type ApiError,
//   type InventoryUpdate,
//   type InventoryRead,
//   StoresService,
// } from "../../../client";

// import Toast, { ToastHandle } from "../../common/Toast";
// import EditFormModal from "../../common/EditFormModal";

// interface AddQuantityToSparePartProps {
//   open: boolean;
//   onClose: () => void;
//   inventory: InventoryRead;
// }

// const AddQuantityToSparePart = ({
//   open,
//   onClose,
//   inventory,
// }: AddQuantityToSparePartProps) => {
//   const toastRef = useRef<ToastHandle>(null);
//   const queryClient = useQueryClient();

//   const {
//     handleSubmit,
//     control,
//     reset,
//     formState: { errors, isSubmitting, isDirty },
//   } = useForm<InventoryUpdate>({
//     mode: "onBlur",
//     criteriaMode: "all",
//     defaultValues: inventory,
//   });

//   const mutation = useMutation({
//     mutationFn: (data: InventoryUpdate) =>
//       StoresService.addItemToInventoryApiV1StoresAddItemInventoryIdPatch({
//         id: inventory.id,
//         quantity: data.quantity,
//       }),
//     onSuccess: () => {
//       toastRef.current?.showToast(`Inventory updated successfully`, "success");
//       onClose();
//     },
//     onError: (err: ApiError) => {
//       const errDetail = (err.body as any)?.detail;
//       toastRef.current?.showToast(errDetail ?? `Something went wrong`, "error");
//     },
//     onSettled: () => {
//       queryClient.invalidateQueries({ queryKey: ["inventory"] });
//     },
//   });

//   const onSubmit: SubmitHandler<InventoryUpdate> = async (data) => {
//     mutation.mutate(data);
//   };

//   const onCancel = () => {
//     reset();
//     onClose();
//   };

//   return (
//     <>
//       <Toast ref={toastRef} />
//       <EditFormModal
//         open={open}
//         onClose={onClose}
//         onCancel={onCancel}
//         title="Add Quantity"
//         onSubmit={handleSubmit(onSubmit)}
//         isDirty={isDirty}
//         isSubmitting={isSubmitting}
//       >
//         <Controller
//           name="spare_id"
//           control={control}
//           render={({ field }) => (
//             <TextField
//               {...field}
//               label="Spare Part"
//               error={Boolean(errors.spare_id)}
//               helperText={errors.spare_id?.message}
//               disabled
//             />
//           )}
//         />
//         <Controller
//           name="quantity"
//           control={control}
//           rules={{ required: "Quantity is required" }}
//           render={({ field }) => (
//             <TextField
//               {...field}
//               type="number"
//               label="Quantity"
//               error={Boolean(errors.quantity)}
//               helperText={errors.quantity?.message}
//             />
//           )}
//         />
//         {/* <Controller
//               name="reorder_level"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   type="number"
//                   label="Reorder Level"
//                   disabled
//                   error={Boolean(errors.reorder_level)}
//                   helperText={errors.reorder_level?.message}
//                 />
//               )}
//             />
//             <Controller
//               name="reorder_quantity"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   type="number"
//                   label="Reorder Quantity"
//                   error={Boolean(errors.reorder_quantity)}
//                   helperText={errors.reorder_quantity?.message}
//                 />
//               )}
//             /> */}
//       </EditFormModal>
//     </>
//   );
// };

// export default AddQuantityToSparePart;
