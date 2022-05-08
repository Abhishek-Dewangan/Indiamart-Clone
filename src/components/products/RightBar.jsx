import React from "react";
import { HeadingProducts } from "./HeadingProducts";
import { MainProducts } from "./MainProducts";

export const RightBar = ({label}) => {
  return (
    <div>
      <HeadingProducts label={label}/>
      <MainProducts label={label}/>
    </div>
  );
};
