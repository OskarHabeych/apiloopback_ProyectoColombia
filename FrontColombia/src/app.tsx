import React from 'react';
import Navbar from './components/navbar/navbar.tsx';
import Hero from './components/hero/hero.tsx';
import SingIn from './components/singin/singin.tsx';
import Footer from './components/footer/footer.tsx';

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
