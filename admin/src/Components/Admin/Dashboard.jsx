import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';
import AdminHeader from './AdminHeader';

const Dashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-main" style={{height: "100vh"}}>
        <AdminHeader />
      </div>
    </div>
  );
};

export default Dashboard;
