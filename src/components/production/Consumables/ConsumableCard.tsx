// import React from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Grid,
//   Box,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import {
//   MdDateRange,
//   MdDescription,
//   MdOutlineCategory,
//   MdOutlineInventory,
// } from "react-icons/md";
// import { FaComments } from "react-icons/fa";

// import ActionsMenu from "../../common/ActionsMenu";
// import type { ProductionConsumable } from "../../../client";

// interface ItemCardProps {
//   item: ProductionConsumable;
// }

// const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Card elevation={3} sx={{ mb: 2, borderRadius: 2, overflow: "hidden" }}>
//       <CardContent>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={8}>
//             <Typography variant="h6">{item.sku_number}</Typography>
//             <Typography variant="body2" color="textSecondary">
//               {item.name}
//             </Typography>

//             <Box
//               display="flex"
//               alignItems="center"
//               mt={1}
//               color="text.secondary"
//             >
//               <MdDescription style={{ marginRight: "8px" }} />
//               <Typography>{item.description}</Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Box
//               display="flex"
//               justifyContent={{ xs: "flex-start", sm: "flex-end" }}
//               alignItems="center"
//               height="100%"
//             >
//               {/* <ActionsMenu type="item" value={item} /> */}
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Box
//               display="flex"
//               justifyContent={{ xs: "flex-start", sm: "flex-end" }}
//               alignItems="center"
//               color={item.quantity > 0 ? "text.primary" : "error.main"}
//             >
//               <MdOutlineInventory style={{ marginRight: "8px" }} />
//               <Typography variant="h6">
//                 {item.quantity > 0 ? item.quantity : "Out of Stock"}
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Box
//               display="flex"
//               justifyContent={{ xs: "flex-start", sm: "flex-end" }}
//               alignItems="center"
//               color={item.is_active ? "success.main" : "error.main"}
//             >
//               <Typography variant="body2">
//                 Status: {item.is_active ? "Active" : "Inactive"}
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Box
//               display="flex"
//               justifyContent={{ xs: "flex-start", sm: "flex-end" }}
//               alignItems="center"
//               color="text.secondary"
//             >
//               <MdOutlineCategory style={{ marginRight: "8px" }} />
//               <Typography variant="body2">
//                 Category: {item.category?.name}
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12}>
//             <Box
//               display="flex"
//               justifyContent="flex-start"
//               alignItems="center"
//               color="text.secondary"
//             >
//               <FaComments style={{ marginRight: "8px" }} />
//               <Typography variant="body2">
//                 {item.remarks || "No comments"}
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };

// export default ItemCard;
