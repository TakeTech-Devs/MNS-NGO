import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Form from './Components/Form/Form';
// import Dashboard from './Components/Admin/Dashboard';
import Service from './Components/Service/Service';
import Governing from './Components/Governing/Governing';
import Grievance from './Components/Grievance/Grievance';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import F1 from './Components/Folder/f1';
import Header from './Components/Header/Header';

function AppContent() {
  const location = useLocation();
  const isGrievancePage = location.pathname === '/grievance';
  // const isAdminPage = location.pathname === '/admin';

  return (
    <>
      {/* {!isAdminPage && <Header />} */}
      <Header />
      <Routes>
        {/* <Route path="/admin" element={<Dashboard />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/grievance" element={<Grievance />} />
        <Route path="/service" element={<Service />} />
        <Route path="/governing" element={<Governing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/f1" element={<F1 />} />
      </Routes>
      {/* {!isGrievancePage && !isAdminPage && <Form />}
      {!isAdminPage && <Footer />} */}
      {!isGrievancePage && <Form />}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
