import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RightBar } from "../RightBar";
import { Sidebar } from "../Sidebar";
import styled from "styled-components";
import { Explore } from "../Explore";
import { Review } from "../Review";
import { Contact } from "../Contact";
import { ShipProducts } from "../ShipProducts";
import { Form } from "../Form";
import { Suppliers } from "../Suppliers";
import { Categories } from "../Categories";
import { getDataL } from "./../../../Redux/action";

const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  > div:first-child {
    width: 14%;
  }
  > div:last-child {
    width: 83%;
  }
`;

export const LipGloss = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ldata);

  useEffect(() => {
    fetch("https://aditya-fake-server.herokuapp.com/lip-gloss")
      .then((d) => d.json())
      .then((d) => dispatch(getDataL(d)))
      .catch((e) => console.log(e));
  }, []);
  console.log(data);
  return (
    <div>
      <Upper>
        <Sidebar label={"ldata"}/>
        <RightBar label={"ldata"}/>
      </Upper>
      <Explore label={"ldata"}/>
      <Review />
      <Contact />
      <ShipProducts label={"ldata"}/>
      <Form />
      <Suppliers label={"ldata"}/>
      <Categories />
    </div>
  );
};
