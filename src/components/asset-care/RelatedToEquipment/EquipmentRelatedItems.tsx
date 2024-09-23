import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { EquipmentInDB } from "../../../client";
import EquipmentRelatedItemsNavbar from "./Navbar";
import MaintenanceRequestCard from "@/components/maintenance/RequestsAndTickets/MaintenanceRequestCard";

interface EquipmentRelatedItemsProps {
  equipment: EquipmentInDB;
}

const EquipmentRelatedItems: React.FC<EquipmentRelatedItemsProps> = ({
  equipment,
}) => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16">
        <Tabs defaultValue="requests" className="space-y-4">
          <TabsList>
            <TabsTrigger value="requests">Service Requests</TabsTrigger>
            <TabsTrigger value="downtimes">Downtimes</TabsTrigger>
          </TabsList>
          <TabsContent value="requests">
            <div className="space-y-4">
              <EquipmentRelatedItemsNavbar
                equipment={equipment}
                type="Request"
              />
              <div className="grid grid-cols-1 gap-4">
                {equipment.maintenance_requests &&
                equipment.maintenance_requests.length > 0 ? (
                  equipment.maintenance_requests.map((maintenanceRequest) => (
                    <MaintenanceRequestCard
                      key={maintenanceRequest.id}
                      // @ts-ignore
                      maintenanceRequest={maintenanceRequest}
                    />
                  ))
                ) : (
                  <p className="text-center">
                    No service requests found for {equipment.name}
                  </p>
                )}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="downtimes">
            {equipment.location === "Paper machine" ? (
              equipment.machine_downtimes &&
              equipment.machine_downtimes.length > 0 ? (
                <Table>
                  <TableCaption>
                    A list of maintenance downtimes for {equipment.name}
                  </TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Duration</TableHead>
                      <TableHead>Start</TableHead>
                      <TableHead>End</TableHead>
                      <TableHead>Deparment</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {equipment.machine_downtimes.map((downtime) => (
                      <TableRow key={downtime.id}>
                        <TableCell>
                          {downtime.start_time && downtime.end_time
                            ? // Calculate the duration in minutes
                              `${Math.floor(
                                (new Date(downtime.end_time).getTime() -
                                  new Date(downtime.start_time).getTime()) /
                                  60000
                              )} minutes`
                            : // Display a fallback message if either time is missing
                              "N/A"}
                        </TableCell>
                        <TableCell>
                          {new Date(downtime.start_time).toLocaleString(
                            "en-ZA"
                          )}
                        </TableCell>
                        <TableCell>
                          {new Date(
                            downtime?.end_time || Date.now()
                          ).toLocaleString("en-ZA")}
                        </TableCell>
                        <TableCell>{downtime.department}</TableCell>
                        <TableCell>{downtime.description}</TableCell>
                        <TableCell>
                          {/* <ActionsMenu
                  downtime={downtime}
                  equipment={equipment}
                  type="Downtime"
                /> */}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <p className="text-center">
                  No maintenance downtimes found for {equipment.name}
                </p>
              )
            ) : equipment.stock_prep_downtimes &&
              equipment.stock_prep_downtimes.length > 0 ? (
              <Table>
                <TableCaption>
                  A list of maintenance downtimes for Stock Prep. Equipment
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Duration</TableHead>
                    <TableHead>Start</TableHead>
                    <TableHead>End</TableHead>
                    <TableHead>Deparment</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {equipment.stock_prep_downtimes.map((downtime) => (
                    <TableRow key={downtime.id}>
                      <TableCell>
                        {downtime.start_time && downtime.end_time
                          ? // Calculate the duration in minutes
                            `${Math.floor(
                              (new Date(downtime.end_time).getTime() -
                                new Date(downtime.start_time).getTime()) /
                                60000
                            )} minutes`
                          : // Display a fallback message if either time is missing
                            "N/A"}
                      </TableCell>
                      <TableCell>
                        {new Date(downtime.start_time).toLocaleString("en-ZA")}
                      </TableCell>
                      <TableCell>
                        {new Date(
                          downtime?.end_time || Date.now()
                        ).toLocaleString("en-ZA")}
                      </TableCell>
                      <TableCell>{downtime.department}</TableCell>
                      <TableCell>{downtime.description}</TableCell>
                      <TableCell>
                        {/* <ActionsMenu
                  downtime={downtime}
                  equipment={equipment}
                  type="Downtime"
                /> */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <p className="text-center">
                No maintenance downtimes found for {equipment.name}
              </p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};
export default EquipmentRelatedItems;
