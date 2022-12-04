import { Parallax } from '@react-spring/parallax'
import { Box } from '@mui/material'
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import { useRef } from 'react';
import NavBar from './components/NavBar';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';

function Layout() {
    const ref = useRef();

    const moveToPage = (pageNumber) => {
        ref.current.scrollTo(pageNumber);
    }

    return (
        <Box>
            <Parallax pages={4} ref={ref} >
                <LandingPage moveToPage={moveToPage} />
                <AboutPage moveToPage={moveToPage} />
                <ProjectsPage moveToPage={moveToPage} />
                <ContactPage moveToPage={moveToPage} />
            </Parallax>
            <NavBar moveToPage={moveToPage} />
        </Box>
    );
}

export default Layout;