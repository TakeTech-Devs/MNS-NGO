/* eslint-disable */
import React, { useState } from 'react';
import "./About.css";
import Navbar from '../Navbar/Navbar';


const About = () => { 
    return (
        <>
        <Navbar />
        <div className="about-us-page">
            <div className="about-upper">
                <div className="about-container">
                </div>
                <span className="about-heading">About Us</span>
                <span className="about-caption">Welcome to Mallarpur Naisuva, where our mission is to empower communities, uplift the vulnerable, and create positive change in society.</span>
            </div>
            <div className="our-story-section">
                <div className="our-story-heading">Our Story</div>
                <div className="our-story-caption">
                    Mallarpur Naisuva was founded with a vision to make a difference in the lives of those most in need. What began as a small group of individuals inspired by the spirit of social work has evolved into a full-fledged NGO dedicated to rural development and community empowerment.
                </div>
                <div className="our-story-caption">
                    Our vision is to break the cycle of poverty and social isolation, restoring hope for a better future. We envision a world where every person has access to resources and opportunities for development, and where no one is left behind.
                </div>
                <div className="our-story-caption">
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
        </>
    );
};

export default About;
