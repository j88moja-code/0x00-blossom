import React from "react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { MdCheckCircle, MdCancel } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FaHourglassEnd, FaHourglassStart } from "react-icons/fa";
import { useNavigate } from "@tanstack/react-router";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { LoggerAndDownload } from "./Buttons";
import ActionsMenu from "../../common/ActionsMenu";
import CustomCard from "../../common/CustomCard";
import { useToastStore } from "@/hooks/useToastStore";
import {
  type ApiError,
  type ProductionKanbanRead,
  ProductionKanbansService,
  OpenAPI,
} from "../../../client";
import CustomDialog from "../../common/CustomDialog";
import { Route as ELoggerRoute } from "../../../routes/_layout/production/$kanbanId.elogger";
import { handleError } from "@/utils";

interface KanbanCardProps {
  kanban: ProductionKanbanRead;
}

const KanbanCard: React.FC<KanbanCardProps> = ({ kanban }) => {
  const queryClient = useQueryClient();
  const showToast = useToastStore((state) => state.showToast);
  const navigate = useNavigate();

  const startMutation = useMutation({
    mutationFn: () =>
      ProductionKanbansService.markKanbanAsStartedApiV1ProductionKanbansKanbanIdStartedPatch(
        {
          // @ts-ignore
          kanbanId: kanban.id,
        }
      ),
    onSuccess: () => {
      showToast("Kanban started successfully", "success");
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["production-kanbans"] });
    },
  });

  const completeMutation = useMutation({
    mutationFn: () =>
      ProductionKanbansService.markKanbanAsCompletedApiV1ProductionKanbansKanbanIdCompletedPost(
        {
          // @ts-ignore
          kanbanId: kanban.id,
        }
      ),
    onSuccess: () => {
      showToast("Kanban completed successfully", "success");
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["production-kanbans"] });
    },
  });

  const [openDialog, setOpenDialog] = React.useState(false);
  const [openCompleteDialog, setOpenCompleteDialog] = React.useState(false);
  const handleNavigate = () => {
    navigate({
      to: ELoggerRoute.to,
      params: {
        // @ts-ignore
        kanbanId: kanban?.id.toString(),
      },
    });
  };
  const handleButtonClick = (isStarted: boolean) => {
    if (isStarted) {
      setOpenCompleteDialog(true);
    } else {
      setOpenDialog(true);
    }
  };

  // Handle download
  const handleDownload = async (kanbanId: number) => {
    try {
      const response = await axios.get(
        `${OpenAPI.BASE}/api/v1/production/kanbans/${kanbanId}/download-report`,
        {
          responseType: "blob",
          headers: {
            "Content-Type": "application/pdf",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
          withCredentials: true,
        }
      );

      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${kanban.kanban_number}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      showToast("Report downloaded successfully", "success");
    } catch (err: ApiError | any) {
      handleError(err, showToast);
    }
  };

  return (
    <>
      <CustomCard>
        <div className="flex justify-between gap-4">
          <div>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {kanban.kanban_number}
            </h4>
          </div>
          <div className="flex mr-8 gap-4">
            <ActionsMenu
              type="Production Kanban"
              value={kanban as ProductionKanbanRead}
            />
          </div>
        </div>
        <div className="grid grid-cols-9 gap-4 m-2">
          <div className="col-span-3">
            Planned Product Code: {kanban.planned_product_code}
          </div>
          <div className="col-span-3">
            Planned Date:{" "}
            {new Date(kanban.planned_date).toLocaleDateString("en-ZA")}
          </div>
          <div className="col-span-3">Shift: {kanban.shift}</div>
        </div>
        <div className="grid grid-cols-9 gap-4 m-2">
          <div className="col-span-3">
            Planned Quantity: {kanban.planned_quantity}
          </div>
          <div className="col-span-3">
            Planned Raw Material: {kanban.planned_raw_material}
          </div>
          <div className="col-span-3">
            Actual Raw Material: {kanban.actual_raw_material}
          </div>
        </div>

        <div className="grid grid-cols-6 gap-4 m-2">
          <div className="col-span-3">
            <p className="text-sm text-muted-foreground">
              Started:{" "}
              {kanban.started ? (
                <MdCheckCircle className="text-green-500" />
              ) : (
                <MdCancel className="text-red-500" />
              )}
            </p>
          </div>
          <div className="col-span-3">
            <p className="text-sm text-muted-foreground">
              Ended:{" "}
              {kanban.completed ? (
                <MdCheckCircle className="text-green-500" />
              ) : (
                <MdCancel className="text-red-500" />
              )}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 m-2">
          <div className="col-span-3">
            {kanban.started && (
              <p className="text-sm text-muted-foreground">
                Available Production Time: {kanban.available_production_time}{" "}
                mins
              </p>
            )}
          </div>
          <div className="col-span-3">
            {kanban.started && (
              <p className="text-sm text-muted-foreground">
                Planned Down Time: {kanban.planned_down_time} mins
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Remarks: {kanban.remarks}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 justify-start sm:justify-end items-center">
          <div className="flex flex-col sm:flex-row gap-2 justify-start sm:justify-end items-center">
            <LoggerAndDownload
              // @ts-ignore
              id={kanban.id}
              started={kanban.started}
              completed={kanban.completed}
              handleNavigate={handleNavigate}
              handleDownload={handleDownload}
            />
          </div>
          <TooltipProvider>
            <Tooltip delayDuration={100}>
              <TooltipTrigger className="w-full">
                <Button
                  variant="outline"
                  color={
                    kanban.started
                      ? kanban.started
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-blue-500 hover:bg-blue-600"
                      : "bg-green-500 hover:bg-green-600"
                  }
                  onClick={() => handleButtonClick(kanban.started)}
                  disabled={kanban.completed}
                >
                  <span className="flex items-center gap-2">
                    {kanban.started ? <FaHourglassEnd /> : <FaHourglassStart />}
                    {kanban.started ? "End" : "Start"}
                  </span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>
                  {kanban.started ? "End and generate report" : "Start and log"}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CustomCard>
      <CustomDialog
        open={openDialog}
        title="Start Kanban"
        content="Are you sure you want to start this kanban?"
        onClose={() => {
          setOpenDialog(false);
        }}
        onConfirm={() => {
          startMutation.mutate();
        }}
      />
      <CustomDialog
        open={openCompleteDialog}
        title="Complete Kanban"
        content="Are you sure you want to complete this kanban?"
        onClose={() => {
          setOpenCompleteDialog(false);
        }}
        onConfirm={() => {
          completeMutation.mutate();
        }}
      />
    </>
  );
};

export default KanbanCard;
