import {
  Table,
  TableBody,
  TableHead,
  TableCaption,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import type { ProcessVisor } from "../../../client";
import PVNavbar from "./PVNavbar";
import { MdCancel, MdCheckCircle } from "react-icons/md";

interface ProcessVisorProps {
  processVisor: ProcessVisor;
}

const ProcessVisor: React.FC<ProcessVisorProps> = ({ processVisor }) => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16">
        <Tabs defaultValue="M/C AFS DCS Checks" className="space-y-4">
          <TabsList>
            <TabsTrigger value="M/C AFS DCS Checks">
              M/C AFS DCS Checks
            </TabsTrigger>
            <TabsTrigger value="M/C CFS DCS Checks">
              M/C CFS DCS Checks
            </TabsTrigger>
            <TabsTrigger value="M/c DES DCS Check">
              M/c DES DCS Check
            </TabsTrigger>
            <TabsTrigger value="Remarks on DCS Related Checks">
              Remarks on DCS Related Checks
            </TabsTrigger>
            <TabsTrigger value="DE Section Checks">
              DE Section Checks
            </TabsTrigger>
            <TabsTrigger value="Crescent Former Field Checks">
              Crescent Former Field Checks
            </TabsTrigger>
            <TabsTrigger value="Housekeeping Field Checks">
              Housekeeping Field Checks
            </TabsTrigger>
            <TabsTrigger value="Remarks on Field Checks">
              Remarks on Field Checks
            </TabsTrigger>
          </TabsList>
          <PVNavbar
            processVisor={processVisor}
            type="M/c AFS DCS Check"
            disabled={processVisor.completed}
          />
          <TabsContent value="M/C AFS DCS Checks">
            <Table>
              <TableCaption>A list of M/C AFS DCS Checks.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Fresh H20 Tank Level (%)</TableHead>
                  <TableHead>M/c 2 Consistency (%)</TableHead>
                  <TableHead>Stock Flow Valve Position (%)</TableHead>
                  <TableHead>Stock Flow Rate (lpm)</TableHead>
                  <TableHead>Fan Pump Motor Speed (rpm)</TableHead>
                  <TableHead>Fan Pump Motor Current Load (%)</TableHead>
                  <TableHead>WW1 Make-up Open?</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {processVisor.dcs_related_checks &&
                processVisor.dcs_related_checks.length > 0 ? (
                  processVisor.dcs_related_checks.map((dcs_related_check) => (
                    <TableRow key={dcs_related_check.id}>
                      <TableCell>
                        {dcs_related_check.fresh_cold_water_tank_level}
                      </TableCell>
                      <TableCell>
                        {dcs_related_check.machine_chest2_consistency}
                      </TableCell>
                      <TableCell>
                        {dcs_related_check.stock_flow_valve_opening}
                      </TableCell>
                      <TableCell>{dcs_related_check.stock_flow}</TableCell>
                      <TableCell>
                        {dcs_related_check.fan_pump_motor_speed}
                      </TableCell>
                      <TableCell>
                        {dcs_related_check.fan_pump_motor_current_load}
                      </TableCell>
                      <TableCell>
                        {dcs_related_check.ww1_makeup_open ? (
                          <MdCancel style={{ color: "red" }} />
                        ) : (
                          <MdCheckCircle style={{ color: "green" }} />
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7}>No Data</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="M/C CFS DCS Checks">
            <PVNavbar
              processVisor={processVisor}
              type="M/c CFS DCS Check"
              disabled={processVisor.completed}
            />
            <Table>
              <TableCaption>A list of M/c CFS DCS Checks.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Slice Opening (mm)</TableHead>
                  <TableHead>J/W Ratio</TableHead>
                  <TableHead>H/B Pressure (mmBar)</TableHead>
                  <TableHead>Trm Nozzle Pressure (Bar)</TableHead>
                  <TableHead>U/B Pressure (kPa)</TableHead>
                  <TableHead>SUPR DS Air Pressure (kPa)</TableHead>
                  <TableHead>SUPR NDS Air Pressure (kPa)</TableHead>
                  <TableHead>SUPR DS Nip Loading (N.m)</TableHead>
                  <TableHead>SUPR NDS Nip Loading (N.m)</TableHead>
                  <TableHead>2ndP DS Air Pressure (kPa)</TableHead>
                  <TableHead>2ndP NDS Air Pressure (kPa)</TableHead>
                  <TableHead>2ndP DS Nip Loading (N.m)</TableHead>
                  <TableHead>2ndP NDS Nip Loading (N.m)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {processVisor.dcs_related_checks &&
                processVisor.dcs_related_checks.length > 0 ? (
                  processVisor.dcs_related_checks.map((dcs_related_check) => (
                    <TableRow key={dcs_related_check.id}>
                      <TableCell>{dcs_related_check.slice_opening}</TableCell>
                      <TableCell>
                        {dcs_related_check.jet_to_wire_ratio}
                      </TableCell>
                      <TableCell>
                        {dcs_related_check.headbox_pressure}
                      </TableCell>
                      <TableCell>
                        {dcs_related_check.trim_nozzle_pressure}
                      </TableCell>
                      <TableCell>
                        {dcs_related_check.uhle_box_pressure}
                      </TableCell>
                      <TableCell>
                        {dcs_related_check.spr_ds_air_pressure}
                      </TableCell>
                      <TableCell>
                        {dcs_related_check.spr_nds_air_pressure}
                      </TableCell>
                      <TableCell>
                        {dcs_related_check.spr_ds_nip_loading}
                      </TableCell>
                      <TableCell>
                        {dcs_related_check.spr_nds_nip_loading}
                      </TableCell>
                      <TableCell>
                        {dcs_related_check.second_press_ds_air_pressure}
                      </TableCell>
                      <TableCell>
                        {dcs_related_check.second_press_nds_air_pressure}
                      </TableCell>
                      <TableCell>
                        {dcs_related_check.second_press_ds_nip_loading}
                      </TableCell>
                      <TableCell>
                        {dcs_related_check.second_press_nds_nip_loading}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={13}>No Data</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="M/C DES DCS Checks">
            <PVNavbar
              processVisor={processVisor}
              type="M/c DES DCS Check"
              disabled={processVisor.completed}
            />
            <Table>
              <TableCaption>A list of M/c DES DCS Checks.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Fresh H20 Tank Level (%)</TableHead>
                  <TableHead>M/c 2 Consistency (%)</TableHead>
                  <TableHead>Stock Flow Valve Position (%)</TableHead>
                  <TableHead>Stock Flow Rate (lpm)</TableHead>
                  <TableHead>Fan Pump Motor Speed (rpm)</TableHead>
                  <TableHead>Fan Pump Motor Current Load (%)</TableHead>
                  <TableHead>WW1 Make-up Open?</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {processVisor.dcs_related_checks &&
                processVisor.dcs_related_checks.length > 0 ? (
                  processVisor.dcs_related_checks.map((dcs_related_check) => (
                    <TableRow key={dcs_related_check.id}>
                      <TableCell>
                        {dcs_related_check.fresh_cold_water_tank_level}
                      </TableCell>
                      <TableCell>
                        {dcs_related_check.machine_chest2_consistency}
                      </TableCell>
                      <TableCell>
                        {dcs_related_check.stock_flow_valve_opening}
                      </TableCell>
                      <TableCell>{dcs_related_check.stock_flow}</TableCell>
                      <TableCell>
                        {dcs_related_check.fan_pump_motor_speed}
                      </TableCell>
                      <TableCell>
                        {dcs_related_check.fan_pump_motor_current_load}
                      </TableCell>
                      <TableCell>
                        {dcs_related_check.ww1_makeup_open ? (
                          <MdCancel style={{ color: "red" }} />
                        ) : (
                          <MdCheckCircle style={{ color: "green" }} />
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7}>No Data</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="Remarks on DCS Related Checks">
            <PVNavbar
              processVisor={processVisor}
              type="Remarks on DCS Related Checks"
              disabled={processVisor.completed}
            />
          </TabsContent>
          <TabsContent value="DE Section Checks">
            <PVNavbar
              processVisor={processVisor}
              type="DE Section Checks"
              disabled={processVisor.completed}
            />
          </TabsContent>
          <TabsContent value="CF Section Field Checks">
            <PVNavbar
              processVisor={processVisor}
              type="CF Section Field Checks"
              disabled={processVisor.completed}
            />
          </TabsContent>
          <TabsContent value="Housekeeping">
            <PVNavbar
              processVisor={processVisor}
              type="Housekeeping Checks"
              disabled={processVisor.completed}
            />
          </TabsContent>
          <TabsContent value="Remarks on Field Checks">
            <PVNavbar
              processVisor={processVisor}
              type="Remarks on Field Checks"
              disabled={processVisor.completed}
            />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};
