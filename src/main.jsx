import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App.jsx';
import './index.css';
import { MeetupsProvider } from './Context/MeetupsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MeetupsProvider>
        <App />
      </MeetupsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
