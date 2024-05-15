/* eslint-disable */
import CarouselForm from './Components/Admin/CarouselForm';
import HomePage from './Components/Home/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Form from './Components/Form/Form';
import Dashboard from './Components/Admin/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/carousel" element={<CarouselForm />} /> */}
        </Routes>
        <Form />
        <Footer />
      </Router>
    </>
  );
}

export default App;
