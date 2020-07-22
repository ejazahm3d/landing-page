import React from "react"
import Layout from "./components/layout"
import Hero from "./components/blocks/Hero"
import About from "./components/blocks/About"
import Courses from "./components/blocks/Courses"

function App() {
    return (
        <Layout>
            <Hero />
            <About />
            <Courses />
        </Layout>
    )
}

export default App
