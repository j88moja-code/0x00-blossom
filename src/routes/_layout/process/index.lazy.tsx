import { createLazyFileRoute } from "@tanstack/react-router";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { LiaIndustrySolid } from "react-icons/lia";
import { MdOutlineWork } from "react-icons/md";
import { TbLogs } from "react-icons/tb";
import useTitle from "@/hooks/useTitle";

export const Route = createLazyFileRoute("/_layout/process/")({
  component: ProcessIndex,
});

function ProcessIndex() {
  useTitle("Process");
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Process
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 140,
                  backgroundColor: "#f5f5f5",
                }}
              >
                <LiaIndustrySolid
                  style={{ fontSize: "100px", color: "#1976d2" }}
                />
              </CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Process
                </Typography>
                <Typography>
                  Manage and track production processes effectively.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 140,
                  backgroundColor: "#f5f5f5",
                }}
              >
                <MdOutlineWork size={50} />
              </CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Short Term Control
                </Typography>
                <Typography>
                  Control and manage hour to hour plant process operations with
                  ease.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 140,
                  backgroundColor: "#f5f5f5",
                }}
              >
                <TbLogs size={50} />
              </CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Logs
                </Typography>
                <Typography>
                  Track and manage production process logs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
