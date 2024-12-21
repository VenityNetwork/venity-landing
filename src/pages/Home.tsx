import {Box, Button, Flex, Heading, LightMode} from "@chakra-ui/react";
import {ReactNode, useEffect, useState} from "react";

const HomeTextChanging = () => {
    const gameModes = ["Bed Wars", "Sky Wars", "Duels", "The Bridge"];
    const [gameModeIndex, setGameModeIndex] = useState(0);
    const [gameModeTextIndex, setGameModeTextIndex] = useState(gameModes[0].length);
    const [isBackspacing, setIsBackspacing] = useState(true);
    const [stayTime, setStayTime] = useState(3000 / 50);
    const [tick, setTick] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setTick((t) => t + 1);
        }, 50);
        if(stayTime > 0) {
            setStayTime((s) => s - 1);
            return;
        }
        if (!isBackspacing && gameModeTextIndex < gameModes[gameModeIndex].length) {
            setGameModeTextIndex((g) => g + 1);
            return;
        }
        if (isBackspacing && gameModeTextIndex > 0) {
            setGameModeTextIndex((g) => g - 1);
            return;
        }
        if (gameModeTextIndex === gameModes[gameModeIndex].length) {
            setStayTime(2000 / 50);
            setIsBackspacing(true);
            return;
        }
        if (gameModeTextIndex === 0 && isBackspacing) {
            setIsBackspacing(false);
            setGameModeIndex((g) => (g + 1) % gameModes.length);
            return;
        }
    }, [tick]);
    return <>
        {gameModes[gameModeIndex].slice(0, gameModeTextIndex)}
        {tick % 12 >= 6 && "|"}
    </>
}

const ServerInfoItem = ({title, value}: {title: string, value: string}) => {
    return <Flex direction={'column'} alignItems={'center'} textAlign={'center'} rounded={'full'} py={3} px={9} bg={'black'} border={'1px'} borderColor={'gray.900'}>
        <Box color={'gray.600'}>{title}</Box>
        <Box fontSize={'2xl'} fontWeight={'bold'}>{value}</Box>
    </Flex>
}

const ServerInfo = () => {
    return <Flex w={'full'} justify={'center'} gap={10} flexDirection={{base: "column", lg: "row"}}>
        <ServerInfoItem title={'Players Online'} value={'N/A'}/>
        <ServerInfoItem title={'Daily Unique Players'} value={'N/A'}/>
        <ServerInfoItem title={'Last 24h Matches'} value={'N/A'}/>
    </Flex>
}

const faqItems = [
    {
        question: "What is Venity Network?",
        answer: <>Venity Network is a Minecraft Bedrock Edition server that provides various game modes such as Bed Wars, Sky Wars, Duels, and The Bridge.</>
    },
    {
        question: "How do I join the server?",
        answer: <>You can join the server by launching Minecraft, press Play, press External Servers, press Add Server, type play.venitymc.com in the Address field, and press Play</>
    },
    {
        question: "Can I join the server using Minecraft Java Edition?",
        answer: <>No, you can only join the server using Minecraft Bedrock Edition. If you're on a PC, you can download Minecraft for Windows from the Microsoft Store <Box as={"a"} rel={"noreferrer"} color={"blue.300"} target={"_blank"} href={"https://www.xbox.com/id-ID/games/store/minecraft-for-windows/9nblggh2jhxj"}>here</Box>.</>
    }
];

const FaqItem = ({question, answer}: {question: string, answer: ReactNode[]|ReactNode|string}) => {
    const [isOpen, setIsOpen] = useState(false);
    return <Box w={'full'} maxW={'600px'} borderBottom={'1px'} borderBottomColor={'gray.800'} pb={3} mb={6}>
        <Flex fontSize={'lg'} fontWeight={'bold'} onClick={() => setIsOpen((o) => !o)} cursor={'pointer'} _hover={{color: "blue.200"}}>
            <Box w={'full'}>
                {question}
            </Box>
            <Box>
                {isOpen ?
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"
                         strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                        :
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"
                             strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>}
            </Box>
        </Flex>
        <Box mt={2} display={!isOpen ? 'none' : undefined} color={'gray.600'}>{answer}</Box>
    </Box>
}

const Faq = () => {
    return <Box>
        <Heading size={'xl'} mb={6}>FAQ</Heading>
        {faqItems.map((item) => <FaqItem key={item.question} question={item.question} answer={item.answer}/>)}
    </Box>
}

const Home = () => {
    return <>
        <Box h={{base: '600px', lg: '550px'}} w={'full'}>
            <Flex h={'full'} align={'center'}>
                <Box>
                    <Heading size={'2xl'} mb={2}>
                        Show and compete
                    </Heading>
                    <Heading size={'2xl'} mb={12}>
                        your skills in <HomeTextChanging/>
                    </Heading>
                    <Box maxW={'600px'} fontSize={'2xl'} mb={6}>
                        Increase your skills, earn rewards, have fun, and be part of a community of over 1 million players.
                    </Box>
                    <LightMode>
                        <Button as={"a"} mb={2} size={'lg'} colorScheme={'blue'} href="minecraft://?addExternalServer=Venity Network|play.venitymc.com:19132" rel="noreferrer" target="_self">
                            LAUNCH MINECRAFT
                        </Button>
                    </LightMode>
                    <Box color={'gray.600'}>
                        and connect to play.venitymc.com with 19132 port
                    </Box>
                </Box>
            </Flex>
        </Box>
        <ServerInfo/>
        <Box mb={16}/>
        <Faq/>
    </>
}

export default Home;
