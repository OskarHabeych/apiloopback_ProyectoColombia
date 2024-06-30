import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/navbar/index';
import SignIn from '../components/singin/index';
import SignUp from '../components/singup/index';
import Login from '../general_pages/sing/index.tsx';
import Carousel from '../components/carousel/index.tsx';
import Hero from '../components/hero/index.tsx'
import '../css/tailwind.css';

function App() {
  return (
   <> 
<Navbar/>
<Hero/>
<Carousel/>
</>
);
}

export default App;
