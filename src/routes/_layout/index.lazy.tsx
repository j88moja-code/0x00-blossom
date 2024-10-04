import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
import useTitle from "@/hooks/useTitle";

export const Route = createLazyFileRoute("/_layout/")({
  component: HomePage,
});

function HomePage() {
  useTitle("CMOOS Dashboard");
  const { user: currentUser } = useAuth();
  // greeting
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const currentHour = new Date().getHours();
    let newGreeting;

    if (currentHour >= 6 && currentHour < 12) {
      newGreeting = "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      newGreeting = "Good afternoon";
    } else {
      newGreeting = "Good evening";
    }

    setGreeting(newGreeting);
  }, []);
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
          {greeting} {currentUser?.full_name}
        </h4>

        <Tabs defaultValue="main" className="space-y-4">
          <div className="flex flex-col items-center justify-center">
            <TabsList className="flex flex-wrap justify-center sm:justify-start mb-4 gap-2">
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
          </div>
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
      </ContentLayout>
    </>
  );
}
