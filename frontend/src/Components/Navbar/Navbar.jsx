import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PhoneSVG from "../../assets/vectors/vector_x2.svg";
import "./Navbar.css";

const Navbar = () => {
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
        <div className="home-page">
            <div className="upper-section">
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
                                to='/services'
                                className={activeLink === '/services' ? 'active' : ''}
                            >
                                Services
                            </Link>
                            <Link
                                to='/governing-body'
                                className={activeLink === '/governing-body' ? 'active' : ''}
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
                                <div className="navbar">+000 000 0000</div>
                            </div>
                            <button className="donatebtn">Donate</button>
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
                                        to='/services'
                                        className={activeLink === '/services' ? 'active' : ''}
                                    >
                                        Services
                                    </Link>
                                    <Link
                                        to='/governing-body'
                                        className={activeLink === '/governing-body' ? 'active' : ''}
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
            </div>
        </div>
    );
};

export default Navbar;
