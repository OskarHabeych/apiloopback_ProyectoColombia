import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar/index.tsx'; 
import Home from '../general_pages/home/index.tsx';
import Login from '../general_pages/sign/index.tsx'; 
import SignIn from '../components/signin/index'; 
import SignUp from '../components/signup/index'; 
import Layout from '../general_pages/layout/index.tsx';
import '../css/tailwind.css'; 

function App() {
  return (
    <Router>
      <Routes>
          <Route element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
          </Routes>
       </Router>
  );
}

export default App;
