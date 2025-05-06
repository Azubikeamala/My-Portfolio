import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import Portfolio from "./App"; // Main Portfolio Page
import UiUxProjects from "./UiUxProjects"; // UI/UX Projects Page
import QaProjects from "./QaProjects"; // QA Projects Page
import FullstackProjects from "./FullstackProjects"; // Full Stack Projects Page
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/ui-ux" element={<UiUxProjects />} />
        <Route path="/qa" element={<QaProjects />} />
        <Route path="/fullstack" element={<FullstackProjects />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// Performance logging
reportWebVitals();
