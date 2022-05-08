import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  height: 11px;
  width: 140px;
  margin-left: 15px;
  margin-right: 15px;
  display: inline-block;
  background-color: #ccc;
  border-radius: 5px;

  > div {
    background-color: #72ae44;
    border-radius: 5px;
    height: 11px;
    width: ${({ len }) => len}%;
  }
`;

const P = styled.div`
  margin: 5px;
`;

export const RatingBar = ({ star, rate, len }) => {
  return (
    <P>
      <span>{star}</span>
      <Bar len={len}>
        <div></div>
      </Bar>
      <span>{rate}</span>
    </P>
  );
};
