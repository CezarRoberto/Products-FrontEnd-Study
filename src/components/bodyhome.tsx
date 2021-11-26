import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";
import {Icon} from "@chakra-ui/icons"
import { GoDashboard } from 'react-icons/go';
function BodyHome() {
    return (
        <Flex minHeight="70vh" width="full" align="center" justifyContent="center">
            <Box mb="3" align="center" justifyContent="center" >
                <Icon w={10} h={10} as={GoDashboard} />
                <Heading mb="5" mt="10" size="2xl">Welcome to the Center of Products</Heading>
                <Text orientation="horizontal">Here is the perfect place to see your finances and manage them as long as you enjoy to customize 😜</Text>
                <Text orientation="horizontal">You're able to deal with your money, save then and see graphics of what you bought</Text>
                Is totally free or <Link>You can donate to us ❤</Link>
            </Box>
        </Flex>
    )
}

export default BodyHome;

