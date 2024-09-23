import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  // TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import type { ProductionLog, ReelRead } from "../../../client";
import LoggerNavbar from "./LoggerNavbar";
import ELoggerStats from "./eLoggerStats";
import ReelCard from "./ReelCard";

interface ProdEventLoggerProps {
  log: ProductionLog;
}

const ELogger: React.FC<ProdEventLoggerProps> = ({ log }) => {
  return (
    <div className="w-full">
      {/* Stats Section */}
      <div className="mb-3">
        <ELoggerStats kanban={log.kanban} log={log} />
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="reels">
        <TabsList className="border-b border-gray-200 mb-4">
          <TabsTrigger value="reels">Reels</TabsTrigger>
          <TabsTrigger value="downtime">Downtime</TabsTrigger>
          <TabsTrigger value="stock-prep-downtime">
            Stock Prep Downtime
          </TabsTrigger>
        </TabsList>

        {/* Reels Tab */}
        <TabsContent value="reels">
          <div className="mt-3">
            <LoggerNavbar
              productionLog={log}
              type="Reel"
              disabled={log.kanban.completed}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {log.reels && log.reels.length > 0 ? (
                log.reels.map((reel: ReelRead) => (
                  <div key={reel.id}>
                    <ReelCard reel={reel} log={log} />
                  </div>
                ))
              ) : (
                <p className="text-lg font-semibold">
                  No Reels Added Yet for {log.log_number}
                </p>
              )}
            </div>
          </div>
        </TabsContent>

        {/* Downtime Tab */}
        <TabsContent value="downtime">
          <div className="mt-3">
            <LoggerNavbar
              productionLog={log}
              type="Downtime"
              disabled={log.kanban.completed}
            />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Equipment ID</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Start</TableHead>
                  <TableHead>End</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {log.downtime && log.downtime.length > 0 ? (
                  log.downtime.map((dt) => (
                    <TableRow key={dt.id}>
                      <TableCell>{dt.equipment_id}</TableCell>
                      <TableCell>
                        {dt.start_time && dt.end_time
                          ? `${Math.floor(
                              (new Date(dt.end_time).getTime() -
                                new Date(dt.start_time).getTime()) /
                                60000
                            )} minutes`
                          : "N/A"}
                      </TableCell>
                      <TableCell>
                        {new Date(dt.start_time).toLocaleString("en-ZA")}
                      </TableCell>
                      <TableCell>
                        {new Date(dt?.end_time || Date.now()).toLocaleString(
                          "en-ZA"
                        )}
                      </TableCell>
                      <TableCell>{dt.department}</TableCell>
                      <TableCell>{dt.description}</TableCell>
                      <TableCell>{/* Add Actions */}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7}>
                      No Downtimes Added Yet for {log.log_number}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* Stock Prep Downtime Tab */}
        <TabsContent value="stock-prep-downtime">
          <div className="mt-3">
            <LoggerNavbar
              productionLog={log}
              type="Stock Prep Downtime"
              disabled={log.kanban.completed}
            />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Equipment ID</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Start</TableHead>
                  <TableHead>End</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {log.stock_prep_downtime &&
                log.stock_prep_downtime.length > 0 ? (
                  log.stock_prep_downtime.map((dt) => (
                    <TableRow key={dt.id}>
                      <TableCell>{dt.equipment_id}</TableCell>
                      <TableCell>
                        {dt.start_time && dt.end_time
                          ? `${Math.floor(
                              (new Date(dt.end_time).getTime() -
                                new Date(dt.start_time).getTime()) /
                                60000
                            )} minutes`
                          : "N/A"}
                      </TableCell>
                      <TableCell>
                        {new Date(dt.start_time).toLocaleString("en-ZA")}
                      </TableCell>
                      <TableCell>
                        {new Date(dt?.end_time || Date.now()).toLocaleString(
                          "en-ZA"
                        )}
                      </TableCell>
                      <TableCell>{dt.department}</TableCell>
                      <TableCell>{dt.description}</TableCell>
                      <TableCell>{/* Add Actions */}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7}>
                      No Downtimes Added Yet for {log.log_number}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ELogger;
