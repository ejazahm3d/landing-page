import React from "react"
import { Box, Flex, Heading, Button, Text } from "@chakra-ui/core"
import Lottie from "react-lottie"
import Welcome from "../../animations/welcome.json"

const Hero = () => {
    return (
        <Flex
            p={{ sm: "3rem 2rem", lg: "3rem 5rem" }}
            align="center"
            wrap="wrap-reverse"
        >
            <Flex flexGrow={1} justify="center" flexDirection="column">
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
                        <Button variantColor="blue" m="0.5rem">
                            Apply Now
                        </Button>
                        <Button m="0.5rem">Join Us</Button>
                    </Flex>
                </Box>
            </Flex>
            <Flex flexGrow={4}>
                <Lottie
                    options={{
                        animationData: Welcome,
                    }}
                    height={"100%"}
                    width={"100%"}
                />
            </Flex>
        </Flex>
    )
}

export default Hero
