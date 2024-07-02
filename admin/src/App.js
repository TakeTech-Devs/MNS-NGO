import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Admin/Dashboard';
import Home from './Components/Admin/Home';
import About from './Components/Admin/About';
import Grievance from './Components/Admin/Grievance';
import Services from './Components/Admin/Services';
import Governing from './Components/Admin/Governing';
import Gallery from './Components/Admin/Gallery';
import Contact from './Components/Admin/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />      
        <Route path="/grievance" element={<Grievance />} />      
        <Route path="/services" element={<Services />} />      
        <Route path="/governing" element={<Governing />} />      
        <Route path="/gallery" element={<Gallery />} />      
        <Route path="/contact" element={<Contact />} />      
      </Routes>
    </Router>
  );
}

export default App;
