import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Router, Routes, Route } from "react-router-dom";
import ContactMePage from "./pages/contactMePage";
import ExamplesOfWork from "./pages/examplesOfWork";
import AboutMePage from "./pages/aboutMepage";
import Homepage from "./pages/homepage";
import Footer from "./components/Footer/Footer"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <HashRouter basename='/ReactPortfollio'>
      <Routes>
        <Route exact path="/ReactPortfollio" element={<Homepage />} />
        <Route path="/ReactPortfollio/aboutMe" element={<AboutMePage />} />
        <Route path="/ReactPortfollio/work"element={<ExamplesOfWork />} />
        <Route path="/ReactPortfollio/contactMe"element={<ContactMePage/>} />
      </Routes>
    </HashRouter>
    < Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
