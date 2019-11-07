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
    }
  }

  render() {
    return (
      <div className={"row"}>
        <div className={"col-6"}>
          <div className="device device-iphone-x">
            <img
              src={this.state.img}
              alt={"app"}
              className="img-responsive device-frame"
            />
            <div className="device-stripe"></div>
            <div className="device-header"></div>
            <div className="device-sensors"></div>
            <div className="device-btns"></div>
            <div className="device-power"></div>
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
                    <h2>Bitcoin</h2>
                    <p className={"subtitle"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse eu nisi elit. Maecenas leo diam, placerat ut
                      tortor eu, sodales suscipit nisi.
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
                    <h2>Lightning</h2>
                    <p className={"subtitle"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse eu nisi elit. Maecenas leo diam, placerat ut
                      tortor eu, sodales suscipit nisi.
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
                    <h2>Virtual Card</h2>
                    <p className={"subtitle"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse eu nisi elit. Maecenas leo diam, placerat ut
                      tortor eu, sodales suscipit nisi.
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
