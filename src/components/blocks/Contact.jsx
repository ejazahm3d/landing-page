import React from "react"
import {
    Flex,
    Heading,
    Box,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Button,
} from "@chakra-ui/core"
import Lottie from "react-lottie"
import ContactAnim from "../../animations/contact.json"

const Contact = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault()
        alert("Thank You")
    }
    return (
        <Flex
            p={{ sm: "3rem 2rem", lg: "3rem 5rem" }}
            align="center"
            bg="gray.50"
            wrap="wrap"
        >
            <Flex flexGrow={1}>
                <Lottie
                    options={{
                        animationData: ContactAnim,
                    }}
                    height={"100%"}
                    width={"100%"}
                />
            </Flex>
            <Flex flexGrow={1} justify="center" flexDirection="column">
                <Box
                    mx="auto"
                    padding="2rem"
                    width={{ md: "50vw", lg: "30vw" }}
                >
                    <Heading
                        size="xl"
                        textAlign="center"
                        mt="1rem"
                        color="gray.700"
                    >
                        Ready to hustle?
                    </Heading>
                    <form onSubmit={(e) => handleOnSubmit(e)}>
                        <FormControl mt="1rem">
                            <FormLabel htmlFor="email">Email address</FormLabel>
                            <Input
                                type="email"
                                id="email"
                                aria-describedby="email-helper-text"
                            />
                            <FormHelperText id="email-helper-text">
                                We'll never share your email.
                            </FormHelperText>
                        </FormControl>
                        <Button
                            type="submit"
                            size="lg"
                            mt="0.8rem"
                            variantColor="blue"
                        >
                            Submit
                        </Button>
                    </form>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Contact
