import React, { useEffect, useState, useCallback } from 'react';
import './HomePage.css';
import PhoneSVG from "../../assets/vectors/vector_x2.svg";
import SVG1 from "../../assets/vectors/vector2_x2.svg";
import SVG2 from "../../assets/vectors/group_x2.svg";
import SVG3 from "../../assets/vectors/vector1_x2.svg";
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
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
}

// const sliderImageUrl = [
//     //First image url
//     {
//         url: "../../assets/images/rectangle8.png",
//     },
//     //Second image url
//     {
//         url: "../../assets/images/rectangle9.png",
//     },
//     //Third image url
//     {
//         url: "../../assets/images/rectangle10.png",
//     },
//     //First image url
//     {
//         url: "../../assets/images/rectangle9.png",
//     },

//     {
//         url: "../../assets/images/rectangle8.png",
//     },
//     //Second image url
//     //Third image url
//     {
//         url: "../../assets/images/rectangle10.png",
//     },
// ];

const sliderImageUrl = [
   {
    url: img1,
    text:"FINANCIAL INCLUSION",
   },
   {
    url: img2,
    text:"EDUCATIONAL ACTIVITY",
   },
   {
    url: img3,
    text:"HEALTH ABD HYGIENE",
   },
   {
    url: img2,
    text:"AWARENESS PROGRAMMS",
   },
   {
    url: img3,
    text:"WOMEN EMPOWERMENT",
   },
   {
    url: img1,
    text:"YOUTH DEVELOPMENT",
   },
   {
    url: img3,
    text:"CHILD DEVELOPMENT",
   },
   {
    url: img1,
    text:"AGRICULTURAL DEVELOPMENT",
   },
  ];


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
                            <a href='/' className="logo-1"></a>
                            <div className="navbar">
                                <div className="navbar-link">
                                    <div className="home-active">
                                        <a href='#' className="home"> Home </a>
                                    </div>
                                    <a href='/about' className="about-us">About Us</a>
                                    <a href='/#' className="grievance">Grievance</a>
                                    <a href='/#' className="services">Services</a>
                                    <a href='/#' className="governing-body">Governing Body</a>
                                    <a href='/#' className="gallery">Gallery</a>
                                    <a href='/#' className="contact-us">Contact Us</a>
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
                                    <button className="donatebtn">Donate
                                        {/* <span className="donate"> Donate </span> */}
                                    </button>
                                </div>
                            </div>
                        </div>

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

                    <div className="highlight-section">
                        <div className="highlight-1">
                            <div className="highlight-1-header">Compassion</div>
                            <span
                                className="highlight-1-caption"
                            >
                                Embracing empathy, fostering kindness
                            </span>
                        </div>
                        <div className="highlight-2">
                            <div className="highlight-2-header">Integrity</div>
                            <span
                                className="highlight-2-caption"
                            >
                                Upholding ethics, ensuring trustworthiness
                            </span>
                        </div>
                        <div className="highlight-3">
                            <div className="highlight-3-header">Empowerment</div>
                            <span
                                className="highlight-3-caption"
                            >
                                Inspiring growth, nurturing resilience
                            </span>
                        </div>
                    </div>

                </div>
                <div className="our-team-section">
                    <div className="our-team-heading">About Mallarpur Naisuva</div>
                    <div
                        className="our-team-caption"
                    >
                        Empowering communities, transforming lives. Join us in breaking the cycle of poverty and fostering inclusive development.
                    </div>
                    <div className="our-team-container">
                        <div className="our-team-img"></div>
                        <span
                            className="our-team-content"
                        >
                            Mallarpur Naisuva is a beacon of hope, dedicated to uplifting the most vulnerable segments of our society. Founded on principles of compassion and social responsibility, our journey began with a vision to extend a helping hand to those in dire need – the poor, elderly, sick, women, and children. <br />
                            <br />
                            Established under the West Bengal Societies Registration Act (XXI) of 1961, Mallarpur Naisuva embodies a commitment to transparency, integrity, and unwavering dedication to our cause. For over three decades, we have remained steadfast in our mission to foster a society where every individual can thrive with dignity.


                        </span>
                    </div>
                </div>

                <div className="our-work-section">
                    <div className="our-work-heading">Our Services</div>
                    <div
                        className="our-work-caption"
                    >
                        Empowering Communities Through Compassionate Initiatives
                    </div>


                    {/* <div className="our-work">
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
                    </div> */}

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
                            arrows={false}
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
                    <div class="our-achievement-heading">Vision of the Organization</div>
                    <div class="our-achievement-caption">
                        Organization aims to break the vicious cycle of poverty and social isolation and to restore hope for a better future. We believe that every person has the right to access resources and opportunities in order to live and develop with dignity and to become an active and contributing member of our society.
                    </div>
                    <div class="our-achievement-svg-section">
                        <div class="our-achievement-svg-1">
                            <img class="our-achievement-svg-1-1" src={SVG3} alt='svg1' />
                        </div>
                        <div class="our-achievement-svg-1">
                            <img class="our-achievement-svg-1-1" src={SVG2} alt='svg1' />
                        </div>
                        <div class="our-achievement-svg-1">
                            <img class="our-achievement-svg-1-1" src={SVG1} alt='svg1' />
                        </div>
                    </div>
                    <div class="our-achievement-text-section">
                        <div class="our-achievement-text-1">
                            <div class="our-achievement-text-1-heading">People's Organizations</div>
                            <span class="our-achievement-text-1-caption">We empower individuals and build their capacities.</span>
                        </div>
                        <div class="our-achievement-text-1">
                            <div class="our-achievement-text-1-heading">People's Organizations</div>
                            <span class="our-achievement-text-1-caption">We empower individuals and build their capacities.</span>
                        </div>
                        <div class="our-achievement-text-1">
                            <div class="our-achievement-text-1-heading">People's Organizations</div>
                            <span class="our-achievement-text-1-caption">We empower individuals and build their capacities.</span>
                        </div>
                    </div>
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
                    <div className="brand-section-heading">Our Collaborative Partners</div>
                    <div
                        className="brand-section-caption"
                    >
                        We are proud to collaborate with the following brands and organizations who share our commitment to positive change:
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
            </div>
        </>
    )
}

export default HomePage