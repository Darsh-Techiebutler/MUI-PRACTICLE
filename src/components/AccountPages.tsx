import { Box, Button, Card, CardContent, Container, Divider, Grid, Link, Typography } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';
import { Cards } from './Card';
import { Trustedcomponents } from './Trustedcomponents';
export const AccountPages = () => {
    return (
        <>
            <Box sx={{
                backgroundColor: '#50a3f1',
                height: '30%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <Box sx={{
                    backgroundImage: 'url(https://demos.creative-tim.com/otis-kit-pro/static/media/pattern-lines.d6471bace81c3ada86db50ecb4e28f92.svg)',
                    height: '100%',
                    width: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <Box display="flex" justifyContent="center" alignItems="center" sx={{}}>
                        <Grid
                            container
                            item
                            xs={12}
                            lg={6}
                            direction="column"
                            justifyContent="space-around"
                            alignItems="center"
                            sx={{ textAlign: 'center', height: '100%' }}
                        >
                            <Box
                                sx={{
                                    color: 'white',
                                    borderRadius: '8px',
                                    px: 2,
                                    py: 0.5,
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    mt: 4
                                }}
                            >
                                Pricing
                            </Box>

                            <Typography
                                sx={{
                                    fontSize: '40px',
                                    color: 'white',
                                    fontFamily: 'Roboto Slab',
                                    fontWeight: '600'
                                }}
                            >
                                With our coded pages
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'white',
                                    fontSize: '15px',
                                    fontFamily: 'Poppins'
                                }}
                            >
                                Based on the license you get, you will have direct access to our team
                                of developers who built the product
                            </Typography>
                        </Grid>
                    </Box>
                </Box>
                <Container>
                    <Grid container spacing={3} sx={{ mt: 2 }}>
                        <Grid item xs={12} lg={3} md={6}>
                            <Card elevation={1} sx={{ borderRadius: 2, maxWidth: 400, margin: 'auto' }}>
                                <CardContent>
                                    <Box sx={{ textAlign: 'left' }}>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#4d5d79' }}>
                                            Freelancer
                                        </Typography>
                                        <Typography variant="button" sx={{ color: 'text.secondary', fontSize: '10px' }}>
                                            Good for a personal or client web/mobile app.
                                        </Typography>
                                        <Typography
                                            variant="h4"
                                            sx={{ fontWeight: 'bold', marginY: 2, color: '#344767' }}
                                        >
                                            $599
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                            fullWidth
                                            href="#/"
                                            sx={{ textTransform: 'none', backgroundColor: 'black' }}
                                        >
                                            Buy Now
                                        </Button>
                                    </Box>
                                    <Divider sx={{ marginY: 2 }} />
                                    <Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'success.main', marginRight: 1 }} />
                                            <Typography variant="button">Complete documentation</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'success.main', marginRight: 1 }} />
                                            <Typography variant="button">Full code</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'success.main', marginRight: 1 }} />
                                            <Typography variant="button">Use in SaaS</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'success.main', marginRight: 1 }} />
                                            <Typography variant="button">Projects - unlimited</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'success.main', marginRight: 1 }} />
                                            <Typography variant="button">Team Size - up to 20</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'success.main', marginRight: 1 }} />
                                            <Typography variant="button">Priority support</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'success.main', marginRight: 1 }} />
                                            <Typography variant="button">Free Updates - 24 months</Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} lg={3} md={6}>
                            <Card elevation={1} sx={{ borderRadius: 2, maxWidth: 400, margin: 'auto' }}>
                                <CardContent>
                                    <Box sx={{ textAlign: 'left' }}>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#4d5d79' }}>
                                            Startup
                                        </Typography>
                                        <Typography variant="button" sx={{ color: 'text.secondary', fontSize: '10px' }}>
                                            Build your startup or client web/mobile app.
                                        </Typography>
                                        <Typography
                                            variant="h4"
                                            sx={{ fontWeight: 'bold', marginY: 2, color: '#344767' }}
                                        >
                                            $149
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                            fullWidth
                                            href="#/"
                                            sx={{ textTransform: 'none', backgroundColor: 'black' }}
                                        >
                                            Buy Now
                                        </Button>
                                    </Box>
                                    <Divider sx={{ marginY: 2 }} />
                                    <Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'success.main', marginRight: 1 }} />
                                            <Typography variant="button">
                                                Complete documentation
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'success.main', marginRight: 1 }} />
                                            <Typography variant="button">Full code</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'success.main', marginRight: 1 }} />
                                            <Typography variant="button">Use in SaaS</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'success.main', marginRight: 1 }} />
                                            <Typography variant="button">Projects - unlimited</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'success.main', marginRight: 1 }} />
                                            <Typography variant="button">Team Size - up to 20</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'success.main', marginRight: 1 }} />
                                            <Typography variant="button">Priority support</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'success.main', marginRight: 1 }} />
                                            <Typography variant="button">Free Updates - 24 months</Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} lg={3} md={6}>
                            <Card elevation={1} sx={{ borderRadius: 2, maxWidth: 400, margin: 'auto', backgroundColor: '#38383e', color: 'white' }}>
                                <CardContent>
                                    <Box sx={{ textAlign: 'left' }}>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white' }}>
                                            EnterPrise
                                        </Typography>
                                        <Typography variant="button" sx={{ color: 'white', fontSize: '10px' }}>
                                            Deploy large-scale projects which include redistribution rights.
                                        </Typography>
                                        <Typography
                                            variant="h4"
                                            sx={{ fontWeight: 'bold', marginY: 2, color: 'white' }}
                                        >
                                            $599
                                        </Typography>
                                        <Button
                                            variant="contained" color='primary'
                                            size="small"
                                            fullWidth
                                            href="#/"
                                            sx={{ textTransform: 'none', backgroundColor: 'white', color: 'black' }}
                                        >
                                            Company
                                        </Button>
                                    </Box>
                                    <Divider sx={{ marginY: 2 }} />
                                    <Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'success.main', marginRight: 1 }} />
                                            <Typography variant="button">Perfect for web/mobile apps or SaaS projects..</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'success.main', marginRight: 1 }} />
                                            <Typography variant="button">Full code</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'success.main', marginRight: 1 }} />
                                            <Typography variant="button">Use in SaaS</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'success.main', marginRight: 1 }} />
                                            <Typography variant="button">Projects - unlimited</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'success.main', marginRight: 1 }} />
                                            <Typography variant="button">Team Size - up to 20</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'success.main', marginRight: 1 }} />
                                            <Typography variant="button">Priority support</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'success.main', marginRight: 1 }} />
                                            <Typography variant="button">Free Updates - 24 months</Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} lg={3} md={6}>
                            <Card elevation={1} sx={{ borderRadius: 2, maxWidth: 400, margin: 'auto' }}>
                                <CardContent>
                                    <Box sx={{ textAlign: 'left' }}>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#4d5d79' }}>
                                            EnterPrise
                                        </Typography>
                                        <Typography variant="button" sx={{ color: 'text.secondary', fontSize: '10px' }}>
                                            Deploy large-scale projects which include redistribution rights.
                                        </Typography>
                                        <Typography
                                            variant="h4"
                                            sx={{ fontWeight: 'bold', marginY: 2, color: '#344767' }}
                                        >
                                            $599
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                            fullWidth
                                            href="#/"
                                            sx={{ textTransform: 'none', backgroundColor: 'black' }}
                                        >
                                            Buy Now
                                        </Button>
                                    </Box>
                                    <Divider sx={{ marginY: 2 }} />
                                    <Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'success.main', marginRight: 1 }} />
                                            <Typography variant="button">
                                                Complete documentation
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'white', marginRight: 1 }} />
                                            <Typography variant="button">Full code</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'white', marginRight: 1 }} />
                                            <Typography variant="button">Use in SaaS</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'white', marginRight: 1 }} />
                                            <Typography variant="button">Projects - unlimited</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'white', marginRight: 1 }} />
                                            <Typography variant="button">Team Size - up to 20</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'white', marginRight: 1 }} />
                                            <Typography variant="button">Priority support</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                                            <DoneIcon sx={{ color: 'white', marginRight: 1 }} />
                                            <Typography variant="button">Free Updates - 24 months</Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
