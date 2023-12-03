import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "../../static/styles/main.scss"
import logo from "../../static/images/lb-ln.png"
import Footer from "./footer"

const Layout = ({ children }) => (
    <>
        <Header siteTitle={"lastbit"} logo={logo} />
        <main>{children}</main>
        <Footer logo={logo} />
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
