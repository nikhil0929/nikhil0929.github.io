import { Typography, Box, AppBar, Toolbar, Grid } from '@mui/material'
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { motion } from "framer-motion"


const TextStyle = {

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
                            scale: 1.2,
                            transition: { duration: 0.3 }
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
        <AppBar position="static">
            <Toolbar style={{
                width: "65%",
                margin: "auto",
            }}>
                <Grid
                    container
                    spacing={2}
                    style={{
                        textAlign: "center",
                    }}>
                    {NavButtons(props.moveToPage)}
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;