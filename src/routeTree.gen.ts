/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutStoresRequisitionsImport } from './routes/_layout/stores/requisitions'
import { Route as LayoutStoresItemsImport } from './routes/_layout/stores/items'
import { Route as LayoutStoresInventoryImport } from './routes/_layout/stores/inventory'
import { Route as LayoutSheqSpecsImport } from './routes/_layout/sheq/specs'
import { Route as LayoutSheqOshaImport } from './routes/_layout/sheq/osha'
import { Route as LayoutSheqObservationsImport } from './routes/_layout/sheq/observations'
import { Route as LayoutProductionLoggingImport } from './routes/_layout/production/logging'
import { Route as LayoutProductionKanbanImport } from './routes/_layout/production/kanban'
import { Route as LayoutMaintenanceTicketsImport } from './routes/_layout/maintenance/tickets'
import { Route as LayoutMaintenanceTaskRiskAssessmentImport } from './routes/_layout/maintenance/task-risk-assessment'
import { Route as LayoutMaintenanceSpecialPwtImport } from './routes/_layout/maintenance/special-pwt'
import { Route as LayoutMaintenanceSettingsImport } from './routes/_layout/maintenance/settings'
import { Route as LayoutMaintenanceRequestsImport } from './routes/_layout/maintenance/requests'
import { Route as LayoutMaintenancePermitToWorkImport } from './routes/_layout/maintenance/permit-to-work'
import { Route as LayoutMaintenanceEventsImport } from './routes/_layout/maintenance/events'
import { Route as LayoutMaintenanceEventIdImport } from './routes/_layout/maintenance/$eventId'
import { Route as LayoutAssetCareAssetRegiterEquipmentImport } from './routes/_layout/asset-care/asset-regiter-equipment'
import { Route as LayoutAssetCareEquipmentIdImport } from './routes/_layout/asset-care/$equipmentId'
import { Route as LayoutProductionKanbanIdEloggerImport } from './routes/_layout/production/$kanbanId.elogger'

// Create Virtual Routes

const LayoutStoresIndexLazyImport = createFileRoute('/_layout/stores/')()
const LayoutSheqIndexLazyImport = createFileRoute('/_layout/sheq/')()
const LayoutProductionIndexLazyImport = createFileRoute(
  '/_layout/production/',
)()
const LayoutProcessIndexLazyImport = createFileRoute('/_layout/process/')()
const LayoutMaintenanceIndexLazyImport = createFileRoute(
  '/_layout/maintenance/',
)()
const LayoutDashHomeLazyImport = createFileRoute('/_layout/dash/home')()

// Create/Update Routes

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutStoresIndexLazyRoute = LayoutStoresIndexLazyImport.update({
  path: '/stores/',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import('./routes/_layout/stores/index.lazy').then((d) => d.Route),
)

const LayoutSheqIndexLazyRoute = LayoutSheqIndexLazyImport.update({
  path: '/sheq/',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import('./routes/_layout/sheq/index.lazy').then((d) => d.Route),
)

const LayoutProductionIndexLazyRoute = LayoutProductionIndexLazyImport.update({
  path: '/production/',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import('./routes/_layout/production/index.lazy').then((d) => d.Route),
)

const LayoutProcessIndexLazyRoute = LayoutProcessIndexLazyImport.update({
  path: '/process/',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import('./routes/_layout/process/index.lazy').then((d) => d.Route),
)

const LayoutMaintenanceIndexLazyRoute = LayoutMaintenanceIndexLazyImport.update(
  {
    path: '/maintenance/',
    getParentRoute: () => LayoutRoute,
  } as any,
).lazy(() =>
  import('./routes/_layout/maintenance/index.lazy').then((d) => d.Route),
)

const LayoutDashHomeLazyRoute = LayoutDashHomeLazyImport.update({
  path: '/dash/home',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import('./routes/_layout/dash.home.lazy').then((d) => d.Route),
)

const LayoutStoresRequisitionsRoute = LayoutStoresRequisitionsImport.update({
  path: '/stores/requisitions',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutStoresItemsRoute = LayoutStoresItemsImport.update({
  path: '/stores/items',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutStoresInventoryRoute = LayoutStoresInventoryImport.update({
  path: '/stores/inventory',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutSheqSpecsRoute = LayoutSheqSpecsImport.update({
  path: '/sheq/specs',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutSheqOshaRoute = LayoutSheqOshaImport.update({
  path: '/sheq/osha',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutSheqObservationsRoute = LayoutSheqObservationsImport.update({
  path: '/sheq/observations',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutProductionLoggingRoute = LayoutProductionLoggingImport.update({
  path: '/production/logging',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutProductionKanbanRoute = LayoutProductionKanbanImport.update({
  path: '/production/kanban',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutMaintenanceTicketsRoute = LayoutMaintenanceTicketsImport.update({
  path: '/maintenance/tickets',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutMaintenanceTaskRiskAssessmentRoute =
  LayoutMaintenanceTaskRiskAssessmentImport.update({
    path: '/maintenance/task-risk-assessment',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutMaintenanceSpecialPwtRoute =
  LayoutMaintenanceSpecialPwtImport.update({
    path: '/maintenance/special-pwt',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutMaintenanceSettingsRoute = LayoutMaintenanceSettingsImport.update({
  path: '/maintenance/settings',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutMaintenanceRequestsRoute = LayoutMaintenanceRequestsImport.update({
  path: '/maintenance/requests',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutMaintenancePermitToWorkRoute =
  LayoutMaintenancePermitToWorkImport.update({
    path: '/maintenance/permit-to-work',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutMaintenanceEventsRoute = LayoutMaintenanceEventsImport.update({
  path: '/maintenance/events',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutMaintenanceEventIdRoute = LayoutMaintenanceEventIdImport.update({
  path: '/maintenance/$eventId',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutAssetCareAssetRegiterEquipmentRoute =
  LayoutAssetCareAssetRegiterEquipmentImport.update({
    path: '/asset-care/asset-regiter-equipment',
    getParentRoute: () => LayoutRoute,
  } as any)

const LayoutAssetCareEquipmentIdRoute = LayoutAssetCareEquipmentIdImport.update(
  {
    path: '/asset-care/$equipmentId',
    getParentRoute: () => LayoutRoute,
  } as any,
)

const LayoutProductionKanbanIdEloggerRoute =
  LayoutProductionKanbanIdEloggerImport.update({
    path: '/production/$kanbanId/elogger',
    getParentRoute: () => LayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/_layout/asset-care/$equipmentId': {
      id: '/_layout/asset-care/$equipmentId'
      path: '/asset-care/$equipmentId'
      fullPath: '/asset-care/$equipmentId'
      preLoaderRoute: typeof LayoutAssetCareEquipmentIdImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/asset-care/asset-regiter-equipment': {
      id: '/_layout/asset-care/asset-regiter-equipment'
      path: '/asset-care/asset-regiter-equipment'
      fullPath: '/asset-care/asset-regiter-equipment'
      preLoaderRoute: typeof LayoutAssetCareAssetRegiterEquipmentImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/maintenance/$eventId': {
      id: '/_layout/maintenance/$eventId'
      path: '/maintenance/$eventId'
      fullPath: '/maintenance/$eventId'
      preLoaderRoute: typeof LayoutMaintenanceEventIdImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/maintenance/events': {
      id: '/_layout/maintenance/events'
      path: '/maintenance/events'
      fullPath: '/maintenance/events'
      preLoaderRoute: typeof LayoutMaintenanceEventsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/maintenance/permit-to-work': {
      id: '/_layout/maintenance/permit-to-work'
      path: '/maintenance/permit-to-work'
      fullPath: '/maintenance/permit-to-work'
      preLoaderRoute: typeof LayoutMaintenancePermitToWorkImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/maintenance/requests': {
      id: '/_layout/maintenance/requests'
      path: '/maintenance/requests'
      fullPath: '/maintenance/requests'
      preLoaderRoute: typeof LayoutMaintenanceRequestsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/maintenance/settings': {
      id: '/_layout/maintenance/settings'
      path: '/maintenance/settings'
      fullPath: '/maintenance/settings'
      preLoaderRoute: typeof LayoutMaintenanceSettingsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/maintenance/special-pwt': {
      id: '/_layout/maintenance/special-pwt'
      path: '/maintenance/special-pwt'
      fullPath: '/maintenance/special-pwt'
      preLoaderRoute: typeof LayoutMaintenanceSpecialPwtImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/maintenance/task-risk-assessment': {
      id: '/_layout/maintenance/task-risk-assessment'
      path: '/maintenance/task-risk-assessment'
      fullPath: '/maintenance/task-risk-assessment'
      preLoaderRoute: typeof LayoutMaintenanceTaskRiskAssessmentImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/maintenance/tickets': {
      id: '/_layout/maintenance/tickets'
      path: '/maintenance/tickets'
      fullPath: '/maintenance/tickets'
      preLoaderRoute: typeof LayoutMaintenanceTicketsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/production/kanban': {
      id: '/_layout/production/kanban'
      path: '/production/kanban'
      fullPath: '/production/kanban'
      preLoaderRoute: typeof LayoutProductionKanbanImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/production/logging': {
      id: '/_layout/production/logging'
      path: '/production/logging'
      fullPath: '/production/logging'
      preLoaderRoute: typeof LayoutProductionLoggingImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/sheq/observations': {
      id: '/_layout/sheq/observations'
      path: '/sheq/observations'
      fullPath: '/sheq/observations'
      preLoaderRoute: typeof LayoutSheqObservationsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/sheq/osha': {
      id: '/_layout/sheq/osha'
      path: '/sheq/osha'
      fullPath: '/sheq/osha'
      preLoaderRoute: typeof LayoutSheqOshaImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/sheq/specs': {
      id: '/_layout/sheq/specs'
      path: '/sheq/specs'
      fullPath: '/sheq/specs'
      preLoaderRoute: typeof LayoutSheqSpecsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/stores/inventory': {
      id: '/_layout/stores/inventory'
      path: '/stores/inventory'
      fullPath: '/stores/inventory'
      preLoaderRoute: typeof LayoutStoresInventoryImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/stores/items': {
      id: '/_layout/stores/items'
      path: '/stores/items'
      fullPath: '/stores/items'
      preLoaderRoute: typeof LayoutStoresItemsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/stores/requisitions': {
      id: '/_layout/stores/requisitions'
      path: '/stores/requisitions'
      fullPath: '/stores/requisitions'
      preLoaderRoute: typeof LayoutStoresRequisitionsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/dash/home': {
      id: '/_layout/dash/home'
      path: '/dash/home'
      fullPath: '/dash/home'
      preLoaderRoute: typeof LayoutDashHomeLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/maintenance/': {
      id: '/_layout/maintenance/'
      path: '/maintenance'
      fullPath: '/maintenance'
      preLoaderRoute: typeof LayoutMaintenanceIndexLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/process/': {
      id: '/_layout/process/'
      path: '/process'
      fullPath: '/process'
      preLoaderRoute: typeof LayoutProcessIndexLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/production/': {
      id: '/_layout/production/'
      path: '/production'
      fullPath: '/production'
      preLoaderRoute: typeof LayoutProductionIndexLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/sheq/': {
      id: '/_layout/sheq/'
      path: '/sheq'
      fullPath: '/sheq'
      preLoaderRoute: typeof LayoutSheqIndexLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/stores/': {
      id: '/_layout/stores/'
      path: '/stores'
      fullPath: '/stores'
      preLoaderRoute: typeof LayoutStoresIndexLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/production/$kanbanId/elogger': {
      id: '/_layout/production/$kanbanId/elogger'
      path: '/production/$kanbanId/elogger'
      fullPath: '/production/$kanbanId/elogger'
      preLoaderRoute: typeof LayoutProductionKanbanIdEloggerImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  LayoutRoute: LayoutRoute.addChildren({
    LayoutAssetCareEquipmentIdRoute,
    LayoutAssetCareAssetRegiterEquipmentRoute,
    LayoutMaintenanceEventIdRoute,
    LayoutMaintenanceEventsRoute,
    LayoutMaintenancePermitToWorkRoute,
    LayoutMaintenanceRequestsRoute,
    LayoutMaintenanceSettingsRoute,
    LayoutMaintenanceSpecialPwtRoute,
    LayoutMaintenanceTaskRiskAssessmentRoute,
    LayoutMaintenanceTicketsRoute,
    LayoutProductionKanbanRoute,
    LayoutProductionLoggingRoute,
    LayoutSheqObservationsRoute,
    LayoutSheqOshaRoute,
    LayoutSheqSpecsRoute,
    LayoutStoresInventoryRoute,
    LayoutStoresItemsRoute,
    LayoutStoresRequisitionsRoute,
    LayoutDashHomeLazyRoute,
    LayoutMaintenanceIndexLazyRoute,
    LayoutProcessIndexLazyRoute,
    LayoutProductionIndexLazyRoute,
    LayoutSheqIndexLazyRoute,
    LayoutStoresIndexLazyRoute,
    LayoutProductionKanbanIdEloggerRoute,
  }),
  LoginRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout",
        "/login"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/asset-care/$equipmentId",
        "/_layout/asset-care/asset-regiter-equipment",
        "/_layout/maintenance/$eventId",
        "/_layout/maintenance/events",
        "/_layout/maintenance/permit-to-work",
        "/_layout/maintenance/requests",
        "/_layout/maintenance/settings",
        "/_layout/maintenance/special-pwt",
        "/_layout/maintenance/task-risk-assessment",
        "/_layout/maintenance/tickets",
        "/_layout/production/kanban",
        "/_layout/production/logging",
        "/_layout/sheq/observations",
        "/_layout/sheq/osha",
        "/_layout/sheq/specs",
        "/_layout/stores/inventory",
        "/_layout/stores/items",
        "/_layout/stores/requisitions",
        "/_layout/dash/home",
        "/_layout/maintenance/",
        "/_layout/process/",
        "/_layout/production/",
        "/_layout/sheq/",
        "/_layout/stores/",
        "/_layout/production/$kanbanId/elogger"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/_layout/asset-care/$equipmentId": {
      "filePath": "_layout/asset-care/$equipmentId.tsx",
      "parent": "/_layout"
    },
    "/_layout/asset-care/asset-regiter-equipment": {
      "filePath": "_layout/asset-care/asset-regiter-equipment.tsx",
      "parent": "/_layout"
    },
    "/_layout/maintenance/$eventId": {
      "filePath": "_layout/maintenance/$eventId.tsx",
      "parent": "/_layout"
    },
    "/_layout/maintenance/events": {
      "filePath": "_layout/maintenance/events.tsx",
      "parent": "/_layout"
    },
    "/_layout/maintenance/permit-to-work": {
      "filePath": "_layout/maintenance/permit-to-work.tsx",
      "parent": "/_layout"
    },
    "/_layout/maintenance/requests": {
      "filePath": "_layout/maintenance/requests.tsx",
      "parent": "/_layout"
    },
    "/_layout/maintenance/settings": {
      "filePath": "_layout/maintenance/settings.tsx",
      "parent": "/_layout"
    },
    "/_layout/maintenance/special-pwt": {
      "filePath": "_layout/maintenance/special-pwt.tsx",
      "parent": "/_layout"
    },
    "/_layout/maintenance/task-risk-assessment": {
      "filePath": "_layout/maintenance/task-risk-assessment.tsx",
      "parent": "/_layout"
    },
    "/_layout/maintenance/tickets": {
      "filePath": "_layout/maintenance/tickets.tsx",
      "parent": "/_layout"
    },
    "/_layout/production/kanban": {
      "filePath": "_layout/production/kanban.tsx",
      "parent": "/_layout"
    },
    "/_layout/production/logging": {
      "filePath": "_layout/production/logging.tsx",
      "parent": "/_layout"
    },
    "/_layout/sheq/observations": {
      "filePath": "_layout/sheq/observations.tsx",
      "parent": "/_layout"
    },
    "/_layout/sheq/osha": {
      "filePath": "_layout/sheq/osha.tsx",
      "parent": "/_layout"
    },
    "/_layout/sheq/specs": {
      "filePath": "_layout/sheq/specs.tsx",
      "parent": "/_layout"
    },
    "/_layout/stores/inventory": {
      "filePath": "_layout/stores/inventory.tsx",
      "parent": "/_layout"
    },
    "/_layout/stores/items": {
      "filePath": "_layout/stores/items.tsx",
      "parent": "/_layout"
    },
    "/_layout/stores/requisitions": {
      "filePath": "_layout/stores/requisitions.tsx",
      "parent": "/_layout"
    },
    "/_layout/dash/home": {
      "filePath": "_layout/dash.home.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/maintenance/": {
      "filePath": "_layout/maintenance/index.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/process/": {
      "filePath": "_layout/process/index.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/production/": {
      "filePath": "_layout/production/index.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/sheq/": {
      "filePath": "_layout/sheq/index.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/stores/": {
      "filePath": "_layout/stores/index.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/production/$kanbanId/elogger": {
      "filePath": "_layout/production/$kanbanId.elogger.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
