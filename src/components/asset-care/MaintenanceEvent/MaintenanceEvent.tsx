// import {
//   Table,
//   TableBody,
//   TableHead,
//   TableCaption,
//   TableCell,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { useDisclosure } from "../../../hooks/useDisclosure";
// import CustomCard from "../../common/CustomCard";

// import type { MaintenanceEvent } from "../../../client";
// import AddPlannedWorkToMaintenanceEvent from "./AddPlannedWorkToMaintenanceEvent";
// import { Button } from "@/components/ui/button";
// import { FaPlus } from "react-icons/fa";

// interface MaintenanceEventProps {
//   maintenanceEvent: MaintenanceEvent;
// }

// const MaintenanceEvent: React.FC<MaintenanceEventProps> = ({
//   maintenanceEvent,
// }) => {
//   const addPlannedWordToMaintenanceEvent = useDisclosure();
//   return (
//     <>
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16">
//         <Tabs defaultValue="manage-event" className="space-y-4">
//           <TabsList>
//             <TabsTrigger value="manage-event">Manage Event</TabsTrigger>
//             <TabsTrigger value="run-event">Run Event</TabsTrigger>
//           </TabsList>
//           <TabsContent value="manage-event">
//             <Button
//               variant="default"
//               onClick={() => addPlannedWordToMaintenanceEvent.open()}
//             >
//               <span className="flex items-center gap-2">
//                 <FaPlus /> Add Planned Work
//               </span>
//             </Button>
//             <AddPlannedWorkToMaintenanceEvent
//               open={addPlannedWordToMaintenanceEvent.isOpen}
//               onClose={addPlannedWordToMaintenanceEvent.close}
//               maintenanceEvent={maintenanceEvent}
//             />
//             <CustomCard>
//               <div className="flex justify-between gap-4">
//                 <div>
//                   <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
//                     Details
//                   </h4>
//                 </div>
//               </div>
//               <div className="grid grid-cols-1">
//                 <p className="text-sm text-muted-foreground">
//                   {maintenanceEvent.description}
//                 </p>
//               </div>
//               <div className="grid grid-cols-6 gap-4 m-2">
//                 <div className="col-span-3">
//                   <p className="text-sm text-muted-foreground">
//                     Start Date:{" "}
//                     {
//                       new Date(maintenanceEvent.planned_start)
//                         .toLocaleDateString("en-ZA")
//                         .split(",")[0]
//                     }
//                   </p>
//                 </div>
//                 <div className="col-span-3">
//                   <p className="text-sm text-muted-foreground">
//                     End Date:{" "}
//                     {
//                       new Date(maintenanceEvent.planned_end)
//                         .toLocaleDateString("en-ZA")
//                         .split(",")[0]
//                     }
//                   </p>
//                 </div>
//               </div>
//               <div className="grid grid-cols-3 gap-4 m-2">
//                 <div className="col-span-3">
//                   <p className="text-sm text-muted-foreground">
//                     Status:{" "}
//                     {maintenanceEvent.completed ? "Completed" : "Pending"}
//                   </p>
//                 </div>
//               </div>
//             </CustomCard>
//             <div className="flex justify-between gap-4 m-2">
//               <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
//                 Planned Work
//               </h4>
//               {maintenanceEvent?.maintenance_tickets &&
//               maintenanceEvent?.maintenance_tickets.length > 0 ? (
//                 <Table>
//                   <TableCaption>A list of planned work.</TableCaption>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Ticket Number</TableHead>
//                       <TableHead colSpan={7}>
//                         Work Performed/ To Be Performed
//                       </TableHead>
//                       <TableHead>Start Date</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {maintenanceEvent?.maintenance_tickets?.map((work) => (
//                       <TableRow key={work.id}>
//                         <TableCell>
//                           {work.maintenance_ticket.ticket_number}
//                         </TableCell>
//                         <TableCell colSpan={7}>
//                           {work.maintenance_ticket.work_performed}
//                         </TableCell>
//                         <TableCell>
//                           {new Date(
//                             work.maintenance_ticket.start_time
//                           ).toLocaleDateString("en-ZA")}
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               ) : (
//                 <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-red-500">
//                   No planned work
//                 </h4>
//               )}
//             </div>
//           </TabsContent>
//           <TabsContent value="run-event">
//             <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
//               Run Event
//             </h4>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </>
//   );
// };

// export default MaintenanceEvent;
