import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/app';
import './css/tailwind.css'; // Asegúrate de que Tailwind CSS esté importado aquí

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);