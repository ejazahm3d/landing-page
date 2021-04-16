import About from "../src/components/blocks/About"
import Contact from "../src/components/blocks/Contact"
import Courses from "../src/components/blocks/Courses"
import Hero from "../src/components/blocks/Hero"
import Layout from "../src/components/layout"

function HomePage() {
    return (
        <Layout>
            <>
                <Hero />
                <About />
                <Courses />
                <Contact />
            </>
        </Layout>
    )
}

export default HomePage
