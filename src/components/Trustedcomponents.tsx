import React from 'react'
import { Typography, Grid, Box, Link, Rating, Divider } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
export const Trustedcomponents = () => {
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                // minHeight: '100vh', 
                alignItems: 'center',
            }}>
                <Grid
                    container
                    item
                    xs={12}
                    lg={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        // gap: 1, // Add spacing between elements
                        textAlign: 'center',
                        mt: 5,

                    }}
                >
                    <Typography
                        sx={{
                            color: '#5c6b85',
                            fontWeight: 'bold',
                            fontSize: '36px',
                        }}
                    >
                        Trusted by over
                    </Typography>
                    <Typography
                        sx={{
                            color: '#318aed',
                            fontWeight: 'bold',
                            fontSize: '36px',
                        }}
                    >
                        1,679,477+ web developers
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#80859e',
                            lineHeight: 1.6,
                        }}
                    >
                        Many Fortune 500 companies, startups, universities, and governmental institutions love Creative Tim's products.
                    </Typography>
                </Grid>
            </Box>

            <Grid
                container
                spacing={3}
                sx={{
                    padding: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 5,
                }}
            >
                {/* Getting Started Section */}
                <Grid item xs={12} lg={4}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            // gap: 2,
                            borderRadius: '10px',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            padding: 3,
                            color: '#485976',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50%',
                            }}
                        >
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                Nick Willever
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#b9bdca' }}>
                                <AccessTimeIcon sx={{ fontSize: 'small' }} />
                                <Typography sx={{ fontSize: '12px' }}>1 week ago</Typography>
                            </Box>
                            <Typography variant="body2" sx={{ color: '#b9bdca' }}>
                                ""I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!""
                            </Typography>
                            <Rating name="read-only" value={5} readOnly sx={{ color: '#485976' }} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 2,
                            backgroundColor: '#2f88ec',
                            borderRadius: '10px',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            padding: 3,
                            color: 'white',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50%',
                            }}
                        >
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                Shailesh Kushwaha
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <AccessTimeIcon sx={{ fontSize: 'small' }} />
                                <Typography sx={{ fontSize: '12px' }}>1 week ago</Typography>
                            </Box>
                            <Typography variant="body2">
                                ""I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!""
                            </Typography>
                            <Rating name="read-only" value={5} readOnly sx={{ color: 'white' }} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 2,
                            borderRadius: '10px',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            padding: 3,
                            color: 'white',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50%',
                            }}
                        >
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#485976' }}>
                                Samuel Kamuli
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#b9bdca' }}>
                                <AccessTimeIcon sx={{ fontSize: 'small' }} />
                                <Typography sx={{ fontSize: '12px' }}>3 week ago</Typography>
                            </Box>
                            <Typography variant="body2" sx={{ color: '#b9bdca' }}>
                                "Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!."
                            </Typography>
                            <Rating name="read-only" value={5} readOnly sx={{ color: '#485976' }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Divider sx={{ margin: '48px' }} />

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 , mb: 5}}>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item sm={4} md={2}>
                        <img src='https://demos.creative-tim.com/otis-kit-pro/static/media/logo-apple.f9c2682e61da98dfbc703a4dccd0d064.svg' alt="Apple" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item sm={4} md={2}>
                        <img src='https://demos.creative-tim.com/otis-kit-pro/static/media/logo-facebook.106d2ac0ece089e3c6def0a36c283ef7.svg' alt="Facebook" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item sm={4} md={2}>
                        <img src='https://demos.creative-tim.com/otis-kit-pro/static/media/logo-nasa.c5d11f8820bfde5fd64db0074156e06c.svg' alt="NASA" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item sm={4} md={2}>
                        <img src='https://demos.creative-tim.com/otis-kit-pro/static/media/logo-vodafone.b3e8486c0cac220bc3a31c9eab049b21.svg' alt="Vodafone" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item sm={4} md={2}>
                        <img src='https://demos.creative-tim.com/otis-kit-pro/static/media/logo-digitalocean.a1f147b01387952368e3180edf221c96.svg' alt="DigitalOcean" style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
