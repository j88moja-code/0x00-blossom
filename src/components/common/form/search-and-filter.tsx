import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type SearchAndFilterProps = {
  search: any;
  handleDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClearFilters: () => void;
  //   isMobile: boolean;
};

const FormComponent: React.FC<SearchAndFilterProps> = ({
  search,
  handleDateChange,
  handleSearchChange,
  handleClearFilters,
}) => {
  return (
    <div className="p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Start Date */}
        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Start Date
          </label>
          <Input
            type="date"
            name="start_date"
            value={search.start_date}
            onChange={handleDateChange}
          />
        </div>

        {/* End Date */}
        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            End Date
          </label>
          <Input
            type="date"
            name="end_date"
            value={search.end_date}
            onChange={handleDateChange}
          />
        </div>

        {/* Search */}
        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Search
          </label>
          <Input
            type="text"
            name="search"
            value={search.search}
            onChange={handleSearchChange}
          />
        </div>

        {/* Completed Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Completed Status
          </label>
          <select
            name="completed"
            className="border dark:bg-gray-700 dark:text-gray-300 text-gray-700 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search.completed}
            // @ts-ignore
            onChange={handleSearchChange}
          >
            <option
              className="dark:bg-gray-700 dark:text-gray-300 text-gray-700 "
              value=""
            >
              All
            </option>
            <option
              className="dark:bg-gray-700 dark:text-gray-300 text-gray-700 "
              value="true"
            >
              Completed
            </option>
            <option
              className="dark:bg-gray-700 dark:text-gray-300 text-gray-700 "
              value="false"
            >
              Not Completed
            </option>
          </select>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Started Status
          </label>
          <select
            name="started"
            className="border dark:bg-gray-700 dark:text-gray-300 text-gray-700 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search.started}
            // @ts-ignore
            onChange={handleSearchChange}
          >
            <option value="">All</option>
            <option value="true">Started</option>
            <option value="false">Not Started</option>
          </select>
        </div>

        {/* Clear Filters Button */}
        <div className="flex justify-end">
          <Button className={`w-full sm:w-auto`} onClick={handleClearFilters}>
            Clear Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
