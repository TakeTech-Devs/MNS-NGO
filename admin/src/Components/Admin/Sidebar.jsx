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
          <li><Link to="/home">Home</Link></li>
          <li><Link>About Us</Link></li>
          <li><Link>Grievance</Link></li>
          <li><Link>Services</Link></li>
          <li><Link>Governing Body</Link></li>
          <li><Link>Gallery</Link></li>
          <li><Link>Contact Us</Link></li>
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
