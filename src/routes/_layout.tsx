import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";
import { Suspense } from "react";
import { cn } from "@/lib/utils";

import { useStore } from "../hooks/useStore";
import { useSidebarToggle } from "../hooks/useSidebarToggle";
import { Footer } from "../components/common/layout/Footer";
import { Sidebar } from "../components/common/layout/Sidebar";
import useAuth, { isLoggedIn } from "@/hooks/useAuth";

// Define the route
export const Route = createFileRoute("/_layout")({
  component: Layout,
  beforeLoad: async () => {
    if (!isLoggedIn()) {
      throw redirect({
        to: "/login",
      });
    }
  },
});

const LoadingScreen = () => (
  <div className="flex flex-col justify-center items-center h-screen space-y-6 bg-gray-100 dark:bg-gray-900">
    {/* Uncomment the below lines if you need to display additional messages */}
    {/* <Typography variant="h3" color="text.primary">
      J88Moja Systems
    </Typography> */}
    <span className="loader"></span>
    <h6 className="text-gray-900 dark:text-gray-100">Loading...</h6>
    {/* <Typography variant="body2" color="text.secondary">
      Hang tight, we're on it! Your patience is greatly appreciated.
    </Typography> */}
  </div>
);

interface LayoutProps {
  Route: string;
}

function Layout({}: LayoutProps) {
  const { isLoading } = useAuth();
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <>
      <Sidebar />

      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        )}
      </main>
      <footer
        className={cn(
          "transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        <Footer />
      </footer>
    </>
  );
}
