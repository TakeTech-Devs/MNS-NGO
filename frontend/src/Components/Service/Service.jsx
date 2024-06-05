import React, { useState } from 'react';
import "./Service.css"
import Navbar from '../Navbar/Navbar'
import img1 from "../../assets/images/image1.png"
import img2 from "../../assets/images/image2.png"
import img3 from "../../assets/images/image3.png"
import img4 from "../../assets/images/image4.png"
import img5 from "../../assets/images/image51.png"
import img6 from "../../assets/images/image61.png"

const Service = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        {
            id: 1,
            url: img1,
            text: "FINANCIAL INCLUSION",
        },
        {
            id: 2,
            url: img2,
            text: "EDUCATIONAL ACTIVITY",
        },
        {
            id: 3,
            url: img3,
            text: "HEALTH AND HYGIENE",
        },
        {
            id: 4,
            url: img4,
            text: "AWARENESS PROGRAMS",
        },
        {
            id: 5,
            url: img5,
            text: "WOMEN EMPOWERMENT",
        },
        {
            id: 6,
            url: img6,
            text: "YOUTH DEVELOPMENT",
        },
    ];

    const handleClick = (id) => {
        setSelectedImage(selectedImage === id ? null : id);
    };

    return (
        <>
            <Navbar />
            <div className="service-upper">
                <div>
                    <h2 className="our-team-heading">Services</h2>
                    <p className="our-team-caption">Welcome to Mallarpur Naisuva, where our mission is to empower communities, uplift the vulnerable, and create positive change in society.</p>
                </div>
            </div>
            <div className="our-story-section our-service">
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
            </div>
            <div className="image-gallery">
                <h1>Our Services</h1>
                <div className="image-grid">
                    {images.map((image) => (
                        <div key={image.id} className="image-container">
                            <img
                                src={image.url}
                                alt={`Thumbnail ${image.id}`}
                                onClick={() => handleClick(image.id)}
                            />
                            {selectedImage === image.id && (
                                <div className="dropdown">
                                    <p>{image.text}</p>
                                </div>
                            )}
                            <p>Lorem ipsum dolor</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Service;
