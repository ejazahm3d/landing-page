import React from "react"
import Header from "./header"
import { Flex } from "@chakra-ui/core"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Flex as="main" flexDirection="column" maxW="100%">
                {children}
            </Flex>
            <Footer />
        </div>
    )
}

export default Layout
