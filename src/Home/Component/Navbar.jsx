import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';
const Navbar = () => {
  let nav_email = useNavigate();

  const contact_page = () => {
    nav_email('/contact');
  };
  return (
    <>
      <div id='route_nav'>
        <div id='route'>
          <div id='home'>
            <Link to='/home'>Home</Link>
          </div>
          <div id='product'>
            <Link to='/products'>Products</Link>
          </div>
          <div id='about'>
            <Link to='/about'>About</Link>
          </div>
          <div id='contact'>
            <Link to='/contact'>Contact us</Link>
          </div>
        </div>

        <div id='email_box'>
          <button onClick={contact_page}>
            <AiOutlineMail />
            Send Email
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
