import React from "react";
import {
  FaRegCalendarAlt,
  FaExclamationTriangle,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdSupervisorAccount, MdReportProblem } from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";
import type { SHEIncidentRead } from "@/client";
import CustomCard from "@/components/common/CustomCard";
import ActionsMenu from "@/components/common/ActionsMenu";

type IncidentCardProps = {
  incidentData: SHEIncidentRead;
};

const IncidentCard: React.FC<IncidentCardProps> = ({ incidentData }) => {
  return (
    <CustomCard>
      <div className="p-4">
        {/* Header with log number and actions */}
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Incident #{incidentData.log_number} - {incidentData.incident_type}
          </h4>
          <ActionsMenu type="SHE Incident" value={incidentData} />
        </div>

        {/* Incident details grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Date */}
          <div className="flex items-center">
            <FaRegCalendarAlt className="mr-2 text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300">
              Date:{" "}
              {new Date(incidentData?.incident_date || "").toLocaleString()}
            </span>
          </div>

          {/* Employee Name */}
          <div className="flex items-center">
            <MdSupervisorAccount className="mr-2 text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300">
              Employee: {incidentData.employee_name}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300">
              Location: {incidentData.incident_location}
            </span>
          </div>

          {/* Incident Reported */}
          <div className="flex items-center">
            <MdReportProblem
              className={`mr-2 ${incidentData.incident_reported ? "text-green-500" : "text-red-500"}`}
            />
            <span className="text-gray-700 dark:text-gray-300">
              Reported: {incidentData.incident_reported ? "Yes" : "No"}
            </span>
          </div>

          {/* Injured */}
          <div className="flex items-center">
            <FaExclamationTriangle className="mr-2 text-red-500" />
            <span className="text-gray-700 dark:text-gray-300">
              Injured: {incidentData.incident_injured}
            </span>
          </div>

          {/* Witness */}
          <div className="flex items-center">
            <MdSupervisorAccount className="mr-2 text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300">
              Witness: {incidentData.incident_witness}
            </span>
          </div>
        </div>

        {/* Description and Remarks */}
        <div className="mt-4">
          <div className="mb-2">
            <AiOutlineFileText className="mr-2 inline text-blue-500" />
            <strong className="text-gray-800 dark:text-gray-200">
              Incident Title:
            </strong>{" "}
            {incidentData.incident_title}
          </div>
          <div className="mb-2">
            <strong className="text-gray-800 dark:text-gray-200">
              Description:
            </strong>
            <p className="text-gray-600 dark:text-gray-400">
              {incidentData.incident_description}
            </p>
          </div>
          <div>
            <strong className="text-gray-800 dark:text-gray-200">
              Remarks:
            </strong>
            <p className="text-gray-600 dark:text-gray-400">
              {incidentData.incident_remarks
                ? new Date(incidentData.incident_remarks).toLocaleString()
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </CustomCard>
  );
};

export default IncidentCard;
