import React from "react"

import Layout from "../components/layout"
// import Roadmap from "../components/roadmap"
// import HorizontalTimeline from "react-horizontal-timeline"

import Values from "../sections/values"
import Team from "../sections/team"
import Events from "../sections/events"

const AboutPage = () => (
    <Layout>
        <div
            className={"page-header"}
            style={{ background: "#00204a", padding: "100px 0px" }}
        >
            <div className={"container"} style={{ paddingBottom: 80 }}>
                <h1 style={{ color: "white" }}>
                    By <span style={{ color: "#ff9900" }}>Bitcoiners</span>, for{" "}
                    <span style={{ color: "#ff9900" }}>Bitcoiners</span>
                </h1>
                <p className={"lightText"}>
                    We want to make it possible to walk into a shop, buy a cup
                    of coffee and pay for it with crypto even if the merchant
                    doesn't accept it - securely and instantly. We believe in
                    the mainstream adoption of crypto-currencies by building
                    intuitive, familiar payments products with immediate
                    benefits to end users.
                    <br />
                </p>
                <p className={"lightText"}>
                    <br />
                    Imagine a complete closed loop Bitcoin economy, i.e.
                    spending, saving and sending Bitcoin without hassle and
                    without compromise.
                </p>
            </div>
        </div>

        {/* <Roadmap /> */}
        {/* <HorizontalTimeline
                index={this.state.value}
                indexClick={index => {
                this.setState({ value: index, previous: this.state.value })
                }}
                values={VALUES}
            /> 
        */}
        <Values />

        <Events />

        <Team />

    </Layout>
)

export default AboutPage
