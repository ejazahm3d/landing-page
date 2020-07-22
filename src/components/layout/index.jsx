import React from "react"
import Header from "./header"
import { Flex } from "@chakra-ui/core"

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Flex as="main" flexDirection="column">
                {children}
            </Flex>
        </div>
    )
}

export default Layout
