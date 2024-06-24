import React from 'react'
import "./../Home/HomePage.css";
import "./contact.css"
import call from "../../assets/images/CALL.png"
import location from "../../assets/images/PIN.png"
import email from "../../assets/images/EMAIL.png"

const Contact = () => {
    return (
        <>
            <div className="commonBanner-wrapper contact">
				<div className="common-banner">
					<h1 className="our-team-heading">Contact Us</h1>
					<p className="our-team-caption">Welcome to Mallarpur Naisuva, where our mission is to empower communities, uplift the vulnerable, and create positive change in society.</p>
				</div>
			</div>
            <div className='contact-map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29140.551651296588!2d87.67102279948419!3d24.08147929538105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9f79d0fe0b5a1%3A0x3a7802ddd72ad740!2sMallarpur%2C%20West%20Bengal%20731216!5e0!3m2!1sen!2sin!4v1719123965536!5m2!1sen!2sin" ></iframe>
            <div className='location-details'>
                <ul className='contact-details'>
                    <li>
                    <p>Address</p>
                        <div className='svg-wrap'>
                        <img src={location}/>
                        </div>
                       
                    </li>
                    <li>
                        <p>+000 000 0000</p>
                        <div className='svg-wrap'>
                            <img src={call}/>
                        </div>
                       
                    </li>
                    <li>
                    <p>E-mail Address</p>
                        <div className='svg-wrap'>
                        <img src={email}/>
                        </div>
                       
                    </li>
                </ul>
            </div>
            </div>
           
        </>
    )
}

export default Contact