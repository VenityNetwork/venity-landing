import {Flex} from "@chakra-ui/react";
import { motion } from "framer-motion";

const AnimatedMovingObject = () => {
    return <Flex justify={'end'} w={'full'} maxW={"100%"} position={'absolute'} top={0} left={0} maxH={'50vh'} zIndex={-10} overflowX={"hidden"} css={{backgroundColor: "rgba(0,0,0,0.5)"}}>
        <motion.div
            style={{
                background: 'linear-gradient(to left, #0077ad, #4a6075, #002a69)',
                height: '550px',
            }}
            animate={{
                width: ['4%', '6%', '8%', '10%', '12%', '14%', '16%', '18%', '20%', '22%', '24%', '26%', '28%', '30%', '32%', '34%', '36%', '38%', '40%', '42%', '44%', '46%', '48%', '50%', '48%', '46%', '44%', '42%', '40%', '38%', '36%', '34%', '32%', '30%', '28%', '26%', '24%', '22%', '20%', '18%', '16%', '14%', '12%', '10%', '8%', '6%', '4%'],
                opacity: [0.9, 0.95, 1, 0.95, 0.9],
                scale: [1, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4.0, 3.8, 3.6, 3.4, 3.2, 3, 2.8, 2.6, 2.4, 2.2, 1],
                borderRadius: ["20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%", "90%", "80%", "70%", "60%", "50%", "40%", "30%", "20%"],
            }}
            transition={{
                ease: "linear",
                repeat: Infinity,
                duration: 20,
                // make transition smooth
                repeatDelay: 0.01,
                delay: 0.01,
            }}
        >
        </motion.div>
        <motion.div
            style={{
                background: 'linear-gradient(to right, #00023d, #7f05f2)',
                opacity: 0.7,
            }}
            animate={{
                height: ['400px', '350px', '300px', '250px', '200px', '150px', '100px', '50px', '0px', '50px', '100px', '150px', '200px', '250px', '300px', '350px', '400px'],
                width: ['30%', '28%', '26%', '24%', '22%', '20%', '18%', '16%', '14%', '12%', '10%', '8%', '6%', '4%', '2%', '0%', '2%', '4%', '6%', '8%', '10%', '12%', '14%', '16%', '18%', '20%', '22%', '24%', '26%', '28%', '30%'],
                opacity: [0.9, 0.95, 1, 0.95, 0.9],
                scale: [3, 2.75, 2.5, 2.25, 2, 1.75, 1.5, 1.25, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3],
                borderRadius: ["25%", "30%", "35%", "40%", "45%", "50%", "55%", "60%", "65%", "70%", "65%", "60%", "55%", "50%", "45%", "40%", "35%", "30%", "25%"],
            }}
            transition={{
                ease: "linear",
                repeat: Infinity,
                duration: 20,
                // make transition smooth
                repeatDelay: 0.01,
                delay: 0.01,
            }}
        >
        </motion.div>
    </Flex>
}

export default AnimatedMovingObject;
