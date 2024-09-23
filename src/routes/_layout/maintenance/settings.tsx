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
import { CategoryListTable } from "@/components/maintenance/Settings/CategoryListTable";
import { DepartmentListTable } from "@/components/maintenance/Settings/DepartmentListTable";
import { MTypesListTable } from "@/components/maintenance/Settings/MTypeListTable";
import { StatusListTable } from "@/components/maintenance/Settings/StatusListTable";

export const Route = createFileRoute("/_layout/maintenance/settings")({
  component: MaintenanceSettings,
});

function MaintenanceSettings() {
  return (
    <>
      <ContentLayout title="Maintenance Settings">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                {/* @ts-ignore */}
                <Link to="/maintenance/">Maintenance</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Settings</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16">
          <Tabs defaultValue="category" className="space-y-4">
            <TabsList>
              <TabsTrigger value="category">Category</TabsTrigger>
              <TabsTrigger value="department">Department</TabsTrigger>
              <TabsTrigger value="mType">MType</TabsTrigger>
              <TabsTrigger value="status">Status</TabsTrigger>
            </TabsList>
            <TabsContent value="category">
              <CategoryListTable />
            </TabsContent>
            <TabsContent value="department">
              <DepartmentListTable />
            </TabsContent>
            <TabsContent value="mType">
              <MTypesListTable />
            </TabsContent>
            <TabsContent value="status">
              <StatusListTable />
            </TabsContent>
          </Tabs>
        </div>
      </ContentLayout>
    </>
  );
}
