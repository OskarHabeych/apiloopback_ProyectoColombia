import React from 'react'; 
import Navbar from '../../components/navbar/index.tsx'; 
import Footer from '../../components/footer/index.tsx'; 

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
