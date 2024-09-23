// import React, { useRef } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Button,
//   MenuItem,
//   CircularProgress,
//   Box,
// } from "@mui/material";
// import {
//   useMutation,
//   useQueryClient,
//   useSuspenseQuery,
// } from "@tanstack/react-query";
// import { type SubmitHandler, useForm, Controller } from "react-hook-form";

// import {
//   type ApiError,
//   type ProductionConsumableUpdate,
//   type ProductionConsumable,
//   ProductionConsumablesService,
//   CategoryService,
// } from "../../../client";

// import Toast, { ToastHandle } from "../../common/Toast";

// interface EditConsumableModalProps {
//   open: boolean;
//   onClose: () => void;
//   consumable: ProductionConsumable;
// }

// const EditConsumableItem: React.FC<EditConsumableModalProps> = ({
//   open,
//   onClose,
//   consumable,
// }) => {
//   const { data: categories } = useSuspenseQuery({
//     queryKey: ["categories"],
//     queryFn: () => CategoryService.getAllCategoriesApiV1CategoryGet({}),
//   });
//   const toastRef = useRef<ToastHandle>(null);
//   const queryClient = useQueryClient();
//   const {
//     control,
//     handleSubmit,
//     reset,
//     formState: { isSubmitting, isDirty },
//   } = useForm<ProductionConsumableUpdate>({
//     mode: "onBlur",
//     criteriaMode: "all",
//     defaultValues: consumable,
//   });

//   const mutation = useMutation({
//     mutationFn: (data: ProductionConsumableUpdate) =>
//       ProductionConsumablesService.updateProductionConsumableApiV1ProductionConsumablesIdPut(
//         {
//           id: consumable.id,
//           requestBody: data,
//         }
//       ),
//     onSuccess: () => {
//       toastRef.current?.showToast(
//         `Consumable item updated successfully`,
//         "success"
//       );
//       onClose();
//     },
//     onError: (err: ApiError) => {
//       const errDetail = (err.body as any)?.detail;
//       toastRef.current?.showToast(
//         errDetail ?? `Something went wrong ${errDetail}`,
//         "error"
//       );
//     },
//     onSettled: () => {
//       queryClient.invalidateQueries({ queryKey: ["production-consumables"] });
//     },
//   });

//   const onSubmit: SubmitHandler<ProductionConsumableUpdate> = async (data) => {
//     mutation.mutate(data);
//   };

//   const onCancel = () => {
//     reset();
//     onClose();
//   };

//   return (
//     <>
//       <Toast ref={toastRef} />

//       <Dialog open={open} onClose={onClose} fullWidth>
//         <DialogTitle>Edit Consumable Item: {consumable.name}</DialogTitle>
//         <DialogContent>
//           <form onSubmit={handleSubmit(onSubmit)} noValidate>
//             <Box
//               sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
//             >
//               <Controller
//                 name="name"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     label="Name"
//                     variant="outlined"
//                     required
//                     fullWidth
//                     {...field}
//                   />
//                 )}
//               />
//               <Controller
//                 name="sku_number"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     label="Part Number"
//                     variant="outlined"
//                     required
//                     fullWidth
//                     {...field}
//                   />
//                 )}
//               />
//               <Controller
//                 name="quantity"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     label="Quantity"
//                     variant="outlined"
//                     required
//                     fullWidth
//                     type="number"
//                     {...field}
//                   />
//                 )}
//               />
//               <Controller
//                 name="unit_price"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     label="Unit Price"
//                     variant="outlined"
//                     required
//                     fullWidth
//                     type="number"
//                     {...field}
//                   />
//                 )}
//               />
//               <Controller
//                 name="description"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     label="Description"
//                     variant="outlined"
//                     required
//                     fullWidth
//                     {...field}
//                   />
//                 )}
//               />
//               <Controller
//                 name="category_id"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     label="Category"
//                     variant="outlined"
//                     required
//                     fullWidth
//                     select
//                     {...field}
//                   >
//                     {categories?.categories.map((category) => (
//                       <MenuItem key={category.id} value={category.id}>
//                         {category.name}
//                       </MenuItem>
//                     ))}
//                   </TextField>
//                 )}
//               />
//               <Controller
//                 name="remarks"
//                 control={control}
//                 render={({ field }) => (
//                   <TextField
//                     label="Remarks"
//                     variant="outlined"
//                     multiline
//                     rows={4}
//                     fullWidth
//                     {...field}
//                   />
//                 )}
//               />
//             </Box>
//             <DialogActions>
//               <Button onClick={onCancel} disabled={isSubmitting}>
//                 Cancel
//               </Button>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 disabled={isSubmitting || !isDirty}
//               >
//                 {isSubmitting ? <CircularProgress size={24} /> : "Save"}
//               </Button>
//             </DialogActions>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default EditConsumableItem;
