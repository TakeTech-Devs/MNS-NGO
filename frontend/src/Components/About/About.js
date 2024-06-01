/* eslint-disable */
import React from "react";
import "./About.css";
import "./../Home/HomePage.css";
import PhoneSVG from "../../assets/vectors/vector_x2.svg";

const About = () => {
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className="about-us-page">
            <div className="about-upper">
                <div className="navbar-section">
                    <a href='/' className="logo-1"></a>
                    <div className="navbar">
                        <div className="navbar-link">
                            <a href='#'> Home </a>
                            <a href='/about' className="active">About Us</a>
                            <a href='/#'>Grievance</a>
                            <a href='/#'>Services</a>
                            <a href='/#'>Governing Body</a>
                            <a href='/#'>Gallery</a>
                            <a href='/#'>Contact Us</a>
                        </div>
                        <div className="donate-section">
                            <div className="phone">
                                <div className="phone-svg">
                                    <img
                                        className="phonesvg"
                                        src={PhoneSVG}
                                        alt='phone'
                                    />
                                </div>
                                <div className="navbar">+000 000 0000</div>
                            </div>
                            <button className="donatebtn">Donate</button>
                            <div class="menu-icon" onClick={toggleMenu}>
                                <div class="bar"></div>
                                <div class="bar"></div>
                                <div class="bar"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="our-team-heading">About Us</span>
                    <span className="our-team-caption">Welcome to Mallarpur Naisuva, where our mission is to empower communities, uplift the vulnerable, and create positive change in society.</span>
                </div>
            </div>
            <div className="our-story-section our-achievement">
                <div className="our-team-heading">Our Story</div>
                <div className="our-team-caption">
                Mallarpur Naisuva was founded with a vision to make a difference in the lives of those most in need. What began as a small group of individuals inspired by the spirit of social work has evolved into a full-fledged NGO dedicated to rural development and community empowerment.
                </div>
                <div className="our-team-caption">
                Our vision is to break the cycle of poverty and social isolation, restoring hope for a better future. We envision a world where every person has access to resources and opportunities for development, and where no one is left behind.
                </div>
                <div className="our-team-caption">
                Over the years, Mallarpur Naisuva has made significant strides in empowering communities and fostering positive change. From education and healthcare initiatives to women's empowerment programs and environmental conservation efforts, our impact is felt across various sectors.
                </div>
                
                <div className="container-image-2">
                    <div className="rectangle-7"></div>
                    <div className="rectangle-9"></div>
                </div>
                <div className="rectangle-8"></div>
                <div className="rectangle-10"></div>
            </div>
            <div className="our-values-container">
                <div className="our-values-container-images">
                    <div className="circle"></div>
                </div>
                <div className="our-values-heading">Our Values</div>
                <div className="our-values-container-images-without-caption">
                    <div className="dreaming-about-future-occupation"></div>
                    <div className="educational-video-for-online-education"></div>
                    <div className="playing-basketball"></div>
                    <div className="compassion-section">Compassion</div>
                    <div className="our-values-section">Our Values</div>
                    <div className="empowerment-integrity-section">
                        <span className="empowerment-section">Empowerment</span>
                        <span className="integrity-section">Integrity</span>
                    </div>
                    <div className="team-working-on-aproject-together"></div>
                </div>
                <span className="collaboration-section">Collaboration</span>
                <span className="our-values-caption">
                At Mallarpur Naisuva, we are guided by a set of core values that shape everything we do
                </span>
            </div>
            <div className="get-involved-section">
                <div className="rectangle-26"></div>
                <div className="get-involved-heading">Get Involved</div>
                <span className="get-involved-caption">
                Join us in our mission to create a brighter future for all. Whether through volunteering, donating, or spreading awareness, your support makes a difference.
                </span>
            </div>
        </div>
    );
};

export default About;
