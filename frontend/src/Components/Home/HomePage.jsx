/* eslint-disable */
import React, { useEffect, useState, useCallback } from 'react';
import './HomePage.css';
import PhoneSVG from "../../assets/vectors/vector_x2.svg";
import SVG1 from "../../assets/vectors/saveworld.svg";
import SVG2 from "../../assets/vectors/capable.svg";
import SVG3 from "../../assets/vectors/teamwork.svg";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import img1 from "../../assets/images/rectangle8.png";
import img2 from "../../assets/images/rectangle9.png";
import img3 from "../../assets/images/rectangle10.png";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3// optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
}


const sliderImageUrl = [
    {
        url: img1,
        text: "FINANCIAL INCLUSION",
    },
    {
        url: img2,
        text: "EDUCATIONAL ACTIVITY",
    },
    {
        url: img3,
        text: "HEALTH ABD HYGIENE",
    },
    {
        url: img2,
        text: "AWARENESS PROGRAMMS",
    },
    {
        url: img3,
        text: "WOMEN EMPOWERMENT",
    },
    {
        url: img1,
        text: "YOUTH DEVELOPMENT",
    },
    {
        url: img3,
        text: "CHILD DEVELOPMENT",
    },
    {
        url: img1,
        text: "AGRICULTURAL DEVELOPMENT",
    },
];


const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);


    const toggleSidePanel = () => {
        setIsSidePanelOpen(!isSidePanelOpen);
    };

    const closeSidePanel = () => {
        setIsSidePanelOpen(false);
    };

    const carouselItems = [
        require('../../assets/images/rectangle4.png'),
        require('../../assets/images/rectangle7.png'),
        require('../../assets/images/rectangle8.png'),
        require('../../assets/images/rectangle10.png')
    ];

    const totalSlides = carouselItems.length;

    function goToSlide(index) {
        setCurrentIndex(index);
    }

    const nextSlide = useCallback(() => {
        if (currentIndex < totalSlides - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    }, [currentIndex, totalSlides]);

    function prevSlide() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(totalSlides - 1);
        }
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, nextSlide]);

    // const [menuOpen, setMenuOpen] = useState(false);

    // const toggleMenu = () => {
    //     setMenuOpen(!menuOpen);
    // };
    return (
        <>
            <div className="home-page">
                <div className="upper-section">
                    <div className="navbar-section">
                        <a href='/' className="logo-1"></a>
                        <div className="navbar">
                            <div className="navbar-link">
                                <a href='#' className="active"> Home </a>
                                <a href='/about' >About Us</a>
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
                                {/* <div class="menu-icon" onClick={toggleMenu}>
                                        <div class="bar"></div>
                                        <div class="bar"></div>
                                        <div class="bar"></div>
                                    </div> */}
                                <div class="hamburger-menu" onClick={toggleSidePanel}><i className="fa-solid fa-bars"></i></div>
                                <div className={`side-panel ${isSidePanelOpen ? 'open' : ''}`}>
                                    {/* Content of the side panel */}
                                    <button className="close-button" onClick={closeSidePanel}>
                                        &times;
                                    </button>

                                    <div className="side-panel-content">
                                        <a href='/'>Home</a>
                                        <a href='/about'>About Us</a>
                                        <a href='/#'>Grievance</a>
                                        <a href='/#' className="services">Services</a>
                                        <a href='/#' className="governing-body">Governing Body</a>
                                        <a href='/#' className="gallery">Gallery</a>
                                        <a href='/#' className="contact-us">Contact Us</a>
                                        {/* Add other navigation links here */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel">
                        {carouselItems.map((item, index) => (
                            <div
                                key={index}
                                className="background-image"
                                style={{ backgroundImage: `url(${item})`, display: index === currentIndex ? 'block' : 'none' }}
                            ></div>
                        ))}
                        <button className="prev-btn" onClick={prevSlide}>&#10094;</button>
                        <button className="next-btn" onClick={nextSlide}>&#10095;</button>



                        <div className="carousel-heading">Empowering Communities, Transforming Lives</div>
                        <div
                            className="carousel-caption"
                        >
                            Join Mallarpur Naisuva in our mission to break the cycle of poverty and foster inclusive development.
                        </div>
                        <div className="carousel-indicate">
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <div
                                    key={index}
                                    className={`ellipse indicator ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                ></div>
                            ))}
                        </div>
                    </div>


                </div>
                <div>
                    <ul className="highlight-section">
                        <li>
                            <h2>Compassion</h2>
                            <p>Embracing empathy, fostering kindness</p>
                        </li>
                        <li>
                            <h2>Integrity</h2>
                            <p> Upholding ethics, ensuring trustworthiness</p>
                        </li>
                        <li>
                            <h2>Empowerment</h2>
                            <p>Inspiring growth, nurturing resilience</p>
                        </li>
                    </ul>
                </div>
                <div className="our-team-section">
                    <div className="our-team-heading">About Mallarpur Naisuva</div>
                    <div
                        className="our-team-caption"
                    >
                        Empowering communities, transforming lives. Join us in breaking the cycle of poverty and fostering inclusive development.
                    </div>
                    <div className="our-team-container">
                        <div className="our-team-img">

                        </div>
                        <div className="our-team-content">
                            <p>
                                Mallarpur Naisuva is a beacon of hope, dedicated to uplifting the most vulnerable segments of our society. Founded on principles of compassion and social responsibility, our journey began with a vision to extend a helping hand to those in dire need – the poor, elderly, sick, women, and children.
                            </p>

                            <p>
                                Established under the West Bengal Societies Registration Act (XXI) of 1961, Mallarpur Naisuva embodies a commitment to transparency, integrity, and unwavering dedication to our cause. For over three decades, we have remained steadfast in our mission to foster a society where every individual can thrive with dignity.
                            </p>

                        </div>
                    </div>
                </div>

                <div className="our-work-section">
                    <div className="our-team-heading">Our Services</div>
                    <div
                        className="our-team-caption"
                    >
                        Empowering Communities Through Compassionate Initiatives
                    </div>

                </div>
                <div className="parent">
                    <Carousel
                        responsive={responsive}
                        autoPlay={true}
                        swipeable={true}
                        draggable={true}
                        // showDots={true}
                        infinite={true}
                        partialVisible={false}
                    // arrows={false}
                    // dotListClass="custom-dot-list-style"
                    >
                        {sliderImageUrl.map((item, index) => {
                            return (
                                <div className="slider" key={index}>
                                    <img src={item.url} alt="movie" />
                                    <div class="overlay">
                                        <p class="text">{item.text}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>

                <div class="our-achievement">
                    <div class="our-team-heading">Vision of the Organization</div>
                    <div class="our-team-caption">
                        Organization aims to break the vicious cycle of poverty and social isolation and to restore hope for a better future. We believe that every person has the right to access resources and opportunities in order to live and develop with dignity and to become an active and contributing member of our society.
                    </div>
                    <ul>
                        <li>
                            <div class="our-achievement-svg">
                                <img src={SVG3} alt='svg1' />
                            </div>
                            <h3>People's Organizations</h3>
                            <p>We empower individuals and build their capacities.</p>
                        </li>
                        <li>
                            <div class="our-achievement-svg">
                                <img src={SVG2} alt='svg1' />
                            </div>
                            <h3>Empowering Women</h3>
                            <p>We support women to reach their full potential.</p>
                        </li>
                        <li>
                            <div class="our-achievement-svg">
                                <img src={SVG1} alt='svg1' />
                            </div>
                            <h3>Sustainable Development</h3>
                            <p>We implement sustainable models for community health and rural development.</p>
                        </li>
                    </ul>
                </div>


                <div className="img-section">
                    <div className="img-section-overlay"></div>
                    <div className="img-section-heading">Join Us in Creating Positive Change</div>
                    <span
                        className="img-section-caption"
                    >
                        Join Mallarpur Naisuva in our mission to empower communities, uplift the vulnerable, and build a brighter future for all.
                    </span>
                </div>
                <div className="brand-section">
                    <div className="our-team-heading">Our Collaborative Partners</div>
                    <div
                        className="our-team-caption"
                    >
                        We are proud to collaborate with the following brands and organizations who share our commitment to positive change:
                    </div>
                    <div className="brand-logo-section">
                        <ul>
                            <li className="brand-logo-top-container-1">
                                <span className="brand"> BRAND </span>
                            </li>
                            <li className="brand-logo-top-container-2">
                                <span className="brand-1"> BRAND </span>
                            </li>
                            <li className="brand-logo-top-container-3">
                                <span className="brand-2"> BRAND </span>
                            </li>
                            <li className="brand-logo-top-container-4">
                                <span className="brand-3"> BRAND </span>
                            </li>
                            <li className="brand-logo-bottom-container-1">
                                <span className="brand-4"> BRAND </span>
                            </li>
                            <li className="brand-logo-bottom-container-2">
                                <span className="brand-5"> BRAND </span>
                            </li>
                            <li className="brand-logo-bottom-container-3">
                                <span className="brand-6"> BRAND </span>
                            </li>
                            <li className="brand-logo-bottom-container-4">
                                <span className="brand-7"> BRAND </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage