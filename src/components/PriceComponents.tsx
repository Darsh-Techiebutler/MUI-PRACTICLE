import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Grid } from '@mui/material';
import { blue } from '@mui/material/colors';
import { Cards } from './Card';
import { LockOutlined } from '@mui/icons-material';

export const PriceComponents = () => {
    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center" m={10} sx={{
                minHeight: '30vh',
                position: 'relative', // Ensure it has a stacking context
                zIndex: 0,
                backgroundColor: '#2f88ec',
                // padding: 0, // Ensure no padding in the outer box
            }}>
                <Box
                    sx={{
                        backgroundImage: 'url(https://demos.creative-tim.com/otis-kit-pro/static/media/pattern-lines.d6471bace81c3ada86db50ecb4e28f92.svg)', // Replace with your image path
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '12px',
                        width: '100%',
                        height: '100%', // Make sure the inner box takes full height
                        padding: 3,
                        position: 'relative',
                        display: 'flex', // To center the content horizontally and vertically
                        justifyContent: 'center', // Center horizontally
                        alignItems: 'center', // Center vertically
                        zIndex: 2,
                    }}
                >
                    <Grid
                        container
                        item
                        xs={12}
                        lg={6}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            textAlign: 'center',
                            height: '100%',
                            padding: 5,
                            gap: 2,
                            maxWidth: '100%',
                            mb: 5,
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: 'black',
                                color: 'white',
                                borderRadius: '12px',
                                px: 2,
                                py: 0.5,
                                fontSize: '14px',
                                fontWeight: 'bold',
                                mb: 2,
                            }}
                        >
                            Price
                        </Box>

                        <Typography
                            sx={{
                                fontSize: '40px',
                                color: 'rgb(248, 250, 255)',
                                fontFamily: 'Roboto Slab',
                                fontWeight: '600',
                            }}
                        >
                            Ready to get Material Kit?
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: 'white',
                                fontSize: '20px',
                                fontWeight: '400',
                                fontFamily: 'Poppins',
                                pb: 2,
                            }}
                        >
                            Based on the license you get, you will have direct access to our team
                            of developers who built the product.
                        </Typography>
                    </Grid>
                </Box>
            </Box>


            {/* Second Box - Cards Component */}
            <Box sx={{
                marginTop: '-20vh', // Negative margin to overlap more of the first box
                zIndex: 3,
                padding: '0 1rem', // Optional padding adjustment
                position: 'relative', // Ensure the zIndex is applied properly
            }}>
                <Cards />
            </Box>
            <Box sx={{
                marginTop: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                color:'#acafbf'
            }}>
                <LockOutlined />
                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                    Secured Payment by&nbsp;<Typography component="span" sx={{ fontWeight: 'bold' }}>2Checkout</Typography>&nbsp;with:
                </Typography>
            </Box>
            <Container>

                <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginTop: 5 }}>
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        <Grid item sm={12} md={6} sx={{ textAlign: 'center' }}>
                            <Typography sx={{ fontSize: 24, fontWeight: 700, color: '#344767' }}>Thank you for your support!
                            </Typography>
                            <Typography>We deliver the best web products
                            </Typography>
                        </Grid>
                        <Grid item sm={12} md={6} sx={{ textAlign: 'center' }}>
                            <Button variant='contained' color='primary' sx={{ margin: 1 ,fontWeight:'bold'}}>TWEET</Button>
                            <Button variant='contained' color='primary' sx={{ margin: 1 ,fontWeight:'bold'}}>SHARE</Button>
                            <Button variant='contained' color='error' sx={{ margin: 1,fontWeight:'bold' }}>PIN IT</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}
