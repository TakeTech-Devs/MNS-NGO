import React from 'react'
import Sidebar from './Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className='content'>
        <main>
          <div class="header">
            <div class="left">
              <h1>Dashboard</h1>
              <ul class="breadcrumb">
                <li><a href="#">
                  Analytics
                </a></li>
                /
                <li><a href="#" class="active">Shop</a></li>
              </ul>
            </div>
            <a href="#" class="report">
              <i class='bx bx-cloud-download'></i>
              <span>Download CSV</span>
            </a>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
