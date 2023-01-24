import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home.js';
import AboutMe from './AboutMe.js';
import Experience from './Experience.js';
import NoPage from './NoPage.js';
import MyNavbar from './MyNavbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar></MyNavbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/about-me/" element={<AboutMe />} />
          <Route path="/experience/" element={<Experience />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <h1>yoyo</h1>
      </BrowserRouter>
    </>
  );
}

export default App;