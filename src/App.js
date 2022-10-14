/*
*
* app.js
* @author - Mazeen
* @date - 14 October, 2022
**/

import React from 'react';
import './App.css';
import Navbar from './components/header/header';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import MainFooter from './components/footer/main-footer';

function App() {
  return (
    <div >
      <Navbar/>
      <Content/>
      <Footer/>
      <MainFooter/>
    </div>
  );
}

export default App; 