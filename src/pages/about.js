import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Roadmap from "../components/roadmap"
import informationImage from "../../static/images/Information-document.svg"
import eventImage from "../../static/images/Event-managment.svg"
import ProductivityImage from "../../static/images/Increase-Productivity.svg"
import happinessImage from "../../static/images/Make-happiness.svg"
import ContactCard from "../components/contactcard"
import logo from "../../static/images/logo.png"
import pb from "../../static/images/PB@3x.png"
import ash from "../../static/images/Ashvin@3x.png"
import pratham from "../../static/images/Pratham@3x.png"
import shivam from "../../static/images/shivam.webp"
import pochiwu from "../../static/images/pochiwu.png"
import chon from "../../static/images/chon.jpg"
import kristo from "../../static/images/Kristo@3x.png"
import kaili from "../../static/images/Kaili@3x.png"
import boldawards from "../../static/images/boldawards.svg"
import innoenergy from "../../static/images/innoenergy.svg"
import techcrunch from "../../static/images/techcrunch.png"
import money2020 from "../../static/images/money2020.png"
import mongodb from "../../static/images/Logo1.svg"
// import logo2 from "../../static/images/Logo2.svg"
import liaa from "../../static/images/Logo3.svg"
import buildit from "../../static/images/Logo4.svg"
import brinc from "../../static/images/Logo5.svg"
import artesian from "../../static/images/Logo6.svg"
import skydeck from "../../static/images/skydeck.png"
import hatch from "../../static/images/hatch.png"
import fulgur from "../../static/images/fulgur-logo.svg"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />

    <div
      className={"page-header"}
      style={{ background: "#00204a", padding: "100px 0px" }}
    >
      <div className={"container"} style={{ paddingBottom: 80 }}>
        <h2 style={{ color: "white" }}>
          By <span style={{ color: "#ff9900" }}>Bitcoiners</span>, for{" "}
          <span style={{ color: "#ff9900" }}>Bitcoiners</span>
        </h2>
        <p className={"lightText"}>
          We want to make it possible to walk into a shop, buy a cup of coffee
          and pay for it with crypto even if the merchant doesn't accept it -
          securely and instantly. We believe in the mainstream adoption of
          crypto-currencies by building intuitive, familiar payments products
          with immediate benefits to end users.
          <br />
        </p>
        <p className={"lightText"}>
          <br />
          Imagine a complete closed loop Bitcoin economy, i.e. spending, saving
          and sending Bitcoin without hassle and without compromise.
        </p>
      </div>
    </div>

    <div className={"container"}>
      {/* <Roadmap /> */}
      {/* <HorizontalTimeline
        index={this.state.value}
        indexClick={index => {
          this.setState({ value: index, previous: this.state.value })
        }}
        values={VALUES}
      /> */}
      <div className={"targets"}>
        <div className={"title"}>
          <h2>Our Values</h2>
        </div>

        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Information"} src={informationImage} />
              <h3>Passion</h3>
              <p>
                We at lastbit believe that great things can be acheived only if
                there is a burning desire to acheive them. Our team comprises of
                young like minds who strongly believe in a future of financial
                independence.
              </p>
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Event"} src={eventImage} />
              <h3>Perseverance</h3>
              <p>
                When the times get tough, the ones who can keep their heads held
                high and envision a bright future to come are well rewarded.
                After all the fruits of success are borne by the ones that put
                in the hard work to reap them.
              </p>
            </div>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Productivity"} src={ProductivityImage} />
              <h3>Persistence</h3>
              <p>
                Try and try until you succeed. Never give in even if you bleed.
              </p>
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Happiness"} src={happinessImage} />
              <h3>Humour</h3>
              <p>
                It's all about the memes folks. It's always hard to strike a
                work-life balance, that's why we encourage humour in the
                workplace to make the environment fun and ever exciting!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={"showcase"}>
      <h5 style={{ fontSize: "24px", color: "#00204a" }}>
        We are a team of developers and friends that studied together and now
        build lastbit together
      </h5>
      <p>
        <a
          href="https://medium.com/lastbitpay"
          style={{
            textDecoration: "underline",
            color: "blue",
            textDecorationColor: "blue",
          }}
        >
          Check out our blog
        </a>{" "}
        to read our story
      </p>
      <div className={"row container"} style={{ paddingTop: 40 }}>
        <div className={"col-4"}>
          <ContactCard
            src={pb}
            title={"Prashanth B"}
            subtitle={"Co-Founder & CEO"}
            linkedIn={"https://www.linkedin.com/in/pbio"}
          />
        </div>
        <div className={"col-4"}>
          <ContactCard
            src={ash}
            title={"Ashvin Panicker"}
            subtitle={"Co-Founder"}
            linkedIn={"https://www.linkedin.com/in/ashvinpanicker"}
          />
        </div>
        <div className={"col-4"}>
          <ContactCard
            src={pratham}
            title={"Pratham Mehta"}
            subtitle={"App Developer"}
            linkedIn={"https://www.linkedin.com/in/prathamamehta/"}
          />
        </div>
      </div>
      <div className={"row container"} style={{ paddingTop: 40 }}>
        <div className={"col-4"}>
          <ContactCard
            src={shivam}
            title={"Shivam Dev"}
            subtitle={"App Developer"}
            linkedIn={"https://www.linkedin.com/in/skdev24"}
          />
        </div>
        <div className={"col-4"}>
          <ContactCard
            src={kristo}
            title={"Kristo Magi"}
            subtitle={"Advisor"}
            linkedIn={"https://www.linkedin.com/in/kristomagi"}
          />
        </div>
        <div className={"col-4"}>
          <ContactCard
            src={kaili}
            title={"Kaili Kleemeier"}
            subtitle={"Advisor"}
            linkedIn={"https://www.linkedin.com/in/kailikleemeier"}
          />
        </div>
      </div>
      <div className={"row container"} style={{ paddingTop: 40 }}>
        <div className={"col-4"}>
          <ContactCard
            src={pochiwu}
            title={"Po Chi Wu"}
            subtitle={"Advisor"}
            linkedIn={"https://www.linkedin.com/in/pochiwu"}
          />
        </div>
        <div className={"col-4"}>
          <ContactCard
            src={chon}
            title={"Chon Tang"}
            subtitle={"Advisor"}
            linkedIn={"https://www.linkedin.com/in/chontang"}
          />
        </div>
        <div className={"col-4"}>
          <ContactCard
            src={logo}
            title={"You"}
            subtitle={"Work With Us!"}
            style={{ cursor: "pointer" }}
            onClick={() =>
              (window.location.href = "https://angel.co/company/lastbit/jobs")
            }
          />
        </div>
      </div>
      <div style={{ padding: "25px 0px" }}></div>
    </div>

    <div className={"container"} style={{ textAlign: "center", marginTop: 50 }}>
      <h2>Events</h2>
      <div className={"row"}>
        <div className={"col-6"}>
          <div className="card">
            <img
              src={boldawards}
              className={"event_logo"}
              alt={"bold_awards"}
            />
            <p className="desc">
              Nominated for Young Acheiver at H-Farm's Bold Awards 2019 in
              Venice
            </p>
          </div>
        </div>
        <div className={"col-6"}>
          <div className="card">
            <img
              src={innoenergy}
              className={"event_logo"}
              alt={"innoenergy_powerup"}
            />
            <p className="desc">
              3rd Place at the InnoEnergy Power up 2019 national finals in Riga
            </p>
          </div>
        </div>
      </div>
      <div className={"row"}>
        <div className={"col-6"}>
          <div className="card">
            <img src={techcrunch} className={"event_logo"} alt={"tc_disrupt"} />
            <p className="desc">
              Official Exhibitor at TechCrunch Disrupt 2019 in San Fransisco
            </p>
          </div>
        </div>
        <div className={"col-6"}>
          <div className="card">
            <img src={money2020} className={"event_logo"} alt={"money2020"} />
            <p className="desc">
              Voted as one of the 100 hottest fintech startups at Money2020 2019
              in Las Vegas
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className={"showcase"}>
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <h2>Our Investors and Partners</h2>
        <div style={{ padding: "25px 0px" }}></div>
        <div className={"row"}>
          <div className={"col-3"}>
            <img
              src={fulgur}
              className={"partner_logo"}
              alt={"fulgur_ventures"}
              style={{ cursor: "pointer" }}
              onClick={() => window.open("https://fulgur.ventures/")}
            />
          </div>
          <div className={"col-3"}>
            <img
              src={skydeck}
              className={"partner_logo"}
              alt={"skydeck"}
              style={{ cursor: "pointer" }}
              onClick={() => window.open("https://skydeck.berkeley.edu/")}
            />
          </div>
          <div className={"col-3"}>
            <img
              src={brinc}
              className={"partner_logo"}
              alt={"brinc"}
              style={{ cursor: "pointer" }}
              onClick={() => window.open("https://www.brinc.io/")}
            />
          </div>
          <div className={"col-3"}>
            <img
              src={buildit}
              className={"partner_logo"}
              alt={"buildit"}
              style={{ cursor: "pointer" }}
              onClick={() => window.open("https://www.buildit.lv/")}
            />
          </div>
        </div>
        <div style={{ padding: "25px 0px" }}></div>
        <div className={"row"}>
          <div className={"col-3"}>
            <img
              src={hatch}
              className={"partner_logo"}
              alt={"digital_ocean"}
              style={{ cursor: "pointer" }}
              onClick={() => window.open("https://www.digitalocean.com/hatch/")}
            />
          </div>
          <div className={"col-3"}>
            <img
              src={mongodb}
              className={"partner_logo"}
              alt={"mongodb"}
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://www.mongodb.com/startup-accelerator")
              }
            />
          </div>
          <div className={"col-3"}>
            <img
              src={liaa}
              className={"partner_logo"}
              alt={"liaa"}
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "http://www.liaa.gov.lv/en/invest-latvia/start-up-ecosystem"
                )
              }
            />
          </div>
          <div className={"col-3"}>
            <img
              src={artesian}
              className={"partner_logo"}
              alt={"artesian"}
              // style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div style={{ padding: "25px 0px" }}></div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
