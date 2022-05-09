import React from "react";
import { BuyerForm } from "./BuyerForm";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  &>div:first-child{
      display: flex;flex-direction: column;
      align-items: center;
  }
`;

const Img = styled.img`
max-width: 210px;
max-width: 210px;
`
const P = styled.p`
font-size: 14px;
color: #777;
width: 160px;
`

export const ModalForm = ({ item, success, handleSuccess }) => {
  return (
    <Wrapper>
      <div>
        <Img src={item.img} alt="" />
        <p>{item.title}</p>
        <P>Sold By - Blue Heaven Cosmetics (P) Ltd, New Delhi, Delhi</P>
      </div>
      <div>
        <BuyerForm handleSuccess={handleSuccess}/>
      </div>
    </Wrapper>
  );
};
