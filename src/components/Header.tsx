import { AppBar, Box, Button, Container, IconButton, Typography } from '@mui/material';
import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArticleIcon from '@mui/icons-material/Article';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import ContactsIcon from '@mui/icons-material/Contacts';

function Header() {
  return (
    <>
      <Container maxWidth="lg">
        <AppBar
          position="sticky"
          sx={{
            backgroundColor: '#ccced1',
            borderRadius: '10px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1000,   
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: '#374a69',
              fontWeight: 'bold',
              fontSize: '15px',
            }}
          >
            Otis Kit PRO
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: '#718098',
            }}
          >
            {/* Pages */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' }, 
                alignItems: 'center',
              }}
            >
              <IconButton size="small" color="inherit">
                <DashboardIcon />
              </IconButton>
              <Typography variant="button" sx={{ fontWeight: 'bold', fontSize: '10px' }}>
                pages
              </Typography>
              <IconButton size="small" color="inherit">
                <KeyboardArrowDownIcon />
              </IconButton>
            </Box>

            {/* Account */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' }, 
                alignItems: 'center',
              }}
            >
              <IconButton size="small" color="inherit">
                <ContactsIcon />
              </IconButton>
              <Typography variant="button" sx={{ fontWeight: 'bold', fontSize: '10px' }}>
                account
              </Typography>
              <IconButton size="small" color="inherit">
                <KeyboardArrowDownIcon />
              </IconButton>
            </Box>

            {/* Sections */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' }, 
                alignItems: 'center',
              }}
            >
              <IconButton size="small" color="inherit">
                <ViewDayIcon />
              </IconButton>
              <Typography variant="button" sx={{ fontWeight: 'bold', fontSize: '10px' }}>
                sections
              </Typography>
              <IconButton size="small" color="inherit">
                <KeyboardArrowDownIcon />
              </IconButton>
            </Box>

            {/* Docs */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
              }}
            >
              <IconButton size="small" color="inherit">
                <ArticleIcon />
              </IconButton>
              <Typography variant="button" sx={{ fontWeight: 'bold', fontSize: '10px' }}>
                docs
              </Typography>
              <IconButton size="small" color="inherit">
                <KeyboardArrowDownIcon />
              </IconButton>
            </Box>

            {/* Buy Now Button */}
            <Button
              variant="contained"
              size="small"
              color="primary"
              sx={{
                textTransform: 'capitalize',
                fontWeight: 'bold',
                borderRadius: '10px',
              }}
            >
              Buy Now
            </Button>
          </Box>
        </AppBar>
      </Container>
    </>
  );
}

export default Header;
