import React from 'react';
import './AdminHeader.css';

const AdminHeader = () => {
  return (
    <header className="admin-header">
      <h1>Admin Dashboard</h1>
      <div className="admin-header-right">
        <span>Welcome, Admin</span>
      </div>
    </header>
  );
};

export default AdminHeader;
