import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import hodler1 from "../../static/images/Hodler_1.34.png"
import hodler2 from "../../static/images/Hodler_1.37.png"
import blob2 from "../../static/images/blob2.svg"
// import apphodler from "../../static/images/hwandphone.png"
// import blob1 from "../../static/images/blob-shape.svg"

const AboutPage = () => (
  <Layout>
    <SEO title="Hardware" />

    <div
      className={"page-header"}
      style={{ background: "#00204a", padding: "100px 0px" }}
    >
      <div className={"container landing"}>
        <h2 style={{ color: "white" }}>
          A secure place to store and spend{" "}
          <span style={{ color: "#ff9900" }}>crypto</span>
        </h2>
        <p className={"lightText"}>
          Imagine a modern debit card that can store and manage your crypto
          wallet keys
          <br />
          Check out our progress on this with the videos below! Planned for
          release in 2020.
        </p>
        <div className="video">
          <iframe
            className="resp-iframe"
            src={"https://www.youtube.com/embed/zhVrJugGYFo"}
            title={"junk"}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
        </div>
      </div>
    </div>

    <div className={"container"}>
      <div className={"features"}>
        <div className={"feature__item hardware"}>
          <div className={"row row_card"} style={{ borderRadius: 25 }}>
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
                  The Lastbit Go is designed to fit into your pocket. Attach it
                  to your keychain and carry it around to help you make your
                  daily purchases with crypto. Prototype 2 is designed to fit
                  into your wallet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item hardware"}>
          <div className={"row row_card"} style={{ borderRadius: 25 }}>
            <div className={"col-6"}>
              <div className={"feature__content"} style={{ paddingLeft: "7%" }}>
                <h2>Secure & Open Source</h2>
                <ul className={"subtitle"} style={{ listStyle: "disc" }}>
                  <li>
                    Engineered to keep your crypto safe. Build it yourself
                  </li>
                  <li>
                    Built using a commercially available secure element on top
                    of ARM TrustZone
                  </li>
                  <li>
                    Isolate your cold & hot wallets on chip, using an SD card
                  </li>
                  <li>ETA - 2020</li>
                </ul>
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
          {/* <div className={"feature__item"}>
            <div className={"row row_card"}>
              <div
                className={"feature__content"}
                style={{ cursor: "default !important" }}
              >
                <div style={{ textAlign: "center" }}>
                  <img
                    src={apphodler}
                    alt={"app_screens"}
                    className={"img-responsive"}
                    style={{ width: "80%" }}
                  />
                  <p className={"subtitle"} style={{ fontStyle: "italic" }}>
                    Pairs with any iOS or Android smartphone via bluetooth to
                    help conveniently manage your funds
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <br />
        </div>
        <div className="video">
          <iframe
            className="resp-iframe"
            src={"https://www.youtube.com/embed/mYgvu-Lg3eE"}
            title={"junk"}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
