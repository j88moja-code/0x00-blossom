import { useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { FaEye } from "react-icons/fa";

import { Route as maintenanceEventRoute } from "../../../routes/_layout/maintenance/$eventId";

function NavigateToMaintenanceEventButton({ eventId }: { eventId: number }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate({
      to: maintenanceEventRoute.to,
      params: {
        eventId: eventId.toString(),
      },
    });
  };

  return (
    <Button variant="default" onClick={handleNavigate}>
      <span className="flex md:hidden">Manage Event</span>
      <span className="flex items-center gap-2">
        <FaEye style={{ marginRight: "8px" }} />
      </span>
    </Button>
  );
}

export default NavigateToMaintenanceEventButton;
