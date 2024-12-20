import { Box, Typography } from '@mui/material'
import React from 'react'
import { Grid } from '@mui/material';

export const PriceComponents = () => {
  return (
    <>
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

    </>
  )
}
