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
import { getDataF } from "./../../../Redux/action";
import { Main } from "./ProductsAndServices";

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

export const Foundation = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fdata);

  useEffect(() => {
    fetch("https://aditya-fake-server.herokuapp.com/foundation")
      .then((d) => d.json())
      .then((d) => dispatch(getDataF(d)))
      .catch((e) => console.log(e));
  }, []);
  console.log(data);
  return (
    <Main>
      <Upper>
        <Sidebar label={"fdata"}/>
        <RightBar label={"fdata"}/>
      </Upper>
      <Explore label={"fdata"}/>
      <Review />
      <Contact />
      <ShipProducts label={"fdata"}/>
      <Form />
      <Suppliers label={"fdata"}/>
      <Categories />
    </Main>
  );
};
