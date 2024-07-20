/* eslint-disable */
import React, { useEffect } from 'react'
import "./Footer.css";
import logo from "../../assets/images/logo2.jpeg";
import instagram from "../../assets/images/image5.png";
import whatsapp from "../../assets/images/whatsapp5.png";
import facebook from "../../assets/images/facebook5.png";
import linkedin from "../../assets/images/linkedin25.png";
import { useSelector, useDispatch } from 'react-redux';
import { getOther } from '../../Actions/OtherActions';


const Footer = () => {
    const dispatch = useDispatch();
    const { other, loading: otherLoading, error: otherError } = useSelector(state => state.other);

    useEffect(() => {
        dispatch(getOther());
        if (otherError) {
            window.alert(otherError)
        }
    }, [dispatch, otherError])
    return (
        <>
            <footer>
                <div className='footer-description'>
                    <a href='/' className="footer-logo">
                        <img src={logo} alt="Brand-Logo" />
                    </a>
                    <p>Empowering communities, fostering change, together.</p>
                </div>
                <div className='footer-links'>
                    <ul>
                        <li>
                            <a href="/about">About Us</a>
                        </li>
                        <li>
                            <a href="/service">Our Services</a>
                        </li>
                        <li>
                            <a href="/contact">Contact Us</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/policy">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/terms">Terms of Service</a>
                        </li>
                        <li>
                            <a href="/grievance">Grievance</a>
                        </li>
                    </ul>
                    <div>
                        <p>DONATE:</p>
                        <ol>
                            <li>
                                <a href={other?.instagramLink} target='_blank'>
                                    <img src={instagram} alt="Footer Image" />
                                </a>
                            </li>
                            <li>
                                <a href={other?.facebookLink} target='_blank'>
                                    <img src={facebook} alt="Footer Image" />
                                </a>
                            </li>
                            <li>
                                <a href={other?.whatsAppLink} target='_blank'>
                                    <img src={whatsapp} alt="Footer Image" />
                                </a>
                            </li>
                            <li>
                                <a href={other?.linkedinLink} target='_blank'>
                                    <img src={linkedin} alt="Footer Image" />
                                </a>
                            </li>
                        </ol>
                    </div>

                </div>
            </footer>
            <div className='copyright'>
                <p>
                    Copyright © 2024 Mallarpur Naisuva
                </p>
                <p>
                    Powered By<span> TakeTech Devs</span>
                </p>
            </div>
        </>
    )
}

export default Footer