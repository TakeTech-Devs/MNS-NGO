/* eslint-disable */
import React, { useEffect, useState } from 'react';
import "./Form.css";
import img1 from '../../assets/images/email2.png';
import img2 from '../../assets/images/image6.png';
import img3 from '../../assets/images/facebook5.png';
import img4 from '../../assets/images/linkedin25.png';
import { useSelector, useDispatch } from 'react-redux';
import { getContact, clearErrors } from '../../Actions/ContactActions';
import { submitForm } from '../../Actions/FormAction';
import { getOther } from '../../Actions/OtherActions';

const Form = () => {
    const dispatch = useDispatch();
    const { contact, loading, error } = useSelector(state => state.contact)
    const { loading: formLoading, error: formError } = useSelector((state) => state.touchForm);

    const { other, loading: otherLoading, error: otherError } = useSelector(state => state.other);

    useEffect(() => {
        dispatch(getOther());
        if(otherError){
            window.alert(otherError)
        }
    }, [dispatch, otherError])

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { name, email, phone, message };
        dispatch(submitForm(formData));
        window.location.reload();
      };

    useEffect(() => {
        dispatch(getContact());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
        if(formError){
            window.alert(formError)
            dispatch(clearErrors());
        }
    }, [error, dispatch, formError]);
    return (
        <div className="form-container">
            <h1 className='formheading'>Get in Touch With Us</h1>
            <form className='form' onSubmit={handleSubmit}>
                <input type="text" id="name" name="name" className='forminput' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" id="email" name="email" className='forminput' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}  required />
                <input type="tel" id="phone" name="phone" className='forminput' placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)}  required />
                <textarea id="message" name="message" className='forminput' rows="4" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                <button type="submit" className='formbtn'>Submit</button>
            </form>
            {contact && contact.length > 0 && (
                <div className="form-footer">
                    <div className="left-align">
                        <span>{contact[0]?.email}</span>
                        <span>{contact[0]?.phone}</span>
                    </div>
                    <div className="right-align">
                        <a href='' target='_blank'><img src={img1} alt="Footer Image" /></a>
                        <a href={other?.linkedinLink} target='_blank'><img src={img4} alt="Footer Image" /></a>
                        <a href={other?.whatsAppLink} target='_blank'><img src={img2} alt="Footer Image" /></a>
                        <a href={other?.facebookLink} target='_blank'><img src={img3} alt="Footer Image" /></a>
                        
                    </div>
                </div>
            )}
        </div>
    )
}

export default Form