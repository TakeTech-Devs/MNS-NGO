import React from 'react'
import img1 from '../../assets/images/email2.png';
import img2 from '../../assets/images/image6.png';
import img3 from '../../assets/images/facebook5.png';
import img4 from '../../assets/images/linkedin25.png';
import "./Grievance.css"
import "./../Home/HomePage.css";
import "./../About/About.css";

const Grievance = () => {
    return (
        <>
            <div className="commonBanner-wrapper grievance">
				<div className="common-banner">
					<h1 className="our-team-heading">Grievance</h1>
					<p className="our-team-caption">Welcome to Mallarpur Naisuva, where our mission is to empower communities, uplift the vulnerable, and create positive change in society.</p>
				</div>
			</div>
         
            <div class="form-container">
                <h1 className='formheading'>Raise a Ticket</h1>
                <form className='form'>
                    <select>
                        <option value="issue">Select Your Issue</option>
                        <option value="finance">Finance</option>
                        <option value="education">Education</option>
                        <option value="donation">Donation</option>
                        <option value="health">Health</option>
                    </select>
                    <textarea id="message" name="message" className='forminput' rows="4" placeholder='Message' required></textarea>
                    <button type="submit" className='formbtn'>Submit</button>
                </form>
                <div className="form-footer">
                    <div className="left-align">
                        <span>loremipsum@dolor</span>
                        <span>000-000 0000</span>
                    </div>
                    <div className="right-align">
                        <img src={img1} alt="Footer Image" />
                        <img src={img4} alt="Footer Image" />
                        <img src={img2} alt="Footer Image" />
                        <img src={img3} alt="Footer Image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grievance