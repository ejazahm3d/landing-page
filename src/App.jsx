import React from "react"
import Layout from "./components/layout"
import Hero from "./components/blocks/Hero"
import About from "./components/blocks/About"
import Courses from "./components/blocks/Courses"
import Contact from "./components/blocks/Contact"

function App() {
    return (
        <Layout>
            <Hero />
            <About />
            <Courses />
            <Contact />
        </Layout>
    )
}

export default App
