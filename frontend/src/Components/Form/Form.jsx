/* eslint-disable */
import React, { useEffect } from 'react';
import "./Form.css";
import img1 from '../../assets/images/email2.png';
import img2 from '../../assets/images/image6.png';
import img3 from '../../assets/images/facebook5.png';
import img4 from '../../assets/images/linkedin25.png';
import { useSelector, useDispatch } from 'react-redux';
import { getContact, clearErrors } from '../../Actions/ContactActions';

const Form = () => {
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
        <div className="form-container">
            <h1 className='formheading'>Get in Touch With Us</h1>
            <form className='form'>
                <input type="text" id="name" name="name" className='forminput' placeholder="Name" required />
                <input type="email" id="email" name="email" className='forminput' placeholder='Email' required />
                <input type="tel" id="phone" name="phone" className='forminput' placeholder='Phone Number' required />
                <textarea id="message" name="message" className='forminput' rows="4" placeholder='Message' required></textarea>
                <button type="submit" className='formbtn'>Submit</button>
            </form>
            {contact && contact.length > 0 && (
                <div className="form-footer">
                    <div className="left-align">
                        <span>{contact[0]?.email}</span>
                        <span>{contact[0]?.phone}</span>
                    </div>
                    <div className="right-align">
                        <img src={img1} alt="Footer Image" />
                        <img src={img4} alt="Footer Image" />
                        <img src={img2} alt="Footer Image" />
                        <img src={img3} alt="Footer Image" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Form