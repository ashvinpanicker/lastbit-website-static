import React from "react"

import ContactCard from "../components/contactcard"
import logo from "../../static/images/logo.png"
import pb from "../../static/images/team/color/pb.png"
import ash from "../../static/images/team/color/ash.png"
import pratham from "../../static/images/team/color/Pratham@3x.png"
import shivam from "../../static/images/team/color/shivam.png"
import pochiwu from "../../static/images/team/color/pochiwu.png"
import chon from "../../static/images/team/color/chon.jpg"
import kristo from "../../static/images/team/color/Kristo@3x.png"
import kaili from "../../static/images/team/color/Kaili@3x.png"

const Team = () => (
    <div className={"showcase"}>
        <h5 style={{ fontSize: "24px", color: "#00204a" }}>
            We are a team of developers and friends that studied together and
            now build lastbit together
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
                    src={shivam}
                    title={"Shivam Dev"}
                    subtitle={"App Developer"}
                    linkedIn={"https://www.linkedin.com/in/skdev24"}
                />
            </div>
        </div>
        <div className={"row container"} style={{ paddingTop: 40 }}>
            <div className={"col-4"}>
                <ContactCard
                    src={pratham}
                    title={"Pratham Mehta"}
                    subtitle={"App Developer"}
                    linkedIn={"https://www.linkedin.com/in/prathamamehta/"}
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
                        (window.location.href =
                            "https://angel.co/company/lastbit/jobs")
                    }
                />
            </div>
        </div>
        <div style={{ padding: "25px 0px" }}></div>
    </div>
)

export default Team
