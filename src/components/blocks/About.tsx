import React from "react"
import { Flex, Heading, Box, Text } from "@chakra-ui/react"
import Lottie from "react-lottie"
import Developer from "../../animations/developer.json"
const About = () => {
    return (
        <Flex
            id="about"
            p={{ sm: "3rem 2rem", lg: "3rem 5rem" }}
            align="center"
            bg="gray.50"
            wrap="wrap"
        >
            <Flex flexGrow={1}>
                <Lottie
                    options={{
                        animationData: Developer,
                    }}
                    height={"100%"}
                    width={"100%"}
                />
            </Flex>
            <Flex flexGrow={2} justify="center" flexDirection="column">
                <Box mx="auto" padding="2rem" width={{ md: "50vw" }}>
                    <Heading
                        size="xl"
                        textAlign="center"
                        mt="1rem"
                        color="gray.700"
                    >
                        CodeSchool is designed for student success.
                    </Heading>
                    <Text
                        fontSize="md"
                        textAlign="center"
                        mt="1rem"
                        color="gray.600"
                    >
                        We’re in this together, from your first day of classes
                        to your first day on the job — and beyond. ‍
                    </Text>
                </Box>
            </Flex>
        </Flex>
    )
}

export default About
