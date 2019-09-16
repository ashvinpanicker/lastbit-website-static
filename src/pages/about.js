import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Roadmap from "../components/roadmap"
// import Roadmap from "../components/roadmap"
import informationImage from "../../static/images/Information-document.svg"
import eventImage from "../../static/images/Event-managment.svg"
import ProductivityImage from "../../static/images/Increase-Productivity.svg"
import happinessImage from "../../static/images/Make-happiness.svg"
import ContactCard from "../components/contactcard"
import logo from "../../static/images/logo.png"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />

    <div className={"page-header"}>
      <div className={"container landing"}>
        <h2>
          By <span style={{ color: "#ff9900" }}>Bitcoiners</span>, for{" "}
          <span style={{ color: "#ff9900" }}>Bitcoiners</span>
        </h2>
        <p className={"lightText"}>
          At lastbit, we are on a mission to enable the mass market adoption of
          cryptocurrencies
          <br />
          Join us in embracing the future of digital payments
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse eu nisi elit. Maecenas leo diam, placerat ut tortor
                eu, sodales suscipit nisi.
              </p>
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Event"} src={eventImage} />
              <h3>Perseverance</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse eu nisi elit. Maecenas leo diam, placerat ut tortor
                eu, sodales suscipit nisi.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse eu nisi elit. Maecenas leo diam, placerat ut tortor
                eu, sodales suscipit nisi.
              </p>
            </div>
          </div>

          <div className={"col-6"}>
            <div className={"item"}>
              <img alt={"Happiness"} src={happinessImage} />
              <h3>Humour</h3>
              <p>It's all about the memes folks</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={"showcase"}>
      <h5 style={{ fontSize: "24px", color: "#00204a" }}>
        We are a team of developers and friends who studied together and now
        live and work together
      </h5>
      <div className={"row container"} style={{ paddingTop: 40 }}>
        <div className={"col-4"}>
          <ContactCard
            src={logo}
            title={"Pay with Bitcoin"}
            subtitle={"Sales Magnet"}
          />
        </div>
        <div className={"col-4"}>
          <ContactCard
            src={logo}
            title={"Pay with Bitcoin"}
            subtitle={"Jesus worshipper"}
          />
        </div>
        <div className={"col-4"}>
          <ContactCard
            src={logo}
            title={"Pay with Bitcoin"}
            subtitle={"Bartender"}
          />
        </div>
      </div>
      <div className={"row container"} style={{ paddingTop: 40 }}>
        <div className={"col-4"}>
          <ContactCard
            src={logo}
            title={"Pay with Bitcoin"}
            subtitle={"Sales Magnet"}
          />
        </div>
        <div className={"col-4"}>
          <ContactCard
            src={logo}
            title={"Pay with Bitcoin"}
            subtitle={"Jesus worshipper"}
          />
        </div>
        <div className={"col-4"}>
          <ContactCard
            src={logo}
            title={"Pay with Bitcoin"}
            subtitle={"Bartender"}
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
