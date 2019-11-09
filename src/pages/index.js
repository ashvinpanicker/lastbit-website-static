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
    <SEO title="A closed loop bitcoin economy" />

    <div className={"page-header home"}>
      <div
        className={"container  call-to-action row landing"}
        style={{ background: "#f6f9fc", textAlign: "center" }}
      >
        <h1>
          Spend, Send & Save <span style={{ color: "#ff9900" }}>Bitcoin</span>
        </h1>
        <p className={"subtitle"} style={{ marginBottom: 40 }}>
          Your personal lightning powered Bitcoin debit card
        </p>
        <Subscribe />
        <p className={"subtitle"} style={{ marginBottom: 40 }}>
          Join the waitlist to be the first to get personal physical cards &
          IBAN accounts to store, spend & earn Bitcoin over the Lightning
          Network
        </p>
      </div>
      {/* <div className={"col-6"}>
          <img src={landing} alt="graphic" className={"landing_img"} />
        </div> */}
      <img src={landing} alt="screens" className={"landing_img"} />
    </div>
    <section className={"sky"}>
      <div className={"container"} style={{ marginBottom: 50, marginTop: 50 }}>
        <h2 className={"section_title"}>
          Towards a closed loop Bitcoin economy
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
              title={"Easy On-Ramps"}
              desc={
                "Get started with Bitcoin on the Lightning Network by simply purchasing Bitcoin with your credit card"
              }
            />
          </div>
          <div className={"col-4"}>
            <IconCard
              src={lightningbolt}
              title={"Easy Off-Ramps"}
              desc={
                "Send Bitcoin to anyone over social media readily available to use on the Lightning Network or spendable on a personal debit card"
              }
            />
          </div>
          <div className={"col-4"}>
            <IconCard
              src={easy}
              title={"Incentivized Spending"}
              desc={
                "Your personal IBAN account to spend fiat and earn Bitcoin cashbacks that you can spend & send instantly!"
              }
            />
          </div>
        </div>
      </div>
    </section>

    <section className={"features__section"}>
      <div className={"container"}>
        <h2 className={"section_title"}>Lastbit mobile (iOS & Android)</h2>
        <Features />
      </div>
    </section>

    <div className={"showcase"}>
      <h4 className={"showcase_title"}>
        Try our testnet Bitcoin & Lightning wallet
      </h4>
      <p className={"showcase_desc"}>
        Signup below to join the waitlist to use our completely new application
        featuring virtual debit cards
      </p>
      <div className={"row container"} style={{ paddingBottom: 60 }}>
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
          <h2>The world's first Lightning powered consumer payments product</h2>
          <p>Join the waitlist to be a part of the beta launch</p>
        </div>
      </div>
      <div className={"container"}>
        <Subscribe />
      </div>
    </div>
  </Layout>
)

export default IndexPage
