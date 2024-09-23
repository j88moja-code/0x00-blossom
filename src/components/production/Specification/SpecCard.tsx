import React from "react";
import { MdCheckCircle, MdCancel, MdDescription } from "react-icons/md";

import ActionsMenu from "../../common/ActionsMenu";
import CustomCard from "../../common/CustomCard";
import type { ProductSpecification } from "../../../client";
import { FaComments } from "react-icons/fa";

interface SpecCardProps {
  entry: ProductSpecification;
}

const SpecCard: React.FC<SpecCardProps> = ({ entry }) => {
  return (
    <CustomCard>
      <div className="flex justify-between gap-4">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {entry.product_code}
        </h4>
        <div className="flex mr-8 gap-4">
          <ActionsMenu
            type="Product Specification"
            value={entry as ProductSpecification}
          />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 m-2">
        <div className="col-span-3">
          <MdDescription style={{ marginRight: "8px" }} />
          <p className="text-sm text-muted-foreground">
            Description: {entry.description}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-21 gap-4 m-2">
        <div className="col-span-3">
          <p className="text-sm text-muted-foreground">
            L Value: {entry.L_value_low} - {entry.L_value_high} (Target:{" "}
            {entry.L_value_target})
          </p>
        </div>
        <div className="col-span-3">
          <p className="text-sm text-muted-foreground">
            Brightness: {entry.brightness_low} - {entry.brightness_high}{" "}
            (Target: {entry.brightness_target})
          </p>
        </div>
        <div className="col-span-3">
          <p className="text-sm text-muted-foreground">
            CD Tensile: {entry.cd_tensile_low} - {entry.cd_tensile_high}{" "}
            (Target: {entry.cd_tensile_target})
          </p>
        </div>
        <div className="col-span-3">
          <p className="text-sm text-muted-foreground">
            MD Tensile: {entry.md_tensile_low} - {entry.md_tensile_high}{" "}
            (Target: {entry.md_tensile_target})
          </p>
        </div>
        <div className="col-span-3">
          <p className="text-sm text-muted-foreground">
            Grammage: {entry.grammage_low} - {entry.grammage_high} (Target:{" "}
            {entry.grammage_target})
          </p>
        </div>
        <div className="col-span-3">
          <p className="text-sm text-muted-foreground">
            Stretch: {entry.stretch_low} - {entry.stretch_high} (Target:{" "}
            {entry.stretch_target})
          </p>
        </div>
        <div className="col-span-3">
          <p className="text-sm text-muted-foreground">
            Active:{" "}
            {entry.is_active ? (
              <MdCheckCircle color="green" />
            ) : (
              <MdCancel color="red" />
            )}
          </p>
        </div>
        <div className="col-span-3">
          <p className="text-sm text-muted-foreground">
            Wet Strength:{" "}
            {entry.is_wet_strength ? (
              <MdCheckCircle color="green" />
            ) : (
              <MdCancel color="red" />
            )}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 m-2">
        <FaComments style={{ marginRight: "8px" }} />
        <p className="text-sm text-muted-foreground">
          Remarks: {entry.remarks}
        </p>
      </div>
    </CustomCard>
  );
};

export default SpecCard;
