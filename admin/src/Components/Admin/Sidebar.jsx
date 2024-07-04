import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Link to='/' className="logo1"></Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/grievance">Grievance</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/governing">Governing Body</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link>Logout</Link></li>
        </ul>
      </div>
      <button className="menu-toggle" onClick={toggleSidebar}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </>
  );
};

export default Sidebar;
