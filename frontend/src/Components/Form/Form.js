import React from 'react';
import "./Form.css";
import img1 from '../../assets/images/email2.png';
import img2 from '../../assets/images/image6.png';
import img3 from '../../assets/images/facebook5.png'

const Form = () => {
    return (
        <div class="form-container">
            <h1 className='formheading'>Get in Touch With Us</h1>
            <form className='form'>
                <label for="name" className='formlable'>Name</label>
                <input type="text" id="name" name="name" className='forminput' required />

                <label for="email" className='formlable'>Email</label>
                <input type="email" id="email" name="email" className='forminput' required />

                <label for="phone" className='formlable'>Phone Number</label>
                <input type="tel" id="phone" name="phone" className='forminput' required />

                <label for="message" className='formlable'>Message</label>
                <textarea id="message" name="message" className='forminput' rows="4" required></textarea>

                <button type="submit" className='formbtn'>Submit</button>
            </form>
            <div className="form-footer">
                <div className="left-align">
                    <span>loremipsum@dolor</span>
                    <span>000-000 0000</span>
                </div>
                <div className="right-align">
                    <img src={img1} alt="Footer Image" />
                    <img src={img2} alt="Footer Image" />
                    <img src={img3} alt="Footer Image" />
                </div>
            </div>
        </div>
    )
}

export default Form