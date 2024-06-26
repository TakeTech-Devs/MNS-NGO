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
          <li>Home</li>
          <li>About Us</li>
          <li>Grievance</li>
          <li>Services</li>
          <li>Governing Body</li>
          <li>Gallery</li>
          <li>Contact Us</li>
          <li>Logout</li>
        </ul>
      </div>
      <button className="menu-toggle" onClick={toggleSidebar}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </>
  );
};

export default Sidebar;
