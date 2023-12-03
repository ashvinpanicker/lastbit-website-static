import React, { Component } from "react"
import PropTypes from "prop-types"

export default class IconCard extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }

  render() {
    const { src, title, desc } = this.props
    return (
      <div>
        <div className="cardCircle">
          <img src={src} className="cardImage" alt="icon" />
        </div>
        <div className="card">
          <h4 className="title">{title}</h4>
          <p className="desc">{desc}</p>
        </div>
      </div>
    )
  }
}
