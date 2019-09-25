import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Subscribe from "../components/subscribe"
import hodler1 from "../../static/images/Hodler_1.34.png"
import hodler2 from "../../static/images/Hodler_1.37.png"
import blob2 from "../../static/images/blob2.svg"
// import blob1 from "../../static/images/blob-shape.svg"
import IconCard from "../components/iconcard"
import mobilepay from "../../static/images/mobile-pay.png"
import apphodler from "../../static/images/app-hodler.png"
import lightning from "../../static/images/lightning.png"
import google from "../../static/images/google.png"
import apple from "../../static/images/apple.png"
import landing from "../../static/images/landing.png"
import vcards from "../../static/images/vcards.svg"
import easy from "../../static/images/easy-icon-2.png"
import video from "../../static/video/bg-01.mp4"

const IndexPage = () => (
  <Layout>
    <SEO title="Store and Spend Bitcoin" />

    <div className={"page-header home"}>
      <div className={"container row landing"}>
        <div className={"col-6"}>
          <h1>
            Store and Spend <span style={{ color: "#ff9900" }}>Bitcoin</span>
          </h1>
          <p className={"lightText"}>
            Use crypto as a currency
            <br />
            The way it was meant to be used
            <br />
            Even if the merchant doesn't accept it.
          </p>
        </div>
        {/* <div className="video">
          <iframe
            className="resp-iframe"
            src={"https://www.youtube.com/embed/Tn7wvu8R4Wk"}
            title={"junk"}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
        </div> */}
        <div className={"col-6"}>
          <img src={landing} alt="graphic" className={"landing_img"} />
        </div>
      </div>
    </div>

    <div className={"container"}>
      <div className={"features"}>
        <div className={"feature__item"}>
          <div className={"row row_card"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"blob2"} src={blob2} className={"feature_blob"} />
                <img alt={"hodler1"} src={hodler1} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Compact and Wireless</h2>
                <p className={"subtitle"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse eu nisi elit. Maecenas leo diam, placerat ut
                  tortor eu, sodales suscipit nisi.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row row_card"}>
            <div className={"col-6"}>
              <div className={"feature__content"} style={{ paddingLeft: "7%" }}>
                <h2>Complete Transparency</h2>
                <p className={"subtitle"}>
                  Put in a hook in this sentence, concise
                  <br />
                  Write a slightly longer sentence here as a short description
                  to follow up on the hook.
                  <br />
                  End it with a punchline or link if necessary.
                </p>
              </div>
              {/* <img alt={"blob1"} src={blob1} /> */}
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt="blob2" src={blob2} className={"feature_blob"} />
                <img alt={"hw2"} src={hodler2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={"container"} style={{ marginBottom: 50 }}>
      <div className={"row"}>
        <div className={"col-4"}>
          <IconCard
            src={mobilepay}
            title={"Pay with Bitcoin"}
            desc={
              "The last mile adoption for crypto. Tap and pay with bitcoin at any existing card machine"
            }
          />
        </div>
        <div className={"col-4"}>
          <IconCard
            src={lightning}
            title={"Lightning Fast"}
            desc={
              "Instantly transact with bitcoin over the lightning network with much lower fees"
            }
          />
        </div>
        <div className={"col-4"}>
          <IconCard
            src={easy}
            title={"Easy Setup"}
            desc={
              "Start using Bitcoin anywhere in the world with zero setup time. No bank account required."
            }
          />
        </div>
      </div>
    </div>

    <div style={{ textAlign: "center" }}>
      <h2>How Virtual Cards Work</h2>
      <img
        src={vcards}
        alt="vcards"
        style={{
          maxWidth: "-webkit-fill-available",
          paddingRight: 20,
          paddingLeft: 20,
          marginBottom: 40
        }}
      />
    </div>

    <div className={"container row"}>
      <div className={"col-6"}>
        <div className="device device-iphone-x">
          <div className="device-frame">
            <img className="device-content" src={apphodler} alt={"img"} />
          </div>
          <div className="device-stripe"></div>
          <div className="device-header"></div>
          <div className="device-sensors"></div>
          <div className="device-btns"></div>
          <div className="device-power"></div>
        </div>
      </div>
      <div className={"col-6"}>
        <div className={"features"}>
          <div className={"feature__item"}>
            <div className={"row row_card"}>
              <div
                className={"feature__content"}
                style={{ padding: "12% 0% 4% 6%" }}
              >
                <h2>Bitcoin</h2>
                <p className={"subtitle"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse eu nisi elit. Maecenas leo diam, placerat ut
                  tortor eu, sodales suscipit nisi.
                </p>
              </div>
            </div>
          </div>

          <div className={"feature__item"}>
            <div className={"row row_card"}>
              <div
                className={"feature__content"}
                style={{ padding: "12% 0% 4% 6%" }}
              >
                <h2>Lightning</h2>
                <p className={"subtitle"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse eu nisi elit. Maecenas leo diam, placerat ut
                  tortor eu, sodales suscipit nisi.
                </p>
              </div>
            </div>
          </div>

          <div className={"feature__item"}>
            <div className={"row row_card"}>
              <div
                className={"feature__content"}
                style={{ padding: "12% 0% 4% 6%" }}
              >
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

    <div className={"showcase"}>
      <h4 className={"showcase_title"}>
        Download Testnet Version for iOS and Android
      </h4>
      <p className={"showcase_desc"}>
        Constantly updated, fully functional bitcoin and lightning wallet (Only
        testnet BTC)
      </p>
      <div className={"row container"} style={{ padding: 40 }}>
        <div className={"col-6"}>
          <img
            src={google}
            alt={"playstore"}
            className={"img-responsive hover-shadow"}
            style={{ maxWidth: "400px" }}
          />
        </div>
        <div className={"col-6"}>
          <img
            src={apple}
            alt={"appstore"}
            className={"img-responsive hover-shadow"}
            style={{ maxWidth: "400px" }}
          />
        </div>
      </div>

      {/* Responsive iphone https://codepen.io/dani3lsz/pen/MEZjeo?editors=1100 */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="device device-iphone-x">
          <div className="device-frame">
            <video className="device-content" muted="muted" autoplay="" loop="">
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="device-stripe"></div>
          <div className="device-header"></div>
          <div className="device-sensors"></div>
          <div className="device-btns"></div>
          <div className="device-power"></div>
        </div>
      </div>

      {/* <div style={{ textAlign: "center" }}>
        <img
          src={apphodler}
          alt={"app_screens"}
          className={"img-responsive"}
          style={{ width: "80%" }}
        />
      </div> */}
    </div>

    <div id="subscribe" className={"call-to-action"}>
      <div className={"container"}>
        <div className={"call-to-action__content"}>
          <h2>The world's first Lightning powered payment service</h2>
          <p>
            Start using bitcoin to pay at any retail or online store even if the
            merchant does not accept bitcoin!
          </p>
        </div>
      </div>
      <div className={"container"}>
        <Subscribe />
      </div>
    </div>
  </Layout>
)

export default IndexPage
