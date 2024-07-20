import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Actions/AdminAction';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/')
    window.alert("Successfully Logout");
  }

  useEffect(() => {
    if (isAuthenticated === false) {
        navigate('/');
    }
}, [isAuthenticated, navigate])


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
          <li><Link to="/user">Admin</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link onClick={handleLogout}>Logout</Link></li>
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
