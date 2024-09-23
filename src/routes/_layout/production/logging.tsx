import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ContentLayout } from "@/components/common/layout/ContentLayout";
import FormComponent from "@/components/common/form/search-and-filter";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { z } from "zod";

import { ProductionLogsService } from "../../../client";
import ActionsMenu from "../../../components/common/ActionsMenu";
// import { LoggerAndDownload } from "../../../components/production/Kanban/Buttons";
// import { Route as ELoggerRoute } from "./$kanbanId.elogger";
// import { TbLogs } from "react-icons/tb";

const prodLogsSearchSchema = z.object({
  page: z.number().default(1),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  search: z.string().optional(),
});

type ProdLogsSearch = z.infer<typeof prodLogsSearchSchema>;

export const Route = createFileRoute("/_layout/production/logging")({
  component: ProdLogs,
  validateSearch: (search) => {
    return prodLogsSearchSchema.parse(search);
  },
});

const PER_PAGE = 10;

function getProdLogsQueryOptions(search: ProdLogsSearch) {
  const filteredSearch = Object.fromEntries(
    Object.entries(search).filter(
      ([_, value]) => value !== undefined && value !== ""
    )
  );
  return {
    queryFn: () =>
      ProductionLogsService.readProductionLogsApiV1ProductionLogsGet({
        skip: (Number(filteredSearch?.page ?? 1) - 1) * PER_PAGE,
        limit: PER_PAGE,
        ...filteredSearch,
      }),
    queryKey: ["production-logs", filteredSearch],
  };
}

function ProdLogsTable() {
  const { page } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const setPage = (page: number) =>
    navigate({ search: (prev) => ({ ...prev, page }) });
  const [search, setSearch] = useState<ProdLogsSearch>({
    page: 1,
  });

  const {
    data: logs,
    isPending,
    isPlaceholderData,
  } = useQuery({
    ...getProdLogsQueryOptions(search),
    placeholderData: (prevData) => prevData,
  });

  const hasNextPage = !isPlaceholderData && logs?.logs.length === PER_PAGE;
  const hasPreviousPage = search.page > 1;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      page: 1,
    }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      page: 1,
    }));
  };

  const handleClearFilters = () => {
    setSearch({ page: 1 });
  };

  useEffect(() => {
    // If page is refreshed or the current path is not the default path
    if (window.location.pathname !== Route.fullPath) {
      // Redirect to the default path
      // @ts-ignore
      navigate(Route.fullPath, { replace: true });
    }
  }, [navigate]);

  if (isPending) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <FormComponent
        search={search}
        handleDateChange={handleDateChange}
        handleSearchChange={handleSearchChange}
        handleClearFilters={handleClearFilters}
      />
      <div className="overflow-x-auto">
        <Table>
          <TableCaption>A list of planned work.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Prod Log #</TableHead>
              <TableHead>Kanban #</TableHead>
              <TableHead>Production Date</TableHead>
              <TableHead>Operator</TableHead>
              <TableHead>Assistant Operator</TableHead>
              <TableHead>Total Production (tons)</TableHead>
              <TableHead>Total Downtime (mins)</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs?.logs && logs.logs.length ? (
              logs?.logs?.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>{log.log_number}</TableCell>
                  <TableCell>{log.kanban.kanban_number}</TableCell>
                  <TableCell>
                    {new Date(log.kanban.planned_date).toLocaleDateString(
                      "en-ZA"
                    )}
                  </TableCell>
                  <TableCell>{log.kanban.operator_name}</TableCell>
                  <TableCell>{log.kanban.assisst_name}</TableCell>
                  <TableCell>{log.total_production / 1000}</TableCell>
                  <TableCell>{log.total_downtime}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      {/* <Button
                        variant="default"
                        onClick={() => {
                          // Navigate to eLogger
                        }}
                        className="flex items-center"
                      >
                        <TbLogs className="mr-2" /> eLogger
                      </Button> */}
                      <ActionsMenu type="Production Log" value={log} />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7}>No production logs found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between my-4">
        <Button onClick={() => setPage(page - 1)} disabled={!hasPreviousPage}>
          Previous
        </Button>
        <p className="text-lg font-bold">Page: {page}</p>
        <Button disabled={!hasNextPage} onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </div>
    </>
  );
}

function ProdLogs() {
  return (
    <ContentLayout title="Production Logs">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              {/* @ts-ignore */}
              <Link to="/production/">Production</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              {/* @ts-ignore */}
              <Link to="/production/kanban">Production Schedules</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Production Logs</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <ProdLogsTable />
    </ContentLayout>
  );
}
