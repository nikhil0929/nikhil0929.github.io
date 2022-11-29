import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Typography, Box, Paper, Grid } from '@mui/material'



function AboutPage({ props }) {
    return (
        <div>
            {/* <ParallaxLayer offset={1} speed={1.5} style={{ backgroundColor: '#ff6d6d' }} /> */}
            <ParallaxLayer
                offset={1}
                speed={0.5}>
                <Typography variant="h3" style={{
                    paddingTop: "5%",
                    paddingLeft: "5%",
                }}>
                    <u>About</u>
                </Typography>

                <Box style={{
                    padding: "5%",
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} style={{
                            border: "1px solid red",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Paper elevation={3} style={{
                                width: "400px",
                                height: "400px",
                                backgroundColor: "#323232",
                            }} />
                        </Grid>
                        <Grid item xs={6} style={{
                            border: "1px solid red",
                        }}>
                            <Typography
                                variant="h6"
                            >
                                I'm Nikhil Aggarwal, a software engineer
                            </Typography>
                            <Typography
                                variant="body1"
                            >
                                I'm a software engineer based in San Francisco, CA specializing in building (and occasionally designing) exceptional websites, applications, and everything in between. Currently, I am focused on learning about blockchain and building Web3 applications.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

            </ParallaxLayer>
        </div >
    )
}

export default AboutPage;