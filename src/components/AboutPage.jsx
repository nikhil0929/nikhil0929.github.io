import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Typography, Box, Paper, Grid } from '@mui/material'
import { styled } from '@mui/system';
import AnimatedText from './animations/AnimatedText';


const MyTxt = styled('span')({
    color: "#FF3B32",
});

const TextStyle = {
    lineHeight: "1.6em",
    paddingBottom: "1em",
    color: "rgba(255, 255, 255, 0.8)"
}


function AboutPage(prop) {
    return (
        <div>
            <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#000000' }} />
            <ParallaxLayer
                offset={1}
                speed={0.5}
                style={{
                    // backgroundColor: "#000000",
                    color: "#ffffff",
                }}
            >
                <Typography variant="h3" style={{
                    paddingTop: "5%",
                    paddingLeft: "12%",
                    color: "rgba(255, 255, 255, 0.8)",
                }}>
                    <u>// About Me</u>
                </Typography>

                <Box style={{
                    padding: "5%",
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <img src="./src/assets/nikhil_cropped.jpg" alt="Nikhil Aggarwal" style={{
                                width: "370px",
                                height: "400px",
                                borderRadius: "40px",
                                zIndex: 1,
                            }} />
                            <Box style={{
                                width: "370px",
                                height: "400px",
                                border: "4px solid #FF3B32",
                                backgroundColor: "transparent",
                                borderRadius: "40px",
                                position: "absolute",
                                left: "160px",
                                top: "160px",
                                zIndex: "-1",
                                filter: "blur(3px)",
                            }}>
                            </Box>

                        </Grid>
                        <Grid item xs={6}>
                            <Box style={{
                                maxWidth: "550px",
                            }}>
                                <Typography
                                    variant="body1"
                                    style={TextStyle}
                                >
                                    I'm a software engineer based in <MyTxt>San Francisco, CA </MyTxt>specializing in building (and occasionally designing) exceptional websites, applications, and everything in between. Currently, I am focused on learning about blockchain and building Web3 applications.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    style={TextStyle}
                                >
                                    I've had experience working with a variety of technologies and languages, including <MyTxt>React, Django, Postgres, Solidity,</MyTxt> and more. I'm always looking for new opportunities to learn and grow.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    style={TextStyle}
                                >
                                    So far I've had the opportunity to work with a few companies, including <MyTxt>Cisco</MyTxt> and <MyTxt>DoriAI</MyTxt>.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </ParallaxLayer>
        </div >
    )
}

export default AboutPage;