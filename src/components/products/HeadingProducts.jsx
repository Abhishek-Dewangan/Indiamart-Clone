import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  margin: 25px 5px;

  & img {
    max-width: 125px;
    height: 125px;
    margin: auto;
  }
`;

const Main = styled.div`
  text-align: left;
  margin-bottom: 50px;
  margin-top: -25px;

  & > h2 {
    color: #2e3192;
    font-size: 24px;
    line-height: 1.14;
  }

  & > p {
    color: #444;
  }
`;

const Pdiv = styled.div`
  width: 125px;
  height: 200px;
  border: solid 1px #dadada;
  border-radius: 5px;
  padding-bottom: 6px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div:first-child {
    background: #fff;
  }
  & > div:last-child {
    width: 100%;
    height: 68px;
    background: #f6f6f6;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
  }

  & p {
    color: #2e3192;
    font-size: 12px;
    font-weight: 400;
    font-family: arial;
    height: 15px;
    cursor: pointer;

  }
  & p:hover{
    color: #da2931;
  }

  & p:last-child {
    text-decoration: underline;
  }

  &:hover {
    -ms-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  
`;

export const HeadingProducts = ({label}) => {
  const data = useSelector((state) => state[label]["main-prod"]);
  console.log(data);
  return (
    <Main>
      <h2>Makeup</h2>
      <p>
        Offering you a complete choice of products which include Foundation,
        Compact, Pan Cake Foundation and Pan Stick Foundation.
      </p>
      <Wrapper>
        {data
          ? data.map((e) => {
              return (
                <Pdiv key={e.id}>
                  <div>
                    <img src={e.img} alt="" />
                  </div>
                  <div>
                    <p>{e.title}</p>
                    <p>Ask Price</p>
                  </div>
                </Pdiv>
              );
            })
          : ""}
      </Wrapper>
    </Main>
  );
};
