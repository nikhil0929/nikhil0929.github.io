import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Typography, Box } from '@mui/material'
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import { useRef } from 'react';
import NavBar from './components/NavBar';




function Layout() {

    const ref = useRef();

    const moveToPage = (pageNumber) => {
        ref.current.scrollTo(pageNumber);
    }

    return (
        <Box>
            <Parallax pages={2} ref={ref}>
                <LandingPage moveToPage={moveToPage} />
                <AboutPage moveToPage={moveToPage} />
            </Parallax>
            <NavBar moveToPage={moveToPage} />
        </Box>

    );
}

export default Layout;