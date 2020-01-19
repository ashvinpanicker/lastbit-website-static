import React from "react"

import ContactCard from "../components/contactcard"
import logo from "../../static/images/logo.png"
import pb from "../../static/images/team/grayscale/pb.png"
import ash from "../../static/images/team/grayscale/ash.png"
import pratham from "../../static/images/team/grayscale/pratham.png"
import shivam from "../../static/images/team/grayscale/shivam.png"
import pochiwu from "../../static/images/team/grayscale/pochiwu.png"
import chon from "../../static/images/team/grayscale/chon.jpg"
import kristo from "../../static/images/team/grayscale/kristo.png"
import kaili from "../../static/images/team/grayscale/kaili.png"

const Team = () => (
    <div className={"showcase"}>
        <h5 style={{ fontSize: "24px", color: "#00204a" }}>
            We are a team of             <a
                href="https://www.reddit.com/r/CryptoCurrency/comments/aeeipa/"
                style={{
                    textDecoration: "underline",
                    color: "blue",
                    textDecorationColor: "blue",
                }}
            > passionate bitcoiners</a>
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
                <ContactCard
                    src={logo}
                    title={"You"}
                    subtitle={"Work With Us!"}
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                        (window.location.href =
                            "https://angel.co/company/lastbit/jobs")
                    }
                />
        </div>
        <div style={{ padding: "25px 0px" }}></div>
    </div>
)

export default Team
