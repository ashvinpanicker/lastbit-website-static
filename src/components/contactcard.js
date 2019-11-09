import React, { Component } from "react"
import PropTypes from "prop-types"
import iconLinkedin from "../../static/images/icon-linkedin.svg"
import iconEmail from "../../static/images/icon-linkedin.svg" //FIXME

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
          <img src={src} className="contactImage" alt={title} {...this.props} />
          {linkedIn && (
            <div className={"contactLinkedin"}>
              <a href={linkedIn} target={"_blank"} title={title}>
                <img
                  alt={"LinkedIn"}
                  src={iconLinkedin}
                  style={{ maxHeight: "20px", padding: 8 }}
                />
              </a>
            </div>
          )}
          {email && (
            <div className={"contactemail"}>
              <a href={email} target={"_blank"} title={title}>
                <img
                  alt={"email"}
                  src={iconEmail}
                  style={{ maxHeight: "20px", padding: 8 }}
                />
              </a>
            </div>
          )}
        </div>
        <div className={"contactData"}>
          <h4 className={"contact_title"}>{title}</h4>
          <p className={"contact_subtitle"}>{subtitle}</p>
        </div>
      </div>
    )
  }
}
