import React from 'react';
import Navbar from './components/navbar.tsx';
import Hero from './components/hero.tsx';
import SingIn from './components/singin.tsx';
import Footer from './components/footer.tsx';

import './css/tailwind.css';

function App() {
  return (  
    <>
    <Navbar/>
    <Hero/>
    <SingIn/>
    <Footer/>
       </>
  );
}

export default App;
