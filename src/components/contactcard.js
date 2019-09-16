import React, { Component } from "react"
import PropTypes from "prop-types"

export default class IconCard extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    linkedIn: PropTypes.string,
    email: PropTypes.string,
  }

  render() {
    const { src, title, subtitle, linkedIn, email } = this.props
    return (
      <div className={"contactCard"}>
        <div className={"contactPic"}>
          <img src={src} className="contactImage" />
        </div>
        <div className={"contactData"}>
          <h4 className={"contact_title"}>{title}</h4>
          <p className={"contact_subtitle"}>{subtitle}</p>
        </div>
      </div>
    )
  }
}
