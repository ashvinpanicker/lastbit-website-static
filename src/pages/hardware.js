import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import hodler1 from "../../static/images/Hodler_1.34.png"
import hodler2 from "../../static/images/Hodler_1.37.png"
import blob2 from "../../static/images/blob2.svg"
// import blob1 from "../../static/images/blob-shape.svg"

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
          <div className={"row row_card"}>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse eu nisi elit. Maecenas leo diam, placerat ut
                  tortor eu, sodales suscipit nisi.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row row_card"}>
            <div className={"col-6"}>
              <div className={"feature__content"} style={{ paddingLeft: "7%" }}>
                <h2>Complete Transparency</h2>
                <p className={"subtitle"}>
                  Put in a hook in this sentence, concise
                  <br />
                  Write a slightly longer sentence here as a short description
                  to follow up on the hook.
                  <br />
                  End it with a punchline or link if necessary.
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
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
