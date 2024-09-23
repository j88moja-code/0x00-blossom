import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  MdDescription,
  MdCategory,
  MdLocationOn,
  MdOutlineWarning,
} from "react-icons/md";
import { GiFactory } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";
import { FcMediumPriority } from "react-icons/fc";
// import { IoIosInformationCircle } from "react-icons/io";

import ActionsMenu from "../../common/ActionsMenu";
import CustomCard from "../../common/CustomCard";
import type { EquipmentResponseModel } from "../../../client";
import NavigateToEquipmentItemsButton from "./EquipmentRelatedItemsButton";

interface EquipmentCardProps {
  equipment: EquipmentResponseModel;
  // equipmentInDB: EquipmentInDB;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({ equipment }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <CustomCard>
        <div className="flex justify-between gap-4">
          <div>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {equipment.name} - {equipment.asset_number}
            </h4>
          </div>
          <div className="flex mr-8 gap-4">
            <ActionsMenu type="Equipment" value={equipment} />
          </div>
        </div>
        <div className="grid grid-cols-1">
          <MdCategory style={{ marginRight: "8px" }} />
          <p className="text-sm text-muted-foreground">{equipment.category}</p>
        </div>
        <div className="grid grid-cols-6 gap-4 m-2">
          <div className="col-span-3">
            <p className="text-sm text-muted-foreground">
              <MdLocationOn style={{ marginRight: "8px" }} />
              {equipment.location}
            </p>
          </div>
          <div className="col-span-3">
            <p className="text-sm text-muted-foreground">
              <GiFactory style={{ marginRight: "8px" }} />
              {equipment.manufacturer}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 m-2">
          <div className="col-span-3">
            {equipment.status === "Operational" ? (
              <p className="text-sm text-muted-foreground">
                <FaCheckCircle style={{ marginRight: "8px" }} />
                {equipment.status}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                <MdOutlineWarning style={{ marginRight: "8px" }} />
                {equipment.status}
              </p>
            )}
          </div>
          <div className="col-span-3">
            <p className="text-sm text-muted-foreground">
              <FcMediumPriority style={{ marginRight: "8px" }} />
              RPN: {equipment.rpn}
            </p>
          </div>
        </div>
        <div className="flex justify-evenly gap-4 m-2">
          <Button
            variant="default"
            onClick={handleOpen}
            //   disabled={!permit.risk_assessment}
          >
            <MdDescription style={{ marginRight: "8px" }} /> Details
          </Button>
          <NavigateToEquipmentItemsButton equipmentId={equipment.id} />
        </div>
      </CustomCard>
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Equipment Detailts for - {equipment.asset_number}
              </h4>
            </DialogTitle>
          </DialogHeader>
          <Table>
            <TableCaption>
              <p className="text-sm text-muted-foreground">
                <MdDescription style={{ marginRight: "8px" }} />
                {equipment.description}
              </p>
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Failure Mode</TableHead>
                <TableHead>Failure Cause</TableHead>
                <TableHead>Failure Effect</TableHead>
                <TableHead>Controls</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Detection</TableHead>
                <TableHead>Occurrence</TableHead>
                <TableHead>RPN</TableHead>
                <TableHead>Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{equipment.failure_modes}</TableCell>
                <TableCell>{equipment.causes}</TableCell>
                <TableCell>{equipment.failure_effects}</TableCell>
                <TableCell>{equipment.controls}</TableCell>
                <TableCell>{equipment.severity}</TableCell>
                <TableCell>{equipment.detectability}</TableCell>
                <TableCell>{equipment.occurrence}</TableCell>
                <TableCell>{equipment.rpn}</TableCell>
                <TableCell>
                  {new Date(equipment.updated_at).toLocaleDateString("en-ZA")}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EquipmentCard;
