import React, { useEffect, useState } from 'react'
import g1 from "../../assets/images/g1.png"
import g2 from "../../assets/images/g2.png"
import g3 from "../../assets/images/g3.png"
import g4 from "../../assets/images/g4.png"
import g5 from "../../assets/images/g5.png"
import g6 from "../../assets/images/g6.png"
import g7 from "../../assets/images/g7.png"
import g8 from "../../assets/images/g8.png"
import g9 from "../../assets/images/g9.png"
import "./Gallery.css"
import "./../About/About.css";
import "./../Home/HomePage.css";
import { useSelector, useDispatch } from 'react-redux';
import { getGallery, clearErrors } from '../../Actions/GalleryActions';

const Gallery = () => {

    const dispatch = useDispatch();
    const { gallery, galleryImages, loading, error } = useSelector(state => state.gallery)

    useEffect(() => {
        dispatch(getGallery());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
    }, [error, dispatch]);

    const columns = [[], [], []];
    galleryImages.forEach((image, index) => {
        columns[index % 3].push(image);
    });

    return (
        <>
            <div className="commonBanner-wrapper gallery" style={{
                background: gallery && gallery.length > 0 ? `url(${gallery[0]?.headerImage?.url}) 50% / cover no-repeat, linear-gradient(#D9D9D9, #D9D9D9)` : ''
            }}>
                <div className="common-banner">
                    <h1 className="our-team-heading">{gallery && gallery.length > 0 ? gallery[0]?.header : ''}</h1>
                    <p className="our-team-caption">{gallery && gallery.length > 0 ? gallery[0]?.caption : ''}</p>
                </div>
            </div>
            <div className="our-story-section our-service">
                <div className="our-team-heading">{gallery && gallery.length > 0 ? gallery[0]?.galleryHeader : ''}</div>
                <div className="our-team-caption">{gallery && gallery.length > 0 ? gallery[0]?.galleryContent : ''}</div>
                {/* <div className="our-team-caption">
        Mallarpur Naisuva was founded with a vision to make a difference in the lives of those most in need. What began as a small group of individuals inspired by the spirit of social work has evolved into a full-fledged NGO dedicated to rural development and community empowerment.
    </div>
    <div className="our-team-caption">
        Our vision is to break the cycle of poverty and social isolation, restoring hope for a better future. We envision a world where every person has access to resources and opportunities for development, and where no one is left behind.
    </div>
    <div className="our-team-caption">
        Over the years, Mallarpur Naisuva has made significant strides in empowering communities and fostering positive change. From education and healthcare initiatives to women's empowerment programs and environmental conservation efforts, our impact is felt across various sectors.
    </div> */}
            </div>
            {/* <div class="parent-container">
                <div class="child-container" id="one">
                    <img src={g3} width="100%" height="auto" />
                    <img src={g1} width="100%" height="auto" />
                    <img src={g2} width="100%" height="auto" />
                </div>
                <div class="child-container" id="two">
                    <img src={g4} width="100%" height="auto" />
                    <img src={g5} height="auto" />
                    <img src={g6} width="100%" height="auto" />
                    <img src={g7} width="100%" height="auto" />

                </div>
                <div class="child-container" id="three">
                    <img src={g8} width="100%" height="auto" />
                    <img src={g9} width="100%" height="auto" />
                </div>
            </div> */}

            <div className="parent-container">
                {columns && columns.length > 0 && columns.map((column, columnIndex) => (
                    <div className="child-container" key={columnIndex}>
                        {column.map(image => (
                            <img
                                key={image._id}
                                src={image.image.url}
                                width="100%"
                                height="auto"
                                alt={`Gallery Image ${image._id}`}
                            />
                        ))}
                    </div>
                ))}
            </div>

        </>
    )
}

export default Gallery