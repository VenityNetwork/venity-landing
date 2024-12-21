import {
    Box,
    Button, Drawer, DrawerBody,
    DrawerCloseButton,
    DrawerContent, DrawerHeader,
    DrawerOverlay,
    Flex,
    Icon,
    Image,
    useDisclosure
} from "@chakra-ui/react";
import navDesktopLogo from '../../assets/navDesktopLogo.svg';
import useIsMobile from "../../hooks/useIsMobile.ts";

const links = {
    Store: "https://store.venitymc.com/",
    Stats: "https://player.venitymc.com/",
    Helpdesk: "https://support.venitymc.com/",
    Discord: "https://discord.gg/ZCKsDrpVV6"
};

const Navbar = () => {
    const isMobile = useIsMobile();
    const {isOpen, onOpen, onClose} = useDisclosure();
    return <>
        <Drawer isOpen={isOpen} placement={"right"} onClose={onClose}>
            <DrawerOverlay/>
            <DrawerContent bg={'black'}>
                <DrawerCloseButton/>
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                    <Flex direction={'column'} gap={6}>
                        {Object.entries(links).map(([name, href]) => <Box key={name} fontSize={'lg'} href={href} as={"a"} rel={"noreferrer"} target={"_blank"} _hover={{color: "blue.200"}}>{name}</Box>)}
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
        <Flex justify={'center'} w={'full'} h={'65px'} backdropFilter={'auto'} backdropBlur={'10000px'} color={'white'} shadow={'lg'} position={'fixed'} zIndex={999} borderBottom={'1px'} borderBottomColor={'gray.800'} css={{backgroundColor: "rgba(0,0,0,0.3)"}}>
        <Flex as={"nav"} justifyContent={{base: 'center', lg: 'start'}} alignItems={'center'} maxW={'1100px'} w={'full'} px={{base: 3, lg: 6}} gap={8}>
            <Box h={'35px'} w={{base: 'full', lg: 'auto'}}>
                <Image src={navDesktopLogo} h={'35px'}/>
            </Box>
            {!isMobile && <Box flex={'auto'}/>}
            {!isMobile && Object.entries(links).map(([name, href]) => <Box key={name} href={href} as={"a"} rel={"noreferrer"} target={"_blank"} _hover={{color: "blue.200"}}>{name}</Box>)}
            {isMobile && <Button variant={'ghost'} size={'sm'} onClick={onOpen}>
                <Icon viewBox="0 0 24 24" w={6} h={6} fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
                </Icon>
            </Button>}
        </Flex>
    </Flex>
        </>
}

export default Navbar;
