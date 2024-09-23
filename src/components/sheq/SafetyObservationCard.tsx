import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { FaRegCalendarAlt, FaMapMarkerAlt, FaCheck } from "react-icons/fa";

import { type SafetyObservationResponseModel } from "../../client";
import ActionsMenu from "../common/ActionsMenu";
import CustomCard from "../common/CustomCard";
import { MdOutlineSevereCold, MdClose } from "react-icons/md";

interface SafetyObservationCardProps {
  observation: SafetyObservationResponseModel;
}

const SafetyObservationCard: React.FC<SafetyObservationCardProps> = ({
  observation,
}) => {
  return (
    <CustomCard>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Typography variant="h6">{observation.observer_name}</Typography>
          <p className="text-sm text-muted-foreground">
            <FaRegCalendarAlt style={{ marginRight: "8px" }} />
            {new Date(observation.date).toLocaleDateString()}
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
                <ActionsMenu type="Safety Observation" value={observation} />
              </IconButton>
            </Tooltip>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <p className="text-sm text-muted-foreground">
            <FaMapMarkerAlt style={{ marginRight: "8px" }} />
            {observation.location}
          </p>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {observation.description}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className="text-sm text-muted-foreground">
            <MdOutlineSevereCold style={{ marginRight: "8px" }} />
            Severity: {observation.severity}
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className="text-sm text-muted-foreground">
            {observation.status === "open" ? (
              <FaCheck style={{ marginRight: "8px" }} />
            ) : (
              <MdClose style={{ marginRight: "8px" }} />
            )}
            Status: {observation.status}
          </p>
        </Grid>
      </Grid>
    </CustomCard>
  );
};

export default SafetyObservationCard;
