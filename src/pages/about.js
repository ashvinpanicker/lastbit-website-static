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
import roadmap from "../../static/images/timeline.svg"
import pb from "../../static/images/PB@3x.png"
import ash from "../../static/images/Ashvin@3x.png"
import pratham from "../../static/images/Pratham@3x.png"
import kristo from "../../static/images/Kristo@3x.png"
import kaili from "../../static/images/Kaili@3x.png"
import event1 from "../../static/images/Event1.svg"
import event2 from "../../static/images/Event2.svg"
import logo1 from "../../static/images/Logo1.svg"
import logo2 from "../../static/images/Logo2.svg"
import logo3 from "../../static/images/Logo3.svg"
import logo4 from "../../static/images/Logo4.svg"
import logo5 from "../../static/images/Logo5.svg"
import logo6 from "../../static/images/Logo6.svg"

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
            src={pb}
            title={"Prashanth B"}
            subtitle={"Founder/CEO"}
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
            linkedIn={"https://www.linkedin.com/in/ashvinpanicker"}
          />
        </div>
      </div>
      <div className={"row container"} style={{ paddingTop: 40 }}>
        <div className={"col-4"}>
          <ContactCard
            src={kristo}
            title={"Kristo Magi"}
            subtitle={"Advisor"}
            linkedIn={"https://www.linkedin.com/in/ashvinpanicker"}
          />
        </div>
        <div className={"col-4"}>
          <ContactCard
            src={kaili}
            title={"Kaili Kleemier"}
            subtitle={"Advisor"}
            linkedIn={"https://www.linkedin.com/in/ashvinpanicker"}
          />
        </div>
        <div className={"col-4"}>
          <ContactCard src={logo} title={"You"} subtitle={"Work With Us!"} />
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 50 }}>
        <h2>Roadmap</h2>
        <img
          src={roadmap}
          alt="roadmap"
          style={{
            maxWidth: "-webkit-fill-available",
            paddingRight: 20,
            paddingLeft: 20,
            marginTop: 40,
            marginBottom: 40,
          }}
        />
      </div>
    </div>

    <div className={"container"} style={{ textAlign: "center", marginTop: 50 }}>
      <h2>Events</h2>
      <div className={"row"}>
        <div className={"col-6"}>
          <div className="card">
            <img src={event1} className={"event_logo"} alt={"bold_awards"} />
            <p className="desc">
              Nominated for Young Acheiver at H-Farm's Bold Awards 2019 in
              Venice
            </p>
          </div>
        </div>
        <div className={"col-6"}>
          <div className="card">
            <img
              src={event2}
              className={"event_logo"}
              alt={"innoenergy_powerup"}
            />
            <p className="desc">
              3rd Place at the InnoEnergy Power up 2019 national finals in Riga
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className={"showcase"}>
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <h2>Our Investors and Partners</h2>
        <div className={"row"}>
          <div className={"col-4"}>
            <img src={logo1} className={"partner_logo"} alt={"mongodb"} />
          </div>
          <div className={"col-4"}>
            <img src={logo2} className={"partner_logo"} alt={"skydeck"} />
          </div>
          <div className={"col-4"}>
            <img src={logo3} className={"partner_logo"} alt={"liaa"} />
          </div>
          <div className={"col-4"}>
            <img src={logo4} className={"partner_logo"} alt={"buildit"} />
          </div>
          <div className={"col-4"}>
            <img src={logo5} className={"partner_logo"} alt={"brinc"} />
          </div>
          <div className={"col-4"}>
            <img src={logo6} className={"partner_logo"} alt={"artesian"} />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
