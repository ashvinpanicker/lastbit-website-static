import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Subscribe from "../sections/subscribe"

import google from "../../static/images/app/google.png"
import apple from "../../static/images/app/apple.png"
import landing from "../../static/images/landing.png"

import Sky from "../sections/sky"
import Features from "../sections/features"
import Partners from "../sections/partners"
import Backers from "../sections/backers"
// import AnimatedText from "../components/textAnimated"

const IndexPage = () => (
	<Layout>
	<SEO title="Spend, Send & Save Bitcoin on the Lightning Network" />

	<div className={"page-header home"}>
	<div
	className={"container call-to-action row landing"}
	style={{ background: "#f6f9fc", textAlign: "center" }}
	>
	<h1>
	Spend, Send & Save{" "}
	<span style={{ color: "#ff9900" }}>Bitcoin</span>
	</h1>
	<Link to="/#features" title={"lastbit"}>
	<img
	src={landing}
	alt="screens"
	className={"landing_img hover-shadow"}
	/>
	</Link>
	<p
	className={"landing_subtitle"}
	style={{ marginBottom: 40, fontWeight: 600, fontSize: 32 }}
	>
	Your personal lightning powered Bitcoin debit card
	</p>
	<div className={"app_download_btn_container"}>
	<img
	src={google}
	alt="playstore"
	className={"app_download_btn"}
	href="#"
	/>
	<img
	src={apple}
	alt="appstore"
	className={"app_download_btn"}
	href="#"
	/>
	</div>
	{/* <Subscribe /> */}
	{/* <AnimatedText /> */}
	</div>
	</div>

	<Sky />

	<section className={"features__section"}>
	<div className={"container"} id={"features"}>
	<h2 className={"section_title"}>
	Lastbit mobile (iOS & Android)
	</h2>
	<Features />
	</div>
	</section>

	<div className={"showcase"}>
	<h4 className={"showcase_title"}>
	Try our testnet Bitcoin & Lightning wallet
	</h4>
	<p className={"showcase_desc"}>
	Signup below to join the waitlist to use our completely new
	application featuring virtual debit cards
	</p>
	<div className={"row container"} style={{ paddingBottom: 60 }}>
	<img
	src={google}
	alt={"playstore"}
	className={"img-responsive hover-shadow"}
	style={{ maxWidth: "300px", margin: 20 }}
	onClick={() =>
		window.open(
			"https://play.google.com/store/apps/details?id=com.lastbit.app"
		)
	}
	/>
	<img
	src={apple}
	alt={"appstore"}
	className={"img-responsive hover-shadow"}
	style={{ maxWidth: "300px", margin: 20 }}
	onClick={() =>
		window.open(
			"https://testflight.apple.com/join/yiDiDP9a"
		)
	}
	/>
	</div>
	</div>

	<div
	id="subscribe"
	className={"call-to-action"}
	style={{ padding: "100px 0px" }}
	>
	<div>
	<div className={"call-to-action__content"}>
	<h2>
	The world's first Lightning powered consumer payments
	product
	</h2>
	<p>
	{" "}
	Join the waitlist to be the first to get personal
	physical cards & IBAN accounts to store, spend & earn
	Bitcoin over the Lightning Network
	</p>
	</div>
	</div>
	<div className={"container"}>
	<Subscribe />
	</div>
	</div>

	<Partners />
	<Backers />
	</Layout>
)

export default IndexPage
