import React, { useEffect } from 'react';
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
import UserList from './Components/User/User';
import { useDispatch } from 'react-redux';
import { loadUser } from './Actions/AdminAction';
import ProtectedRoute from './Routes/ProtectedRoute';
import Loader from './Components/Layouts/Loader';
import Settings from './Components/Settings/Settings';
import MetaData from './Components/Layouts/MetaData';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
    <MetaData/>
      <Router>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/about" element={
            <ProtectedRoute>

              <About />
            </ProtectedRoute>
          } />
          <Route path="/grievance" element={
            <ProtectedRoute>

              <Grievance />
            </ProtectedRoute>
          } />
          <Route path="/services" element={
            <ProtectedRoute>

              <Services />
            </ProtectedRoute>

          } />
          <Route path="/governing" element={
            <ProtectedRoute>

              <Governing />
            </ProtectedRoute>
          } />
          <Route path="/gallery" element={
            <ProtectedRoute>

              <Gallery />
            </ProtectedRoute>
          } />
          <Route path="/contact" element={
            <ProtectedRoute>

              <Contact />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={
            <ProtectedRoute>

              <FormControl />
            </ProtectedRoute>
          } />
          <Route path="/grievanceform" element={
            <ProtectedRoute>

              <GrievanceForm />
            </ProtectedRoute>
          } />
          <Route path="/allform" element={
            <ProtectedRoute>

              <AllForm />
            </ProtectedRoute>
          } />
          <Route path="/user" element={
            <ProtectedRoute>

              <UserList />
            </ProtectedRoute>
          } />
          <Route path="/settings" element={
            <ProtectedRoute>

              <Settings />
            </ProtectedRoute>
          } />
          <Route path='/loader' element={<Loader />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
