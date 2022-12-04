import { Typography, Box, AppBar, Toolbar, Grid } from '@mui/material'
import { styled } from '@mui/system';
import { Button, IconButton } from '@mui/material';
import { motion } from "framer-motion"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import NikhilResume from '../assets/Nikhil_Aggarwal_Resume.pdf';


const IconStyle = {
    color: "#E43B27",
    zIndex: "2",
    position: "absolute",
    marginTop: "15px",
    padding: "3px 40px",
    fontSize: "30px",
}

const navItems = [
    {
        name: "// Home",
        page: 0
    },
    {
        name: "// About",
        page: 1
    },
    {
        name: "// Projects",
        page: 2
    },
    {
        name: "// Contact",
        page: 3
    }
]

const handleClickLinkedin = () => {
    window.open("https://www.linkedin.com/in/nikhil-aggarwal-20362b123/");
};

const handleClickGithub = () => {
    window.open("https://github.com/nikhil0929");
};

const openPDF = () => {
    window.open(NikhilResume);
}

const NavButtons = (moveToPage) => {
    return (
        navItems.map((item, index) => {
            return (
                <Grid item xs={3}>
                    <Button
                        key={item.name + "-" + index}
                        variant="button"
                        onClick={() => moveToPage(item.page)}
                        component={motion.div}
                        whileHover={{
                            color: "#FF3B32",
                            transition: {
                                duration: 0.001,
                            },
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {item.name}
                    </Button>
                </Grid>
            )
        })
    )
}

function NavBar(props) {
    return (
        <AppBar position="static" style={{
            backgroundColor: "#000000",
        }}>
            <Toolbar style={{
                width: "50%",
                margin: "auto",
            }}>
                <Grid
                    container
                    spacing={2}
                    style={{
                        textAlign: "center",
                    }}>
                    {NavButtons(props.moveToPage)}
                    {/* <Grid item xs={2.4}>
                        
                    </Grid> */}
                </Grid>

            </Toolbar>
            <Button
                variant="outlined"
                style={{
                    alignItems: "center",
                    color: "#E43B27",
                    borderColor: "#E43B27",
                    border: "2px solid",
                    position: "absolute",
                    right: "100px",
                    marginTop: "15px",
                    padding: "3px 40px",
                }}
                onClick={openPDF}>
                Resume
            </Button>
            <IconButton style={{
                ...IconStyle,
                left: "100px",
            }}>
                <LinkedInIcon
                    onClick={handleClickLinkedin}
                    style={{
                        fontSize: "30px",
                    }}
                />
            </IconButton>
            <IconButton style={{
                ...IconStyle,
                left: "170px",
            }}>
                <GitHubIcon
                    onClick={handleClickGithub}
                    style={{
                        fontSize: "30px",
                    }}
                />
            </IconButton>
        </AppBar>
    );
}

export default NavBar;