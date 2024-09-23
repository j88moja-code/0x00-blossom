import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";

import { useDisclosure } from "../../../hooks/useDisclosure";
import AddProcessTests from "../LabTests/AddProcessTests";
import AddWaterTests from "../LabTests/AddWaterTests";
import {
  AddAFSDCSChecks,
  AddCFSDCSChecks,
  AddDESDCSChecks,
  AddRemarksOnDCSRelatedChecks,
} from "../MachineChecks/DCS/AddDCSRelatedChecks";
import {
  AddDESectionChecks,
  AddForCrescentFormer,
  AddHousekeepingChecks,
  AddRemarksOnFieldChecks,
} from "../MachineChecks/Field/AddFieldChecks";
import type { ProcessVisor } from "../../../client";

interface PVNavbarProps {
  processVisor: ProcessVisor;
  type: string;
  disabled?: boolean;
}

const PVNavbar: React.FC<PVNavbarProps> = ({
  processVisor,
  type,
  disabled,
}: PVNavbarProps) => {
  const addAFSDCSCModal = useDisclosure();
  const addCFSDCSCModal = useDisclosure();
  const addDESDCSCModal = useDisclosure();
  const addRemarksOnDCSRelatedChecksModal = useDisclosure();
  const addDESectionChecksModal = useDisclosure();
  const addForCrescentFormerModal = useDisclosure();
  const addHousekeepingChecksModal = useDisclosure();
  const addRemarksOnFieldChecksModal = useDisclosure();
  const addProcessTestsModal = useDisclosure();
  const addWaterTestsModal = useDisclosure();

  const handleOpenModal = () => {
    if (type === "M/c AFS DCS Check") {
      addAFSDCSCModal.open();
    } else if (type === "M/c CFS DCS Check") {
      addCFSDCSCModal.open();
    } else if (type === "M/c DES DCS Check") {
      addDESDCSCModal.open();
    } else if (type === "Remarks on DCS Related Checks") {
      addRemarksOnDCSRelatedChecksModal.open();
    } else if (type === "DE Section Checks") {
      addDESectionChecksModal.open();
    } else if (type === "CF Section Field Checks") {
      addForCrescentFormerModal.open();
    } else if (type === "Housekeeping Checks") {
      addHousekeepingChecksModal.open();
    } else if (type === "Remarks on Field Checks") {
      addRemarksOnFieldChecksModal.open();
    } else if (type === "Process Tests") {
      addProcessTestsModal.open();
    } else if (type === "Water Tests") {
      addWaterTestsModal.open();
    }
  };

  return (
    <div className="flex space-between justify-center">
      <Button variant="default" disabled={disabled} onClick={handleOpenModal}>
        <span className="flex items-center gap-2">
          <FaPlus /> Add {type}
        </span>
      </Button>

      <AddAFSDCSChecks
        open={addAFSDCSCModal.isOpen}
        onClose={addAFSDCSCModal.close}
        processVisor={processVisor}
      />
      <AddCFSDCSChecks
        open={addCFSDCSCModal.isOpen}
        onClose={addCFSDCSCModal.close}
        processVisor={processVisor}
      />
      <AddDESDCSChecks
        open={addDESDCSCModal.isOpen}
        onClose={addDESDCSCModal.close}
        processVisor={processVisor}
      />
      <AddRemarksOnDCSRelatedChecks
        open={addRemarksOnDCSRelatedChecksModal.isOpen}
        onClose={addRemarksOnDCSRelatedChecksModal.close}
        processVisor={processVisor}
      />
      <AddDESectionChecks
        open={addDESectionChecksModal.isOpen}
        onClose={addDESectionChecksModal.close}
        processVisor={processVisor}
      />
      <AddForCrescentFormer
        open={addForCrescentFormerModal.isOpen}
        onClose={addForCrescentFormerModal.close}
        processVisor={processVisor}
      />
      <AddHousekeepingChecks
        open={addHousekeepingChecksModal.isOpen}
        onClose={addHousekeepingChecksModal.close}
        processVisor={processVisor}
      />
      <AddRemarksOnFieldChecks
        open={addRemarksOnFieldChecksModal.isOpen}
        onClose={addRemarksOnFieldChecksModal.close}
        processVisor={processVisor}
      />
      <AddProcessTests
        open={addProcessTestsModal.isOpen}
        onClose={addProcessTestsModal.close}
        processVisor={processVisor}
      />
      <AddWaterTests
        open={addWaterTestsModal.isOpen}
        onClose={addWaterTestsModal.close}
        processVisor={processVisor}
      />
    </div>
  );
};

export default PVNavbar;
