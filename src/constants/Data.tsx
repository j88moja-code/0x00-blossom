export const departments = [
  { id: 1, name: "mechanical" },
  { id: 2, name: "electrical" },
  { id: 3, name: "instrumentation" },
  { id: 4, name: "civil" },
  { id: 5, name: "safety" },
  { id: 6, name: "environmental" },
  { id: 7, name: "quality" },
  { id: 8, name: "production" },
  { id: 9, name: "maintenance" },
  { id: 10, name: "warehouse" },
  { id: 11, name: "logistics" },
  { id: 12, name: "security" },
  { id: 13, name: "hr" },
  { id: 14, name: "finance" },
  { id: 15, name: "it" },
  { id: 16, name: "admin" },
  { id: 17, name: "other" },
];

// export enum RescuePlan {
//   SelfRescue = "Self Rescue",
//   NonEntryRescue = "Non-Entry Rescue",
//   TeamRescue = "Team Rescue",
//   EntryRescue = "Entry Rescue",
// }

export const RescuePlan = [
  { label: "Self Rescue", value: "Self Rescue" },
  { label: "Non-Entry Rescue", value: "Non-Entry Rescue" },
  { label: "Team Rescue", value: "Team Rescue" },
  { label: "Entry Rescue", value: "Entry Rescue" },
];

// export enum WorkingAtHeightsType {
//   RoofWork = "Roof Work",
//   Scaffolding = "Scaffolding",
//   Ladder = "Ladder",
//   ElevatedPlatform = "Elevated Platform",
//   Other = "Other",
// }

export const WorkingAtHeightsType = [
  { label: "Roof Work", value: "Roof Work" },
  { label: "Scaffolding", value: "Scaffolding" },
  { label: "Ladder", value: "Ladder" },
  { label: "Elevated Platform", value: "Elevated Platform" },
  { label: "Other", value: "Other" },
];

export const FallProtectionType = [
  { label: "Fall Arrest", value: "Fall Arrest" },
  { label: "Fall Restraint", value: "Fall Restraint" },
  { label: "Safety Nets", value: "Safety Nets" },
  { label: "Other", value: "Other" },
];

export const LiftingPlan = [
  { label: "Crane", value: "Crane" },
  { label: "Slings/Chain Block(s)", value: "Slings/Chain Block(s)" },
  { label: "Forklift", value: "Forklift" },
  { label: "Manual", value: "Manual" },
  { label: "Other", value: "Other" },
];

export const HotWorkType = [
  { label: "Welding", value: "Welding" },
  { label: "Cutting", value: "Cutting" },
  { label: "Metal Heating", value: "Metal Heating" },
  { label: "Grinding", value: "Grinding" },
  { label: "Brazing", value: "Brazing" },
  { label: "Soldering", value: "Soldering" },
  { label: "Other", value: "Other" },
];

export const FireExtinguisherType = [
  { label: "CO2", value: "CO2" },
  { label: "Dry Chemical Powder", value: "Dry Chemical Powder" },
  { label: "Foam", value: "Foam" },
  { label: "Water", value: "Water" },
  { label: "Fire Blanket", value: "Fire Blanket" },
  { label: "Fire Hose/Hydrants", value: "Fire Hose/Hydrants" },
  { label: "Other", value: "Other" },
];

export const IsolationPlan = [
  { label: "Lockout", value: "Lockout" },
  { label: "Tagout", value: "Tagout" },
  // { label: "Lockout/Tagout(LOTO)", value: "Lockout/Tagout(LOTO)" },
  // { label: "Other", value: "Other" },
];

export const equipmentStatuses = [
  { label: "Operational", value: "Operational" },
  { label: "Under Maintenance", value: "Under repair" },
  { label: "Decommissioned", value: "Decommissioned" },
  { label: "Not Operational", value: "Non-operational" },
];

export const equipmentCategories = [
  { label: "Electrical", value: "Electrical" },
  { label: "Mechanical", value: "Mechanical" },
  { label: "Instrumentation", value: "Instrumentation" },
  { label: "Civil", value: "Civil" },
  { label: "Safety", value: "Safety" },
  { label: "Other", value: "Other" },
];

// export enum equipmentCategories {
//   Electrical = "Electrical",
//   Mechanical = "Mechanical",
//   Instrumentation = "Instrumentation",
//   Civil = "Civil",
//   Safety = "Safety",
//   Other = "Other",
// }

export const equipmentLocations = [
  { label: "Paper machine", value: "Paper machine" },
  { label: "Stock preparation", value: "Stock preparation" },
  { label: "Other", value: "other" },
];

// export enum equipmentLocations {
//   PaperMachine = "Paper machine",
//   StockPreparation = "Stock preparation",
// }

export enum CMPriority {
  low = "low",
  medium = "medium",
  high = "high",
}

export enum CMServiceCategory {
  preventive = "preventive",
  corrective = "corrective",
  predictive = "predictive",
  condition_based = "condition_based",
  run_to_failure = "run_to_failure",
  calibration = "calibration",
  installation = "installation",
}

export enum CMServiceType {
  inspection = "inspection",
  testing = "testing",
  adjustment = "adjustment",
  cleaning = "cleaning",
  lubrication = "lubrication",
  replacement = "replacement",
  repair = "repair",
}

export enum CMDepartment {
  mechanical = "mechanical",
  electrical = "electrical",
  instrumentation = "instrumentation",
  civil = "civil",
  safety = "safety",
  // environmental = "environmental",
  // quality = "quality",
  // production = "production",
  // maintenance = "maintenance",
  // warehouse = "warehouse",
  // logistics = "logistics",
  // security = "security",
  // hr = "hr",
  // finance = "finance",
  // it = "it",
  // admin = "admin",
  other = "other",
}

export enum CMStatus {
  pending = "pending",
  planned = "planned",
  approved = "approved",
  rejected = "rejected",
  completed = "completed",
  cancelled = "cancelled",
}

// export enum DowntimeDepartment {
//   Mechanical = "Mechanical",
//   Electrical = "Electrical",
//   Production = "Production",
//   Process = "Process",
//   Instrumentation = "Instrumentation",
//   Clothing = "Clothing",
//   Safety = "Safety",
//   Outside_Service = "Outside Service",
//   Planned_Maintenance = "Planned Maintenance",
// }

export const DowntimeDepartment = [
  { label: "Mechanical", value: "Mechanical" },
  { label: "Electrical", value: "Electrical" },
  { label: "Production", value: "Production" },
  { label: "Process", value: "Process" },
  { label: "Instrumentation", value: "Instrumentation" },
  { label: "Clothing", value: "Clothing" },
  { label: "Safety", value: "Safety" },
  { label: "Outside Service", value: "Outside Service" },
  { label: "Planned Maintenance", value: "Planned Maintenance" },
];

export const IncidentType = [
  { label: "Injury", value: "Injury" },
  { label: "Illness", value: "Illness" },
];

export const TreatmentType = [
  { label: "First Aid", value: "First Aid" },
  { label: "Medical Treatment", value: "Medical Treatment" },
];

export const TrainingType = [
  { label: "Safety", value: "Safety" },
  { label: "Health", value: "Health" },
  { label: "Environment", value: "Environment" },
  { label: "Quality", value: "Quality" },
];

export const InspectionType = [
  { label: "Safety", value: "Safety" },
  { label: "Health", value: "Health" },
  { label: "Environment", value: "Environment" },
  { label: "Quality", value: "Quality" },
];

export const SHEIncidentType = [
  { label: "Injury", value: "Injury" },
  { label: "Illness", value: "Illness" },
  { label: "Near Miss", value: "Near Miss" },
  { label: "Property Damage", value: "Property Damage" },
];
