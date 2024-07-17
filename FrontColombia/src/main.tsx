import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.tsx';
import './css/tailwind.css'; // Asegúrate de que Tailwind CSS esté importado aquí

ReactDOM.render(
  <React.StrictMode>
      <App />
   </React.StrictMode>,
  document.getElementById('root')
);
