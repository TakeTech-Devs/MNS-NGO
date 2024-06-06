import React, { useState } from 'react';
import './Sidebar.css'

const Sidebar = () => {

    const [activeLink, setActiveLink] = useState(0);
    const [sidebarClosed, setSidebarClosed] = useState(false);

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    return (
        <div>
            <div className="sidebar">
                <a href="#" className="logo">
                    <i className='bx bx-code-alt'></i>
                    <div className="logo-name"><span>Asmr</span>Prog</div>
                </a>
                <ul className="side-menu">
                    <li className={activeLink === 0 ? 'active' : ''}>
                        <a href="#" onClick={() => handleLinkClick(0)}>
                            <i className='bx bxs-dashboard'></i>Dashboard
                        </a>
                    </li>
                    <li className={activeLink === 1 ? 'active' : ''}>
                        <a href="#" onClick={() => handleLinkClick(1)}>
                            <i className='bx bx-store-alt'></i>Shop
                        </a>
                    </li>
                    <li className={activeLink === 2 ? 'active' : ''}>
                        <a href="#" onClick={() => handleLinkClick(2)}>
                            <i className='bx bx-analyse'></i>Analytics
                        </a>
                    </li>
                    <li className={activeLink === 3 ? 'active' : ''}>
                        <a href="#" onClick={() => handleLinkClick(3)}>
                            <i className='bx bx-message-square-dots'></i>Tickets
                        </a>
                    </li>
                    <li className={activeLink === 4 ? 'active' : ''}>
                        <a href="#" onClick={() => handleLinkClick(4)}>
                            <i className='bx bx-group'></i>Users
                        </a>
                    </li>
                    <li className={activeLink === 5 ? 'active' : ''}>
                        <a href="#" onClick={() => handleLinkClick(5)}>
                            <i className='bx bx-cog'></i>Settings
                        </a>
                    </li>
                </ul>
                <ul className="side-menu">
                    <li>
                        <a href="#" className="logout">
                            <i className='bx bx-log-out-circle'></i>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
            <div className='content'>
                <nav>
                    <i class='bx bx-menu'></i>
                    <form action="#">
                        <div class="form-input">
                            <input type="search" placeholder="Search..." />
                            <button class="search-btn" type="submit"><i class='bx bx-search'></i></button>
                        </div>
                    </form>
                    {/* <input type="checkbox" id="theme-toggle" hidden />
                    <label for="theme-toggle" class="theme-toggle"></label> */}
                    <a href="#" class="notif">
                        <i class='bx bx-bell'></i>
                        <span class="count">12</span>
                    </a>
                    <a href="#" class="profile">
                        <img src="images/logo.png" />
                    </a>
                </nav>

            </div>
        </div>

    )
}

export default Sidebar
