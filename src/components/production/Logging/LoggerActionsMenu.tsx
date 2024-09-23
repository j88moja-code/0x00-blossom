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
import { Button } from "@/components/ui/button";
import { MdMoreVert, MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import EditReelOnProductionLog from "./EditReelOnProdLog";
import EditDowntimeOnProductionLog from "./EditDowntimeOnProdLog";

import type { Reel, Downtime, ProductionLog } from "../../../client";

interface LoggerActionsMenuProps {
  type: "Reel" | "Downtime";
  value: Reel | Downtime;
  disabled?: boolean;
  log: ProductionLog;
}

const LoggerActionsMenu: React.FC<LoggerActionsMenuProps> = ({
  type,
  value,
  disabled,
  log,
}) => {
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
      case "Reel":
        return (
          <EditReelOnProductionLog
            open={editOpen}
            onClose={handleEditClose}
            reel={value as Reel}
            productionLog={log}
          />
        );
      case "Downtime":
        return (
          <EditDowntimeOnProductionLog
            open={editOpen}
            onClose={handleEditClose}
            downtime={value as Downtime}
            log={log}
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

export default LoggerActionsMenu;
