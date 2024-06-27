import React, { useEffect } from 'react'
import "./../Home/HomePage.css";
import "./contact.css"
import call from "../../assets/images/CALL.png"
import location from "../../assets/images/PIN.png"
import email from "../../assets/images/EMAIL.png"
import { useSelector, useDispatch } from 'react-redux';
import { getContact, clearErrors } from '../../Actions/ContactActions';

const Contact = () => {

    const dispatch = useDispatch();
    const { contact, loading, error } = useSelector(state => state.contact)

    useEffect(() => {
        dispatch(getContact());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
    }, [error, dispatch]);
    return (
        contact && contact.length > 0 && (
            <>
                <div className="commonBanner-wrapper contact" style={{
                    background: `url(${contact[0].headerImage.url}) 50% / cover no-repeat, linear-gradient(#D9D9D9, #D9D9D9)`
                }}
                >
                    <div className="common-banner">
                        <h1 className="our-team-heading">{contact[0].header}</h1>
                        <p className="our-team-caption">{contact[0].caption}</p>
                    </div>
                </div>
                <div className='contact-map'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29140.551651296588!2d87.67102279948419!3d24.08147929538105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9f79d0fe0b5a1%3A0x3a7802ddd72ad740!2sMallarpur%2C%20West%20Bengal%20731216!5e0!3m2!1sen!2sin!4v1719123965536!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        title="Mallarpur Location"
                    ></iframe>
                    <div className='location-details'>
                        <ul className='contact-details'>
                            <li>
                                <p>Address</p>
                                <div className='svg-wrap'>
                                    <img src={location} alt="Location" />
                                </div>
                            </li>
                            <li>
                                <p>{contact[0].phone}</p>
                                <div className='svg-wrap'>
                                    <img src={call} alt="Call" />
                                </div>
                            </li>
                            <li>
                                <p>{contact[0].email}</p>
                                <div className='svg-wrap'>
                                    <img src={email} alt="Email" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    )
}

export default Contact