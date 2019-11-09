import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Subscribe from "../components/subscribe"
// import blob1 from "../../static/images/blob-shape.svg"
import IconCard from "../components/iconcard"
import mobilepay from "../../static/images/mobile-pay.png"
import lightningbolt from "../../static/images/lightning_bolt.png"
import google from "../../static/images/google.png"
import apple from "../../static/images/apple.png"
import landing from "../../static/images/screens.png"
import easy from "../../static/images/easy-icon-2.png"
// import video from "../../static/video/bg-01.mp4"
import zeus from "../../static/images/zeus.gif"
import Features from "../components/features"

const IndexPage = () => (
  <Layout>
    <SEO title="Store and Spend Bitcoin" />

    <div className={"page-header home"}>
      <div
        className={"container  call-to-action row landing"}
        style={{ background: "#f6f9fc", textAlign: "center" }}
      >
        <h1>
          Store and Spend <span style={{ color: "#ff9900" }}>Bitcoin</span>
        </h1>
        <p className={"subtitle"} style={{ marginBottom: 40 }}>
          Use crypto as a currency, the way it was meant to be used, even if the
          merchant doesn't accept it.
        </p>
        <Subscribe />
      </div>
      {/* <div className={"col-6"}>
          <img src={landing} alt="graphic" className={"landing_img"} />
        </div> */}
      <img src={landing} alt="screens" className={"landing_img"} />
    </div>
    <section className={"sky"}>
      <div className={"container"} style={{ marginBottom: 50, marginTop: 50 }}>
        <h2 style={{ fontSize: 40, color: "#444", textAlign: "center" }}>
          The Complete financial suite for Bitcoin
        </h2>
        <img
          src={zeus}
          alt={"Store, Send, Spend Bitcoin Instantly"}
          className={"zeus"}
        />
        <div class="x1">
          <div class="cloud"></div>
        </div>

        <div class="x2">
          <div class="cloud"></div>
        </div>

        <div class="x3">
          <div class="cloud"></div>
        </div>

        <div class="x4">
          <div class="cloud"></div>
        </div>

        <div class="x5">
          <div class="cloud"></div>
        </div>
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
              src={lightningbolt}
              title={"Lightning Fast"}
              desc={
                "Instantly transact with bitcoin over the lightning network with significantly lower fees than an onchain transaction"
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
    </section>

    <section className={"features__section"}>
      <div className={"container"}>
        <h2 style={{ fontSize: 40, color: "#444", textAlign: "center" }}>
          Use crypto in the real world
        </h2>
        <Features />
      </div>
    </section>

    <div className={"showcase"}>
      <h4 className={"showcase_title"}>
        Download Testnet Version for iOS and Android
      </h4>
      <p className={"showcase_desc"}>
        Constantly updated, fully functional bitcoin and lightning wallet (Only
        testnet BTC)
      </p>
      <div className={"row container"}>
        <img
          src={google}
          alt={"playstore"}
          className={"img-responsive hover-shadow"}
          style={{ maxWidth: "300px", margin: 20 }}
        />
        <img
          src={apple}
          alt={"appstore"}
          className={"img-responsive hover-shadow"}
          style={{ maxWidth: "300px", margin: 20 }}
        />
      </div>

      {/* Responsive iphone https://codepen.io/dani3lsz/pen/MEZjeo?editors=1100 */}
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
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
