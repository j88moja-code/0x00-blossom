import { createLazyFileRoute } from "@tanstack/react-router";
import { TbLogs } from "react-icons/tb";
import { MdAssignment } from "react-icons/md";
import { LuFolderKanban } from "react-icons/lu";
import { ContentLayout } from "@/components/common/layout/ContentLayout";

export const Route = createLazyFileRoute("/_layout/production/")({
  component: ProductionIndex,
});

function ProductionIndex() {
  return (
    <ContentLayout title="Production">
      <div className="container mx-auto my-8 px-4 lg:px-0">
        <div className="flex-grow">
          <h1 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Production
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 shadow rounded overflow-hidden">
              <div className="flex justify-center items-center h-36 bg-gray-200 dark:bg-gray-700">
                <LuFolderKanban
                  size={50}
                  className="text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-medium mb-2 text-gray-900 dark:text-gray-100">
                  Scheduling and Specs
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Manage production scheduling and specifications.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow rounded overflow-hidden">
              <div className="flex justify-center items-center h-36 bg-gray-200 dark:bg-gray-700">
                <TbLogs
                  size={50}
                  className="text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-medium mb-2 text-gray-900 dark:text-gray-100">
                  Logs
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Track and trace production logs with ease.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow rounded overflow-hidden">
              <div className="flex justify-center items-center h-36 bg-gray-200 dark:bg-gray-700">
                <MdAssignment
                  size={50}
                  className="text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-medium mb-2 text-gray-900 dark:text-gray-100">
                  Checklists
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Manage and track production checklists effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
