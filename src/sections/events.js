import React from "react"

import boldawards from "../../static/images/events/boldawards.svg"
import innoenergy from "../../static/images/events/innoenergy.svg"
import techcrunch from "../../static/images/events/techcrunch.png"
import money2020 from "../../static/images/events/money2020.png"

const Events = () => (
    <div className={"container"} style={{ textAlign: "center", marginTop: 50 }}>
        <h2>Events</h2>
        <div className={"row"}>
            <div className={"col-6"}>
                <div className="card">
                    <img
                        src={boldawards}
                        className={"event_logo"}
                        alt={"bold_awards"}
                    />
                    <p className="desc">
                        Nominated for Young Achiever at H-Farm's Bold Awards
                        2019 in Venice
                    </p>
                </div>
            </div>
            <div className={"col-6"}>
                <div className="card">
                    <img
                        src={innoenergy}
                        className={"event_logo"}
                        alt={"innoenergy_powerup"}
                    />
                    <p className="desc">
                        3rd Place at the InnoEnergy Power up 2019 national
                        finals in Riga
                    </p>
                </div>
            </div>
        </div>
        <div className={"row"}>
            <div className={"col-6"}>
                <div className="card">
                    <img
                        src={techcrunch}
                        className={"event_logo"}
                        alt={"tc_disrupt"}
                    />
                    <p className="desc">
                        Official Exhibitor at TechCrunch Disrupt 2019 in San
                        Francisco
                    </p>
                </div>
            </div>
            <div className={"col-6"}>
                <div className="card">
                    <img
                        src={money2020}
                        className={"event_logo"}
                        alt={"money2020"}
                    />
                    <p className="desc">
                        Voted as one of the 100 hottest fintech startups at
                        Money 20/20 2019 in Las Vegas
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default Events
