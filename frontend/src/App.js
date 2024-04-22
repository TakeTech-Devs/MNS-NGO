// import './App.css';
import HomePage from './Components/Home/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Form from './Components/Form/Form';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Form />
      <Footer />
    </>
  );
}

export default App;
