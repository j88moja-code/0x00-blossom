import React from "react";
import { useToastStore } from "@/hooks/useToastStore";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

const CustomToast: React.FC = () => {
  const { message, type, visible, hideToast } = useToastStore();

  if (!visible) return null;

  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      case "info":
        return "bg-blue-500";
      case "warning":
        return "bg-yellow-500";
      default:
        return "bg-blue-500";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return <FaCheckCircle className="text-white" />;
      case "error":
        return <FaExclamationCircle className="text-white" />;
      case "info":
        return <FaInfoCircle className="text-white" />;
      case "warning":
        return <FaExclamationTriangle className="text-white" />;
      default:
        return <FaInfoCircle className="text-white" />;
    }
  };

  return (
    <div
      className={`fixed top-16 right-4 z-[9999] flex items-center space-x-4 p-4 text-white ${getBackgroundColor()} rounded-lg shadow-lg`}
      style={{ zIndex: 9999 }}
    >
      {getIcon()}
      <span>{message}</span>
      <button onClick={hideToast} className="focus:outline-none">
        <span className="text-white">X</span>
      </button>
    </div>
  );
};

export default CustomToast;
