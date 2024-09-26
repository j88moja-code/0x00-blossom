import { createLazyFileRoute } from "@tanstack/react-router";
import {
  MdOutlineMiscellaneousServices,
  MdEvent,
  MdOutlineWork,
  MdWorkspaces,
} from "react-icons/md";
import { GrHostMaintenance, GrVmMaintenance } from "react-icons/gr";
import { ContentLayout } from "../../../components/common/layout/ContentLayout";
import useTitle from "@/hooks/useTitle";

export const Route = createLazyFileRoute("/_layout/maintenance/")({
  component: MaintenanceIndex,
});

function MaintenanceIndex() {
  useTitle("Maintenance");
  return (
    <ContentLayout title="Maintenance">
      <div className="container mx-auto my-8 px-4 lg:px-0">
        <div className="flex-grow">
          <h1 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Maintenance
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 shadow rounded overflow-hidden">
              <div className="flex justify-center items-center h-36 bg-gray-200 dark:bg-gray-700">
                <MdOutlineMiscellaneousServices
                  size={50}
                  className="text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-medium mb-2 text-gray-900 dark:text-gray-100">
                  Maintenance Requests
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Manage and track maintenance service requests efficiently.
                </p>
              </div>
            </div>

            {/* Permit to Work (PTW) Card */}
            <div className="bg-white dark:bg-gray-800 shadow rounded overflow-hidden">
              <div className="flex justify-center items-center h-36 bg-gray-200 dark:bg-gray-700">
                <MdOutlineWork
                  size={50}
                  className="text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-medium mb-2 text-gray-900 dark:text-gray-100">
                  Permit to Work (PTW)
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Manage and issue permits to work ensuring safety and
                  compliance.
                </p>
              </div>
            </div>

            {/* Specialized Permits (SPTW) Card */}
            <div className="bg-white dark:bg-gray-800 shadow rounded overflow-hidden">
              <div className="flex justify-center items-center h-36 bg-gray-200 dark:bg-gray-700">
                <MdWorkspaces
                  size={50}
                  className="text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-medium mb-2 text-gray-900 dark:text-gray-100">
                  Specialized Permits (SPTW)
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Handle specialized permits for specific tasks and areas.
                </p>
              </div>
            </div>

            {/* RM Tickets Card */}
            <div className="bg-white dark:bg-gray-800 shadow rounded overflow-hidden">
              <div className="flex justify-center items-center h-36 bg-gray-200 dark:bg-gray-700">
                <GrHostMaintenance
                  size={50}
                  className="text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-medium mb-2 text-gray-900 dark:text-gray-100">
                  RM Tickets
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Handle reactive maintenance tickets aka work orders
                  seamlessly.
                </p>
              </div>
            </div>

            {/* PM Tickets Card */}
            <div className="bg-white dark:bg-gray-800 shadow rounded overflow-hidden">
              <div className="flex justify-center items-center h-36 bg-gray-200 dark:bg-gray-700">
                <GrVmMaintenance
                  size={50}
                  className="text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-medium mb-2 text-gray-900 dark:text-gray-100">
                  PM Tickets
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Manage preventive maintenance tickets aka work orders
                  effectively.
                </p>
              </div>
            </div>

            {/* Events Card */}
            <div className="bg-white dark:bg-gray-800 shadow rounded overflow-hidden">
              <div className="flex justify-center items-center h-36 bg-gray-200 dark:bg-gray-700">
                <MdEvent
                  size={50}
                  className="text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-medium mb-2 text-gray-900 dark:text-gray-100">
                  Events
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Track and manage maintenance events and activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
