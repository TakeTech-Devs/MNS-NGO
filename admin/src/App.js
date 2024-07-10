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
import Login from './Components/Login/Login';
import FormControl from './Components/Admin/FormControl';
import GrievanceForm from './Components/Admin/GrievanceForm';
import AllForm from './Components/Admin/AllForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/about" element={<About />} />      
        <Route path="/grievance" element={<Grievance />} />      
        <Route path="/services" element={<Services />} />      
        <Route path="/governing" element={<Governing />} />      
        <Route path="/gallery" element={<Gallery />} />      
        <Route path="/contact" element={<Contact />} />      
        <Route path="/login" element={<Login />} />      
        <Route path="/form" element={<FormControl />} />      
        <Route path="/grievanceform" element={<GrievanceForm />} />      
        <Route path="/allform" element={<AllForm />} />      
      </Routes>
    </Router>
  );
}

export default App;
