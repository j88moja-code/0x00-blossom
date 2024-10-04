import React from "react";
import {
  FaRegCalendarAlt,
  FaMapMarkerAlt,
  FaExclamationTriangle,
  FaShieldAlt,
} from "react-icons/fa";

import ActionsMenu from "../../common/ActionsMenu";
import CustomCard from "../../common/CustomCard";
import type { RiskAssessmentResponseModel } from "../../../client";
import { MdOutlineSevereCold } from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";

interface RiskAssessmentCardProps {
  assessment: RiskAssessmentResponseModel;
}

export const renderList = (items: string) => {
  return items.split(",").map((item, index) => (
    <li key={index} className="mb-1">
      {item.trim()}
    </li>
  ));
};

const RiskAssessmentCard: React.FC<RiskAssessmentCardProps> = ({
  assessment,
}) => {
  return (
    <CustomCard>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Assessor Name:{""}
            {assessment.assessor_name}
          </h4>
          <ActionsMenu type="Risk Assessment" value={assessment} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <FaRegCalendarAlt style={{ marginRight: "8px" }} />
            <span className="text-gray-700 dark:text-gray-300">
              Date: {new Date(assessment.date || "").toLocaleString()}
            </span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt style={{ marginRight: "8px" }} />
            <span className="text-gray-700 dark:text-gray-300">
              Location: {assessment.location}
            </span>
          </div>
        </div>
        <div className="mt-4">
          <div className="mb-2">
            <AiOutlineFileText className="mr-2 inline" />
            <strong className="text-gray-800 dark:text-gray-200">
              Description:
            </strong>
            <p className="text-gray-600 dark:text-gray-400">
              {assessment.description}
            </p>
          </div>
        </div>

        <div className="col-span-3">
          <div className="flex items-center mb-2">
            <FaExclamationTriangle style={{ marginRight: "8px" }} />
            <strong>Hazard/s:</strong>
          </div>
          <ul className="list-disc pl-6">{renderList(assessment.hazards)}</ul>
        </div>
        <div className="col-span-3">
          <div className="flex items-center mb-2">
            <FaShieldAlt style={{ marginRight: "8px" }} />
            <strong>Control/s:</strong>
          </div>
          <ul className="list-disc pl-6">{renderList(assessment.controls)}</ul>
        </div>

        <div className="flex items-center">
          <MdOutlineSevereCold style={{ marginRight: "8px" }} />
          <span className="text-gray-700 dark:text-gray-300">
            Severity: {assessment.severity}
          </span>
        </div>
      </div>
    </CustomCard>
  );
};

export default RiskAssessmentCard;
