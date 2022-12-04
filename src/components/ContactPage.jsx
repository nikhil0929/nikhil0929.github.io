import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Typography, Box, Paper, Button, TextField } from '@mui/material'
import { styled } from '@mui/system';
import AnimatedText from './animations/AnimatedText';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';



const MyTxt = styled('span')({
    color: "#FF3B32",
});

const TextStyle = {
    lineHeight: "1.6em",
    paddingBottom: "1em",
    color: "rgba(255, 255, 255, 0.8)"
}

const TextFieldStyle = {
    width: "450px",
    marginTop: "2em",
}

const TextFields = [
    {
        name: "user_name",
        label: "Name",
        isRequired: true,
        multiline: false,
    },
    {
        name: "user_email",
        label: "Email",
        isRequired: true,
        multiline: false,
    },
    {
        name: "subject",
        label: "Subject",
        isRequired: true,
        multiline: false,
    },
    {
        name: "message",
        label: "Message",
        isRequired: true,
        multiline: true,
        rows: 4,
    },
]


function ContactPage(props) {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_n2ouz5b', 'template_wkwznxa', form.current, '2mDaI4vi_ijSQP88T')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div>
            {/* <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#000000' }} /> */}
            <ParallaxLayer
                offset={3}
                speed={0.5}
                style={{
                    // backgroundColor: "#000000",
                }}
            >


                <Box style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "5%",
                }}>
                    <Typography variant="h5">
                        <MyTxt>Let's get in touch!</MyTxt>
                    </Typography>

                </Box>
                <Box style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1%",
                }}>
                    <Typography variant="h7">
                        <MyTxt>Use the form below to send me an email</MyTxt>
                    </Typography>
                </Box>
                <Box style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1%",
                }}>
                    <Box style={{
                        display: "block",
                        justifyContent: "center",
                    }}>
                        <form ref={form} onSubmit={sendEmail}>
                            {TextFields.map((field) => {
                                return (
                                    <div>
                                        <TextField
                                            name={field.name}
                                            multiline={field.multiline}
                                            required={field.isRequired}
                                            id="outlined-required"
                                            label={field.label}
                                            style={TextFieldStyle}
                                            rows={field.multiline ? field.rows : null} // THIS IS BROKEN
                                        />
                                    </div>
                                )
                            })}
                        </form>
                        <Button variant="contained" style={{
                            ...TextFieldStyle,
                            backgroundColor: "#FF3B32",
                            color: "#ffffff",
                        }}
                            onClick={sendEmail}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>



            </ParallaxLayer>
        </div>
    )
}

export default ContactPage;