import React from 'react';
import Navbar from './components/navbar/index.tsx';
import Hero from './components/hero/index.tsx';
import SingIn from './general_pages/singin/singin.tsx';
import SingUp from './general_pages/singup/singup.tsx';
import Footer from './components/footer/index.tsx';

import './css/tailwind.css';

function App() {
  return (  
    <>
    <Navbar/>
    <Hero/>
    <SingIn/>
    <SingUp/>
    <Footer/>
       </>

  );
}

export default App;