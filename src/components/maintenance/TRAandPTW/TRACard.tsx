import {
  FaRegCalendarAlt,
  FaExclamationTriangle,
  FaShieldAlt,
} from "react-icons/fa";
import { MdSupervisorAccount } from "react-icons/md";
import CustomCard from "@/components/common/CustomCard";
import { GrTask } from "react-icons/gr";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
//   TooltipProvider,
// } from "@/components/ui/tooltip";
import ActionsMenu from "@/components/common/ActionsMenu";

import type { MaintenanceTRA } from "@/client";

interface RiskAssessmentCardProps {
  maintenanceTRA: MaintenanceTRA;
}
export const renderList = (items: string) => {
  return items.split(",").map((item, index) => (
    <li key={index} className="mb-1">
      {item.trim()}
    </li>
  ));
};

export default function RiskAssessmentCard({
  maintenanceTRA,
}: RiskAssessmentCardProps) {
  return (
    <CustomCard>
      <div className="mr-4">
        <div className="flex justify-items-start">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {maintenanceTRA.ra_number} -{" "}
            {maintenanceTRA.maintenance_ticket.ticket_number}
          </h4>
          <ActionsMenu type="TRA" value={maintenanceTRA as MaintenanceTRA} />
        </div>
        <div className="grid grid-cols-6 gap-4 m-2">
          <div className="col-span-3">
            <FaRegCalendarAlt style={{ marginRight: "8px" }} />
            Date: {new Date(maintenanceTRA.created_at).toLocaleString()}
          </div>
          <div className="col-span-3">
            <MdSupervisorAccount style={{ marginRight: "8px" }} />
            Supervisor: {maintenanceTRA.supervisor}
          </div>
        </div>
        <div className="grid grid-cols-9 gap-4">
          <div className="col-span-3">
            <div className="flex items-center mb-2">
              <GrTask style={{ marginRight: "8px" }} />
              <strong>Step/s:</strong>
            </div>
            <ul className="list-disc pl-6">
              {renderList(maintenanceTRA.steps)}
            </ul>
          </div>

          <div className="col-span-3">
            <div className="flex items-center mb-2">
              <FaExclamationTriangle style={{ marginRight: "8px" }} />
              <strong>Hazard/s:</strong>
            </div>
            <ul className="list-disc pl-6">
              {renderList(maintenanceTRA.hazards)}
            </ul>
          </div>

          <div className="col-span-3">
            <div className="flex items-center mb-2">
              <FaShieldAlt style={{ marginRight: "8px" }} />
              <strong>Control/s:</strong>
            </div>
            <ul className="list-disc pl-6">
              {renderList(maintenanceTRA.controls)}
            </ul>
          </div>
        </div>
      </div>
    </CustomCard>
  );
}
