import { Box, Typography, Grid } from '@mui/material';
import React from 'react';

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

export const DesignBlocks = () => {
    return (
        <>
            <Box sx={{ pt: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={3} sx={{ padding: 2 }}>
                        <Box sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: '600',
                                    fontSize: '30px',
                                    fontFamily: 'Roboto',
                                    color: '#34476A'
                                }}
                            >
                                Design Blocks
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'rgb(123, 128, 154)',
                                }}
                            >
                                A selection of 45 page sections that fit perfectly in any combination
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Content Section */}
                    <Grid item xs={12} lg={9}>
                        <Grid container spacing={3}>
                            {/* Page Header */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/headers.jpg"
                                            alt="Page Headers"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Page Headers</Typography>
                                    <Typography sx={innertypostyle}>10 Examples</Typography>
                                </Box>
                            </Grid>

                            {/* Features */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/features.jpg"
                                            alt="Features"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Features</Typography>
                                    <Typography sx={innertypostyle}>14 Examples</Typography>
                                </Box>
                            </Grid>

                            {/* Pricing */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/pricing.jpg"
                                            alt="Pricing"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Pricing</Typography>
                                    <Typography sx={innertypostyle}>8 Examples</Typography>
                                </Box>
                            </Grid>

                            {/* FAQ */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/faq.jpg"
                                            alt="FAQ"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>FAQ</Typography>
                                    <Typography sx={innertypostyle}>1 Example</Typography>
                                </Box>
                            </Grid>

                            {/* Blog Posts */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/blogs.jpg"
                                            alt="Blog Posts"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Blog Posts</Typography>
                                    <Typography sx={innertypostyle}>11 Examples</Typography>
                                </Box>
                            </Grid>

                            {/* Testimonials */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/testimonials.jpg"
                                            alt="Testimonials"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Testimonials</Typography>
                                    <Typography sx={innertypostyle}>11 Examples</Typography>
                                </Box>
                            </Grid>

                            {/* Teams */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/teams.jpg"
                                            alt="Teams"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Teams</Typography>
                                    <Typography sx={innertypostyle}>6 Examples</Typography>
                                </Box>
                            </Grid>

                            {/* Stats */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/stats.jpg"
                                            alt="Stats"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Stats</Typography>
                                    <Typography sx={innertypostyle}>3 Examples</Typography>
                                </Box>
                            </Grid>

                            {/* Call to Action */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/call-to-action.jpg"
                                            alt="Call to Actions"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Call to Actions</Typography>
                                    <Typography sx={innertypostyle}>8 Examples</Typography>
                                </Box>
                            </Grid>

                            {/* Applications */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/projects.jpg"
                                            alt="Applications"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Applications</Typography>
                                    <Typography sx={innertypostyle}>6 Examples</Typography>
                                </Box>
                            </Grid>

                            {/* Logo Areas */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/logo-area.jpg"
                                            alt="Logo Areas"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Logo Areas</Typography>
                                    <Typography sx={innertypostyle}>4 Examples</Typography>
                                </Box>
                            </Grid>

                            {/* Footers */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/footers.jpg"
                                            alt="Footers"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Footers</Typography>
                                    <Typography sx={innertypostyle}>10 Examples</Typography>
                                </Box>
                            </Grid>

                            {/* General Cards */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/general-cards.jpg"
                                            alt="General Cards"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>General Cards</Typography>
                                    <Typography sx={innertypostyle}>9 Examples</Typography>
                                </Box>
                            </Grid>

                            {/* Content Sections */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections/content-sections.jpg"
                                            alt="Content Sections"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Content Sections</Typography>
                                    <Typography sx={innertypostyle}>8 Examples</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};
