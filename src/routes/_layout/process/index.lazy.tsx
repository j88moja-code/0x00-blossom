import { createLazyFileRoute } from "@tanstack/react-router";
import { LiaIndustrySolid } from "react-icons/lia";
import { MdAssignment, MdOutlineWork } from "react-icons/md";
import { ContentLayout } from "@/components/common/layout/ContentLayout";
import useTitle from "@/hooks/useTitle";

export const Route = createLazyFileRoute("/_layout/process/")({
  component: ProcessIndex,
});

function ProcessIndex() {
  useTitle("Process");
  return (
    <ContentLayout title="Process">
      <div className="container mx-auto my-8 px-4 lg:px-0">
        <div className="flex-grow">
          <h1 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Process
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 shadow rounded overflow-hidden">
              <div className="flex justify-center items-center h-36 bg-gray-200 dark:bg-gray-700">
                <LiaIndustrySolid
                  size={50}
                  className="text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-medium mb-2 text-gray-900 dark:text-gray-100">
                  Process
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Manage and track production processes effectively.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow rounded overflow-hidden">
              <div className="flex justify-center items-center h-36 bg-gray-200 dark:bg-gray-700">
                <MdOutlineWork
                  size={50}
                  className="text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-medium mb-2 text-gray-900 dark:text-gray-100">
                  Short Term Control
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Control and manage hour to hour plant process operations with
                  ease.
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
                  Process Checklists
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Manage and track process checklists effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
