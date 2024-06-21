import React from 'react';
import useState from 'react';
import Navbar from './components/navbar/index';
import Hero from './components/hero/index';
import Footer from './components/footer/index';
import SignIn from './components/singin/index';
import SingUp from './components/singup/index';
import Login from './general_pages/sing/index.tsx';
import './css/tailwind.css';

function App() {
  return (  
    <>
    <Login/>
    <Footer/>
     </>

  );
}

export default App;
