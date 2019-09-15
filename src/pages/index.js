import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Subscribe from "../components/subscribe"
import hodler1 from "../../static/images/Hodler_1.34.png"
import hodler2 from "../../static/images/Hodler_1.37.png"
import blob2 from "../../static/images/blob2.svg"
import blob1 from "../../static/images/blob-shape.svg"
import IconCard from "../components/iconcard"
import mobilepay from "../../static/images/mobile-pay.png"
import lightning from "../../static/images/lightning.png"
import easy from "../../static/images/easy-icon-2.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Store and Spend Bitcoin" />

    <div className={"page-header home"}>
      <div className={"container landing"}>
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
        <div className="video">
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
        </div>
      </div>
    </div>

    <div className={"container"}>
      <div className={"features"}>
        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img
                  alt={"blob2"}
                  src={blob2}
                  style={{ position: "absolute", zIndex: -1 }}
                />
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
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Complete Transparency</h2>
                <p className={"subtitle"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  uspendisse eu nisi elit. Maecenas leo diam, placerat ut tortor
                  eu, sodales suscipit nisi.
                </p>
              </div>
              <img
                alt={"blob1"}
                src={blob1}
                style={{ position: "absolute", zIndex: -1 }}
              />
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img
                  alt="blob2"
                  src={blob2}
                  style={{ position: "absolute", zIndex: -1 }}
                />
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
