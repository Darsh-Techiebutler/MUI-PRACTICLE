import { Badge, Box, Container, Divider, Grid, Grid2, IconButton, Input, Typography } from "@mui/material"; // Updated to Grid

import Header from "./Header";
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';
import { CopyAll, Devices, LibraryBooks, LocalAtm } from "@mui/icons-material";
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import { Combination } from "./Combination";
// import { BlockSection } from "./BlockSection";
import { DesignBlocks } from "./DesignBlocks";
import { Navigation } from "./Navigation";
import { InputAreas } from "./InputAreas";
import { AttentionCatchers } from "./AttentionCatchers";
import { Elements } from "./Elements";
import { ElementFirst } from "./ElementBlock";
import { AccountPages } from "./AccountPages";
import { ElementFirst } from "./Element";
// Code: Main component
export default function Main() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url(https://demos.creative-tim.com/otis-kit-pro/static/media/bg-presentation.889630297390d27e8dfb.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '90vh',
          paddingTop: '-10px',
        }}
      >
        <Header />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            padding: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              fontFamily: 'Khula, sans-serif',
              fontWeight: 'bold',
              fontSize: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 4,
            }}
            gutterBottom
          >
            Otis Kit
            <Badge
              badgeContent="pro"
              color="primary"
              sx={{
                '& .MuiBadge-dot': {
                  backgroundColor: 'white',
                },
                backgroundColor: 'white',
              }}
            />
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: 'white', fontSize: '30px' }}>
            <Typography>
              Start the Development with a ReactJS & MUI Design System inspired by
            </Typography>
            <Typography>
              Material Design.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Second Main Component Start from here */}
      <Box
        sx={{
          backgroundColor: '#f4f5f7',
          zIndex: 2,
          width: '95%',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), -4px 0px 8px rgba(0, 0, 0, 0.3)',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: '10px',
          mt: -18, // Pulls the box upward
          position: 'relative',
          // paddingTop: '-16px',
          pb: 10,
        }}
      >
        <Container>
          <ElementFirst />

          {/* Combination Task components */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 4,
          }}>
            <Combination />
          </Box>
          <DesignBlocks />
          <Navigation />
          <InputAreas />
          <AttentionCatchers />
          <Elements />
        <AccountPages />
        </Container>

      </Box>
    </>
  );
}
