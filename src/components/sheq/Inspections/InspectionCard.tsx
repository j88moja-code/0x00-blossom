import React from "react";
import { FaRegCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { MdSupervisorAccount, MdDescription } from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";
import type { SHEQInspectionRead } from "@/client";
import CustomCard from "@/components/common/CustomCard";
import ActionsMenu from "@/components/common/ActionsMenu";

type InspectionCardProps = {
  inspectionData: SHEQInspectionRead;
};

const InspectionCard: React.FC<InspectionCardProps> = ({ inspectionData }) => {
  return (
    <CustomCard>
      <div className="p-4">
        {/* Header with log number and actions */}
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Inspection #{inspectionData.log_number} -{" "}
            {inspectionData.inspection_type}
          </h4>
          <ActionsMenu type="SHE Inspection" value={inspectionData} />
        </div>

        {/* Inspection details grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Date */}
          <div className="flex items-center">
            <FaRegCalendarAlt style={{ marginRight: "8px" }} />
            <span className="text-gray-700 dark:text-gray-300">
              Date:{" "}
              {new Date(inspectionData.inspection_date || "").toLocaleString()}
            </span>
          </div>

          {/* Inspector */}
          <div className="flex items-center">
            <MdSupervisorAccount style={{ marginRight: "8px" }} />
            <span className="text-gray-700 dark:text-gray-300">
              Inspector: {inspectionData.inspection_inspector}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center">
            <FaMapMarkerAlt style={{ marginRight: "8px" }} />
            <span className="text-gray-700 dark:text-gray-300">
              Location: {inspectionData.inspection_location}
            </span>
          </div>

          {/* Duration */}
          <div className="flex items-center">
            <FaClock style={{ marginRight: "8px" }} />
            <span className="text-gray-700 dark:text-gray-300">
              Duration: {inspectionData.inspection_duration} hour(s)
            </span>
          </div>
        </div>

        {/* Description and Remarks */}
        <div className="mt-4">
          <div className="mb-2">
            <AiOutlineFileText className="mr-2 inline" />
            <strong className="text-gray-800 dark:text-gray-200">
              Description:
            </strong>
            <p className="text-gray-600 dark:text-gray-400">
              {inspectionData.inspection_description}
            </p>
          </div>
          <div>
            <MdDescription className="mr-2 inline" />
            <strong className="text-gray-800 dark:text-gray-200">
              Remarks:
            </strong>
            <p className="text-gray-600 dark:text-gray-400">
              {inspectionData.inspection_remarks}
            </p>
          </div>
        </div>
      </div>
    </CustomCard>
  );
};

export default InspectionCard;
