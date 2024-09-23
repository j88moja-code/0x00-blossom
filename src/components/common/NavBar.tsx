import React from "react";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { useDisclosure } from "../../hooks/useDisclosure";

import AddEquipment from "../asset-care/Equipment/AddEquipment";
import AddKanban from "../production/Kanban/AddKanban";
import AddRiskAssessment from "../sheq/RiskAssessment/AddRiskAssessment";
import AddSafetyObservation from "../sheq/AddSafetyObservation";
import AddItem from "../stores/Items/AddItem";
import AddInventory from "../stores/Inventory/AddInventory";
import AddRequisition from "../stores/Requitions/AddRequisition";
import AddRequest from "../maintenance/RequestsAndTickets/AddRequest";
import AddTicket from "../maintenance/RequestsAndTickets/AddTicket";
import AddTRA from "../maintenance/TRAandPTW/AddTRAForm";
import AddPTW from "../maintenance/TRAandPTW/AddPTWForm";
import AddMaintenanceEvent from "../asset-care/MaintenanceEvent/AddMaintenanceEvent";
import AddProductSpecification from "../production/Specification/AddSpecification";
import AddOSHA300Form from "../sheq/OSHA300/AddOSHA300Form";
import AddSHEIncidentForm from "../sheq/Incidents/AddIncidentForm";
import AddSHEInspectionForm from "../sheq/Inspections/AddSHEInspection";

interface NavbarProps {
  type: string;
  disabled?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ type, disabled }) => {
  const addRAModal = useDisclosure(false);
  const addPTWModal = useDisclosure(false);
  const addSOModal = useDisclosure(false);
  const addEquipmentModal = useDisclosure(false);
  const addMaintenanceEventModal = useDisclosure(false);
  const addRequest = useDisclosure(false);
  const addSparePartItemModal = useDisclosure(false);
  const addCMWorkOrderModal = useDisclosure(false);
  const addPMWorkOrderModal = useDisclosure(false);
  const addInventoryModal = useDisclosure(false);
  const addSpecModal = useDisclosure(false);
  const addSRRequisitionModal = useDisclosure(false);
  const addTicket = useDisclosure(false);
  const addKanbanModal = useDisclosure(false);
  const addTRA = useDisclosure(false);
  const addPTW = useDisclosure(false);
  const addIncidentModal = useDisclosure(false);
  const addInspectionModal = useDisclosure(false);
  const addOSHA300Modal = useDisclosure(false);

  const handleOpenModal = () => {
    if (type === "Risk Assessment") {
      addRAModal.open();
    } else if (type === "Safety Observation") {
      addSOModal.open();
    } else if (type === "Permit To Work") {
      addPTWModal.open();
    } else if (type === "Equipment") {
      addEquipmentModal.open();
    } else if (type === "Spare") {
      addSparePartItemModal.open();
    } else if (type === "Service Request") {
      addRequest.open();
    } else if (type === "PM Work Order") {
      addPMWorkOrderModal.open();
    } else if (type === "Inventory") {
      addInventoryModal.open();
    } else if (type === "Requisition") {
      addSRRequisitionModal.open();
    } else if (type === "Ticket") {
      addTicket.open();
    } else if (type === "Maintenance Event") {
      addMaintenanceEventModal.open();
    } else if (type === "CM Work Order") {
      addCMWorkOrderModal.open();
    } else if (type === "Product Specification") {
      addSpecModal.open();
    } else if (type === "Kanban") {
      addKanbanModal.open();
    } else if (type === "TRA") {
      addTRA.open();
    } else if (type === "PTW") {
      addPTW.open();
    } else if (type === "Incident") {
      addIncidentModal.open();
    } else if (type === "Inspection") {
      addInspectionModal.open();
    } else if (type === "OSHA 300") {
      addOSHA300Modal.open();
    }
  };

  return (
    <div className="flex space-between justify-center">
      {/* <TextField
        variant="outlined"
        placeholder="Search"
        size="small"
        sx={{ width: { xs: "100%", sm: "auto" } }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FaSearch />
            </InputAdornment>
          ),
        }}
      /> */}
      <Button variant="default" disabled={disabled} onClick={handleOpenModal}>
        <span className="flex items-center gap-2">
          <FaPlus /> Add {type}
        </span>
      </Button>
      <AddEquipment
        open={addEquipmentModal.isOpen}
        onClose={addEquipmentModal.close}
      />
      <AddKanban open={addKanbanModal.isOpen} onClose={addKanbanModal.close} />
      <AddRiskAssessment open={addRAModal.isOpen} onClose={addRAModal.close} />
      <AddSafetyObservation
        open={addSOModal.isOpen}
        onClose={addSOModal.close}
      />
      <AddRequest open={addRequest.isOpen} onClose={addRequest.close} />
      <AddInventory
        open={addInventoryModal.isOpen}
        onClose={addInventoryModal.close}
      />
      <AddItem
        open={addSparePartItemModal.isOpen}
        onClose={addSparePartItemModal.close}
      />
      <AddMaintenanceEvent
        open={addMaintenanceEventModal.isOpen}
        onClose={addMaintenanceEventModal.close}
      />
      <AddProductSpecification
        open={addSpecModal.isOpen}
        onClose={addSpecModal.close}
      />
      <AddRequisition
        open={addSRRequisitionModal.isOpen}
        onClose={addSRRequisitionModal.close}
        withRequest
      />
      <AddTicket open={addTicket.isOpen} onClose={addTicket.close} />
      <AddTRA open={addTRA.isOpen} onClose={addTRA.close} />
      <AddPTW open={addPTW.isOpen} onClose={addPTW.close} />
      <AddSHEIncidentForm
        open={addIncidentModal.isOpen}
        onClose={addIncidentModal.close}
      />
      <AddSHEInspectionForm
        open={addInspectionModal.isOpen}
        onClose={addInspectionModal.close}
      />
      <AddOSHA300Form
        open={addOSHA300Modal.isOpen}
        onClose={addOSHA300Modal.close}
      />
    </div>
  );
};

export default Navbar;
