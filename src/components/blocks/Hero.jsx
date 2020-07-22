import React from "react"
import { Box, Flex, Heading, Button, Text, Link } from "@chakra-ui/core"
import Lottie from "react-lottie"
import Welcome from "../../animations/welcome.json"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"

const MotionFlex = motion.custom(Flex)

const Hero = () => {
    return (
        <Flex
            p={{ sm: "3rem 2rem", lg: "3rem 5rem" }}
            align="center"
            wrap="wrap-reverse"
        >
            <MotionFlex
                initial={{ y: "100vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeIn" }}
                flexGrow={1}
                justify="center"
                flexDirection="column"
            >
                <Box mx="auto" padding="2rem" width={{ md: "50vw" }}>
                    <Heading
                        size="2xl"
                        textAlign="center"
                        mt="1rem"
                        color="gray.700"
                    >
                        Welcome To CodeSchool
                    </Heading>
                    <Heading
                        size="md"
                        textAlign="center"
                        mt="0.5rem"
                        color="gray.600"
                    >
                        Join us on a journey to learn Code
                    </Heading>
                    <Text
                        fontSize="md"
                        textAlign="center"
                        mt="1rem"
                        color="gray.600"
                    >
                        Code School is 100% live and online, and uses
                        interactive technology to teach people the tech skills
                        they need to launch a new career in just 9 months.
                    </Text>
                    <Flex justify="center" mt="1rem">
                        <Link
                            href="https://www.ejazahmed.com/"
                            target="_blank"
                            rel="noopener noreferer"
                            _hover={{ textDecor: "none" }}
                        >
                            <Button variantColor="blue" m="0.5rem">
                                Check Portfolio
                            </Button>
                        </Link>
                        <Link
                            href="https://github.com/ejazahm3d"
                            target="_blank"
                            rel="noopener noreferer"
                            _hover={{ textDecor: "none" }}
                        >
                            <Button
                                m="0.5rem"
                                aria-label="Call Segun"
                                size="md"
                                leftIcon={FaGithub}
                            >
                                Github
                            </Button>
                        </Link>
                    </Flex>
                </Box>
            </MotionFlex>
            <MotionFlex
                initial={{ x: "100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeIn" }}
                flexGrow={4}
            >
                <Lottie
                    options={{
                        animationData: Welcome,
                    }}
                    height={"100%"}
                    width={"100%"}
                />
            </MotionFlex>
        </Flex>
    )
}

export default Hero
