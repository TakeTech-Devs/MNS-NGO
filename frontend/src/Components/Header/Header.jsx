import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PhoneSVG from "../../assets/vectors/vector_x2.svg";
import "./../Home/HomePage.css";
import { useSelector, useDispatch } from 'react-redux';
import { getContact, clearErrors } from '../../Actions/ContactActions';


const Header = () => {

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

    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/');
    const location = useLocation();

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    const toggleSidePanel = () => {
        setIsSidePanelOpen(!isSidePanelOpen);
    };

    const closeSidePanel = () => {
        setIsSidePanelOpen(false);
    };

    return (
        contact && contact.length > 0 && (
        <div className="navbar-section">
            <Link to='/' className="logo-1"></Link>
            <div className="navbar">
                <div className="navbar-link">
                    <Link
                        to='/'
                        className={activeLink === '/' ? 'active' : ''}
                    >
                        Home
                    </Link>
                    <Link
                        to='/about'
                        className={activeLink === '/about' ? 'active' : ''}
                    >
                        About Us
                    </Link>
                    <Link
                        to='/grievance'
                        className={activeLink === '/grievance' ? 'active' : ''}
                    >
                        Grievance
                    </Link>
                    <Link
                        to='/service'
                        className={activeLink === '/service' ? 'active' : ''}
                    >
                        Services
                    </Link>
                    <Link
                        to='/governing'
                        className={activeLink === '/governing' ? 'active' : ''}
                    >
                        Governing Body
                    </Link>
                    <Link
                        to='/gallery'
                        className={activeLink === '/gallery' ? 'active' : ''}
                    >
                        Gallery
                    </Link>
                    <Link
                        to='/contact'
                        className={activeLink === '/contact' ? 'active' : ''}
                    >
                        Contact Us
                    </Link>
                </div>
                <div className="donate-section">
                    <div className="phone">
                        <div className="phone-svg">
                            <img
                                className="phonesvg"
                                src={PhoneSVG}
                                alt='phone'
                            />
                        </div>
                        
                        <div className="navbar">{contact[0].phone}</div>
                    </div>
                    <button type="submit" className="donatebtn">Donate</button>
                    <div className="hamburger-menu" onClick={toggleSidePanel}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className={`side-panel ${isSidePanelOpen ? 'open' : ''}`}>
                        <button className="close-button" onClick={closeSidePanel}>
                            &times;
                        </button>
                        <div className="side-panel-content">
                            <Link
                                to='/'
                                className={activeLink === '/' ? 'active' : ''}
                            >
                                Home
                            </Link>
                            <Link
                                to='/about'
                                className={activeLink === '/about' ? 'active' : ''}
                            >
                                About Us
                            </Link>
                            <Link
                                to='/grievance'
                                className={activeLink === '/grievance' ? 'active' : ''}
                            >
                                Grievance
                            </Link>
                            <Link
                                to='/service'
                                className={activeLink === '/service' ? 'active' : ''}
                            >
                                Services
                            </Link>
                            <Link
                                to='/governing'
                                className={activeLink === '/governing' ? 'active' : ''}
                            >
                                Governing Body
                            </Link>
                            <Link
                                to='/gallery'
                                className={activeLink === '/gallery' ? 'active' : ''}
                            >
                                Gallery
                            </Link>
                            <Link
                                to='/contact'
                                className={activeLink === '/contact' ? 'active' : ''}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    );
};

export default Header;
