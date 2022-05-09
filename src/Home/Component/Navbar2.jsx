import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { Button } from "../../components/products/MainProducts";
import styled from "styled-components";

const Navbar2 = () => {
  let nav_email = useNavigate();

  const contact_page = () => {
    nav_email("/contact");
  };
  return (
    <>
      <div id="route_nav">
        <div id="route">
          <div id="home">
            <Link to="/">Home</Link>
          </div>
          <div id="product">
            <Link to="/products">Products</Link>
          </div>
          <div id="about">
            <Link to="/about">About</Link>
          </div>
          <div id="contact">
            <Link to="/contact">Contact us</Link>
          </div>
        </div>

        <div id="email_box">
          <Button onClick={contact_page}>
            <AiOutlineMail />
            Send Email
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
