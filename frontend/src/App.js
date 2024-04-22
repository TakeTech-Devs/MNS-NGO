// import './App.css';
import CarouselForm from './Components/Admin/CarouselForm';
import HomePage from './Components/Home/HomePage';
import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/carousel" element={<CarouselForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
