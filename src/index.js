import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Router>
      <Routes>
        <Route exact path="/ReactPortfollio" element={<Homepage />} />
        <Route path="/ReactPortfollio/aboutMe" element={<AboutMePage />} />
        <Route path="/ReactPortfollio/work"element={<ExamplesOfWork />} />
        <Route path="/ReactPortfollio/contactMe"element={<ContactMePage/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
