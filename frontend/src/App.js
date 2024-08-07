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
import TermsofService from './Components/Terms of Service/TermsofService';
import PrivacyPolicy from './Components/Privacy Policy/PrivacyPolicy';
import MetaData from './Components/Layout/MetaData';
import WelcomeModal from './Components/Layout/WelcomeModal';

function AppContent() {
  const location = useLocation();
  const isGrievancePage = location.pathname === '/grievance';
  const isTermsPage = location.pathname === '/terms';
  const isPolicy = location.pathname === '/policy';
  // const isAdminPage = location.pathname === '/admin';

  return (
    <>
    <MetaData/>
      {/* {!isAdminPage && <Header />} */}
      <Header />
      <WelcomeModal />
      <Routes>
        {/* <Route path="/admin" element={<Dashboard />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/grievance" element={<Grievance />} />
        <Route path="/service" element={<Service />} />
        <Route path="/governing" element={<Governing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsofService />} />
        <Route path="/policy" element={<PrivacyPolicy />} />

        <Route path="/f1" element={<F1 />} />
      </Routes>
      {/* {!isGrievancePage && !isAdminPage && <Form />}
      {!isAdminPage && <Footer />} */}
      {!isGrievancePage && !isTermsPage && !isPolicy && <Form />}
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
