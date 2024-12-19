import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './Home.jsx'
import './index.css';

const Layout = ({ children }) => (
  <>
    <Header/>
    <div style={{ height: "6rem" }}></div>
    <main>{children}</main>
    <Footer/>
  </>
);

function App() {

  return (
    <StrictMode>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<Layout></Layout>}/>
          <Route path="/home" element={<Layout><Home/></Layout>}/>
        </Routes>
      </Router>
    </StrictMode>
  )
}
const root = createRoot(document.getElementById('root'));
root.render(<App />);
