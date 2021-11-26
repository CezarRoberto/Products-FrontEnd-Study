import React from "react"
import { Flex, Box, Heading, Spacer, Button, useColorMode,  } from "@chakra-ui/react"
import { MoonIcon } from "@chakra-ui/icons"

function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex mt="2" mb="2" alignItems="center">
            <Box p="2" ml="5" >
                <Heading size="lg">Products Manager</Heading>
            </Box>
            <Spacer />
            <Button color="" mr="3">Sign in</Button>
            <Button color="" mr="3">Login</Button>
            <Button
                leftIcon={<MoonIcon />}
                mr="5"
                onClick={toggleColorMode}>{colorMode === "light" ? "Light" : "Dark"}</Button>
        </Flex>
    )
}


export default NavBar;