import React from "react";
import { Box, Paper, Typography, useTheme } from "@mui/material";
// import { IconType } from "react-icons";

import { ReactNode } from "react";

interface CounterCardProps {
  title: string;
  count: number;
  icon: ReactNode;
}

const CounterCard: React.FC<CounterCardProps> = ({ title, count, icon }) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={3}
      sx={{
        padding: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2),
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          padding: theme.spacing(1),
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 48,
          height: 48,
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4" color="textSecondary">
          {count}
        </Typography>
      </Box>
    </Paper>
  );
};

export default CounterCard;
