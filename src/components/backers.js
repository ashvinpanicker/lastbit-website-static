import React from "react"

import mongodb from "../../static/images/Logo1.svg"
// import logo2 from "../../static/images/Logo2.svg"
import liaa from "../../static/images/liaa4.jpg"
import buildit from "../../static/images/Logo4.svg"
import brinc from "../../static/images/Logo5.svg"
import artesian from "../../static/images/Logo6.svg"
import skydeck from "../../static/images/skydeck1.png"
import charlie from "../../static/images/charlie.png"
import hatch from "../../static/images/hatch.png"
import fulgur from "../../static/images/fulgur-logo.svg"

const Backers = () => (
    <div className={"showcase"}>
        <div style={{ textAlign: "center", marginTop: 50 }}>
            <h2 style={{ fontSize: 32 }}>Backed By</h2>
            <div style={{ padding: "25px 0px" }}></div>
            <div className={"row"}>
                <div className={"col-4"}>
                    <img
                        src={fulgur}
                        className={"partner_logo"}
                        alt={"fulgur_ventures"}
                        style={{ cursor: "pointer" }}
                        onClick={() => window.open("https://fulgur.ventures/")}
                    />
                </div>
                <div className={"col-4"}>
                    <img
                        src={skydeck}
                        className={"partner_logo"}
                        alt={"skydeck"}
                        style={{ cursor: "pointer", padding: "5px 0 0 0" }}
                        onClick={() =>
                            window.open("https://skydeck.berkeley.edu/")
                        }
                    />
                </div>
                <div className={"col-4"}>
                    <img
                        src={charlie}
                        className={"partner_logo"}
                        alt={"charlie_lee"}
                        style={{
                            cursor: "pointer",
                            paddingTop: 30,
                            maxWidth: 200,
                        }}
                        onClick={() =>
                            window.open("https://twitter.com/satoshilite")
                        }
                    />
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-4"}>
                    <img
                        src={buildit}
                        className={"partner_logo"}
                        alt={"buildit"}
                        style={{ cursor: "pointer" }}
                        onClick={() => window.open("https://www.buildit.lv/")}
                    />
                </div>
                <div className={"col-4"}>
                    <img
                        src={brinc}
                        className={"partner_logo"}
                        alt={"brinc"}
                        style={{ cursor: "pointer" }}
                        onClick={() => window.open("https://www.brinc.io/")}
                    />
                </div>
                <div className={"col-4"}>
                    <img
                        src={artesian}
                        className={"partner_logo"}
                        alt={"artesian"}
                        // style={{ cursor: "pointer" }}
                    />
                </div>
            </div>

            <div className={"row"}>
                <div className={"col-4"}>
                    <img
                        src={hatch}
                        className={"partner_logo"}
                        alt={"digital_ocean"}
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                            window.open("https://www.digitalocean.com/hatch/")
                        }
                    />
                </div>
                <div className={"col-4"}>
                    <img
                        src={mongodb}
                        className={"partner_logo"}
                        alt={"mongodb"}
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                            window.open(
                                "https://www.mongodb.com/startup-accelerator"
                            )
                        }
                    />
                </div>
                <div className={"col-4"}>
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
            </div>
            <div style={{ padding: "25px 0px" }}></div>
        </div>
    </div>
)

export default Backers
