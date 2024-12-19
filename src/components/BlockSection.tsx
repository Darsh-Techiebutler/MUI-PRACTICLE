import { Box } from '@mui/material'
import React from 'react'
import { Grid } from '@mui/material';

export const BlockSection = () => {
    return (
        <Box sx={{ textAlign: 'center', height: '100%', mt: 2 }}>
            <Grid container >
                <Grid item xs={12} lg={6}>
                    <Box
                        sx={{
                            backgroundColor: '#2196F3',
                            color: '#fff',                        }}
                    >
                        Infinite combinations
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
