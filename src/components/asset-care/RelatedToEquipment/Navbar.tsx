import React from "react";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { useDisclosure } from "../../../hooks/useDisclosure";

import type { EquipmentResponseModel } from "../../../client";

import AddRequest from "@/components/maintenance/RequestsAndTickets/AddRequest";

interface EquipmentRelatedItemsNavbarProps {
  equipment: EquipmentResponseModel;
  type: string;
}

const EquipmentRelatedItemsNavbar: React.FC<
  EquipmentRelatedItemsNavbarProps
  // @ts-ignore
> = ({ equipment, type }) => {
  const addRequest = useDisclosure(false);
  const addPMWorkOrderModal = useDisclosure(false);

  const handleOpenModal = () => {
    if (type === "Request") {
      addRequest.open();
    } else if (type === "PM Work Order") {
      addPMWorkOrderModal.open();
    }
  };

  return (
    <div className="flex space-between justify-center">
      <Button variant="default" onClick={handleOpenModal}>
        <FaPlus /> {type}
      </Button>
      <AddRequest open={addRequest.isOpen} onClose={addRequest.close} />
      {/* <AddPMWorkOrder
        open={addPMWorkOrderModal.isOpen}
        onClose={addPMWorkOrderModal.close}
        equipment={equipment}
        actionSource="addFromEquipmentCard"
      /> */}
    </div>
  );
};

export default EquipmentRelatedItemsNavbar;
