import { Flex, Box,  Button } from "@chakra-ui/react";


function Footer() {
    return (
        <Flex minHeight="18vh" width="full" align="center" justifyContent="center">
            <Box mb="3"  >
                <Button size="lg" colorScheme="blue" variant="solid">Join us</Button>
            </Box>
        </Flex>
    )
}

export default Footer;