import { Box, Typography } from '@mui/material'
import React from 'react'
import { Grid } from '@mui/material';


const boxStyles = {
    borderRadius: 3,
    boxShadow: 5,
    pb: 2,
    ":hover": {
        transform: 'scale(1.05)',
        transition: 'transform 0.2s ease-in-out',
    },
    backgroundColor: '#fff',
};

const typostype = {
    fontsize: '14px',
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: '#34476A'
};

const innertypostyle = {
    fontsize: '10px',
    fontFamily: 'Roboto',
    color: '#7B809A'
};

export const AttentionCatchers = () => {
    return (
        <>
            <Box sx={{
                pt: 2,
            }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={3} sx={{ padding: 2 }}>
                        <Box sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: '600',
                                    fontSize: '26px',
                                    fontFamily: 'Roboto',
                                    color: '#34476A'
                                }}
                            >
                                Attention Catchers
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'rgb(123, 128, 154)',
                                }}
                            >
                                20+ Fully coded components that popup from different places of the screen
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={9}>
                        <Grid container spacing={3}>

                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/alerts.jpg'
                                            alt="Navbar"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Alerts</Typography>
                                    <Typography sx={innertypostyle}>4 Examples</Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/toasts.jpg"
                                            alt="Nav Tabs"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Notifications</Typography>
                                    <Typography sx={innertypostyle}>2 Examples</Typography>
                                </Box>
                            </Grid>

                            {/* Pricing */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/toasts.jpg"
                                            alt="Pagination"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Tooltips & Popovers</Typography>
                                    <Typography sx={innertypostyle}>3 Examples</Typography>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/modals.jpg'
                                            alt="Pagination"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Modals</Typography>
                                    <Typography sx={innertypostyle}>3 Examples</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
