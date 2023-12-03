import React from "react"

import IconCard from "../components/iconcard"
import mobilepay from "../../static/images/icons/card_icon.png"
import lightningbolt from "../../static/images/icons/lightning_bolt.png"
import easy from "../../static/images/icons/easy-icon-2.png"
import zeus from "../../static/images/zeus.gif"

const Sky = () => (
    <section className={"sky"}>
        <h2 className={"section_title"}>
            Towards a closed loop Bitcoin economy
        </h2>
        <p className={"section_subtitle"}>
            A suite of financial tools to get started with bitcoin and lightning
        </p>
        <img
            src={zeus}
            alt={"Store, Send, Spend Bitcoin Instantly"}
            className={"zeus"}
        />
        <div className="x1">
            <div className="cloud"></div>
        </div>

        <div className="x2">
            <div className="cloud"></div>
        </div>

        <div className="x3">
            <div className="cloud"></div>
        </div>

        <div className="x4">
            <div className="cloud"></div>
        </div>

        <div className="x5">
            <div className="cloud"></div>
        </div>
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-4"}>
                    <IconCard
                        src={mobilepay}
                        title={"Easy On-Ramps"}
                        desc={
                            "Get started with Bitcoin on the Lightning Network by simply purchasing Bitcoin with your credit card"
                        }
                    />
                </div>
                <div className={"col-4"}>
                    <IconCard
                        src={lightningbolt}
                        title={"Easy Off-Ramps"}
                        desc={
                            "Send Bitcoin to anyone over social media readily available to use on the Lightning Network or spendable on a personal debit card"
                        }
                    />
                </div>
                <div className={"col-4"}>
                    <IconCard
                        src={easy}
                        title={"Incentivized Spending"}
                        desc={
                            "Your personal IBAN account to spend fiat and earn Bitcoin cashbacks that you can spend & send instantly!"
                        }
                    />
                </div>
            </div>
        </div>
    </section>
)

export default Sky
