import { ContentLayout } from "@/components/common/layout/ContentLayout";
import { createLazyFileRoute } from "@tanstack/react-router";
import { FaClipboardCheck } from "react-icons/fa";
import { FaTowerObservation } from "react-icons/fa6";
import { LiaGlassesSolid } from "react-icons/lia";
import useTitle from "@/hooks/useTitle";

export const Route = createLazyFileRoute("/_layout/sheq/")({
  component: SafetyIndex,
});

function SafetyIndex() {
  useTitle("SHEQ");
  return (
    <ContentLayout title="SHEQ">
      <div className="container mx-auto my-8 px-4 lg:px-0">
        <div className="flex-grow">
          <h1 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Safety
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 shadow rounded overflow-hidden">
              <div className="flex justify-center items-center h-36 bg-gray-200 dark:bg-gray-700">
                <FaTowerObservation
                  size={50}
                  className="text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-medium mb-2 text-gray-900 dark:text-gray-100">
                  Observations
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Record and monitor safety observations to ensure a safe
                  working environment.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow rounded overflow-hidden">
              <div className="flex justify-center items-center h-36 bg-gray-200 dark:bg-gray-700">
                <LiaGlassesSolid
                  size={50}
                  className="text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-medium mb-2 text-gray-900 dark:text-gray-100">
                  Risk Assessments
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Conduct risk assessments to identify and mitigate potential
                  hazards.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow rounded overflow-hidden">
              <div className="flex justify-center items-center h-36 bg-gray-200 dark:bg-gray-700">
                <FaClipboardCheck
                  size={50}
                  className="text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-medium mb-2 text-gray-900 dark:text-gray-100">
                  Compliance
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Ensure compliance with safety regulations and standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
