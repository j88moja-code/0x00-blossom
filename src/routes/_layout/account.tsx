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

import useTitle from "@/hooks/useTitle";
import { ContentLayout } from "@/components/common/layout/ContentLayout";
import ChangePassword from "@/components/users/ChangePassword";
import UserInformation from "@/components/users/UserInformation";

export const Route = createFileRoute("/_layout/account")({
  component: Account,
});

function Account() {
  useTitle("Account");
  return (
    <ContentLayout title="Account">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Account Information</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div>
        <Tabs defaultValue="user-information" className="space-y-4">
          <TabsList>
            <TabsTrigger value="user-information">User Information</TabsTrigger>
            <TabsTrigger value="change-password">Change Password</TabsTrigger>
          </TabsList>

          <TabsContent value="user-information">
            <UserInformation />
          </TabsContent>
          <TabsContent value="change-password">
            <ChangePassword />
          </TabsContent>
        </Tabs>
      </div>
    </ContentLayout>
  );
}
