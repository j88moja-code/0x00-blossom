import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import {
  type ApiError,
  RequisitionsService,
  OpenAPI,
  type Order,
} from "../../../client";
import Navbar from "../../../components/common/NavBar";
import { ContentLayout } from "@/components/common/layout/ContentLayout";
import { useToastStore } from "@/hooks/useToastStore";
import CustomDialog from "../../../components/common/CustomDialog";
import { handleError } from "@/utils";
import useTitle from "@/hooks/useTitle";

const woRqsSearchSchema = z.object({
  page: z.number().catch(1),
});

export const Route = createFileRoute("/_layout/stores/requisitions")({
  component: WORequisitions,
  validateSearch: (search) => {
    return woRqsSearchSchema.safeParse(search);
  },
});

const PER_PAGE = 10;

function getRequisitionsQueryOptions(search: any) {
  const filteredSearch = Object.fromEntries(
    Object.entries(search).filter(
      ([_, value]) => value !== undefined && value !== ""
    )
  );
  return {
    queryFn: () =>
      RequisitionsService.readAllRequisitionsApiV1StoresRequisitionsGet({
        skip: (Number(filteredSearch?.page ?? 1) - 1) * PER_PAGE,
        limit: PER_PAGE,
        ...filteredSearch,
      }),
    queryKey: ["requisitions", filteredSearch],
  };
}

const DialogTypes = {
  APPROVE: "approve",
  REJECT: "reject",
  DOWNLOAD: "download",
};

function RequisitionsTable() {
  useTitle("Stores - Requisitions");
  const [search, setSearch] = useState({ page: 1 });
  const [dialog, setDialog] = useState({ open: false, type: "", id: 1 });

  const queryClient = useQueryClient();
  const showToast = useToastStore((state) => state.showToast);

  const {
    data: requisitions,
    isFetching,
    isLoading,
  } = useQuery({
    ...getRequisitionsQueryOptions(search),
    placeholderData: (prevData) => prevData,
  });

  const handleDialogOpen = (type: string, id: number) =>
    setDialog({ open: true, type, id });
  const handleDialogClose = () => setDialog({ open: false, type: "", id: 1 });

  const mutationConfig = {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["requisitions"] });
      showToast("Requisition approved", "success");
      handleDialogClose();
    },
    onError: (err: ApiError) => {
      handleError(err, showToast);
      handleDialogClose();
    },
  };

  const handleApprove = useMutation({
    mutationFn: (id: number) =>
      RequisitionsService.approveOrderApiV1StoresOrderOrderIdApprovePut({
        orderId: id,
      }),
    ...mutationConfig,
  });

  const handleReject = useMutation({
    mutationFn: (id: number) =>
      RequisitionsService.rejectOrderApiV1StoresOrderOrderIdRejectPut({
        orderId: id,
      }),
    ...mutationConfig,
  });

  const handleDownload = async (id: number) => {
    try {
      const response = await axios.get(
        `${OpenAPI.BASE}/api/v1/stores/requisitions/${id}/pdf`,
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
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `RQ-ID#${id}-${new Date().getDay()}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      showToast("Downloaded successfully", "success");
    } catch (err: ApiError | any) {
      handleError(err, showToast);
    }
  };

  const hasNextPage = requisitions && requisitions?.items?.length === PER_PAGE;
  const hasPreviousPage = search.page > 1;

  const handlePageChange = (newPage: number) => {
    setSearch((prev) => ({ ...prev, page: newPage }));
  };

  return (
    <>
      <Table>
        <TableCaption>A list of all spare items requisitions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Order No.</TableHead>
            <TableHead>Maintenance Request No.</TableHead>
            <TableHead>Remarks</TableHead>
            <TableHead>Status</TableHead>
            <TableHead colSpan={3}>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading || isFetching ? (
            <TableRow>
              <TableCell colSpan={7}>
                {Array.from({ length: PER_PAGE }).map((_, index) => (
                  <div key={index} className="w-full">
                    <span className="loader"></span>
                  </div>
                ))}
              </TableCell>
            </TableRow>
          ) : requisitions?.items?.length ? (
            requisitions?.items?.map((requisition) => (
              <RequisitionRow
                key={requisition.id}
                requisition={requisition}
                onApprove={() =>
                  handleDialogOpen(DialogTypes.APPROVE, requisition.id)
                }
                onReject={() =>
                  handleDialogOpen(DialogTypes.REJECT, requisition.id)
                }
                onDownload={() =>
                  handleDialogOpen(DialogTypes.DOWNLOAD, requisition.id)
                }
              />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7}>No requisitions found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex justify-between my-4">
        <Button
          disabled={!hasPreviousPage}
          onClick={() => handlePageChange(search.page - 1)}
        >
          Previous
        </Button>
        <p className="text-center">Page: {search.page}</p>
        <Button
          disabled={!hasNextPage}
          onClick={() => handlePageChange(search.page + 1)}
        >
          Next
        </Button>
      </div>
      <CustomDialog
        open={dialog.open}
        title={`${dialog.type.charAt(0).toUpperCase() + dialog.type.slice(1)} Requisition`}
        content={`Are you sure you want to ${dialog.type} this requisition?`}
        onClose={handleDialogClose}
        onConfirm={() => {
          if (dialog.type === DialogTypes.APPROVE)
            handleApprove.mutate(dialog.id);
          if (dialog.type === DialogTypes.REJECT)
            handleReject.mutate(dialog.id);
          if (dialog.type === DialogTypes.DOWNLOAD) handleDownload(dialog.id);
          handleDialogClose();
        }}
      />
    </>
  );
}

/**
 * Renders a row of a table displaying information about a work order
 * requisition.
 *
 * @param {Object} props - The component props.
 * @param {Requisition} props.requisition - The requisition object.
 * @param {Function} props.onApprove - The function to call when the approve button is clicked.
 * @param {Function} props.onReject - The function to call when the reject button is clicked.
 * @param {Function} props.onDownload - The function to call when the download button is clicked.
 * @returns {JSX.Element} The rendered table row.
 */
const RequisitionRow = ({
  requisition,
  onApprove,
  onReject,
  onDownload,
}: {
  requisition: Order;
  onApprove: () => void;
  onReject: () => void;
  onDownload: () => void;
}): JSX.Element => (
  <TableRow>
    <TableCell>{requisition.id}</TableCell>
    <TableCell>{requisition.order_number ?? "-"}</TableCell>
    <TableCell>
      {requisition.maintenance_requests_id ?? "Order Not For RM"}
    </TableCell>
    <TableCell>{requisition.remarks}</TableCell>
    <TableCell>{requisition.status}</TableCell>
    <TableCell colSpan={3}>
      <Button
        color="success"
        onClick={onApprove}
        disabled={requisition.status !== "pending"}
      >
        Approve
      </Button>
      <Button
        color="destructive"
        onClick={onReject}
        disabled={requisition.status !== "pending"}
      >
        Reject
      </Button>
      <Button color="default" onClick={onDownload}>
        Download
      </Button>
    </TableCell>
  </TableRow>
);

function WORequisitions() {
  return (
    <ContentLayout title="Inventory">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              {/* @ts-ignore */}
              <Link to="/stores/">Stores</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              {/* @ts-ignore */}
              <Link to="/stores/categories">Categories</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              {/* @ts-ignore */}
              <Link to="/stores/items">Items</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              {/* @ts-ignore */}
              <Link to="/stores/inventory">Inventory</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Requisitions</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Navbar type="Requisition" />
      <RequisitionsTable />
    </ContentLayout>
  );
}
