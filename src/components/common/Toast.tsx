import { forwardRef, useState, useImperativeHandle, useCallback } from "react";
import {
  Snackbar,
  Alert,
  AlertProps,
  IconButton,
  useTheme,
  Typography,
} from "@mui/material";
import { MdOutlineClose } from "react-icons/md";

export interface ToastHandle {
  showToast: (message: string, severity?: AlertProps["severity"]) => void;
}

const Toast = forwardRef<ToastHandle>((_props, ref) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertProps["severity"]>("info");

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useImperativeHandle(ref, () => ({
    showToast: (message, severity = "info") => {
      setMessage(message);
      setSeverity(severity);
      setOpen(true);
    },
  }));

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      sx={{ mb: { xs: 2, sm: 4 } }}
    >
      <Alert
        elevation={6}
        variant="filled"
        severity={severity}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={handleClose}
          >
            <MdOutlineClose fontSize="inherit" />
          </IconButton>
        }
        sx={{
          fontSize: { xs: "0.875rem", sm: "1rem" },
          padding: { xs: 1, sm: 2 },
          backgroundColor: isDarkMode
            ? theme.palette.grey[800]
            : theme.palette.grey[200],
          color: isDarkMode
            ? theme.palette.common.white
            : theme.palette.common.black,
        }}
      >
        <Typography variant="body2" component="span">
          {message}
        </Typography>
      </Alert>
    </Snackbar>
  );
});

export default Toast;
