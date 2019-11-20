import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/lb-ln.png"

const Header = ({ siteTitle }) => (
  <header>
    <div className={"container"}>
      <div className={"top-menu"}>
        <div className={"logo"}>
          <Link to="/" title={"lastbit"}>
            <img alt={"Logo"} src={logo} />
          </Link>
        </div>

        <div className={"header-link"}>
          <Link to="/about" title={"about"}>
            About
          </Link>
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
