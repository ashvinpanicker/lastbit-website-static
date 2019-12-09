import { Link } from "gatsby"
import React from "react"
import iconTwitter from "../../static/images/icons/icon-twitter.svg"
import iconLinkedin from "../../static/images/icons/icon-linkedin.svg"
import iconInstagram from "../../static/images/icons/icon-instagram.svg"
import telegramButton from "../../static/images/icons/telegram-button.png"

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
                                    <a href={"https://medium.com/lastbitpay"}>
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
                                    <Link
                                        to="/privacy"
                                        title={"Privacy Policy"}
                                    >
                                        Privacy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms" title={"Terms Of Use"}>
                                        Terms Of Use
                                    </Link>
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
                <div className={"telegramButton"}>
                    <a href={"https://t.me/lastbitpay"}>
                        <img src={telegramButton} alt={"Join us on Telegram"} />
                    </a>
                </div>
            </div>
            <p
                style={{
                    fontSize: 11,
                    color: "#aaa",
                    paddingTop: 20,
                    textAlign: "center",
                }}
            >
                Mastercard Debit cards are issued by Paynetics AD pursuant to
                license by Mastercard International Incorporated with payment
                agent Paystratus Group Ltd, trading as Weavr.io, registered to
                the Bulgarian National Bank with company address Kemp House 160
                City Road, London EC1V 2NX, United Kingdom under company
                registration number 11677111 and VAT GB314327236.
            </p>
        </div>
    </footer>
)

export default Footer
