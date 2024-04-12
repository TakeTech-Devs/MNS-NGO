import React, { useEffect, useState, useCallback } from 'react';
import './HomePage.css';
import PhoneSVG from "../../assets/vectors/vector_x2.svg";
import SVG1 from "../../assets/vectors/vector2_x2.svg";
import SVG2 from "../../assets/vectors/group_x2.svg";
import SVG3 from "../../assets/vectors/vector1_x2.svg";


const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
    return (
        <>
            <div className="home-page">
                <div className="upper-section">
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

                        <div className="navbar-section">
                            <div className="logo-1"></div>
                            <div className="navbar">
                                <div className="navbar-link">
                                    <div className="home-active">
                                        <span className="home"> Home </span>
                                    </div>
                                    <div className="about-us">About Us</div>
                                    <div className="grievance">Grievance</div>
                                    <div className="services">Services</div>
                                    <div className="governing-body">Governing Body</div>
                                    <div className="gallery">Gallery</div>
                                    <div className="contact-us">Contact Us</div>
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
                                    <div className="donatebtn">
                                        <span className="donate"> Donate </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-heading">Lorem ipsum dolor</div>
                        <div
                            className="carousel-caption"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua 6363.
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

                    <div className="highlight-section">
                        <div className="highlight-1">
                            <div className="highlight-1-header">Lorem ipsum</div>
                            <span
                                className="highlight-1-caption"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </span>
                        </div>
                        <div className="highlight-2">
                            <div className="highlight-2-header">Lorem ipsum</div>
                            <span
                                className="highlight-2-caption"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </span>
                        </div>
                        <div className="highlight-3">
                            <div className="highlight-3-header">Lorem ipsum</div>
                            <span
                                className="highlight-3-caption"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </span>
                        </div>
                    </div>
                </div>
                <div className="our-team-section">
                    <div className="our-team-heading">Lorem ipsum dolor</div>
                    <div
                        className="our-team-caption"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="our-team-container">
                        <div className="our-team-img"></div>
                        <span
                            className="our-team-content"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.<br />
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.<br />
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididuntu.
                        </span>
                    </div>
                </div>
                <div className="our-work-section">
                    <div className="our-work-heading">Lorem ipsum dolor</div>
                    <div
                        className="our-work-caption"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="our-work">
                        <div className="our-work-1-container">
                            <div className="our-work-1-rectangle"></div>
                            <span className="our-work-1-caption"> Lorem ipsum dolor </span>
                        </div>
                        <div className="our-work-2-container">
                            <div className="our-work-2-rectangle"></div>
                            <span className="our-work-2-caption"> Lorem ipsum dolor </span>
                        </div>
                        <div className="our-work-3-container">
                            <div className="our-work-3-rectangle"></div>
                            <span className="our-work-3-caption"> Lorem ipsum dolor </span>
                        </div>
                        
                    </div>
                </div>
                <div className="our-achievement">
                    <div className="our-achievement-heading">Lorem ipsum dolor</div>
                    <div
                        className="our-achievement-caption"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="our-achievement-svg-section">
                        <div className="our-achievement-svg-1">
                            <img className="our-achievement-svg-1-1" src={SVG1} alt='svg1'/>
                        </div>
                        <div className="our-achievement-svg-2">
                            <img className="our-achievement-svg-2-2" src={SVG2} alt='svg2'/>
                        </div>
                        <div className="our-achievement-svg-3">
                            <img className="our-achievement-svg-3-3" src={SVG3} alt='svg3'/>
                        </div>
                    </div>
                    <div className="our-achievement-text-section">
                        <div className="our-achievement-text-1">
                            <div className="our-achievement-text-1-heading">Lorem ipsum</div>
                            <span
                                className="our-achievement-text-1-caption"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </span>
                        </div>
                        <div className="our-achievement-text-2">
                            <div className="our-achievement-text-2-heading">Lorem ipsum</div>
                            <span
                                className="our-achievement-text-2-caption"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </span>
                        </div>
                        <div className="our-achievement-text-3">
                            <div className="our-achievement-text-3-heading">Lorem ipsum</div>
                            <span
                                className="our-achievement-text-3-caption"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </span>
                        </div>
                    </div>
                </div>
                <div className="img-section">
                    <div className="img-section-overlay"></div>
                    <div className="img-section-heading">Lorem ipsum dolor</div>
                    <span
                        className="img-section-caption"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididu
                    </span>
                </div>
                <div className="brand-section">
                    <div className="brand-section-heading">Lorem ipsum dolor</div>
                    <div
                        className="brand-section-caption"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="brand-logo-section">
                        <div className="brand-logo-top">
                            <div className="brand-logo-top-container-1">
                                <span className="brand"> BRAND </span>
                            </div>
                            <div className="brand-logo-top-container-2">
                                <span className="brand-1"> BRAND </span>
                            </div>
                            <div className="brand-logo-top-container-3">
                                <span className="brand-2"> BRAND </span>
                            </div>
                            <div className="brand-logo-top-container-4">
                                <span className="brand-3"> BRAND </span>
                            </div>
                        </div>
                        <div className="brand-logo-bottom">
                            <div className="brand-logo-bottom-container-1">
                                <span className="brand-4"> BRAND </span>
                            </div>
                            <div className="brand-logo-bottom-container-2">
                                <span className="brand-5"> BRAND </span>
                            </div>
                            <div className="brand-logo-bottom-container-3">
                                <span className="brand-6"> BRAND </span>
                            </div>
                            <div className="brand-logo-bottom-container-4">
                                <span className="brand-7"> BRAND </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-section">
                    <div className="logo-2"></div>
                    <div className="footer-container">
                        <div
                            className="footer-details"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                            ipsum dolor sit amet, consectetur adipiscin. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                        </div>
                        <div className="footer-link">
                            <div className="footer-link-other">Lorem ipsum</div>
                            <div className="footer-link-other">Lorem ipsum</div>
                            <div className="footer-link-other">Lorem ipsum</div>
                            <div className="footer-link-other">Lorem ipsum</div>
                            <div className="footer-link-other">Lorem ipsum</div>
                            <div className="footer-link-other">Lorem ipsum</div>
                        </div>
                        <div className="footer-link">
                            <div className="footer-link-other">Lorem ipsum dolor</div>
                            <div className="footer-link-other">Lorem ipsum dolor</div>
                            <div className="footer-link-other">Lorem ipsum dolor</div>
                            <div className="footer-link-other">Lorem ipsum dolor</div>
                            <div className="footer-link-other">Lorem ipsum dolor</div>
                        </div>
                        <div className="footer-link">
                            <div className="footer-link-other">Lorem ipsum dolor</div>
                            <div className="footer-link-other">Lorem ipsum dolor</div>
                            <div className="footer-link-other">Lorem ipsum dolor</div>
                            <div className="footer-link-other">Lorem ipsum dolor</div>
                            <div className="footer-link-other">Lorem ipsum dolor</div>
                        </div>
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
            </div>
        </>
    )
}

export default HomePage
