import { React, useEffect } from 'react';
import './Main.css';
import Title from './Title';
import Navbar from './Navbar';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import { Routes, Route, useNavigate } from 'react-router-dom';
//import useEffect from 'react'

const Main = () => {
  const Navigate = useNavigate();

  useEffect(() => {
    Navigate('/home');
  }, []);

  return (
    <div id='Main'>
      <div id='Container'>
        <Title />
        <Navbar />
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
