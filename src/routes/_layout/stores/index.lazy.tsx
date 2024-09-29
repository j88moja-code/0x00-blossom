import { createLazyFileRoute } from "@tanstack/react-router";
import { BiSolidComponent } from "react-icons/bi";
import { MdInventory, MdRequestQuote } from "react-icons/md";
import { ContentLayout } from "@/components/common/layout/ContentLayout";
import useTitle from "@/hooks/useTitle";

export const Route = createLazyFileRoute("/_layout/stores/")({
  component: StoresIndex,
});

function StoresIndex() {
  useTitle("Stores");
  return (
    <ContentLayout title="Stores">
      <div className="container mx-auto my-8 px-4 lg:px-0">
        <div className="flex-grow">
          <h1 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Stores
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 shadow rounded overflow-hidden">
              <div className="flex justify-center items-center h-36 bg-gray-200 dark:bg-gray-700">
                <BiSolidComponent
                  size={50}
                  className="text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-medium mb-2 text-gray-900 dark:text-gray-100">
                  Items
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Manage and track inventory items effectively.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow rounded overflow-hidden">
              <div className="flex justify-center items-center h-36 bg-gray-200 dark:bg-gray-700">
                <MdInventory
                  size={50}
                  className="text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-medium mb-2 text-gray-900 dark:text-gray-100">
                  Inventory
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Keep track of your inventory levels and stock.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow rounded overflow-hidden">
              <div className="flex justify-center items-center h-36 bg-gray-200 dark:bg-gray-700">
                <MdRequestQuote
                  size={50}
                  className="text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-medium mb-2 text-gray-900 dark:text-gray-100">
                  Requisitions
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Manage and track requisitions seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
