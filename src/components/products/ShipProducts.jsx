import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const P = styled.h3`
  color: #111;
  font-weight: 600;
  font-size: 15px;
  padding-left: 5px;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  color: #333;

  & > div {
    width: 125px;
    border: solid 1px #dadada;
    border-radius: 5px;
    background: #f6f6f6;
    color: #2e3192;

    & p {
      font-size: 12px;
      font-weight: 400;
      font-family: arial;
      height: 20px;
      cursor: pointer;
      padding: 5px;
      margin: 0;
    }
  }
  & img {
    width: 125px;
    height: 125px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;
export const H2 = styled.h2`
  font-size: 26px;
  color: #111;
  margin-top: 50px;
`;

export const Button = styled.button`
  padding: 7px 30px;
  border-radius: 20px;
  background: #00a699;
  border: 1px solid #038379;
  color: #fff;
  margin-left: 5px;
  margin-bottom: 5px;
`;

export const ShipProducts = ({label}) => {
  const data = useSelector((state) => state[label]["side-prod"]);
  return (
    <div>
      <H2>Ready to Ship Products in Similar Categories</H2>
      <Wrapper>
        {data
          ? data.map((e) => {
              return (
                <div key={e.id}>
                  <img src={e.img} alt="" />
                  <p>{e.title}</p>
                  <P>₹ {e.price}.00</P>
                  <Button>Buy Now</Button>
                </div>
              );
            })
          : ""}
      </Wrapper>
    </div>
  );
};
