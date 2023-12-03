import React, { Component } from "react"
// import addToMailchimp from "gatsby-plugin-mailchimp"

export default class Subscribe extends Component {
  state = {
    email: null,
    msg: null,
    err: false,
  }

  _handleChange = e => {
    console.log({
      [`${e.target.name}`]: e.target.value,
    })
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  _handleSubmit = e => {
    e.preventDefault()

    console.log("submit", this.state)
    /*
    
    addToMailchimp(this.state.email)
      .then(({ msg, result }) => {
        if (result !== "success") {
          let n = msg.indexOf("<")
          msg = msg.substring(0, n !== -1 ? n : msg.length)
          throw msg
        }
        this.setState({ msg: msg, err: false })
      })
      .catch(err => {
        console.log("err", err)
        this.setState({ msg: err, err: true })
      })

      */
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <form className="container">
          <input
            type="email"
            onChange={this._handleChange}
            placeholder="Your Email Address"
            name="email"
          />
          <div className="button">
            <button onClick={e => this._handleSubmit(e)}>
              Join the waitlist
            </button>
          </div>
        </form>
        <div style={{ paddingTop: 20 }}>
          <p
            style={
              this.state.err
                ? { color: "red", textAlign: "center" }
                : { color: "#47b925", textAlign: "center" }
            }
          >
            {this.state.msg}
          </p>
        </div>
        <p style={{ textAlign: "center" }}>500+ On the waitlist!</p>
      </div>
    )
  }
}
