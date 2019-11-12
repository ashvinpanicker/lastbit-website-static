/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "../../static/styles/main.scss"
import logo from "../../static/images/lb-ln.svg"
import iconTwitter from "../../static/images/icon-twitter.svg"
import iconLinkedin from "../../static/images/icon-linkedin.svg"
import iconInstagram from "../../static/images/icon-instagram.svg"

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <Header siteTitle={data.site.siteMetadata.title} />
                <main>{children}</main>
                <footer>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-5"}>
                                <div className={"widget__item"}>
                                    <div className={"logo"}>
                                        <Link to="/" title={"lastbit"}>
                                            <img alt={"Logo"} src={logo} />
                                        </Link>
                                    </div>

                                    <div className={"about"}>
                                        Store and Spend Bitcoin, Securely and
                                        Instantly
                                    </div>
                                </div>
                            </div>

                            <div className={"col-2"}>
                                <div className={"widget__item"}>
                                    <ul className={"links"}>
                                        <h4>Company</h4>
                                        <ul>
                                            <li>
                                                <Link
                                                    to="/about"
                                                    title={"About Us"}
                                                >
                                                    About Us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/hardware"
                                                    title={"Hardware"}
                                                >
                                                    Hardware
                                                </Link>
                                            </li>
                                            <li>
                                                <a
                                                    href={
                                                        "https://medium.com/lastbitpay"
                                                    }
                                                >
                                                    Blog
                                                </a>
                                            </li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>

                            <div className={"col-2"}>
                                <div className={"widget__item"}>
                                    <div className={"links"}>
                                        <h4>Support</h4>
                                        <ul>
                                            <li>
                                                <Link
                                                    to="/contact"
                                                    title={"Contact Us"}
                                                >
                                                    Contact
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/privacy"
                                                    title={"Privacy Policy"}
                                                >
                                                    Privacy
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/terms"
                                                    title={"Terms Of Use"}
                                                >
                                                    Terms Of Use
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={"col-3"}>
                                <div className={"widget__item"}>
                                    <div className={"social"}>
                                        <a
                                            href="https://twitter.com/lastbitpay"
                                            target={"_blank"}
                                            title={"Twitter"}
                                        >
                                            <img
                                                alt={"Twitter"}
                                                src={iconTwitter}
                                            />
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/company/lastbit/"
                                            target={"_blank"}
                                            title={"LinkedIn"}
                                        >
                                            <img
                                                alt={"LinkedIn"}
                                                src={iconLinkedin}
                                            />
                                        </a>
                                        <a
                                            href="https://www.instagram.com/lastbit.io/"
                                            target={"_blank"}
                                            title={"Instagram"}
                                        >
                                            <img
                                                alt={"Instagram"}
                                                src={iconInstagram}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
