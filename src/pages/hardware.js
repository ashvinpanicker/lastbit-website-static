import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Hardware" />

    <div className={"page-header"}>
      <div className={"container landing"}>
        <h2>The Hardware wallet that lets you spend</h2>
        <p className={"lightText"}>
          Welcome to the future
          <br />
          Join us in embracing the future of digital payments
        </p>
      </div>
    </div>

    <div className={"container"}></div>
  </Layout>
)

export default AboutPage
