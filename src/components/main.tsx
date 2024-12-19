import { Badge, Box, Container, Divider, Grid, Grid2, IconButton, Input, Typography } from "@mui/material"; // Updated to Grid

import Header from "./Header";
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';
import { CopyAll, Devices, LibraryBooks, LocalAtm } from "@mui/icons-material";
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import { Combination } from "./Combination";
import { BlockSection } from "./BlockSection";
import { DesignBlocks } from "./DesignBlocks";
import { Navigation } from "./Navigation";
import { InputAreas } from "./InputAreas";
import { AttentionCatchers } from "./AttentionCatchers";
import { Elements } from "./Elements";
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
          <Grid
            container
            spacing={2}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: 2,
            }}
          >
            {/* First Item */}
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{ color: '#2a84eb', fontSize: '40px', fontWeight: 'bold' }}
                >
                  300+
                </Typography>
                <Typography
                  sx={{ color: '#435572', fontSize: '20px', fontWeight: '800', mb: 1 }}
                >
                  Coded Elements
                </Typography>
                <Typography sx={{ fontFamily: 'Roboto', color: '#c1c5cf' }}>
                  From buttons, to inputs, navbars, alerts or cards, you are covered
                </Typography>
              </Box>
            </Grid>

            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: 'none', sm: 'block' } }}
            />
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{ color: '#2a84eb', fontSize: '40px', fontWeight: 'bold' }}
                >
                  100+
                </Typography>
                <Typography
                  sx={{ color: '#435572', fontSize: '20px', fontWeight: '800', mb: 1 }}
                >
                  Design Blocks
                </Typography>
                <Typography sx={{ fontFamily: 'Roboto', color: '#c1c5cf' }}>
                  Mix the sections, change the colors and unleash your creativity
                </Typography>
              </Box>
            </Grid>

            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: 'none', sm: 'block' } }}
            />

            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{ color: '#2a84eb', fontSize: '40px', fontWeight: 'bold' }}
                >
                  41
                </Typography>
                <Typography
                  sx={{ color: '#435572', fontSize: '20px', fontWeight: '800', }}
                >
                  Pages
                </Typography>
                <Typography sx={{ fontFamily: 'Roboto', color: '#c1c5cf' }}>
                  Save 3-4 weeks of work when you use our pre-made pages for your website
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Third Components Start */}

          <Box sx={{ mt: 8, mx: 'auto', maxWidth: '1200px' }}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">

              {/* Left Content Section */}

              <Grid item xs={12} sm={4} sx={{ pr: 2 }}>
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    perspective: '1000px',
                  }}
                >
                  <Box
                    sx={{
                      height: '100%',
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.6s',
                      '&:hover': {
                        transform: 'rotateY(180deg)',
                      },
                    }}
                  >
                    {/* Front Side */}
                    <Box
                      sx={{
                        backgroundImage:
                          'url(https://demos.creative-tim.com/otis-kit-pro/static/media/rotating-card-bg-front.bdcdfadc0dacb9bc5f23.jpeg)',
                        backgroundColor: 'rgba(33, 150, 243, 0.7)',
                        borderRadius: '12px',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        p: 4,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      <PanToolAltOutlinedIcon sx={{ color: 'white', fontSize: '50px', mb: 2 }} />
                      <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white', mb: 1 }}>
                        Feel the <br /> Material Kit
                      </Typography>
                      <Typography sx={{ color: 'black', opacity: 0.9 }}>
                        All the MUI components that you need in a development have been re-designed with the new look.
                      </Typography>
                    </Box>

                    {/* Back Side */}
                    <Box
                      sx={{
                        backgroundImage:
                          'url(https://demos.creative-tim.com/otis-kit-pro/static/media/rotating-card-bg-front.bdcdfadc0dacb9bc5f23.jpeg)',
                        backgroundColor: 'rgba(33, 150, 243, 0.9)',
                        borderRadius: '12px',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        p: 4,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        transform: 'rotateY(180deg)',
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white', mb: 1 }}>
                        Discover More
                      </Typography>
                      <Typography sx={{ color: 'black', opacity: 0.8 }}>
                        You will save a lot of time going from prototyping to full-functional code because all elements are implemented.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>



              {/* Right Content Section */}
              <Grid item xs={12} sm={8} sx={{ pl: 2 }}>
                <Grid
                  container
                  spacing={4}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <CopyAll sx={{ color: '#2196F3', fontSize: '32px', mr: 2 }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                          Full Documentation
                        </Typography>
                        <Typography sx={{ color: '#777', mt: 1 }}>
                          Built by developers for developers. Check the foundation and you will find everything inside our documentation.
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <LibraryBooks sx={{ color: '#2196F3', fontSize: '32px', mr: 2 }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                          MUI Ready
                        </Typography>
                        <Typography sx={{ color: '#777', mt: 1 }}>
                          The world's most popular React components library for building user interfaces.
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  {/* Bottom Row */}
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <LocalAtm sx={{ color: '#2196F3', fontSize: '32px', mr: 2 }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                          Save Time & Money
                        </Typography>
                        <Typography sx={{ color: '#777', mt: 1 }}>
                          Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System.
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Devices sx={{ color: '#2196F3', fontSize: '32px', mr: 2 }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                          Fully Responsive
                        </Typography>
                        <Typography sx={{ color: '#777', mt: 1 }}>
                          Regardless of the screen size, the website content will naturally fit the given resolution.
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>

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
        </Container>
      </Box>
    </>
  );
}
