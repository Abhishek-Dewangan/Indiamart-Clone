import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const H2 = styled.h2`
  font-size: 26px;
  color: #111;
  margin-top: 100px;
`;

const Idiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  border: 1px #efefef solid;
  box-sizing: border-box;

  & img {
    max-height: 150px;
    max-width: 150px;
  }
  & > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 150px;
    border-right: 1px #efefef solid;
  }
`;
const Pdiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;

  &>p:first-child{
    font-size: 18px;
    font-weight: 700;
    color: #333;
    margin:0;
    padding:0;
    line-height: 1.22;
  }

  &>p:last-child{
    font-size: 18px;
    color: #777777;
  }
`;

export const Explore = ({label}) => {
  let data = useSelector((state) => state[label]["explore"]);
  return (
    <div>
      <H2>Explore more categories</H2>
      <Wrapper>
        {data
          ? data.map((e) => {
              return (
                <Idiv key={e.id}>
                  <div>
                    <img src={e.img} alt="" />
                  </div>
                  <Pdiv>
                    <p>{e.title}</p>
                    <p>{e.quantity} products available</p>
                  </Pdiv>
                </Idiv>
              );
            })
          : ""}
      </Wrapper>
    </div>
  );
};
