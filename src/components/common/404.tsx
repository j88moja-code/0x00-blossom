import React from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import PageNotFound from "../../assets/images/pagenotfound404.svg";

const NotFoundIcon = () => (
  <img src={PageNotFound} alt="Page Not Found" className="w-80 h-80" />
);

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 dark:bg-gray-900 px-4 text-center">
      <NotFoundIcon />
      <Button asChild className="mt-4" variant="default">
        <Link to="/dash/home">Go to Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
