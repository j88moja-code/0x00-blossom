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
import { Inspections } from "../../../components/sheq/Inspections/InspectionsList";
import { RiskAssessments } from "../../../components/sheq/RiskAssessment/RiskAssessementList";
import { Incidents } from "../../../components/sheq/Incidents/IncidentsList";
// import { Osha300Log } from "../../../components/sheq/Osha300Log/Osha300LogList";

export const Route = createFileRoute("/_layout/sheq/osha")({
  component: Osha,
});

function Osha() {
  return (
    <>
      <ContentLayout title="OSHA">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/sheq">SHEQ</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>OSHA</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div>
          <Tabs defaultValue="inspections" className="space-y-4">
            <TabsList>
              <TabsTrigger value="inspections">Inspections</TabsTrigger>
              <TabsTrigger value="risk-assessments">
                Risk Assessments
              </TabsTrigger>
              <TabsTrigger value="incidents">Incidents</TabsTrigger>
              <TabsTrigger value="osha300-log">OSHA 300 Log</TabsTrigger>
            </TabsList>
            <TabsContent value="inspections">
              <Inspections />
            </TabsContent>
            <TabsContent value="risk-assessments">
              <RiskAssessments />
            </TabsContent>
            <TabsContent value="incidents">
              <Incidents />
            </TabsContent>
            {/* <TabsContent value="osha300-log">
            <Osha300Log />
          </TabsContent> */}
          </Tabs>
        </div>
      </ContentLayout>
    </>
  );
}
