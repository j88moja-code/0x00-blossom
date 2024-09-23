import React, { SelectHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { label: string; value: string | number }[];
  error?: string;
  register: UseFormRegisterReturn;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  register,
  error,
  className,
  ...props
}) => {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <select
        className={`border dark:bg-gray-700 dark:text-gray-300 text-gray-700 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? "border-red-500" : "border-gray-300"}`}
        {...props}
        {...register}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="dark:bg-gray-700 dark:text-gray-300 text-gray-700 "
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default Select;
