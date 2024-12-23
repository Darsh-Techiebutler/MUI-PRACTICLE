import React from "react";
import { Link, Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Flag } from "@mui/icons-material";
import FlagIcon from "@mui/icons-material/Flag";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import AppsIcon from "@mui/icons-material/Apps";

export const Getstarted = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "url(https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "10px",
          padding: 5,
          mt: 6,
          opacity: 0.9, 
        }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <Typography
                variant="h4"
                component="h4"
                sx={{ fontWeight: "bold" }}
              >
                Built by developers
              </Typography>
              <Typography
                sx={{ fontWeight: "bold", marginTop: 2, fontSize: 32 }}
              >
                Complex Documentation
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginTop: 2, color: "#d8d8d9" }}
              >
                From colors, cards, typography to complex elements, you will
                find the full documentation. Play with the utility classes and
                you will create unlimited combinations for our components.
              </Typography>
              <a
                href="https://www.creative-tim.com/learning-lab/material-ui-marketplace/overview/otis-kit/"
                target="_blank"
                rel="noreferrer"
                style={{
                  marginTop: 20,
                  display: "inline-flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <Typography variant="body2">Read docs </Typography>
              </a>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Grid container spacing={3} sx={{ padding: 2 }}>
        {/* Getting Started Section */}
        <Grid item xs={12} lg={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              backgroundColor: "#2f88ec",
              borderRadius: "10px",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: 3,
              color: "white",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: 48,
                height: 48,
              }}
            >
              <FlagIcon style={{ fontSize: 28, color: "white" }} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Getting Started
              </Typography>
              <Typography variant="body2">
                Check the possible ways of working with our product and the
                necessary files for building your own project.
              </Typography>
              <Link
                href="#"
                target="_blank"
                rel="noreferrer"
                sx={{ color: "white", textDecoration: "none" }}
              >
                Let's start
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: 3,
              color: "white",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: 48,
                height: 48,
              }}
            >
              <PrecisionManufacturingIcon
                style={{ fontSize: 28, color: "#429cf0" }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#64738c" }}
              >
                Plugins
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#9195aa",
                }}
              >
                Get inspiration and have an overview about the plugins that we
                used to create the Material Kit.
              </Typography>
              <Link
                href="#"
                target="_blank"
                rel="noreferrer"
                sx={{ color: "#1a73e8", textDecoration: "none" }}
              >
                Read More
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              borderRadius: "10px",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: 3,
              color: "white",
              backgroundColor: "#f8f9fa",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: 48,
                height: 48,
              }}
            >
              <AppsIcon style={{ fontSize: 28, color: "#429cf0" }} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#64738c" }}
              >
                Components
              </Typography>
              <Typography variant="body2" sx={{ color: "#9195aa" }}>
                Get inspiration and have an overview about the plugins that we
                used to create the Material Kit.{" "}
              </Typography>
              <Link
                href="#"
                target="_blank"
                rel="noreferrer"
                sx={{ color: "#1a73e8", textDecoration: "none" }}
              >
                Read More
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
