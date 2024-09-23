import React from "react";
import {
  FaRegCalendarAlt,
  FaUserTie,
  FaBuilding,
  FaBriefcase,
} from "react-icons/fa";
import {
  MdDescription,
  MdLocalHospital,
  MdTimer,
  MdTransferWithinAStation,
} from "react-icons/md";
import type { OSHA300LogRead } from "@/client";
import CustomCard from "@/components/common/CustomCard";
import ActionsMenu from "@/components/common/ActionsMenu";

type OSHA300CardProps = {
  incidentData: OSHA300LogRead;
};

const OSHA300Card: React.FC<OSHA300CardProps> = ({ incidentData }) => {
  return (
    <CustomCard>
      <div className="p-4">
        {/* Header with log number and actions */}
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Incident #{incidentData.log_number} - {incidentData.incident_type}
          </h4>
          <ActionsMenu type="OSHA 300" value={incidentData} />
        </div>

        {/* Incident details grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Incident Date */}
          <div className="flex items-center">
            <FaRegCalendarAlt className="mr-2 text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300">
              Incident Date:{" "}
              {new Date(incidentData.incident_date || "").toLocaleString()}
            </span>
          </div>

          {/* Employee Name */}
          <div className="flex items-center">
            <FaUserTie className="mr-2 text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300">
              Employee: {incidentData.employee_name}
            </span>
          </div>

          {/* Job Title */}
          <div className="flex items-center">
            <FaBriefcase className="mr-2 text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300">
              Job Title: {incidentData.job_title}
            </span>
          </div>

          {/* Department */}
          <div className="flex items-center">
            <FaBuilding className="mr-2 text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300">
              Department: {incidentData.department}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center">
            <FaBuilding className="mr-2 text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300">
              Location: {incidentData.location}
            </span>
          </div>

          {/* Treatment Type */}
          <div className="flex items-center">
            <MdLocalHospital className="mr-2 text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300">
              Treatment Type: {incidentData.treatment_type}{" "}
              {incidentData.is_treated ? `(Treated)` : `(Not Treated)`}
            </span>
          </div>

          {/* Lost Time */}
          <div className="flex items-center">
            <MdTimer className="mr-2 text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300">
              Lost Time: {incidentData.lost_time ? "Yes" : "No"}
            </span>
          </div>

          {/* Lost Job Transfer */}
          <div className="flex items-center">
            <MdTransferWithinAStation className="mr-2 text-blue-500" />
            <span className="text-gray-700 dark:text-gray-300">
              Job Transfer: {incidentData.lost_job_transfer ? "Yes" : "No"}
            </span>
          </div>
        </div>

        {/* Description and Remarks */}
        <div className="mt-4">
          <div className="mb-2">
            <MdDescription className="mr-2 inline text-blue-500" />
            <strong className="text-gray-800 dark:text-gray-200">
              Description:
            </strong>
            <p className="text-gray-600 dark:text-gray-400">
              {incidentData.description}
            </p>
          </div>

          <div className="mb-2">
            <strong className="text-gray-800 dark:text-gray-200">
              Return to Work Date:
            </strong>
            <p className="text-gray-600 dark:text-gray-400">
              {new Date(
                incidentData.return_to_work_date || ""
              ).toLocaleString()}
            </p>
          </div>

          <div className="mb-2">
            <strong className="text-gray-800 dark:text-gray-200">
              Lost Workdays:
            </strong>
            <p className="text-gray-600 dark:text-gray-400">
              {incidentData.lost_workdays}
            </p>
          </div>
        </div>
      </div>
    </CustomCard>
  );
};

export default OSHA300Card;
