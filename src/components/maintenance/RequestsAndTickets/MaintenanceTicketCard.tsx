import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MdDateRange, MdTask } from "react-icons/md";
import { GrInProgress, GrServices } from "react-icons/gr";
import { FaHourglassStart, FaHourglassEnd } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Button } from "@/components/ui/button";

import {
  type ApiError,
  type MaintenanceTicket,
  RequestsAndTicketsService,
} from "@/client";
import { useToastStore } from "@/hooks/useToastStore";
import CustomCard from "@/components/common/CustomCard";
import ActionsMenu from "@/components/common/ActionsMenu";
import CustomDialog from "@/components/common/CustomDialog";
import { handleError } from "@/utils";

type MaintenanceTicketCardProps = {
  ticket: MaintenanceTicket;
};

const MaintenanceTicketCard: React.FC<MaintenanceTicketCardProps> = ({
  ticket,
}) => {
  const queryClient = useQueryClient();
  const showToast = useToastStore((state) => state.showToast);
  const markAsCompletedMutation = useMutation({
    mutationFn: () =>
      RequestsAndTicketsService.completeMaintenanceTicketApiV1MaintenanceTicketsIdCompletePatch(
        {
          id: ticket.id,
        }
      ),
    onSuccess: () => {
      showToast("Ticket marked as completed", "success");
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["maintenance-tickets"] });
    },
  });

  const [openCompleteDialog, setOpenCompleteDialog] = useState(false);

  const handleComplete = () => {
    if (!openCompleteDialog) {
      setOpenCompleteDialog(true);
    }
  };
  const handleOnConfirm = () => {
    markAsCompletedMutation.mutate();
    setOpenCompleteDialog(false);
  };

  return (
    <>
      <CustomCard>
        <div className="flex justify-between gap-4">
          <div>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {ticket.ticket_number}
            </h4>
          </div>
          <div className="flex mr-8 gap-4">
            <ActionsMenu type="Ticket" value={ticket as MaintenanceTicket} />
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-1 m-2">
            <GrServices style={{ marginRight: "8px" }} />{" "}
            {ticket.maintenance_request.rq_number}
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 m-2">
          <div className="col-span-3">
            <MdTask style={{ marginRight: "8px" }} />
            Work to Performed: {ticket.work_performed}
          </div>
          <div className="col-span-3">
            <MdDateRange style={{ marginRight: "8px" }} /> Created At:{" "}
            {new Date(ticket.created_at).toLocaleString("en-ZA")}
          </div>
        </div>
        <div className="grid grid-cols-9 gap-4 m-2">
          <div className="col-span-3">
            <FaHourglassStart style={{ marginRight: "8px" }} />
            {ticket.start_time ? (
              <p>
                Start Time:{" "}
                {new Date(ticket.start_time).toLocaleString("en-ZA")}
              </p>
            ) : (
              <p>No Start Time</p>
            )}
          </div>
          <div className="col-span-3">
            <FaHourglassEnd style={{ marginRight: "8px" }} />
            {ticket.end_time ? (
              <p>
                End Time: {new Date(ticket.end_time).toLocaleString("en-ZA")}
              </p>
            ) : (
              <p>No End Time</p>
            )}
          </div>
          <div className="col-span-3">
            {ticket.is_completed ? (
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
          <div className="flex justify-items-end gap-4">
            {/* Mark as completed button */}
            <Button
              variant="default"
              size="sm"
              onClick={handleComplete}
              disabled={ticket.is_completed}
            >
              <IoCheckmarkDoneCircle style={{ marginRight: "8px" }} />
              Mark as Completed
            </Button>
          </div>
        </div>
      </CustomCard>
      <CustomDialog
        open={openCompleteDialog}
        title="Mark Maintenance Ticket as Completed?"
        content={`Are you sure you want to mark ticket ${ticket.ticket_number} as completed?`}
        onClose={() => {
          setOpenCompleteDialog(false);
        }}
        onConfirm={handleOnConfirm}
      />
    </>
  );
};

export default MaintenanceTicketCard;
