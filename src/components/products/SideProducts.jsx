import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Div = styled.div`
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px -1px rgb(0 0 0 / 20%);
  border-radius: 4px;
  margin-left: 10px;
  margin-top: 10px;
  height: 245px;
  width: 140px;

  & > img {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &>p:last-child {
    margin-top: -12px;
  }

  &>p{
    padding-left: 5px;
  }
`;

export const SideProducts = ({label}) => {
  const data = useSelector((state) => state[label]["side-prod"]);
  return (
    <div>
      {data
        ? data.map((e) => {
            return (
              <Div key={e.id}>
                <img src={e.img} alt="" />
                <p>{e.title}</p>
                <p>
                  <b>₹{e.price}.00</b>
                </p>
              </Div>
            );
          })
        : ""}
    </div>
  );
};
