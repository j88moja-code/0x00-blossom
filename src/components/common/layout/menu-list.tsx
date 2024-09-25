import { FaHardHat, FaProjectDiagram, FaIndustry, FaCog } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { GrHostMaintenance } from "react-icons/gr";
import { LiaIndustrySolid } from "react-icons/lia";

type Submenu = {
  path: string;
  label: string;
  active: boolean;
};

interface Menu {
  path: string;
  label: string;
  active: boolean;
  icon: React.ReactElement;
  submenus: Submenu[];
}

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(location: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          path: "/dash/home",
          label: "Dashboard",
          active: location.includes("/dash/home"),
          icon: <MdAnalytics />,
          submenus: [
            // {
            //   path: "/dash/equipment",
            //   label: "Equipment",
            //   active: location.includes("/dash/equipment"),
            // },
            // {
            //   path: "/dash/maintenance-request",
            //   label: "Maintenance Requests",
            //   active: location.includes("/dash/maintenance-request"),
            // },
            // {
            //   path: "/dash/maintenance-ticket",
            //   label: "Maintenance Tickets",
            //   active: location.includes("/dash/maintenance-ticket"),
            // },
          ],
        },
      ],
    },
    {
      groupLabel: "Asset Care",
      menus: [
        {
          path: "/asset-care/asset-regiter-equipment",
          label: "Asset Register Equipment",
          active: location.includes("/asset-care/asset-regiter-equipment"),
          icon: <FaProjectDiagram />,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "SHEQ",
      menus: [
        {
          path: "/sheq",
          label: "SHEQ",
          active: location.includes("/sheq"),
          icon: <FaHardHat />,
          submenus: [
            {
              path: "/sheq/osha",
              label: "OSHA",
              active: location.includes("/sheq/osha"),
            },
            {
              path: "/sheq/observations",
              label: "Observations",
              active: location.includes("/sheq/observations"),
            },
            // {
            //   path: "/sheq/risk-assessments",
            //   label: "Risk Assessments",
            //   active: location.includes("/sheq/risk-assessments"),
            // },
            {
              path: "/sheq/specs",
              label: "Specification",
              active: location.includes("/sheq/specs"),
            },
          ],
        },
      ],
    },
    {
      groupLabel: "Maintenance",
      menus: [
        {
          path: "/maintenance",
          label: "Maintenance",
          active: location.includes("/maintenance"),
          icon: <GrHostMaintenance />,
          submenus: [
            {
              path: "/maintenance/settings",
              label: "Settings",
              active: location.includes("/maintenance/settings"),
            },
            {
              path: "/maintenance/requests",
              label: "Requests",
              active: location.includes("/maintenance/requests"),
            },
            {
              path: "/maintenance/tickets",
              label: "Tickets",
              active: location.includes("/maintenance/tickets"),
            },
            {
              path: "/maintenance/task-risk-assessment",
              label: "Task Risk Assessments",
              active: location.includes("/maintenance/task-risk-assessment"),
            },
            {
              path: "/maintenance/permit-to-work",
              label: "Permit to Work",
              active: location === "/maintenance/permit-to-work",
            },
            {
              path: "/maintenance/special-pwt",
              label: "Specialized Permits",
              active: location === "/maintenance/special-pwt",
            },
            {
              path: "/maintenance/events",
              label: "Events",
              active: location === "/maintenance/events",
            },
          ],
        },
      ],
    },
    {
      groupLabel: "Stores",
      menus: [
        {
          path: "/stores",
          label: "Stores",
          active: location.includes("/stores"),
          icon: <FaShop />,
          submenus: [
            {
              path: "/stores/items",
              label: "Items",
              active: location === "/stores/items",
            },
            {
              path: "/stores/inventory",
              label: "Inventory",
              active: location === "/stores/inventory",
            },
            {
              path: "/stores/requisitions",
              label: "RM Requisitions",
              active: location === "/stores/requisitions",
            },
            // {
            //   path: "/stores/pm-rqs",
            //   label: "PM Requisitions",
            //   active: location === "/stores/pm-rqs",
            // },
          ],
        },
      ],
    },
    {
      groupLabel: "Production",
      menus: [
        {
          path: "/production",
          label: "Production",
          active: location.includes("/production"),
          icon: <FaIndustry />,
          submenus: [
            {
              path: "/production/kanban",
              label: "Schedules",
              active: location.includes("/production/kanban"),
            },
            {
              path: "/production/logging",
              label: "Logging",
              active: location.includes("/production/logging"),
            },
            {
              path: "/production/machine-inspection",
              label: "Inspection",
              active: location.includes("/production/machine-inspection"),
            },
          ],
        },
      ],
    },
    {
      groupLabel: "Process",
      menus: [
        {
          path: "/process",
          label: "Process",
          active: location.includes("/process"),
          icon: <LiaIndustrySolid />,
          submenus: [
            {
              path: "/process/machine-inspection",
              label: "Machine",
              active: location.includes("/process/machine-inspection"),
            },
            {
              path: "/process/stock-prep-inspection",
              label: "Stock Prep",
              active: location.includes("/process/stock-prep-inspection"),
            },
            {
              path: "/process/tests",
              label: "Lab Tests",
              active: location.includes("/process/tests"),
            },
          ],
        },
      ],
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          path: "/settings",
          label: "Settings",
          active: location.includes("/settings"),
          icon: <FaCog />,
          submenus: [],
        },
      ],
    },
  ];
}
// export default Sidebar;
