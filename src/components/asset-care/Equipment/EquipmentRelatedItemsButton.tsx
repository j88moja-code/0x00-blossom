import { useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { FaEye } from "react-icons/fa";

import { Route as equipmentItemsRoute } from "../../../routes/_layout/asset-care/$equipmentId";

function NavigateToEquipmentItemsButton({
  equipmentId,
}: {
  equipmentId: number;
}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate({
      to: equipmentItemsRoute.to,
      params: {
        equipmentId: equipmentId.toString(),
      },
    });
  };

  return (
    <Button variant="default" onClick={handleNavigate}>
      <span className="flex md:hidden">View Items</span>
      <span className="flex items-center gap-2">
        <FaEye style={{ marginRight: "8px" }} />
      </span>
    </Button>
  );
}

export default NavigateToEquipmentItemsButton;
