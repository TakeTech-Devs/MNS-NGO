import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Admin/Dashboard';
import Home from './Components/Admin/Home';
import Sidebar from './Components/Admin/Sidebar';
import AdminHeader from './Components/Admin/AdminHeader';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
