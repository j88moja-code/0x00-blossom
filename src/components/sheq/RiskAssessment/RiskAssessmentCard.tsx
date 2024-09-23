import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import {
  FaRegCalendarAlt,
  FaMapMarkerAlt,
  FaExclamationTriangle,
  FaShieldAlt,
} from "react-icons/fa";

import ActionsMenu from "../../common/ActionsMenu";
import CustomCard from "../../common/CustomCard";
import type { RiskAssessmentResponseModel } from "../../../client";
import { MdOutlineSevereCold } from "react-icons/md";

interface RiskAssessmentCardProps {
  assessment: RiskAssessmentResponseModel;
}

const RiskAssessmentCard: React.FC<RiskAssessmentCardProps> = ({
  assessment,
}) => {
  return (
    <CustomCard>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Typography variant="h6">{assessment.assessor_name}</Typography>
          <p className="text-sm text-muted-foreground">
            <FaRegCalendarAlt style={{ marginRight: "8px" }} />
            {new Date(assessment.date).toLocaleDateString()}
          </p>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            display="flex"
            justifyContent={{ xs: "flex-start", sm: "flex-end" }}
            alignItems="center"
          >
            <Tooltip title="Actions">
              <IconButton aria-label="edit">
                <ActionsMenu type="Risk Assessment" value={assessment} />
              </IconButton>
            </Tooltip>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <p className="text-sm text-muted-foreground">
            <FaMapMarkerAlt style={{ marginRight: "8px" }} />
            {assessment.location}
          </p>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {assessment.description}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className="text-sm text-muted-foreground">
            <FaExclamationTriangle style={{ marginRight: "8px" }} />
            Hazards: {assessment.hazards}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            <FaShieldAlt style={{ marginRight: "8px" }} />
            Controls: {assessment.controls}
          </p>
        </Grid>
        <Grid item xs={12} sm={3}>
          <p className="text-sm text-muted-foreground">
            <MdOutlineSevereCold style={{ marginRight: "8px" }} />
            Severity: {assessment.severity}
          </p>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography color="textSecondary" align="right">
            Likelihood: {assessment.likelihood}
          </Typography>
        </Grid>
      </Grid>
    </CustomCard>
  );
};

export default RiskAssessmentCard;
