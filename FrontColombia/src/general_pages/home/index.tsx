import React, { useState } from 'react'; // Importa useState correctamente
import { Link } from 'react-router-dom';
import Layout from '../layout/index.tsx';
import Hero from '../../components/hero/index.tsx';
import Carousel from '../../components/carousel/index.tsx';
import Navbar from '../../components/navbar/index.tsx';
import Footer from '../../components/footer/index.tsx';
const Home = () => {
  return (
  <>
    <Navbar/>
    <Hero/>
    <Carousel/>
    <Footer/>
       </>
   )
  }

export default Home
