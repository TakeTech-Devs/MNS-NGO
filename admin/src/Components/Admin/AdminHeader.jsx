import React from 'react';
import './AdminHeader.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminHeader = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  return (
    <header className="admin-header">
      <h1>Admin Dashboard</h1>
      <div className="admin-header-right">
      {isAuthenticated && user ? (
          <span>Welcome, {user.name}</span>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </header>
  );
};

export default AdminHeader;
