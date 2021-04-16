import React from "react"
import Header from "./header"
import { Flex } from "@chakra-ui/react"
import Footer from "./Footer"

const Layout = ({ children }: { children: React.ReactElement }) => {
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
