import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className={"container"}>
      <div className={"content"}>
        <div className={"title"}>
          <h1>Contact</h1>
        </div>

        <div className={"row"}>
          <div className={"col-7"}>
            <p>
              Are you as excited as we are to see crypto finally become a
              currency? Talk to us!
            </p>
          </div>

          <div className={"col-5"}>
            <div className={"contact-items"}>
              <p>Plain email is the best way to contact us.</p>
              <h2>hello@lastbit.io</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
