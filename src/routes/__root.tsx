import React, { Suspense } from "react";
import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
import CustomToast from "@/components/common/CustomToast";
import NotFoundPage from "../components/common/404";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient();

const loadDevtools = () =>
  Promise.all([
    import("@tanstack/router-devtools"),
    import("@tanstack/react-query-devtools"),
  ]).then(([routerDevtools, reactQueryDevtools]) => {
    return {
      default: () => (
        <>
          <routerDevtools.TanStackRouterDevtools />
          <reactQueryDevtools.ReactQueryDevtools />
        </>
      ),
    };
  });

const TanStackDevtools =
  process.env.NODE_ENV === "production" ? () => null : React.lazy(loadDevtools);

export const Route = createRootRoute({
  component: () => {
    // useEffect(() => {
    //   // Prefetch your queries here
    //   queryClient.prefetchQuery(["yourQueryKey"], fetchYourDataFunction);
    // }, []);

    return (
      <>
        <ScrollRestoration />
        <CustomToast />
        <Outlet />
        <Suspense>
          <TanStackDevtools />
        </Suspense>
      </>
    );
  },
  notFoundComponent: () => <NotFoundPage />,
});
