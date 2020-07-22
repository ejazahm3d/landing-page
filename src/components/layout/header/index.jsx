import React, { useState } from "react"
import {
    Flex,
    Text,
    Link,
    Button,
    Box,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Heading,
} from "@chakra-ui/core"
import { MdMenu } from "react-icons/md"

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
    const [navbar, setNavbar] = useState(false)
    return (
        <Flex
            bgImage="linear-gradient(90deg, rgba(69,168,222,1) 0%, rgba(39,128,195,1) 100%)"
            maxW="100%"
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

            <Flex
                display={{ xs: "none", md: "flex" }}
                justify="center"
                align="center"
            >
                <NavLink ml="0.5rem">Home</NavLink>
                <NavLink ml="0.5rem">About</NavLink>

                <Button ml="0.5rem">Contact now</Button>
            </Flex>
            <Box
                display={{ xs: "flex", md: "none" }}
                onClick={() => setNavbar(!navbar)}
            >
                <MdMenu size="1.8rem" color="white" />
            </Box>

            <Drawer
                isOpen={navbar}
                placement="right"
                size="full"
                onClose={() => setNavbar(!navbar)}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Heading>CodeSchool</Heading>
                    </DrawerHeader>

                    <DrawerBody>
                        <Flex flexDir="column">
                            <NavLink color="red" mt="1rem">
                                Home
                            </NavLink>
                            <NavLink mt="1rem" color="red">
                                About
                            </NavLink>

                            <Button mt="1rem">Contact</Button>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export default Header
