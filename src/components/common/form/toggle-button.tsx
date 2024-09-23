import React from "react";

const BooleanToggle: React.FC<{
  value: boolean;
  onChange: (val: boolean) => void;
  label: string;
}> = ({ value, onChange, label }) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-700 dark:text-gray-300">{label}</span>
      <div
        className={`relative inline-flex items-center h-6 rounded-full w-11 cursor-pointer 
          ${value ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"}
        `}
        onClick={() => onChange(!value)}
      >
        <span
          className={`absolute left-1 h-4 w-4 bg-white dark:bg-gray-200 rounded-full transition-transform
          ${value ? "transform translate-x-5" : ""}`}
        />
      </div>
    </div>
  );
};

export default BooleanToggle;
