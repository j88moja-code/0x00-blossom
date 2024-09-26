import { createLazyFileRoute } from "@tanstack/react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ContentLayout } from "../../components/common/layout/ContentLayout";
import MainDashboard from "@/components/dash/main/MainDashboard";
import EquipmentAnalysisCharts from "@/components/dash/equipment/EquipmentAnalysisCharts";
import MaintenanceAnalysisCharts from "@/components/dash/maintenance-requests/MaintenanceRequestsAnalysisCharts";
import MaintenanceTicketsAnalysis from "@/components/dash/maintenance-tickets/MaintenanceTicketsAnalysis";
import useAuth from "@/hooks/useAuth";

export const Route = createLazyFileRoute("/_layout/")({
  component: HomePage,
});

function HomePage() {
  const { user: currentUser } = useAuth();
  return (
    <>
      <ContentLayout title="Dashboard">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Hi, {currentUser?.full_name} 👋🏼
        </h4>
        <div>
          <Tabs defaultValue="main" className="space-y-4">
            <TabsList className="flex flex-wrap justify-center sm:justify-start gap-2">
              <TabsTrigger
                value="main"
                // className="px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-100"
              >
                Main
              </TabsTrigger>
              <TabsTrigger
                value="equipment"
                // className="px-4 py-2 text-sm font-medium text-white  focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-green-100"
              >
                Equipment
              </TabsTrigger>
              <TabsTrigger
                value="maintenance-requests"
                // className="px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-yellow-100"
              >
                Maintenance Requests
              </TabsTrigger>
              <TabsTrigger
                value="maintenance-tickets"
                // className="px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 focus:ring-offset-red-100"
              >
                Maintenance Tickets
              </TabsTrigger>
            </TabsList>
            <TabsContent value="main" className="mt-4">
              <MainDashboard />
            </TabsContent>
            <TabsContent value="equipment">
              <EquipmentAnalysisCharts />
            </TabsContent>
            <TabsContent value="maintenance-requests">
              <MaintenanceAnalysisCharts />
            </TabsContent>
            <TabsContent value="maintenance-tickets">
              <MaintenanceTicketsAnalysis />
            </TabsContent>
          </Tabs>
        </div>
      </ContentLayout>
    </>
  );
}
