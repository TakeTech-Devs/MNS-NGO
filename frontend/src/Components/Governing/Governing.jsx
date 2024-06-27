import React, { useEffect } from 'react'
import "./../Home/HomePage.css";
import "./../About/About.css";
import { useSelector, useDispatch } from 'react-redux';
import { getGoverning, clearErrors } from '../../Actions/GoverningBodyActions';

const Governing = () => {
    const dispatch = useDispatch();
    const { goveringBody, loading, error } = useSelector(state => state.governing)

    useEffect(() => {
        dispatch(getGoverning());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
    }, [error, dispatch]);


    return (
        goveringBody && goveringBody.length > 0 && (
            <>
                <div
                    className="commonBanner-wrapper governing"
                    style={{
                        background: `url(${goveringBody[0].headerImage.url}) 50% / cover no-repeat, linear-gradient(#D9D9D9, #D9D9D9)`
                    }}
                >
                    <div className="common-banner">
                        <h1 className="our-team-heading">{goveringBody[0].header}</h1>
                        <p className="our-team-caption">{goveringBody[0].caption}</p>
                    </div>
                </div>
                <div className="our-story-section our-service">
                    <div className="our-team-heading">{goveringBody[0].goveringBodyContent}</div>
                    <div className="our-team-caption">
                        {goveringBody[0].goveringBodyHeader}
                    </div>
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
            </>
        )
    )
}

export default Governing