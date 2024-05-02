import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (

        <div className="footer-section">
            <a href='/' className="logo-2"></a>
            <div className="footer-details">Empowering communities, fostering change, together.</div>
            <div className="footer-container">

                <div className="footer-link">
                    <a href="/about" className="footer-link-other">About Us</a>
                    <a href="#" className="footer-link-other">Our Mission</a>
                    <a href="#" className="footer-link-other">Our Services</a>
                    <a href="#" className="footer-link-other">Contact Us</a>
                </div>
                <div className="footer-link">
                    <a href="#" className="footer-link-other">Privacy Policy</a>
                    <a href="#" className="footer-link-other">Terms of Service</a>
                    <a href="#" className="footer-link-other">FAQs</a>
                    <a href="#" className="footer-link-other">Blog</a>
                </div>
                {/* <div className="footer-link"> */}
                <div className="footer-link-other"><b style={{ marginLeft: "348px" }}>DONATE</b></div>
            </div>
            <div className="footer-social-link">
                <div className="email-2"></div>
                <div className="email-link">Lorem ipsum</div>
                <div className="instagram"></div>
                <div className="instagram-link">Lorem ipsum</div>
                <div className="whatsapp"></div>
                <div className="whatsapp-link">+000-0000-000</div>
            </div>
            <div className="line-1"></div>
            <div className="footer-section-2">
                <span className="copyright-section"> Copyright © 2024 Comapny </span>
                <p className="poweredby">
                    <span>Powered By</span><span > TakeTech Devs</span>
                </p>
            </div>
        </div>
    )
}

export default Footer