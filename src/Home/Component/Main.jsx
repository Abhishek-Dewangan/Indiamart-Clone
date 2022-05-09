import { React, useEffect } from 'react';
import './Main.css';
import Title from './Title';
import Navbar from './Navbar2';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ProductsAndServices } from '../../components/products/pages/ProductsAndServices';
import { HomePageUp } from '../../components/products/pages/HomePageUp';
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
        
      </div>
    </div>
  );
};

export default Main;
