import Navbar from "./components/Navbar";
import {Box, Flex} from "@chakra-ui/react";
import AnimatedMovingObject from "./components/Background/AnimatedMovingObject.tsx";
import Home from "./pages/Home.tsx";
import Footer from "./components/Footer";

// Venity Network is a Minecraft Bedrock server
const App = () => {
    return <Box minH={'100vh'} w={"full"}>
        <AnimatedMovingObject/>
        <Navbar/>
        <Flex h={'full'} justify={'center'} w={'full'} pt={'60px'} backdropFilter={'auto'} backdropBlur={'110px'} css={{backgroundColor: "rgba(0,0,0,0.2)"}}>
            <Box maxW={'1100px'} w={'full'} px={6}>
                <Home/>
            </Box>
        </Flex>
        <Footer/>
    </Box>
}

export default App;
