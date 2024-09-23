import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  MdCheckCircle,
  MdCancel,
  MdSpeed,
  MdOutlineSpeed,
} from "react-icons/md";
import { GiWeight } from "react-icons/gi";
import {
  FaPlus,
  FaComment,
  FaHourglassEnd,
  FaHourglassStart,
} from "react-icons/fa";

import LoggerActionsMenu from "./LoggerActionsMenu";
import AddQCTestForReel from "./QCTests/AddQCTestForReel";
import CustomDialog from "../../common/CustomDialog";
import CustomCard from "../../common/CustomCard";
import { useDisclosure } from "../../../hooks/useDisclosure";
import type { ReelRead, ProductionLog } from "../../../client";

interface ReelCardProps {
  reel: ReelRead;
  log: ProductionLog;
  // displayedAt: "indivual-reel" | "reels-list";
}

const ReelCard = ({ reel, log }: ReelCardProps) => {
  const addQCTestResultsModal = useDisclosure(false);

  const handleOpenModal = () => {
    addQCTestResultsModal.open();
  };

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <CustomCard>
        <div className="flex justify-between gap-4">
          <div>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {reel.reel_number}
            </h4>
          </div>
          <div className="flex mr-8 gap-4">
            <LoggerActionsMenu
              type="Reel"
              // @ts-ignore
              value={reel as ReelRead}
              log={log as ProductionLog}
            />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 m-2">
          <div className="col-span-3">
            Product Spec. ID: {reel.specification_id}
          </div>
          <div className="col-span-3">
            Status:{" "}
            {reel.is_saleable ? (
              <MdCheckCircle className="text-green-500" />
            ) : (
              <MdCancel className="text-red-500" />
            )}
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 m-2">
          <div className="col-span-3">
            <p className="text-sm text-muted-foreground">
              Grammage: {reel.grammage} g/m2
            </p>
          </div>
          <div className="col-span-3">
            <p className="text-sm text-muted-foreground">
              Deckle: {reel.deckle} mm
            </p>
          </div>
          <div className="col-span-3">
            <p className="text-sm text-muted-foreground">
              <MdSpeed style={{ marginRight: "8px" }} />
              Machine Speed: {reel.machine_speed} m/min
            </p>
          </div>
          <div className="col-span-3">
            <p className="text-sm text-muted-foreground">
              <MdOutlineSpeed style={{ marginRight: "8px" }} />
              Pope Speed: {reel.pope_speed} m/min
            </p>
          </div>
        </div>
        <div className="grid grid-cols-9 gap-4 m-2">
          <div className="col-span-3">
            <p className="text-sm text-muted-foreground">
              <GiWeight style={{ marginRight: "8px" }} />
              Weight: {reel.weight} kg
            </p>
          </div>
          <div className="col-span-3">
            <p className="text-sm text-muted-foreground">
              <FaHourglassStart style={{ marginRight: "8px" }} />
              Start Time: {new Date(reel.start_time).toLocaleString("en-ZA")}
            </p>
          </div>
          <div className="col-span-3">
            <p className="text-sm text-muted-foreground">
              <FaHourglassEnd style={{ marginRight: "8px" }} />
              End Time: {new Date(reel.end_time).toLocaleString("en-ZA")}
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            <FaComment style={{ marginRight: "8px" }} />
            Remark(s): {reel.remark ? reel.remark : "N/A"}
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            variant="default"
            onClick={() => {
              setOpenDialog(true);
            }}
          >
            <FaPlus /> Add QCT Result
          </Button>
        </div>
      </CustomCard>
      <CustomDialog
        open={openDialog}
        title="Add QC Test Result"
        content={`Have you finished ALL REQUIRED QC tests for ${reel.reel_number} and ready to record results?`}
        onClose={() => setOpenDialog(false)}
        onConfirm={handleOpenModal}
      />
      <AddQCTestForReel
        open={addQCTestResultsModal.isOpen}
        onClose={addQCTestResultsModal.close}
        reel={reel as ReelRead}
      />
    </>
  );
};

export default ReelCard;
