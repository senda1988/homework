import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Faq from './Faq';
import Contact from './Contact';
import Impressum from './Impressum';
import Navigation from './Navigation';
import About from './About';
import Wttr from './Wttr';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/impressum" element={<Impressum />}></Route>
        <Route path="/wetter" element={<Wttr />}></Route>

      </Routes>
    </Router>

  </React.StrictMode >
);


reportWebVitals();
