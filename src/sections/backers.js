import React from "react"

import mongodb from "../../static/images/backers/mongo.svg"
import liaa from "../../static/images/backers/liaa4.jpg"
import buildit from "../../static/images/backers/buildit.svg"
import brinc from "../../static/images/backers/brinc.svg"
import artesian from "../../static/images/backers/artesian.svg"
import skydeck from "../../static/images/backers/skydeck1.png"
import charlie from "../../static/images/backers/charlie.png"
import hatch from "../../static/images/backers/hatch.png"
import fulgur from "../../static/images/backers/fulgur.svg"
import binance from "../../static/images/backers/binance.png"

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
                        src={hatch}
                        className={"partner_logo"}
                        alt={"digital_ocean"}
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
                        onClick={() =>
                            window.open(
                                "https://www.mongodb.com/startup-accelerator"
                            )
                        }
                    />
                </div>
                <div className={"col-4"}>
                    <img
                        src={binance}
                        className={"partner_logo"}
                        alt={"binance_fellowship"}
                        onClick={() => window.open("https://binancex.dev/")}
                    />
                </div>
            </div>

            <div className={"row"}>
                <div className={"col-6"}>
                    <img
                        src={brinc}
                        className={"partner_logo"}
                        alt={"brinc"}
                        onClick={() => window.open("https://www.brinc.io/")}
                    />
                </div>
                <div className={"col-6"}>
                    <img
                        src={artesian}
                        className={"partner_logo"}
                        alt={"artesian"}
                        style={{ cursor: "default" }}
                    />
                </div>
            </div>

            <div className={"row"}>
                <div className={"col-6"}>
                    <img
                        src={buildit}
                        className={"partner_logo"}
                        alt={"buildit"}
                        onClick={() => window.open("https://www.buildit.lv/")}
                    />
                </div>
                <div className={"col-6"}>
                    <img
                        src={liaa}
                        className={"partner_logo"}
                        alt={"liaa"}
                        style={{ cursor: "pointer", maxWidth: 300 }}
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
