import React from "react"

import informationImage from "../../static/images/icons/Information-document.svg"
import eventImage from "../../static/images/icons/Event-managment.svg"
import ProductivityImage from "../../static/images/icons/Increase-Productivity.svg"
import happinessImage from "../../static/images/icons/Make-happiness.svg"

const Values = () => (
    <div className={"container"}>
        <div className={"targets"}>
            <div className={"title"}>
                <h2>Our core values building lastbit</h2>
            </div>

            <div className={"row"}>
                <div className={"col-6"}>
                    <div className={"item"}>
                        <img alt={"Information"} src={informationImage} />
                        <h3>Spending</h3>
                        <p>
                            We believe in a future where crypto can be used as a
                            currency. Driving merchant adoption for direct
                            crypto transactions stems from user demand. We're
                            solving this chicken and egg problem by building
                            this bridge.
                        </p>
                    </div>
                </div>

                <div className={"col-6"}>
                    <div className={"item"}>
                        <img alt={"Event"} src={eventImage} />
                        <h3>Usage</h3>
                        <p>
                            During our time at Silicon Valley, we learned what
                            it takes to build something that's sustainable for
                            the next billion users. Several FinTech and payment
                            apps today offer a user experience far superior to
                            any bitcoin based application. For mass adoption,
                            features that mimic the simplicity of today's
                            payments UX is imperative. This is what we are
                            building.
                        </p>
                    </div>
                </div>
            </div>

            <div className={"row"}>
                <div className={"col-6"}>
                    <div className={"item"}>
                        <img alt={"Productivity"} src={ProductivityImage} />
                        <h3>Earning</h3>
                        <p>
                            Customer interviews revealed to us the way crypto is
                            viewed by the masses today. We could either build a
                            small product and survive as a small business
                            catering to the needs of a tiny segment or play it
                            big and build a product that could potentially reach
                            millions of users if executed correctly. Bitcoin
                            owners are significantly more comfortable spending
                            Bitcoin that is earned as opposed to Bitcoin that is
                            bought, today.
                        </p>
                    </div>
                </div>

                <div className={"col-6"}>
                    <div className={"item"}>
                        <img alt={"Happiness"} src={happinessImage} />
                        <h3>Security & Sovereignty</h3>
                        <p>
                            Bitcoin was created to enable a new method of
                            financial independence and sovereignty. The
                            lightning network brings this vision one step closer
                            to reality. Working with fiat currencies is
                            challenging and subject to regulation. We strive to
                            strike a balance between regulation and independence
                            by building tools that can preserve the core values
                            offered by bitcoin without compromising usage.
                            Contact us to learn more about our Lightning as a
                            Service offering.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Values
