/* eslint-disable */
import HomePage from './Components/Home/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Form from './Components/Form/Form';
import Dashboard from './Components/Admin/Dashboard';
import Service from './Components/Service/Service';
import Governing from './Components/Governing/Governing';
import Grievance from './Components/Grievance/Grievance';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/grievance" element={<Grievance />} />
          <Route path="/service" element={<Service />} />
          <Route path="/governing" element={<Governing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Form />
        <Footer />
      </Router>
    </>
  );
}

export default App;
