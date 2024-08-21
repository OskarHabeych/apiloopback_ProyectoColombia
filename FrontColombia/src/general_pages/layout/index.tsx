import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/index';
import Footer from '../../components/footer/index';

interface LayoutProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout: React.FC<LayoutProps> = ({ darkMode, setDarkMode }) => {
  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;