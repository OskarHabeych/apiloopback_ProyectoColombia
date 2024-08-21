import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../AuthContext'; // Asegúrate de que esta ruta sea correcta
import Home from '../general_pages/home/index';
import Login from '../general_pages/sign/index';
import SignIn from '../components/signin/index'; 
import SignUp from '../components/signup/index'; 
import Layout from '../general_pages/layout/index';
import '../css/tailwind.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route element={<Layout darkMode={darkMode} setDarkMode={setDarkMode} />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;