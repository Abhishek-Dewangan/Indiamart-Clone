import React from "react";
import { ProductServices } from "./ProductServices";
import { SideProducts } from "./SideProducts";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 10px;
`;

export const Sidebar = ({label}) => {
  return (
    <Wrapper>
      <ProductServices />
      <SideProducts label={label}/>
    </Wrapper>
  );
};
