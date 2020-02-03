import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, logo }) => (
    <header className="">
        <div className={"container"}>
            <div className={"top-menu"}>
                <div className={"logo"}>
                    <Link to="/" title={"lastbit"}>
                        <img alt={"Logo"} src={logo} />
                    </Link>
                </div>

                <div className={"header-link"}>
                    <Link
                        to="/about"
                        title={"about"}
                        style={{ marginLeft: 10, marginRight: 10 }}
                    >
                        About
                    </Link>
                    <a
                        style={{ marginLeft: 10, marginRight: 10 }}
                        href={"https://shop.lastbit.io"}
                    >
                        Webshop
                    </a>
                </div>

                <div className={"get-started"}>
                    <Link to="/#subscribe" title={"lastbit"}>
                        Sign Up
                    </Link>
                </div>
                <div id="mobile-routes">
                    <div className={"mobile-link"}>
                        <div class="dropdown">
                            <button class="dropbtn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div class="dropdown-content">
                                <Link
                                    to="/about"
                                    title={"about"}
                                >
                                    About
                                </Link>
                                <a href={"https://shop.lastbit.io"}>
                                    Webshop
                                </a>
                                <Link
                                    to="/#subscribe"
                                    className="primary-action"
                                    title={"lastbit"}
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
