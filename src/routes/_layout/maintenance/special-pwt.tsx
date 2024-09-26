import { createFileRoute, Link } from "@tanstack/react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { ContentLayout } from "@/components/common/layout/ContentLayout";
import { ElectricalIsolationsTable } from "../../../components/maintenance/TRAandPTW/SpecializedPermits/Tables/ElectricalIsolationsTable";
import { HotWorksTable } from "../../../components/maintenance/TRAandPTW/SpecializedPermits/Tables/HotWorksTable";
import { ConfinedSpacesTable } from "../../../components/maintenance/TRAandPTW/SpecializedPermits/Tables/ConfinedSpacesTable";
import { RiggingAndLiftingsTable } from "../../../components/maintenance/TRAandPTW/SpecializedPermits/Tables/RiggingAndLiftingsTable";
import { WorkingAtHeightsTable } from "../../../components/maintenance/TRAandPTW/SpecializedPermits/Tables/WorkingAHeightsTable";
import useTitle from "@/hooks/useTitle";

export const Route = createFileRoute("/_layout/maintenance/special-pwt")({
  component: SpecialisedPermits,
});

function SpecialisedPermits() {
  useTitle("Maintenance - Specialized Permits");
  return (
    <>
      <ContentLayout title="Specialized Permits">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Maintenance</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/maintenance/requests" search={{ page: 1 }}>
                  Maintenance Requests
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/maintenance/tickets" search={{ page: 1 }}>
                  Maintenance Tickets
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  to="/maintenance/task-risk-assessment"
                  search={{ page: 1 }}
                >
                  Task Risk Assessments
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/maintenance/permit-to-work" search={{ page: 1 }}>
                  Permits To Work
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Special PTWs</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div>
          <Tabs defaultValue="category" className="space-y-4">
            <TabsList>
              <TabsTrigger value="confined-spaces">Confined Spaces</TabsTrigger>
              <TabsTrigger value="electrical-isolations">
                Electrical Isolations
              </TabsTrigger>
              <TabsTrigger value="hot-works">Hot Works</TabsTrigger>
              <TabsTrigger value="rigging-and-liftings">
                Rigging and Liftings
              </TabsTrigger>
              <TabsTrigger value="work-at-height">Work at Height</TabsTrigger>
            </TabsList>
            <TabsContent value="confined-spaces">
              <ConfinedSpacesTable />
            </TabsContent>
            <TabsContent value="electrical-isolations">
              <ElectricalIsolationsTable />
            </TabsContent>
            <TabsContent value="hot-works">
              <HotWorksTable />
            </TabsContent>
            <TabsContent value="rigging-and-liftings">
              <RiggingAndLiftingsTable />
            </TabsContent>
            <TabsContent value="work-at-height">
              <WorkingAtHeightsTable />
            </TabsContent>
          </Tabs>
        </div>
      </ContentLayout>
    </>
  );
}
