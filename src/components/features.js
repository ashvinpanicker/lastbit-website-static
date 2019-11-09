import React, { Component } from "react"
import bitcoin from "../../static/images/bitcoin.png"
import lightning from "../../static/images/lightning.png"
import card from "../../static/images/card.png"

export default class Features extends Component {
  state = {
    img: bitcoin,
  }

  changeImage(img) {
    var bars = document.getElementsByClassName("bar")

    for (let i = 0; i < bars.length; i++) {
      bars[i].classList.remove("bar__active")
    }

    document.getElementById(img).classList.add("bar__active")
    switch (img) {
      case "bitcoin":
        this.setState({ img: bitcoin })
        break
      case "lightning":
        this.setState({ img: lightning })
        break
      case "card":
        this.setState({ img: card })
        break
      default:
        this.setState({ img: bitcoin })
        break
    }
  }

  render() {
    return (
      <div className={"row"}>
        <div className={"col-6"}>
          <div className="px">
            <div className="px__body">
              <div className="px__body__cut"></div>
              <div className="px__body__speaker"></div>
              <div className="px__body__sensor"></div>

              <div className="px__body__mute"></div>
              <div className="px__body__up"></div>
              <div className="px__body__down"></div>
              <div className="px__body__right"></div>
            </div>

            <div className="px__screen">
              <div className="px__screen__">
                <img
                  className="px__screen__frame img-responsive"
                  src={this.state.img}
                  alt={"lastbit_app-screen"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={"col-6"} style={{ position: "relative", zIndex: 10 }}>
          <div className={"features"}>
            <div
              className={"feature__item"}
              onClick={() => this.changeImage("bitcoin")}
            >
              <div className={"row row_card"}>
                <div className={"feature__content"}>
                  <div
                    id="bitcoin"
                    className={"col-6 first bar bar__active"}
                  ></div>
                  <div className={"col-6"} style={{ width: "90%" }}>
                    <h2>Bitcoin Wallet</h2>
                    <p className={"subtitle"}>
                      A segwit compatible HD Bitcoin wallet conforming with the
                      latest industry standards and BIP's. Use this wallet to
                      make regular Bitcoin transactions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={"feature__item"}
              onClick={() => this.changeImage("lightning")}
            >
              <div className={"row row_card"}>
                <div className={"feature__content"}>
                  <div id="lightning" className={"col-6 first bar"}></div>
                  <div className={"col-6"} style={{ width: "90%" }}>
                    <h2>Lightning Wallet</h2>
                    <p className={"subtitle"}>
                      Begin using the Lightning Network with zero setup. Send and Receive bitcoin instantly with
                      negligible fees. Non-custodial option coming soon for advanced users.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={"feature__item"}
              onClick={() => this.changeImage("card")}
            >
              <div className={"row row_card"}>
                <div className={"feature__content"}>
                  <div id="card" className={"col-6 first bar"}></div>
                  <div className={"col-6"} style={{ width: "90%" }}>
                    <h2>Virtual Debit Cards</h2>
                    <p className={"subtitle"}>
                      Your personal virtual debit card that can be topped up in EUR using Bitcoin over LN, all in 2 simple steps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
