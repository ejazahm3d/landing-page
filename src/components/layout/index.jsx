import React from "react"
import Header from "./header"

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main className="container flex flex-col">{children}</main>
        </div>
    )
}

export default Layout
