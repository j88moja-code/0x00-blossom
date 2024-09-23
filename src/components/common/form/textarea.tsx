import React, { TextareaHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  register: UseFormRegisterReturn;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  register,
  className,
  ...props
}) => {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ">
        {label}
      </label>
      <textarea
        className={`border dark:bg-gray-700 dark:text-gray-300 text-gray-700  rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? "border-red-500" : "border-gray-300"}`}
        {...props}
        {...register}
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default Textarea;
