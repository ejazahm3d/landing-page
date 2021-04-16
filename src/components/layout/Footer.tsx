import React from "react"
import { Flex, Heading, Box, Link, useBreakpointValue } from "@chakra-ui/react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
const Footer = () => {
    const padding = useBreakpointValue({
        base: "2rem 1rem",
        sm: "3rem 2rem",
        lg: "3rem 5rem",
    })

    return (
        <Flex
            bg="gray.600"
            bgImage="linear-gradient(90deg, rgba(69,168,222,1) 0%, rgba(39,128,195,1) 100%)"
            as="footer"
            p={padding}
            align="center"
            justify="space-between"
        >
            <Heading size="lg" color="white">
                CodeSchool
            </Heading>
            <Flex>
                <Box mx="0.5rem" cursor="pointer">
                    <Link
                        href="https://linkedin.com/in/ejazahm3d"
                        target="_blank"
                        rel="noopener noreferer"
                    >
                        <FaLinkedin size="3rem" color="white" />
                    </Link>
                </Box>
                <Box mx="0.5rem" cursor="pointer">
                    <Link
                        href="https://github.com/ejazahm3d"
                        target="_blank"
                        rel="noopener noreferer"
                    >
                        <FaGithub size="3rem" color="white" />
                    </Link>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Footer
