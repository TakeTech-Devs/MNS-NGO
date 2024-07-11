import React, { useEffect } from 'react'
import img1 from '../../assets/images/email2.png';
import img2 from '../../assets/images/image6.png';
import img3 from '../../assets/images/facebook5.png';
import img4 from '../../assets/images/linkedin25.png';
import "./Grievance.css"
import "./../Home/HomePage.css";
import "./../About/About.css";
import { useSelector, useDispatch } from 'react-redux';
import { getGrievance, clearErrors } from '../../Actions/GrievanceActions';
import { getContact } from '../../Actions/ContactActions';

const Grievance = () => {

    const dispatch = useDispatch();
    const { grievance, loading, error } = useSelector(state => state.grievance);
    const { contact, loading: contactLoading, error: contactError } = useSelector(state => state.contact)

    useEffect(() => {
        dispatch(getGrievance());
        dispatch(getContact());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
        if (contactError) {
            alert(contactError);
            dispatch(clearErrors());
        }
    }, [error, dispatch, contactError]);
    return (
        <>
            <div className="commonBanner-wrapper grievance" style={{
                background: grievance && grievance.length > 0 ? `url(${grievance[0]?.headerImage?.url}) 50% / cover no-repeat, linear-gradient(#D9D9D9, #D9D9D9)` : ""
            }}>
                <div className="common-banner">
                    <h1 className="our-team-heading">{grievance && grievance.length > 0 ? grievance[0]?.header : ""}</h1>
                    <p className="our-team-caption">{grievance && grievance.length > 0 ? grievance[0]?.caption : ""}</p>
                </div>
            </div>

            <div className="form-container">
                <h1 className='formheading'>Raise a Ticket</h1>
                <form className='form'>
                    <select>
                        <option value="issue">Select Your Issue</option>
                        <option value="finance">Finance</option>
                        <option value="education">Education</option>
                        <option value="donation">Donation</option>
                        <option value="health">Health</option>
                    </select>
                    <input type="email" id="email" name="email" className='forminput' placeholder='Enter Your Email' required />
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

        </>
    )
}

export default Grievance