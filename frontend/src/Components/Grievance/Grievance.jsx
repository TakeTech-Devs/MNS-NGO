import React from 'react'
import "./Grievance.css"
import Navbar from '../Navbar/Navbar'
import img1 from '../../assets/images/email2.png';
import img2 from '../../assets/images/image6.png';
import img3 from '../../assets/images/facebook5.png';
import img4 from '../../assets/images/linkedin25.png';

const Grievance = () => {
    return (
        <>
            <Navbar />
            <div className="grievance-upper">
                <div>
                    <h2 className="our-team-heading">Grievance</h2>
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