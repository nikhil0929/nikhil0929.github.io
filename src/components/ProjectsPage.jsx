import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Typography, Box, Button, Grid, Card, CardActions, CardContent } from '@mui/material'
import { styled } from '@mui/system';


const MyTxt = styled('span')({
    color: "#FF3B32",
});

const TextStyle = {
    lineHeight: "1.6em",
    paddingBottom: "1em",
    color: "rgba(255, 255, 255, 0.8)"
}

const ProjectsList = [
    // {
    //     name: "HX Event Correlation",
    //     description: "Working to improve Observability on the Intersight cloud monitoring platform for hyperflex clusters and UCS devices",
    //     projectSource: "Cisco",
    //     link: "https://www.google.com",
    //     image: "NOT USED FOR THIS PROJECT (will implement on my own later)",
    // },
    {
        name: "Object Detection Web App",
        description: "Created a Python based Flask server with API endpoints that loads files from S3 and runs an inference model on the selected image/video data",
        projectSource: "DoriAI",
        link: "https://github.com/nikhil0929/doriai-internship-nikhil",
        image: "NOT USED FOR THIS PROJECT (will implement on my own later)",
    },
    {
        name: "E-Commerce Backend ",
        description: "Built backend api with endpoints to query/create/update database using Gin HTTP web framework,GORM Object Relational Mapper and Amazon RDS",
        projectSource: "Personal Project",
        link: "https://github.com/nikhil0929/e_market",
        image: "NOT USED FOR THIS PROJECT (will implement on my own later)",
    },
    {
        name: "I70-Things Web App",
        description: "A community-driven map application that allows users to view and contribute any traffic, weather, and construction data along route I-70",
        projectSource: "Northwestern University",
        link: "https://github.com/394-s22/i70-things-app",
        image: "NOT USED FOR THIS PROJECT (will implement on my own later)",
    },
]

const handleLearnMore = (link) => {
    window.open(link);
};

const ProjectCards = () => {
    return (
        ProjectsList.map((project) => {
            return (
                <Grid item xs={4} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Card sx={{ minWidth: 275, backgroundColor: "#3C3C3C", color: "#ffffff" }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 11 }} gutterBottom>
                                {project.projectSource}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {project.name}
                            </Typography>
                            <Box style={{
                                paddingTop: "1em",
                                maxWidth: "250px",
                            }}>
                                <Typography variant="body2">
                                    {project.description}
                                </Typography>
                            </Box>
                        </CardContent>
                        <CardActions>
                            <Button size="small" style={{
                                color: "#FF3B32",
                            }}
                                onClick={() => handleLearnMore(project.link)}
                            >Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            )
        })
    )
}


function ProjectsPage(prop) {
    return (
        <div>
            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#000000' }} />
            <ParallaxLayer
                offset={2}
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
                    <u>// Projects</u>
                </Typography>

                <Box style={{
                    padding: "5%",
                }}>
                    <Grid container spacing={2} >
                        <ProjectCards />
                    </Grid>
                </Box>

            </ParallaxLayer>
        </div>
    )
}

export default ProjectsPage;