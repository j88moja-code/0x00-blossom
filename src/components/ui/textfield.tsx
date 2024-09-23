import * as React from "react";
import { TextField as MUITextField } from "@mui/material";

const TextField = React.forwardRef(function TextField(props) {
  return (
    <MUITextField
      {...props}
      inputProps={{
        className: `bg-[hsl(var(--input))] text-[hsl(var(--foreground))] 
                    border-[hsl(var(--border))] rounded-[var(--radius)] 
                    focus:ring-2 focus:ring-[hsl(var(--ring))]`,
      }}
      sx={{
        "& .MuiInputBase-input": {
          color: "hsl(var(--foreground))",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "hsl(var(--border))",
          },
          "&:hover fieldset": {
            borderColor: "hsl(var(--ring))",
          },
          "&.Mui-focused fieldset": {
            borderColor: "hsl(var(--primary))",
          },
        },
      }}
    />
  );
});

export default TextField;
