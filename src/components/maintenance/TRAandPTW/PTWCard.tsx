import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  FaRegCalendarAlt,
  FaUserAlt,
  FaExclamationTriangle,
  FaShieldAlt,
} from "react-icons/fa";
import { MdSupervisorAccount, MdTask } from "react-icons/md";
import { FaHourglassStart, FaHourglassEnd } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { renderList } from "./TRACard";
import { IoMdDoneAll } from "react-icons/io";
import { GrInProgress, GrTask } from "react-icons/gr";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Eye } from "lucide-react";
import { useToastStore } from "@/hooks/useToastStore";

import CustomCard from "@/components/common/CustomCard";
import CustomDialog from "@/components/common/CustomDialog";
import {
  type ApiError,
  type MaintenancePTW,
  type MaintenanceTRARead,
  RequestsAndTicketsService,
} from "@/client";
import PTWActionMenu from "./PTWACtionsMenu";

interface PTWCardProps {
  ptw: MaintenancePTW;
}

export default function PTWCard({ ptw }: PTWCardProps) {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const showToast = useToastStore((state) => state.showToast);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const markAsCompleteMutation = useMutation({
    mutationFn: () =>
      RequestsAndTicketsService.completeMaintenancePtwApiV1MaintenancePtwIdCompletePatch(
        {
          id: ptw.id,
        }
      ),
    onSuccess: () => {
      showToast("PTW marked as completed", "success");
    },
    onError: (err: ApiError) => {
      // Handle and stringify error details for debugging
      const errDetail = (err.body as any)?.detail;
      const errorMessage =
        typeof errDetail === "string"
          ? errDetail
          : JSON.stringify(errDetail) || "An error occurred";
      showToast(`Something went wrong ${errorMessage}`, "error");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["maintenance-ptws"] });
    },
  });
  const [openCompleteDialog, setOpenCompleteDialog] = useState(false);

  const handleComplete = () => {
    if (!openCompleteDialog) {
      setOpenCompleteDialog(true);
    }
  };
  const handleOnConfirm = () => {
    markAsCompleteMutation.mutate();
    setOpenCompleteDialog(false);
  };
  return (
    <>
      <CustomCard>
        <div className="flex justify-between gap-4">
          <div>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {ptw.ptw_number} - {ptw.maintenance_tra.ra_number}
            </h4>
          </div>
          <div className="flex mr-8 gap-4">
            {/* // @ts-ignore */}
            <PTWActionMenu
              pwtSchema={ptw}
              // @ts-ignore
              disabled={ptw.is_completed}
            />
          </div>
        </div>
        <div className="grid grid-cols-1">
          <FaUserAlt style={{ marginRight: "8px" }} />
          Requsted By: {ptw.requestor_name} - {ptw.department.name}
        </div>
        <div className="grid grid-cols-9 gap-4 m-2">
          <div className="col-span-3">
            <FaHourglassStart style={{ marginRight: "8px" }} />
            Start Time: {new Date(ptw.start_time).toLocaleString()}
          </div>
          <div className="col-span-3">
            <FaHourglassEnd style={{ marginRight: "8px" }} />
            End Time: {new Date(ptw.end_time || new Date()).toLocaleString()}
          </div>
          <div className="col-span-3">
            <FaRegCalendarAlt style={{ marginRight: "8px" }} />
            Date: {new Date(ptw.created_at).toLocaleString()}
          </div>
        </div>
        <div className="flex justify-center">
          <MdTask style={{ marginRight: "8px" }} />
          <p>Task: {ptw.work_description}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 m-2">
          <div className="col-span-3">
            {ptw.is_completed ? (
              <>
                <IoMdDoneAll style={{ marginRight: "8px" }} />
                <p>Completed</p>
              </>
            ) : (
              <>
                <GrInProgress style={{ marginRight: "8px" }} />
                <p>In Progress</p>
              </>
            )}
          </div>
        </div>
        <div className="flex justify-items-end gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handleComplete}
            // @ts-ignore
            disabled={ptw.is_completed}
          >
            <IoCheckmarkDoneCircle style={{ marginRight: "8px" }} />
            Mark as Completed
          </Button>
          <Button variant="outline" size="sm" onClick={handleOpen}>
            <Eye style={{ marginRight: "8px" }} />
            View TRA
          </Button>
        </div>
      </CustomCard>
      <CustomDialog
        open={openCompleteDialog}
        title="Confirm Completion"
        content={`Are you sure you want to mark this PTW ${ptw.ptw_number} as completed?`}
        onConfirm={handleOnConfirm}
        onClose={() => setOpenCompleteDialog(false)}
      />
      <TRAModal open={open} onClose={handleClose} tra={ptw.maintenance_tra} />
    </>
  );
}

interface TRAModalProps {
  open: boolean;
  onClose: () => void;
  tra: MaintenanceTRARead;
}

function TRAModal({ open, onClose, tra }: TRAModalProps) {
  return (
    <Dialog onOpenChange={onClose} open={open} modal defaultOpen={open}>
      <DialogContent className="sm:max-w-md" aria-describedby="description">
        <DialogHeader>
          <DialogTitle>
            TRA: {tra.ra_number} - {tra.maintenance_ticket_id}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea>
          {" "}
          <div className="grid grid-cols-6 gap-4 m-2">
            <div className="col-span-3">
              <FaRegCalendarAlt style={{ marginRight: "8px" }} />
              Date: {new Date(tra.created_at).toLocaleString()}
            </div>
            <div className="col-span-3">
              <MdSupervisorAccount style={{ marginRight: "8px" }} />
              Supervisor: {tra.supervisor}
            </div>
          </div>
          <div className="grid grid-cols-9 gap-4">
            <div className="col-span-3">
              <div className="flex items-center mb-2">
                <GrTask style={{ marginRight: "8px" }} />
                <strong>Step/s:</strong>
              </div>
              <ul className="list-disc pl-6">{renderList(tra.steps)}</ul>
            </div>

            <div className="col-span-3">
              <div className="flex items-center mb-2">
                <FaExclamationTriangle style={{ marginRight: "8px" }} />
                <strong>Hazard/s:</strong>
              </div>
              <ul className="list-disc pl-6">{renderList(tra.hazards)}</ul>
            </div>

            <div className="col-span-3">
              <div className="flex items-center mb-2">
                <FaShieldAlt style={{ marginRight: "8px" }} />
                <strong>Control/s:</strong>
              </div>
              <ul className="list-disc pl-6">{renderList(tra.controls)}</ul>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
