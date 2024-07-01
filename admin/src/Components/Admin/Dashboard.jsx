import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';
import AdminHeader from './AdminHeader';
import AdminHome from './AdminHome';

const Dashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-main">
        <AdminHeader />
      </div>
    </div>
  );
};

export default Dashboard;
