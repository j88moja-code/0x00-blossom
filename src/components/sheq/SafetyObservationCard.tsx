import { FaRegCalendarAlt, FaMapMarkerAlt, FaCheck } from "react-icons/fa";

import { type SafetyObservationResponseModel } from "../../client";
import ActionsMenu from "../common/ActionsMenu";
import CustomCard from "../common/CustomCard";
import {
  MdOutlineSevereCold,
  MdClose,
  MdSupervisorAccount,
} from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";

interface SafetyObservationCardProps {
  observation: SafetyObservationResponseModel;
}

const SafetyObservationCard: React.FC<SafetyObservationCardProps> = ({
  observation,
}) => {
  return (
    <CustomCard>
      <div className="flex justify-between gap-4">
        <div className="flex items-center">
          <MdSupervisorAccount className="mr-2 inline" />
          <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Observer: {observation.observer_name}
          </span>
        </div>
        <div className="flex mr-8 gap-4">
          <ActionsMenu type="Safety Observation" value={observation} />
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="flex items-center">
          <div className="flex items-center">
            <FaRegCalendarAlt style={{ marginRight: "8px" }} />
            <span className="text-gray-700 dark:text-gray-300">
              Date: {new Date(observation.date).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt style={{ marginRight: "8px" }} />
            <span className="text-gray-700 dark:text-gray-300">
              Location: {observation.location}
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
              {observation.description}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <p className="text-sm text-muted-foreground">
          <MdOutlineSevereCold style={{ marginRight: "8px" }} />
          Severity: {observation.severity}
        </p>
        <p className="text-sm text-muted-foreground">
          {observation.status === "open" ? (
            <FaCheck style={{ marginRight: "8px" }} />
          ) : (
            <MdClose style={{ marginRight: "8px" }} />
          )}
          Status: {observation.status}
        </p>
      </div>
    </CustomCard>
  );
};

export default SafetyObservationCard;
