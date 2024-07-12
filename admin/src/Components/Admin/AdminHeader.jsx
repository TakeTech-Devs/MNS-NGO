import React from 'react';
import './AdminHeader.css';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <header className="admin-header">
      <h1>Admin Dashboard</h1>
      <div className="admin-header-right">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        {/* <span>Welcome, Admin</span> */}
      </div>
    </header>
  );
};

export default AdminHeader;
