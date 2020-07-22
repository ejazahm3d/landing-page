import React from "react"
import Layout from "./components/layout"
import Hero from "./components/blocks/Hero"
import { Button } from "@chakra-ui/core"

function App() {
    return (
        <Layout>
            <Hero />
            <Button variant="outline" variantColor="pink" size="md">
                Hello
            </Button>
        </Layout>
    )
}

export default App
