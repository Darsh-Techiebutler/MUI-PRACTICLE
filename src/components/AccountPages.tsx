import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

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

export const AccountPages = () => {
    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{
                mt: 5,
                padding: 2,
            }}>
                <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{
                    mt: 5,
                }}>

                    {/* Left Section */}
                    <Grid item xs={12} lg={5} sx={{ pr: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="h6" align="center" sx={{ fontWeight: '600', fontSize: '20px' }}>
                            Account Pages for Beautiful Web Apps
                        </Typography>
                        <Typography align="left" sx={{ fontSize: '15px' }}>
                            We created many examples for pages like Signup, Signin, Forgot Password, 2FA Authentication and so on.
                            Just choose between a Basic Design, an illustration, or a cover, and you are good to go!
                        </Typography>
                        <Box display="flex" justifyContent="center" alignItems="center" sx={{ flexDirection: 'row', mt: 3 }}>
                            <Button variant="contained" size="medium" sx={{ fontWeight: 'bold' }}>
                                View Pages
                            </Button>
                            <Button variant="text" size="medium" sx={{
                                fontWeight: 'bold',
                                color: 'black',
                            }}>
                                View Signup Pages
                            </Button>
                        </Box>
                    </Grid>


                    <Grid item xs={12} lg={7}>
                        <Grid container spacing={3} justifyContent="center" alignItems="center">
                            <Grid item xs={12} lg={4}>
                                <Box display="flex" justifyContent="center" alignItems="center" sx={{
                                    borderRadius: '8px',
                                    boxShadow: 2
                                }}>
                                    <img
                                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/account/sign-up-cover.jpg"
                                        alt="Sign Up Cover"
                                        style={{ width: '100%', borderRadius: '8px', }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box display="flex" justifyContent="center" alignItems="center" sx={{
                                    borderRadius: '8px',
                                    boxShadow: 2
                                }}>
                                    <img
                                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/account/reset-cover.jpg"
                                        alt="Reset Password Cover"
                                        style={{ width: '100%', borderRadius: '8px' }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box display="flex" justifyContent="center" alignItems="center" sx={{
                                    borderRadius: '8px',
                                    boxShadow: 2
                                }}>
                                    <img
                                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/account/signin-basic.jpg"
                                        alt="Sign In Basic"
                                        style={{ width: '100%', borderRadius: '8px' }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" m={10}>
                <Grid
                    container
                    item
                    xs={12}
                    lg={6}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ textAlign: 'center', height: '100%' }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#2196F3',
                            color: '#fff',
                            borderRadius: '12px',
                            px: 2,
                            py: 0.5,
                            fontSize: '14px',
                            fontWeight: 'bold',
                            mb: 2,
                        }}
                    >
                        Boost Creativity
                    </Box>

                    <Typography
                        sx={{
                            fontSize: '40px',
                            color: 'rgb(52, 71, 103)',
                            // mb: 2,
                            fontFamily: 'Roboto Slab',
                            fontWeight: '600'
                        }}
                    >
                        With our coded pages
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: 'rgb(123, 128, 154)',
                            fontSize: '20px',
                            fontWeight: '400',
                            fontFamily: 'Poppins'
                        }}
                    >
                        The easiest way to get started is to use one of our pre-built example pages.
                    </Typography>
                </Grid>
            </Box>

            <Box sx={{ pt: 4, gap: 5 }}>
                <Grid container spacing={3}>
                    {/* Content Section */}
                    <Grid item xs={12} lg={9}>
                        <Grid container spacing={3}>
                            {/* Page Header */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/coworking.jpg' alt="Page Headers"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Coworking Page</Typography>
                                </Box>
                            </Grid>

                            {/* Features */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/rental.jpg' alt="Features"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Retal page</Typography>
                                </Box>
                            </Grid>

                            {/* Pricing */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/about-us.jpg' alt="Pricing"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>About Us Page</Typography>
                                </Box>
                            </Grid>

                            {/* FAQ */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/pricing.jpg' alt="FAQ"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Price</Typography>
                                </Box>
                            </Grid>

                            {/* Blog Posts */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/pricing.jpg' alt="Blog Posts"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Help center  </Typography>
                                </Box>
                            </Grid>

                            {/* Testimonials */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/contact.jpg' alt="Testimonials"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Contact us </Typography>
                                </Box>
                            </Grid>

                            {/* Teams */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/faq.jpg' alt="Teams"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Faq</Typography>
                                </Box>
                            </Grid>

                            {/* Stats */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/privacy.jpg' alt="Stats"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Privacy Page</Typography>
                                </Box>
                            </Grid>

                            {/* Call to Action */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/desktop.jpg' alt="Call to Actions"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Desktop App page</Typography>
                                </Box>
                            </Grid>

                            {/* Applications */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/single-article.jpg' alt="Applications"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Single Article Blog</Typography>
                                </Box>
                            </Grid>

                            {/* Logo Areas */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/author.jpg' alt="Logo Areas"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Author Article Blog</Typography>
                                </Box>
                            </Grid>

                            {/* Footers */}
                            <Grid item xs={12} md={4}>
                                <Box sx={boxStyles}>
                                    <Box>
                                        <img
                                            src='https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/virtual-reality.jpg' alt="Footers"
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ padding: 1 }}>
                                    <Typography sx={typostype}>Virtual Really</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={3} sx={{ padding: 2 }}>
                        <Box sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: '800',
                                    fontSize: '23px',
                                    fontFamily: 'Roboto Slab',
                                    color: '#34476A'
                                }}
                            >
                                Presentation Pages for Company, Landing Pages, Blogs and Support
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'rgb(123, 128, 154)',
                                }}
                            >
                                These is just a small selection of the multiple possibitilies you have. Focus on the business, not on the design.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box 
            >

            </Box>
        </>
    )
}
