import React from "react";
import { Box, Typography, Link, Grid, Container, colors } from "@mui/material";
import { Facebook, Twitter, GitHub, YouTube } from "@mui/icons-material";

const Footer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                // backgroundColor: "#f9f9f9",
                padding: "2rem 1rem",
                textAlign: "center",
                borderTop: "1px solid #e0e0e0",
                mt: 10
            }}
        >
            <Container>
                <Grid container spacing={2} justifyContent="center" alignItems="start" textAlign="left">

                    <Grid item sm={4} md={2} justifyContent="space-between" textAlign="center">
                        <Typography variant="h6" fontWeight="bold" color="#344767">
                            Otis Kit PRO
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, color: '#4b5b78' }}>
                            <Link href="#" color="inherit">
                                <Facebook fontSize="medium" />
                            </Link>
                            <Link href="#" color="inherit">
                                <Twitter fontSize="medium" />
                            </Link>
                            <Link href="#" color="inherit">
                                <GitHub fontSize="medium" />
                            </Link>
                            <Link href="#" color="inherit">
                                <YouTube fontSize="medium" />
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item sm={4} md={2} justifyContent="space-between">
                        <Typography variant="subtitle1" fontWeight="bold" color="#344767">
                            Company
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, color: '#4b5b78' }}>
                            <Typography variant="body2">
                                <Link href="#" color="inherit" underline="none">
                                    About Us
                                </Link>
                            </Typography>
                            <Typography variant="body2">
                                <Link href="#" color="inherit" underline="none">
                                    Freebies
                                </Link>
                            </Typography>
                            <Typography variant="body2">
                                <Link href="#" color="inherit" underline="none">
                                    Premium Tools
                                </Link>
                            </Typography>
                            <Typography variant="body2">
                                <Link href="#" color="inherit" underline="none">
                                    Blog
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item sm={4} md={2}>
                        <Typography variant="subtitle1" fontWeight="bold" color="#344767">
                            Resources
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, color: '#4b5b78' }}>
                            <Typography variant="body2">
                                <Link href="#" color="inherit" underline="none">
                                    Illustrations
                                </Link>
                            </Typography>
                            <Typography variant="body2">
                                <Link href="#" color="inherit" underline="none">
                                    Bits & Snippets
                                </Link>
                            </Typography>
                            <Typography variant="body2">
                                <Link href="#" color="inherit" underline="none">
                                    Affiliate Program
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item sm={4} md={2}>
                        <Typography variant="subtitle1" fontWeight="bold" color="#344767">
                            Help & Support
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, color: '#4b5b78' }}>
                            <Typography variant="body2">
                                <Link href="#" color="inherit" underline="none" >
                                    Contact Us
                                </Link>
                            </Typography>
                            <Typography variant="body2">
                                <Link href="#" color="inherit" underline="none">
                                    Knowledge Center
                                </Link>
                            </Typography>
                            <Typography variant="body2">
                                <Link href="#" color="inherit" underline="none">
                                    Custom Development
                                </Link>
                            </Typography>
                            <Typography variant="body2">
                                <Link href="#" color="inherit" underline="none">
                                    Sponsorships
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item sm={4} md={2}>
                        <Typography variant="subtitle1" fontWeight="bold" color="#344767">
                            Legal
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, color: '#4b5b78' }}>
                            <Typography variant="body2">
                                <Link href="#" color="inherit" underline="none">
                                    Terms & Conditions
                                </Link>
                            </Typography>
                            <Typography variant="body2">
                                <Link href="#" color="inherit" underline="none">
                                    Privacy Policy
                                </Link>
                            </Typography>
                            <Typography variant="body2">
                                <Link href="#" color="inherit" underline="none">
                                    Licenses (EULA)
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item sm={12} justifyContent="center" textAlign="center" marginTop={6}>
                    <Typography sx={{ color: '#768299 ' }}>
                        All rights reserved. Copyright © 2024 Otis Kit by Creative Tim.
                    </Typography>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
