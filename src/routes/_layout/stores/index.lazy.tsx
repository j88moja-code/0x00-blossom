import { createLazyFileRoute } from "@tanstack/react-router";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { BiSolidComponent } from "react-icons/bi";
import { MdInventory, MdRequestPage, MdRequestQuote } from "react-icons/md";
import useTitle from "@/hooks/useTitle";

export const Route = createLazyFileRoute("/_layout/stores/")({
  component: StoresIndex,
});

function StoresIndex() {
  useTitle("Stores");
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Stores
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
                <BiSolidComponent size={50} />
              </CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Items
                </Typography>
                <Typography>
                  Manage and track inventory items effectively.
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
                <MdInventory size={50} />
              </CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Inventory
                </Typography>
                <Typography>
                  Keep track of your inventory levels and stock.
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
                <MdRequestQuote size={50} />
              </CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  SR RQs
                </Typography>
                <Typography>
                  Manage service request requisitions seamlessly.
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
                <MdRequestPage size={50} />
              </CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  WO RQs
                </Typography>
                <Typography>
                  Handle work order requisitions efficiently.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
