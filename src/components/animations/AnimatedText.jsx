import { motion } from "framer-motion"

let letter = ""


function splitLine(line) {
    return line.split("").map((char, index) => {
        return (
            <motion.span
                key={char + "-" + index}
                variants={letter}

            >
                {char}
            </motion.span>
        )
    })
}

function AnimatedText(props) {

    const sentence = {
        visible: {
            transition: {
                delay: 1,
                staggerChildren: props.speed,
                staggerDirection: props.direction,
            },
        },
    }

    letter = {
        hidden: {
            backgroundColor: props.cursorColor,
            opacity: 0,
        },
        visible: {
            backgroundColor: props.cursorColor,
            opacity: 1,
            transition: {
                duration: props.duration,
            },
            transitionEnd: {
                background: "transparent",
            },
        },
    }

    return (
        <div>
            <motion.Typography
                style={props.style}
                variant={props.variant}
                variants={sentence}
                initial="hidden"
                animate="visible"
            >
                {splitLine(props.text)}
            </motion.Typography>
        </div>
    )
}

export default AnimatedText;
