import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export const Combination = () => {
    return (
        <>
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
                    Infinite combinations
                </Box>

                <Typography
                    variant="h4"
                    sx={{
                        // fontweight: '800',
                        color: 'rgb(52, 71, 103)',
                        // mb: 2,
                        fontFamily: 'Roboto Slab'
                    }}
                >
                    Huge collection of sections
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
                    We have created multiple options for you to put together and customise into pixel-perfect pages.
                </Typography>
            </Grid>
        </>
    )
}
