import React from "react"

import weavr from "../../static/images/partners/weavr.svg"
import bitlocus from "../../static/images/partners/bitlocus.png"

const Partners = () => (
    <div className={"showcase"}>
        <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: 32 }}>Our Partners</h2>
            <div className={"row"}>
                <div className={"col-6"}>
                    <img
                        src={weavr}
                        className={"partner_logo"}
                        alt={"weavr_mastercard"}
                        onClick={() => window.open("https://www.weavr.io/")}
                    />
                    <p
                        style={{
                            textAlign: "center",
                            fontFamily: "Century Gothic",
                        }}
                    >
                        Virtual card partner
                    </p>
                </div>
                <div className={"col-6"}>
                    <img
                        src={bitlocus}
                        className={"partner_logo"}
                        alt={"bitlocus_exchange"}
                        onClick={() => window.open("https://bitlocus.com/")}
                    />
                    <p
                        style={{
                            textAlign: "center",
                            fontFamily: "Century Gothic",
                        }}
                    >
                        Bitcoin exchange partner
                    </p>
                </div>
            </div>
            <div style={{ padding: "25px 0px" }}></div>
        </div>
    </div>
)

export default Partners
