import React from "react";
import "./Title.css";
import { BiCurrentLocation } from "react-icons/bi";
import { FcOk } from "react-icons/fc";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { AiTwotoneLike } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: rgb(255, 255, 255);
  margin-bottom: 10px;
  margin-top:80px;
`;

const Companyima = styled.img`
  position: absolute;
  left: 3%;
  margin-top: 10px;
  width: 90px;
  height: 90px;
`;

const Companyname = styled.h2`
  position: absolute;
  left: 10%;
  margin-top: 20px;
  font-size: 28px;
  color: #000;

  @media (max-width: 600px) {
    position: absolute;
    left: 25%;
    margin-top: 20px;
    font-size: 20px;
  }
`;

const Location = styled.p`
  position: absolute;
  left: 10.5%;
  margin-top: 65px;
  font-size: 14px;
  color: rgb(99, 99, 99);
  margin-left: -10px;

  @media (max-width: 600px) {
    position: absolute;
    left: 25%;
    margin-top: 59px;
    font-size: 10px;
    color: rgb(99, 99, 99);
  }
`;

const Gst = styled.p`
  position: absolute;
  left: 25%;
  margin-top: 65px;
  font-size: 14px;
  color: rgb(99, 99, 99);
  margin-left: -23px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Verified = styled.p`
  position: absolute;
  left: 38%;
  margin-top: 65px;
  font-size: 14px;
  color: rgb(99, 99, 99);
  margin-left: -35px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Rating = styled.p`
  position: absolute;
  left: 47.5%;
  margin-top: 65px;
  font-size: 14px;
  color: rgb(99, 99, 99);
  margin-left: -45px;

  @media (max-width: 600px) {
    position: absolute;
    left: 60%;
    margin-top: 60px;
    font-size: 10px;
    color: rgb(99, 99, 99);
  }
`;

const Callbox = styled.div`
  position: absolute;
  left: 77%;
  height: 20px;
  margin-top: 40px;
  padding: 10px 15px;
  width: auto;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid #068076;
  text-align: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Call = styled.p`
  text-align: center;
  margin-top: 0.1px;
`;

const Title = () => {
  return (
    <>
      <Header>
        <Companyima
          src="https://3.imimg.com/data3/HJ/OY/MY-3792183/blue-heaven-cosmetics-private-limited-logo-120x120.jpg"
          alt="logo"
        ></Companyima>
        <Companyname>Blue Heaven Cosmetics (P) Ltd</Companyname>
        <Location>
          <BiCurrentLocation /> Kirti Nagar,New Delhi,Delhi
        </Location>
        <Gst>
          <FcOk />
          GST 07AACCB1155C1ZB
        </Gst>
        <Verified>
          <MdOutlineVerifiedUser />
          Verified Supplier
        </Verified>
        <Rating>
          <AiTwotoneLike />
          4.2/5
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </Rating>

        <Callbox>
          <Call>
            <FiPhoneCall />
            Call <b>08048361220</b> Ext <b>167</b>
          </Call>
        </Callbox>
      </Header>
    </>
  );
};

export default Title;
