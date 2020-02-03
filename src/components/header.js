import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, logo }) => (
    <header>
        <div className={"container"}>
            <div className={"top-menu"}>
                <div className={"logo"}>
                    <Link to="/" title={"lastbit"}>
                        <img alt={"Logo"} src={logo} />
                    </Link>
                </div>

                <div className={"header-link"}>
                    <Link to="/about" title={"about"} style={{ marginLeft: 10, marginRight: 10 }}>
                        About
                    </Link>
		    <a style={{ marginLeft: 10, marginRight: 10 }} href={'https://shop.lastbit.io'}>Webshop</a>	
                </div>

                <div className={"get-started"}>
                    <Link to="/#subscribe" title={"lastbit"}>
                        SIGN UP
                    </Link>
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
