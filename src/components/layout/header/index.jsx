import React from "react"
import { Flex, Text, Link, Button } from "@chakra-ui/core"

const NavLink = ({ children, ...props }) => (
    <Link
        height="100%"
        px={2}
        fontSize="lg"
        color="white"
        _hover={{ textDecor: "none" }}
        {...props}
    >
        {children}
    </Link>
)

const Header = () => {
    return (
        <Flex
            bgImage="linear-gradient(90deg, rgba(69,168,222,1) 0%, rgba(39,128,195,1) 100%)"
            w="100%"
            px={5}
            py={4}
            roundedBottom="0.2rem"
            justifyContent="space-between"
            alignItems="center"
        >
            <Flex
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
            >
                <Text pl={3} fontSize="xl" fontWeight="bold" color="white">
                    CodeSchool
                </Text>
            </Flex>
            <Flex justify="center" align="center">
                <NavLink ml="0.5rem">Home</NavLink>
                <NavLink ml="0.5rem">About</NavLink>

                <Button ml="0.5rem">Contact now</Button>
            </Flex>
        </Flex>
    )
}

export default Header
