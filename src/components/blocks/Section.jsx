import React from "react"
import { Box } from "@chakra-ui/core"

const Section = (props) => {
    return (
        <Box maxWidt="100%" paddingX="5rem" paddingY="3rem">
            {props.children}
        </Box>
    )
}

export default Section
