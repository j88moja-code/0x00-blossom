// import React from "react";
// import { Button } from "@/components/ui/button";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import { MdMoreVert, MdDelete } from "react-icons/md";
// import { FaEdit } from "react-icons/fa";

// // Forms imports
// import EditSpare from "../../stores/Items/EditItem";
// import EditServiceRequest from "../ServiceRequest/EditServiceRequest";
// // Types imports
// import type {
//   MTBFResponseModel,
//   ServiceRequestResponseModel,
//   SpareResponseModel,
// } from "../../../client";

// interface ActionsMenuProps {
//   type: string;
//   value: MTBFResponseModel | ServiceRequestResponseModel | SpareResponseModel;
//   disabled?: boolean;
// }

// const ActionsMenu: React.FC<ActionsMenuProps> = ({ type, value, disabled }) => {
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const [editOpen, setEditOpen] = React.useState(false);
//   const [deleteOpen, setDeleteOpen] = React.useState(false);

//   const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleEditOpen = () => {
//     setEditOpen(true);
//     handleMenuClose();
//   };

//   const handleEditClose = () => {
//     setEditOpen(false);
//   };

//   const handleDeleteOpen = () => {
//     setDeleteOpen(true);
//     handleMenuClose();
//   };

//   const handleDeleteClose = () => {
//     setDeleteOpen(false);
//   };

//   const renderEditComponent = () => {
//     switch (type) {
//       case "Spare":
//         return (
//           <EditSpare
//             open={editOpen}
//             onClose={handleEditClose}
//             spare={value as SpareResponseModel}
//           />
//         );
//       case "Service Request":
//         return (
//           <EditServiceRequest
//             open={editOpen}
//             onClose={handleEditClose}
//             service_request_data={value as ServiceRequestResponseModel}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <IconButton
//         aria-controls="action-menu"
//         aria-haspopup="true"
//         onClick={handleMenuOpen}
//         disabled={disabled}
//       >
//         <MdMoreVert />
//       </IconButton>
//       <Menu
//         id="action-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleMenuClose}
//       >
//         <MenuItem onClick={handleEditOpen}>
//           <FaEdit fontSize="small" /> Edit {type}
//         </MenuItem>
//         <MenuItem onClick={handleDeleteOpen}>
//           <MdDelete fontSize="small" style={{ color: "red" }} /> Delete {type}
//         </MenuItem>
//       </Menu>
//       {renderEditComponent()}
//       <Dialog open={deleteOpen} onClose={handleDeleteClose} fullWidth>
//         <DialogTitle>Confirm Delete</DialogTitle>
//         <DialogContent>
//           Are you sure you want to delete this {type}?
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleDeleteClose}>Cancel</Button>
//           <Button onClick={handleDeleteClose} color="secondary">
//             Delete
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default ActionsMenu;
