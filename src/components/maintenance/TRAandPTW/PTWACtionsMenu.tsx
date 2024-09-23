import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { MdAdd, MdMoreVert } from "react-icons/md";

import type { MaintenancePTWRead } from "../../../client";

import AddConfinedSpaceForm from "./SpecializedPermits/AddConfinedSpaceForm";
import AddElectricalIsolationForm from "./SpecializedPermits/AddElectricalIsolation";
import AddHotWorkForm from "./SpecializedPermits/AddHotWorkForm";
import AddRiggingAndLiftForm from "./SpecializedPermits/AddRiggingAdnLiftForm";
import AddWorkingAtHeightForm from "./SpecializedPermits/AddWorkingAnHeights";
interface PTWActionMenuProps {
  pwtSchema: MaintenancePTWRead;
  disabled?: boolean;
}

const permits = [
  { label: "Confined Space Permit", component: AddConfinedSpaceForm },
  {
    label: "Electrical Isolation Permit",
    component: AddElectricalIsolationForm,
  },
  { label: "Hot Work Permit", component: AddHotWorkForm },
  { label: "Rigging and Lifting Permit", component: AddRiggingAndLiftForm },
  {
    label: "Working at Height Permit",
    component: AddWorkingAtHeightForm,
  },
];

export default function PTWActionMenu({
  pwtSchema,
  disabled,
}: PTWActionMenuProps) {
  const [openDialogs, setOpenDialogs] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleDialog = (label: string, isOpen: boolean) => {
    setOpenDialogs((prev) => ({ ...prev, [label]: isOpen }));
  };

  return (
    <>
      <DropdownMenu>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-full p-2"
                  disabled={disabled}
                  onClick={() => toggleDialog("Specialized Permits", true)}
                >
                  <MdMoreVert size={14} />
                </Button>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent side="bottom">Actions Menu</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DropdownMenuContent>
          <DropdownMenuLabel>Specialized Permits</DropdownMenuLabel>
          {permits.map((permit, index) => (
            <React.Fragment key={permit.label}>
              <DropdownMenuItem
                onClick={() => toggleDialog(permit.label, true)}
                disabled={disabled}
                className="flex items-center gap-2"
              >
                <MdAdd size={14} />
                <span>{permit.label}</span>
              </DropdownMenuItem>
              {index < permits.length - 1 && <DropdownMenuSeparator />}
            </React.Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {permits.map((permit) => {
        const PermitComponent = permit.component;
        return (
          <PermitComponent
            key={permit.label}
            ptw={pwtSchema as MaintenancePTWRead}
            open={openDialogs[permit.label] || false}
            onClose={() => toggleDialog(permit.label, false)}
          />
        );
      })}
    </>
  );
}
