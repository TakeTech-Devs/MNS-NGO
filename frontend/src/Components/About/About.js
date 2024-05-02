import React from "react";
import "./About.css";
import v1 from "../../assets/vectors/vector_x2.svg";

const About = () => {
    return (
        <div className="about-us-page">
            <div className="group-30">
                <div className="container-5">
                    <a href="/" className="logo-1"></a>
                    <div className="container-7">
                        <div className="group-4">
                            <a href="/" className="home">Home</a>
                            <div className="container-4">
                                <a href="/about" className="about-us">About Us</a>
                            </div>
                            <a href="#" className="services">Services</a>
                            <a href="#" className="grievance">Grievance</a>
                            <a href="#" className="governing-body">Governing Body</a>
                            <a href="#" className="gallery">Gallery</a>
                            <a href="#" className="contact-us">Contact Us</a>
                        </div>
                        <div className="container">
                            <div className="group-29">
                                <div className="group-11">
                                    <img className="vector" src={v1} />
                                </div>
                                <div className="container-1">+000 000 0000</div>
                            </div>
                            <button className="group-2">Donate
                                {/* <span className="donate">Donate</span> */}
                            </button>
                        </div>
                    </div>
                </div>
                <span className="lorem-ipsum-dolor-12">About Us</span>
                <span className="about-caption">Welcome to Mallarpur Naisuva, where our mission is to empower communities, uplift the vulnerable, and create positive change in society.</span>
            </div>
            <div className="group-31">
                <div className="lorem-ipsum-dolor-13">Our Story</div>
                <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqua">
                Mallarpur Naisuva was founded with a vision to make a difference in the lives of those most in need. What began as a small group of individuals inspired by the spirit of social work has evolved into a full-fledged NGO dedicated to rural development and community empowerment.
                </div>
                <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqua">
                Our vision is to break the cycle of poverty and social isolation, restoring hope for a better future. We envision a world where every person has access to resources and opportunities for development, and where no one is left behind.
                </div>
                <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqua">
                Over the years, Mallarpur Naisuva has made significant strides in empowering communities and fostering positive change. From education and healthcare initiatives to women's empowerment programs and environmental conservation efforts, our impact is felt across various sectors.
                </div>
                
                <div className="container-8">
                    <div className="rectangle-7"></div>
                    <div className="rectangle-9"></div>
                </div>
                <div className="rectangle-8"></div>
                <div className="rectangle-10"></div>
            </div>
            <div className="group-36">
                <div className="ellipse-20">
                    <div className="circle"></div>
                </div>
                <div className="lorem-ipsum-dolor-14">Our Values</div>
                <div className="group-35">
                    <div className="dreaming-about-future-occupation"></div>
                    <div className="educational-video-for-online-education"></div>
                    <div className="playing-basketball"></div>
                    <div className="lorem-ipsum-dolor-15">Compassion</div>
                    <div className="lorem-ipsum-dolor-19">Our Values</div>
                    <div className="container-6">
                        <span className="lorem-ipsum-dolor-18">Empowerment</span>
                        <span className="lorem-ipsum-dolor-17">Integrity</span>
                    </div>
                    <div className="team-working-on-aproject-together"></div>
                </div>
                <span className="lorem-ipsum-dolor-16">Collaboration</span>
                <span className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqua-1">
                At Mallarpur Naisuva, we are guided by a set of core values that shape everything we do
                </span>
            </div>
            <div className="group-37">
                <div className="rectangle-26"></div>
                <div className="lorem-ipsum-dolor-20">Get Involved</div>
                <span className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqua-2">
                Join us in our mission to create a brighter future for all. Whether through volunteering, donating, or spreading awareness, your support makes a difference.
                </span>
            </div>
        </div>
    );
};

export default About;
