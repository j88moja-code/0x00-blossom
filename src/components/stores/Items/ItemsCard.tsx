import React from "react";
import { MdDescription, MdOutlineCategory } from "react-icons/md";
import { FaComments } from "react-icons/fa";

import CustomCard from "../../common/CustomCard";
import type { ItemRead } from "../../../client";
import { GrStatusWarningSmall } from "react-icons/gr";

interface SpareCardProps {
  item: ItemRead;
}

const ItemCard: React.FC<SpareCardProps> = ({ item }) => {
  return (
    <CustomCard>
      <div className="grid grid-cols-1">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {item.item_code} - {item.name}
        </h4>
      </div>
      <div className="grid grid-cols-1 m-2">
        <MdDescription style={{ marginRight: "8px" }} />
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </div>
      <div className="grid grid-cols-6 gap-4 m-2">
        {/* <div className="col-span-3 ">
            <MdOutlineInventory style={{ marginRight: "8px" }} />
            <p className="text-sm text-muted-foreground">
              {item.quantity > 0 ? item.quantity : "Out of Stock"}
            </p>
          </div> */}
        <div className="col-span-3 ">
          <MdOutlineCategory style={{ marginRight: "8px" }} />
          <p className="text-sm text-muted-foreground">
            Category: {item.category_id}
          </p>
        </div>
        <div className="col-span-3 ">
          <GrStatusWarningSmall style={{ marginRight: "8px" }} />
          <p className="text-sm text-muted-foreground">
            Status: {item.is_active ? "Active" : "Inactive"}
          </p>
        </div>
      </div>
      <div className="flex">
        <FaComments style={{ marginRight: "8px" }} />
        <p className="text-sm text-muted-foreground">
          {item.remarks || "No comments"}
        </p>
      </div>
    </CustomCard>
  );
};

export default ItemCard;
