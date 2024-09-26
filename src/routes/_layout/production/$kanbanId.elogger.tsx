import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import {
  type ProductionLog,
  // ProductionKanbansService,
  ProductionLogsService,
} from "../../../client";

import ELogger from "../../../components/production/Logging/eLogger";
import { ContentLayout } from "../../../components/common/layout/ContentLayout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import useTitle from "@/hooks/useTitle";

const idNavigateSchema = z.object({
  kanbanId: z.preprocess((val) => Number(val), z.number().int().positive()),
});

export const Route = createFileRoute("/_layout/production/$kanbanId/elogger")({
  component: KanbanElogger,
});

function getProductionLogByKanbanIdQueryOptions({
  kanbanId,
}: {
  kanbanId: number;
}) {
  return {
    queryFn: () =>
      ProductionLogsService.readProductionLogByKanbanIdApiV1ProductionLogsKanbanIdLogGet(
        {
          kanbanId: kanbanId,
        }
      ),
    queryKey: ["production-logs"],
  };
}

function KanbanElogger() {
  useTitle("Production - eLogger");
  const params = Route.useParams();
  const result = idNavigateSchema.safeParse({
    kanbanId: params.kanbanId,
  });
  if (!result.success) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 flex items-center justify-center">
        <h4 className="text-red-500">Something went wrong</h4>
      </div>
    );
  }

  const { kanbanId } = result.data;

  const {
    data: productionLog,
    error,
    isLoading,
  } = useQuery({
    ...getProductionLogByKanbanIdQueryOptions({ kanbanId }),
  });

  if (isLoading) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (!productionLog) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 flex items-center justify-center">
        <h4 className="text-red-500">Production Log not found</h4>
      </div>
    );
  }

  if (error)
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 flex items-center justify-center">
        <h4 className="text-red-500">Something went wrong</h4>
      </div>
    );

  return (
    <>
      <ContentLayout title="Production Logging">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                {/* @ts-ignore */}
                <Link to="/production/kanban">Production Schedules</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                {/* @ts-ignore */}
                <Link to="/production/logging">Production Logs</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                Logger for Prod Log: {productionLog?.log_number}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <ELogger log={productionLog as ProductionLog} />
      </ContentLayout>
    </>
  );
}

//   return (
//     <>
//       {error ? (
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 flex items-center justify-center">
//           <h4 className="text-red-500">Something went wrong</h4>
//         </div>
//       ) : (
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 flex items-center justify-center">
//           <ELogger log={productionLog as ProductionLog} />
//         </div>
//       )}
//     </>
//   );
// }
