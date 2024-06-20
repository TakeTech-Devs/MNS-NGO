import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';
import AdminHeader from './AdminHeader';
import AdminContent from './AdminContent';

const Dashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-main">
        <AdminHeader />
        <AdminContent />
      </div>
    </div>
  );
};

export default Dashboard;
