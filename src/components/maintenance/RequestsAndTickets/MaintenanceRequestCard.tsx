import React from "react";
import {
  MdCall,
  MdDateRange,
  MdDescription,
  MdOutlineInventory,
} from "react-icons/md";
import { GrStatusInfo, GrValidate } from "react-icons/gr";
import { FiType } from "react-icons/fi";
import { MdClose, MdOutlineCheck } from "react-icons/md";

import type { MaintenanceRequest } from "@/client";

import CustomCard from "@/components/common/CustomCard";
import ActionsMenu from "@/components/common/ActionsMenu";

type MaintenanceRequestCardProps = {
  maintenanceRequest: MaintenanceRequest;
};

const MaintenanceRequestCard: React.FC<MaintenanceRequestCardProps> = ({
  maintenanceRequest,
}) => {
  return (
    <CustomCard>
      <div className="flex justify-between gap-4">
        <div>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {maintenanceRequest.rq_number} -{" "}
            {maintenanceRequest.department.name}
          </h4>
        </div>

        <div className="flex mr-8 gap-4">
          <ActionsMenu
            type="Request"
            value={maintenanceRequest as MaintenanceRequest}
          />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 m-2">
        <div className="col-span-3">
          <MdDescription style={{ marginRight: "8px" }} />
          Problem: {maintenanceRequest.description}
        </div>
        <div className="col-span-3">
          <MdDateRange style={{ marginRight: "8px" }} />
          Created At: {new Date(maintenanceRequest.created_at).toLocaleString()}
        </div>
      </div>
      <div className="grid grid-cols-9 gap-4 m-2">
        <div className="col-span-3">
          <MdOutlineInventory style={{ marginRight: "8px" }} />
          Asset Number: {maintenanceRequest.equipment.asset_number}
        </div>
        <div className="col-span-3">
          <FiType style={{ marginRight: "8px" }} />
          Type: {maintenanceRequest.type.name}
        </div>
        <div className="col-span-3">
          <GrStatusInfo style={{ marginRight: "8px" }} />
          Status: {maintenanceRequest.status.name}
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 m-2">
        <div className="col-span-3">
          <MdCall style={{ marginRight: "8px" }} />
          Call-out?:{" "}
          {maintenanceRequest.is_a_call_out ? (
            <div className="text-red-500">Yes</div>
          ) : (
            <div className="text-green-500">No</div>
          )}
        </div>
        <div className="col-span-3">
          <GrValidate style={{ marginRight: "8px" }} />
          Validated?:{" "}
          {maintenanceRequest.is_validated ? (
            <div className="text-green-500">
              <MdOutlineCheck size={18} />
            </div>
          ) : (
            <div className="text-red-500">
              <MdClose size={18} />
            </div>
          )}
        </div>
      </div>
    </CustomCard>
  );
};

export default MaintenanceRequestCard;
