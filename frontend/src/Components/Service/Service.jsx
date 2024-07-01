import React, { useEffect, useState } from 'react';
import img1 from "../../assets/images/image1.png"
import img2 from "../../assets/images/image2.png"
import img3 from "../../assets/images/image3.png"
import img4 from "../../assets/images/image4.png"
import img5 from "../../assets/images/image51.png"
import img6 from "../../assets/images/image61.png"
import "./Service.css"
import "./../Home/HomePage.css";
import "./../About/About.css";
import { useSelector, useDispatch } from 'react-redux';
import { getServices, clearErrors } from '../../Actions/ServicesActions';



const Service = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const dispatch = useDispatch();
    const { services, ourServices, loading, error } = useSelector(state => state.services);

    useEffect(() => {
        dispatch(getServices());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
    }, [error, dispatch]);

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
        services && services.length > 0 && (
        <>
            <div className="commonBanner-wrapper service" style={{
                    background: services.length > 0 ? `url(${services[0].headerImage.url}) 50% / cover no-repeat, linear-gradient(#D9D9D9, #D9D9D9)` : ''
                }}>
				<div className="common-banner">
					<h1 className="our-team-heading">{services[0].header}</h1>
					<p className="our-team-caption">{services[0].caption}</p>
				</div>
			</div>
         
            <div className="image-gallery">
                    {/* {images.map((image) => (
                        <li key={image.id}>
                        <div className='image-box'>
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
                        </div>
                            <p className='service-name'>Services</p>
                        </li>

                    ))} */}
                    {ourServices.map((service) => (
                        <li key={service._id}>
                            <div className='image-box'>
                                <img
                                    src={service.image.url}
                                    alt={service.title}
                                    onClick={() => handleClick(service._id)}
                                />
                                {selectedImage === service._id && (
                                    <div className="dropdown">
                                        <p>{service.description}</p>
                                    </div>
                                )}
                            </div>
                            <p className='service-name'>{service.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
        )
    )
}

export default Service;
