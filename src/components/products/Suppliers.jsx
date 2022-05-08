import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { H2 } from "./ShipProducts";

const Wrapper = styled.div`
  display: flex;
  flrx-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 100px;
`;

const Pdiv = styled.div`
  border: 1px #efefef solid;
  box-sizing: border-box;
  padding: 15px;
  width: 24%;
  text-align: center;

  & > div:nth-child(1) {
    width: 85%;
    height: 202px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    border: 1px #efefef solid;

    & > img {
      max-width: 202px;
      max-height: 202px;
    }
  }
  & h3 {
    font-size: 18px;
    color: #2e3192;
    height: 45px;
  }
  & > div:nth-child(3) {
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-top: -10px;
    color: #444444;
    height: 20px;

    & > p:first-child {
      font-size: 20px;
      font-weight: 400;
    }
    & > p:last-child {
      padding-top: 5px;
    }
  }
  & > p:nth-child(4) {
    color: #333;
    font-size: 18px;
  }
  & i {
    color: #03776d;
    font-weight: 600;
    margin-right: 5px;
  }

  & > p:nth-child(5) {
    color: #777777;
    font-size: 15px;
    height: 25px;
  }
  & > p:nth-child(6) {
    color: #333;
    font-size: 18px;
  }
`;

const Button = styled.button`
  color: #fff;
  background: #03776d;
  width: 190px;
  font-weight: 700;
  border: none;
  padding: 12px 0 11px;
  border-radius: 3px;
  font-size: 15px;
`;

export const Suppliers = ({ label }) => {
  const data = useSelector((state) => state[label]["suppliers"]);
  return (
    <div>
      <H2>Related Products from Top Suppliers</H2>
      <Wrapper>
        {data
          ? data.map((e) => {
              return (
                <Pdiv key={e.id}>
                  <div>
                    <img src={e.img} alt="" />
                  </div>
                  <h3>{e.title}</h3>
                  <div>
                    <p>Rs {e.price}/</p>
                    <p>Piece</p>
                  </div>
                  <p>
                    <i class="bi bi-check-circle"></i>
                    {e.company}
                  </p>
                  <p>{e.addr}</p>
                  <p>
                    <i class="bi bi-telephone-fill"></i> Call {e.mob}
                  </p>
                  <Button>Contact Supplier</Button>
                </Pdiv>
              );
            })
          : ""}
      </Wrapper>
    </div>
  );
};
