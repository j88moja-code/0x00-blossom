import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { MdMoreVert, MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

// Forms imports
import EditRequest from "../maintenance/RequestsAndTickets/EditRequest";
import EditTicket from "../maintenance/RequestsAndTickets/EditTicket";
import EditEquipment from "../asset-care/Equipment/EditEquipment";
import EditKanban from "../production/Kanban/EditKanban";
import EditTRA from "../maintenance/TRAandPTW/EditTRAForm";
import EditSafetyObservation from "../sheq/EditSafetyObservation";
import EditProductSpecification from "../production/Specification/EditSpecification";
import EditProductionLog from "../production/Logging/EditProdLog";
import EditSHEIncidentForm from "../sheq/Incidents/EditIncidentForm";
import EditOSHA300Form from "../sheq/OSHA300/EditOSHA300Forn";
import EditSHEInspectionForm from "../sheq/Inspections/EditSHEInspection";
import EditRiskAssessment from "../sheq/RiskAssessment/EditRiskAssessment";

// Types imports
import type {
  ConfinedSpacePermitRead,
  ElectricalIsolationPermitRead,
  EquipmentResponseModel,
  InventoryRead,
  HotWorkPermitRead,
  RiggingAndLiftingPermitRead,
  WorkAtHeightPermitRead,
  SafetyObservationResponseModel,
  ItemRead,
  RiskAssessmentResponseModel,
  MaintenancePTWRead,
  MaintenanceRequestRead,
  MaintenanceTicketRead,
  ProductSpecification,
  ProductionKanban,
  ProductionLog,
  MaintenanceTRARead,
  SHEIncidentRead,
  SHEQInspectionRead,
  OSHA300LogRead,
} from "../../client";
import { Button } from "../ui/button";

interface ActionsMenuProps {
  type: string;
  value:
    | ConfinedSpacePermitRead
    | ElectricalIsolationPermitRead
    | EquipmentResponseModel
    | InventoryRead
    | HotWorkPermitRead
    | RiggingAndLiftingPermitRead
    | WorkAtHeightPermitRead
    | MaintenancePTWRead
    | MaintenanceTRARead
    | MaintenanceRequestRead
    | MaintenanceTicketRead
    | RiskAssessmentResponseModel
    | ItemRead
    | ProductSpecification
    | ProductionKanban
    | ProductionLog
    | SafetyObservationResponseModel
    | SHEIncidentRead
    | SHEQInspectionRead
    | OSHA300LogRead;
  disabled?: boolean;
}

const ActionsMenu: React.FC<ActionsMenuProps> = ({ type, value, disabled }) => {
  // @ts-ignore
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [editOpen, setEditOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEditOpen = () => {
    setEditOpen(true);
    handleMenuClose();
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleDeleteOpen = () => {
    setDeleteOpen(true);
    handleMenuClose();
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const renderEditComponent = () => {
    switch (type) {
      case "Equipment":
        return (
          <EditEquipment
            open={editOpen}
            onClose={handleEditClose}
            equipment={value as EquipmentResponseModel}
          />
        );
      case "Request":
        return (
          <EditRequest
            open={editOpen}
            onClose={handleEditClose}
            request={value as MaintenanceRequestRead}
          />
        );
      case "Ticket":
        return (
          <EditTicket
            open={editOpen}
            onClose={handleEditClose}
            ticket={value as MaintenanceTicketRead}
          />
        );
      // case "Inventory":
      //   return (
      //     <AddQuantityToSparePart
      //       open={editOpen}
      //       onClose={handleEditClose}
      //       inventory={value as InventoryResponseModel}
      //     />
      //   );
      case "Safety Observation":
        return (
          <EditSafetyObservation
            open={editOpen}
            onClose={handleEditClose}
            observation={value as SafetyObservationResponseModel}
          />
        );
      case "TRA":
        return (
          <EditTRA
            open={editOpen}
            onClose={handleEditClose}
            tra={value as MaintenanceTRARead}
          />
        );
      case "Product Specification":
        return (
          <EditProductSpecification
            open={editOpen}
            onClose={handleEditClose}
            spec={value as ProductSpecification}
          />
        );
      // case "Permit To Work":
      //   return (
      //     <EditPermitToWork
      //       open={editOpen}
      //       onClose={handleEditClose}
      //       permit={value as PermitToWorkResponseModel}
      //     />
      //   );
      // case "Confined Space Permit":
      //   return (
      //     <EditConfinedSpaceToPTW
      //       open={editOpen}
      //       onClose={handleEditClose}
      //       confinedSpacePermit={value as ConfinedSpacePermitResponseModel}
      //     />
      //   );
      // case "Electrical Isolation Permit":
      //   return (
      //     <EditElectricalIsolationToPTW
      //       open={editOpen}
      //       onClose={handleEditClose}
      //       permit={value as ElectricalIsolationPermitResponseModel}
      //     />
      //   );
      // case "Hot Work Permit":
      //   return (
      //     <EditHotWorkPermit
      //       open={editOpen}
      //       onClose={handleEditClose}
      //       permit={value as HotWorkPermitResponseModel}
      //     />
      //   );
      // case "Rigging And Lifting Permit":
      //   return (
      //     <EditRiggingAndLiftingPermit
      //       open={editOpen}
      //       onClose={handleEditClose}
      //       permit={value as RiggingAndLiftingPermitResponseModel}
      //     />
      //   );
      // case "Working At Height Permit":
      //   return (
      //     <EditWorkingAtHeighPermit
      //       open={editOpen}
      //       onClose={handleEditClose}
      //       permit={value as WorkingAtHeightPermitResponseModel}
      //     />
      //   );
      // case "Spare":
      //   return (
      //     <EditItem
      //       open={editOpen}
      //       onClose={handleEditClose}
      //       spare={value as SpareResponseModel}
      //     />
      //   );
      case "Production Kanban":
        return (
          <EditKanban
            open={editOpen}
            onClose={handleEditClose}
            kanban={value as ProductionKanban}
          />
        );
      case "Production Log":
        return (
          <EditProductionLog
            open={editOpen}
            onClose={handleEditClose}
            log={value as ProductionLog}
          />
        );

      case "Production Specification":
        return (
          <EditProductSpecification
            open={editOpen}
            onClose={handleEditClose}
            spec={value as ProductSpecification}
          />
        );

      case "SHE Incident":
        return (
          <EditSHEIncidentForm
            open={editOpen}
            onClose={handleEditClose}
            log={value as SHEIncidentRead}
          />
        );
      case "SHE Inspection":
        return (
          <EditSHEInspectionForm
            open={editOpen}
            onClose={handleEditClose}
            inspection={value as SHEQInspectionRead}
          />
        );
      case "OSHA 300":
        return (
          <EditOSHA300Form
            open={editOpen}
            onClose={handleEditClose}
            log={value as OSHA300LogRead}
          />
        );
      case "Risk Assessment":
        return (
          <EditRiskAssessment
            open={editOpen}
            onClose={handleEditClose}
            assessment={value as RiskAssessmentResponseModel}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Menubar>
        <MenubarMenu>
          <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <MenubarTrigger onClick={handleMenuOpen} disabled={disabled}>
                  <MdMoreVert size={16} />
                </MenubarTrigger>
              </TooltipTrigger>
              <TooltipContent side="bottom">Actions Menu</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <MenubarContent>
            <MenubarItem
              onClick={() => {
                handleEditOpen();
              }}
              disabled={disabled}
              className="flex items-center gap-2"
            >
              <span className="flex items-center gap-2">
                <FaEdit size={14} /> Edit
              </span>
            </MenubarItem>
            <MenubarSeparator />

            <MenubarItem
              onClick={() => {
                handleDeleteOpen();
              }}
              disabled={disabled}
              className="flex items-center gap-2"
            >
              <span className="flex items-center gap-2">
                <MdDelete size={14} style={{ color: "red" }} />
                Delete
              </span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      {renderEditComponent()}

      <Dialog open={deleteOpen} onOpenChange={handleDeleteClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Are you sure you want to delete this {type}?
          </DialogDescription>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                handleDeleteClose();
              }}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                handleDeleteClose();
              }}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ActionsMenu;
