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
          The Hardware wallet that lets you spend
        </h2>
        <p className={"lightText"}>
          Welcome to the future
          <br />
          Join us in embracing the future of digital payments
        </p>
        <div className="video">
          <iframe
            className="resp-iframe"
            src={"https://www.youtube.com/embed/OecjlgoTRnA"}
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
                  daily purchases with crypto!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item hardware"}>
          <div className={"row row_card"} style={{ borderRadius: 25 }}>
            <div className={"col-6"}>
              <div className={"feature__content"} style={{ paddingLeft: "7%" }}>
                <h2>Security Redefined</h2>
                <p className={"subtitle"}>
                  <ul style={{ listStyle: "disc" }}>
                    <li>Engineered to keep your crypto safe.</li>
                    <li>
                      Built with an EEAL5+ certified secure element on top of
                      Arm Trust Zone Technology
                    </li>
                    <li>Split your wallets with SD card wallet isolation.</li>
                  </ul>
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
      </div>
    </div>
  </Layout>
)

export default AboutPage
