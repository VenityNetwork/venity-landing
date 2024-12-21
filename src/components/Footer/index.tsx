import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
    return <Flex as={"footer"} justify={'center'} w={'full'} mt={16} color={'gray.600'}>
        <Flex direction={'column'} w={"full"} maxW={"1100px"} gap={1} px={{base: 6, lg: 2}} pb={4}>
            <Flex gap={{base: 6, lg: 2}} justify={'space-between'} flexDirection={{base: "column", lg: "row"}}>
                <Flex direction={'column'} mb={8} gap={1}>
                    <Box fontWeight={'bold'} mb={1}>
                        Venity Network
                    </Box>
                    <Box as={"a"} color={'blue.300'} rel={"noreferrer"} target={"_blank"} href={"https://support.venitymc.com/"}>
                        Helpdesk
                    </Box>
                </Flex>
                <Flex direction={'column'} mb={8} gap={1}>
                    <Box fontWeight={'bold'} mb={1}>
                        Social
                    </Box>
                    <Box as={"a"} color={'blue.300'} rel={"noreferrer"} target={"_blank"} href={"https://instagram.com/venitynetwork"}>
                        Instagram
                    </Box>
                    <Box as={"a"} color={'blue.300'} rel={"noreferrer"} target={"_blank"} href={"https://x.com/venitymc"}>
                        X
                    </Box>
                    <Box as={"a"} color={'blue.300'} rel={"noreferrer"} target={"_blank"} href={"https://discord.gg/ZCKsDrpVV6"}>
                        Discord
                    </Box>
                </Flex>
                <Flex direction={'column'} mb={8} gap={1}>
                    <Box fontWeight={'bold'} mb={1}>
                        Legal
                    </Box>
                    <Box as={"a"} color={'blue.300'} rel={"noreferrer"} target={"_blank"} href={"https://support.venitymc.com/terms-of-service.html"}>
                        Terms of Service
                    </Box>
                    <Box as={"a"} color={'blue.300'} rel={"noreferrer"} target={"_blank"} href={"https://support.venitymc.com/privacy-policy.html"}>
                        Privacy Policy
                    </Box>
                </Flex>
            </Flex>
            <Box>
                Copyright © 2020-2024 Venity Network. All rights reserved.
            </Box>
            <Box>
                Venity Network is not in any way endorsed by or affiliated with Minecraft, Mojang or Microsoft.
            </Box>
        </Flex>
    </Flex>
}

export default Footer;
