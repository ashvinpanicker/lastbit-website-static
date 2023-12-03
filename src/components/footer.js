import { Link } from "gatsby"
import React from "react"

import Tnc from "../../static/files/Lastbit_Terms_and_Conditions_2020.pdf"
import PrivacyPolicy from "../../static/files/Lastbit_Privacy_Policy_2020.pdf"
import CookieNotice from "../../static/files/Lastbit_Cookie_Notice_2020.pdf"

import iconTwitter from "../../static/images/icons/icon-twitter.svg"
import iconLinkedin from "../../static/images/icons/icon-linkedin.svg"
import iconInstagram from "../../static/images/icons/icon-instagram.svg"

const Footer = ({ logo }) => (
    <footer>
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-5"}>
                    <div className={"widget__item"}>
                        <div className={"logo"}>
                            <Link to="/" title={"lastbit"}>
                                <img
                                    alt={"Logo"}
                                    src={logo}
                                    style={{ maxWidth: 250 }}
                                />
                            </Link>
                        </div>

                        <div className={"about"}>
                            Store and Spend Bitcoin, Securely and Instantly
                        </div>
                        <div className={"row"} style={{ marginTop: 10 }}>
                            <a
                                className={"col-md-2"}
                                style={{ marginLeft: 0, fontWeight: "600" }}
                                href={
                                    "https://www.bizapedia.com/ca/lastbit-inc.html"
                                }
                            >
                                USA
                            </a>
                            <div className={"col-md-1"}></div>
                            <a
                                className={"col-md-3"}
                                style={{ fontWeight: "600" }}
                                href={
                                    "https://hongkong-corp.com/co/lastbit-limited"
                                }
                            >
                                HONG KONG
                            </a>
                            <div className={"col-md-1"}></div>
                            <a
                                className={"col-md-2"}
                                style={{ fontWeight: "600" }}
                                href={
                                    "https://company.lursoft.lv/en/lastbit/40203173048"
                                }
                            >
                                LATVIA
                            </a>
                            <div className={"col-md-2"}></div>
                        </div>
                    </div>
                </div>

                <div className={"col-2"}>
                    <div className={"widget__item"}>
                        <ul className={"links"}>
                            <h4>Company</h4>
                            <ul>
                                <li>
                                    <Link to="/about" title={"About Us"}>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/hardware" title={"Hardware"}>
                                        Hardware
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href={
                                            "https://angel.co/company/lastbit/jobs"
                                        }
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href={"https://striga.com/blog"}>
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>

                <div className={"col-2"}>
                    <div className={"widget__item"}>
                        <div className={"links"}>
                            <h4>Support</h4>
                            <ul>
                                <li>
                                    <Link to="/contact" title={"Contact Us"}>
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href={PrivacyPolicy}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={Tnc}
                                        target="_blank"
                                        style={{ whiteSpace: "nowrap" }}
                                        rel="noopener noreferrer"
                                    >
                                        Terms & Conditions
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={CookieNotice}
                                        target="_blank"
                                        style={{ whiteSpace: "nowrap" }}
                                        rel="noopener noreferrer"
                                    >
                                        Cookie Notice
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={"col-3"}>
                    <div className={"widget__item"}>
                        <div className={"social"}>
                            <a
                                href="https://twitter.com/lastbitpay"
                                target={"_blank"}
                                title={"Twitter"}
                            >
                                <img alt={"Twitter"} src={iconTwitter} />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/lastbit/"
                                target={"_blank"}
                                title={"LinkedIn"}
                            >
                                <img alt={"LinkedIn"} src={iconLinkedin} />
                            </a>
                            <a
                                href="https://www.instagram.com/lastbit.io/"
                                target={"_blank"}
                                title={"Instagram"}
                            >
                                <img alt={"Instagram"} src={iconInstagram} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <p
                style={{
                    fontSize: 11,
                    color: "#aaa",
                    paddingTop: 20,
                    textAlign: "justify",
                }}
            >
                Mastercard Debit cards are issued by Paynetics AD pursuant to
                license by Mastercard International Incorporated with payment
                agent Paystratus Group Ltd, trading as Weavr.io, registered to
                the Bulgarian National Bank with company address Kemp House 160
                City Road, London EC1V 2NX, United Kingdom under company
                registration number 11677111 and VAT GB314327236.
            </p> */}
            <p
                style={{
                    fontSize: 11,
                    color: "#aaa",
                    paddingTop: 40,
                    textAlign: "center",
                }}
            >
                Lastbit Inc. is a Delaware registered corporation with offices
                at 2150 Shattuck Ave, Berkeley, CA 94704
                <p style={{ paddingTop: 10, textAlign: 'center' }}>
                    <a
                        href="mailto:info@lastbit.io"
                        style={{ textDecoration: "underline" }}
                    >
                        info@lastbit.io
                    </a>
                </p>
            </p>
        </div>
    </footer>
)

export default Footer
