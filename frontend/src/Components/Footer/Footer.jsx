/* eslint-disable */
import React from 'react'
import "./Footer.css";
import logo from "../../assets/images/logo2.jpeg";
import instagram from "../../assets/images/image5.png";
import whatsapp from "../../assets/images/whatsapp5.png";
import facebook from "../../assets/images/facebook5.png";
import linkedin from "../../assets/images/linkedin25.png";

const Footer = () => {
    return (
        <>
            <footer>
                <div className='footer-description'>
                    <a href='/' className="footer-logo">
                        <img src={logo} alt="Brand-Logo" />
                    </a>
                    <p>Empowering communities, fostering change, together.</p>
                </div>
                <div className='footer-links'>
                    <ul>
                        <li>
                            <a href="/about">About Us</a>
                        </li>
                        <li>
                            <a href="/#">Our Mission</a>
                        </li>
                        <li>
                            <a href="/#">Our Services</a>
                        </li>
                        <li>
                            <a href="/#">Contact Us</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/about">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/#">Terms of Service</a>
                        </li>
                        <li>
                            <a href="/#">FAQs</a>
                        </li>
                        <li>
                            <a href="/#">Blog</a>
                        </li>
                    </ul>
                    <div>
                        <p>DONATE:</p>
                        <ol>
                            <li>
                                <img src={instagram} alt="Footer Image" />
                            </li>
                            <li>
                                <img src={facebook} alt="Footer Image" />
                            </li>
                            <li>
                                <img src={whatsapp} alt="Footer Image" />
                            </li>
                            <li>
                                <img src={linkedin} alt="Footer Image" />
                            </li>
                        </ol>
                    </div>

                </div>
            </footer>
            <div className='copyright'>
                <p>
                    Copyright © 2024 Comapny
                </p>
                <p>
                    Powered By<span> TakeTech Devs</span>
                </p>
            </div>
        </>
    )
}

export default Footer