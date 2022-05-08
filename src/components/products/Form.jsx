import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./ShipProducts";

const Wrapper = styled.div`
  width: 40%;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 5px;
  border: 1px solid #2e3192;
  margin: 50px 0 50px 20%;
  padding: 20px;

  & > p {
    color: #2e3192;
    font-size: 21px;
    font-weight: 400;
    width: 90%;
    margin: 0;
  }
`;
const Formm = styled.form`
  & input {
    display: block;
    width: 90%;
    padding: 5px 7px;
    margin-bottom: 10px;

    font-size: 15px;
    height: 42px;
    color: #223540;
    background-color: #fff;
    border: 1px solid #cbcbcb;
    border-radius: 3px;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);

    & :focus {
      outline: none;
      border: none;
    }
  }
  & div {
    width: 75%;
    display: flex;

    & input {
      width: 47%;
    }
  }

  & button {
    border-radius: 3px;
    font-weight: bold;
    margin-top: 10px;
    margin-left: 59%;
  }
`;

const Td = styled.td`
  font-size: 14px;
  color: #111;
  width: 35%;
`;

let initState = {
  product: "Cosmetics, Hair & Beauty Products",
  quantity: "",
  units: "Piece",
  additional: "",
};
export const Form = () => {
  const [state, setState] = useState(initState);

  const { product, quantity, units, additional } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <p>Tell us what you need, and we'll help you get quotes</p>
      <Formm>
        <tbody>
          <tr>
            <Td>
              <p>I want quotes for</p>
            </Td>
            <td>
              <input
                type="text"
                name="product"
                placeholder="Enter product / Service name"
                value={product}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <Td>
              <p>Quantity</p>
            </Td>
            <td>
              <div>
                <input
                  type="text"
                  name="quantity"
                  value={quantity}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="units"
                  placeholder="unit"
                  value={units}
                  onChange={handleChange}
                />
              </div>
            </td>
          </tr>
          <tr>
            <Td>
              <p>Briefly describe your requirement</p>
            </Td>
            <td>
              <input
                type="text"
                name="additional"
                placeholder="Additional details about your requirement"
                value={additional}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
        <Button type="submit" onClick={handleSubmit}>
          Submit Requirement
        </Button>
      </Formm>
    </Wrapper>
  );
};
