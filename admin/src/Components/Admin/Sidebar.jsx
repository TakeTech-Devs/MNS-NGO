import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false); // Close sidebar if screen size increases
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <div className={`sidebar ${isOpen && isMobile ? 'open' : ''}`}>
        <Link to='/' className="logo1"></Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/grievance">Grievance</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/governing">Governing Body</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/form">Form</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </div>
      {isMobile && (
        <button className="menu-toggle" onClick={toggleSidebar}>
          <i className="fa-solid fa-bars"></i>
        </button>
      )}
    </>
  );
};

export default Sidebar;
