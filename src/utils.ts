import type { ApiError } from "./client";

export const handleError = (err: ApiError, showToast: any) => {
  const errDetail = (err.body as any)?.detail;
  let errorMessage = errDetail || "Something went wrong.";
  if (Array.isArray(errDetail) && errDetail.length > 0) {
    errorMessage = errDetail[0].msg;
  }
  showToast(errorMessage, "error");
};

export const emailPattern = {
  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  message: "Invalid email address",
};

// // Handle and stringify error details for debugging
//       const errDetail = (err.body as any)?.detail;
//       const errorMessage =
//         typeof errDetail === "string"
//           ? errDetail
//           : JSON.stringify(errDetail) || "An error occurred";
//       showToast(`Something went wrong ${errorMessage}`, "error");
