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
//   type ProductionConsumableCreate,
//   ProductionConsumablesService,
//   CategoryService,
// } from "../../../client";

// import Toast, { ToastHandle } from "../../common/Toast";

// interface AddConsumableModalProps {
//   open: boolean;
//   onClose: () => void;
// }

// const AddConsumable: React.FC<AddConsumableModalProps> = ({
//   open,
//   onClose,
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
//     formState: { isSubmitting },
//   } = useForm<ProductionConsumableCreate>({
//     mode: "onBlur",
//     criteriaMode: "all",
//     defaultValues: {
//       name: "",
//       sku_number: "",
//       quantity: 0,
//       unit_price: 0,
//       description: "",
//       category_id: 0,
//       remarks: "" || null,
//       is_active: true,
//     },
//   });

//   const mutation = useMutation({
//     mutationFn: (data: ProductionConsumableCreate) =>
//       ProductionConsumablesService.createProductionConsumableApiV1ProductionConsumablesPost(
//         {
//           requestBody: data,
//         }
//       ),
//     onSuccess: () => {
//       toastRef.current?.showToast(
//         `Production consumable item created successfully`,
//         "success"
//       );
//       reset();
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

//   const onSubmit: SubmitHandler<ProductionConsumableCreate> = (data) => {
//     mutation.mutate(data);
//   };

//   return (
//     <>
//       <Toast ref={toastRef} />
//       <Dialog open={open} onClose={onClose} fullWidth>
//         <DialogTitle>Add Production Consumable Item</DialogTitle>
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
//                     label="Consumable Number"
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
//               <Button onClick={onClose} disabled={isSubmitting}>
//                 Cancel
//               </Button>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? <CircularProgress size={24} /> : "Submit"}
//               </Button>
//             </DialogActions>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default AddConsumable;
