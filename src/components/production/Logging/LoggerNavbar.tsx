import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";

import { useDisclosure } from "../../../hooks/useDisclosure";
import type { ProductionLog } from "../../../client";

import AddReelToProductionLog from "./AddReelToProdLog";
import AddDowntimeToProductionLog from "./AddDowntimeToProdLog";
import AddStockPrepDowntimeToProductionLog from "./AddStockPrepDowntimeToProdLog";

interface LoggerNavbarProps {
  productionLog: ProductionLog;
  type: string;
  disabled?: boolean;
}

const LoggerNavbar: React.FC<LoggerNavbarProps> = ({
  productionLog,
  type,
  disabled,
}) => {
  const addReelModal = useDisclosure(false);
  const addDowntimeModal = useDisclosure(false);
  const addStockPrepDowntimeModal = useDisclosure(false);

  const handleOpenModal = () => {
    if (type === "Reel") {
      addReelModal.open();
    } else if (type === "Downtime") {
      addDowntimeModal.open();
    } else if (type === "Stock Prep Downtime") {
      addStockPrepDowntimeModal.open();
    }
  };

  return (
    <div className="flex space-between justify-center">
      <Button variant="default" onClick={handleOpenModal} disabled={disabled}>
        <span className="flex items-center gap-2">
          <FaPlus /> Add {type}
        </span>
      </Button>
      <AddReelToProductionLog
        open={addReelModal.isOpen}
        onClose={addReelModal.close}
        productionLog={productionLog}
      />
      <AddDowntimeToProductionLog
        open={addDowntimeModal.isOpen}
        onClose={addDowntimeModal.close}
        log={productionLog}
      />
      <AddStockPrepDowntimeToProductionLog
        open={addStockPrepDowntimeModal.isOpen}
        onClose={addStockPrepDowntimeModal.close}
        log={productionLog}
      />
    </div>
  );
};

export default LoggerNavbar;
