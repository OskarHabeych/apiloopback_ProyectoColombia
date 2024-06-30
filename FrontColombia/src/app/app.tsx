import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/navbar/index';
import SignIn from '../components/signin/index';
import SignUp from '../components/signup/index';
import Login from '../general_pages/sign/index.tsx';
import Carousel from '../components/carousel/index.tsx';
import Hero from '../components/hero/index.tsx'
import '../css/tailwind.css';

function App() {
  return (
   <> 
<Login/>
</>
);
}

export default App;
