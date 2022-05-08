import React from "react";
import styled from "styled-components";
import { H2 } from "./ShipProducts";

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 100px;

  & > div {
    display: flex;
    align-items: center;
    height: 150px;
    width: 30%;
    border: 1px #efefef solid;
    box-shadow: 0 0 13px 0 rgb(0 0 0 / 10%);

    & > img {
      max-width: 150px;
      max-height: 150px;
      border-right: 1px #efefef solid;
    }

    &>p{
      color: #111;
      font-size: 18px;
      font-weight: 700;
      margin-left: 20px;
    }
  }
`;

export const Categories = () => {
  return (
    <div>
      <H2>Related Categories</H2>
      <Wrapper>
        <div>
          <img
            src="https://3.imimg.com/data3/EC/UP/GLADMIN-9499/skin-creams-250x250.jpg"
            alt=""
          />
          <p>Skin Creams</p>
        </div>
        <div>
          <img
            src="https://3.imimg.com/data3/EP/VJ/GLADMIN-105850/cosmetics-250x250.jpg"
            alt=""
          />
          <p>Cosmetics</p>
        </div>
        <div>
          <img
            src="https://3.imimg.com/data3/XB/FK/GLADMIN-6218/face-cream-250x250.jpg"
            alt=""
          />
          <p>Face Creams</p>
        </div>
        <div>
          <img
            src="https://3.imimg.com/data3/TT/GW/GLADMIN-21908/beauty-cosmetics-250x250.jpg"
            alt=""
          />
          <p>Beauty Cosmetics</p>
        </div>
        <div>
          <img
            src="https://3.imimg.com/data3/BF/PX/GLADMIN-9497/skin-care-cosmetics-250x250.jpg"
            alt=""
          />
          <p>Skin Care Cosmetics</p>
        </div>
        <div>
          <img
            src="https://4.imimg.com/data4/CE/VE/GLADMIN-184994/forever-aloe-vera-gel-250x250.jpg"
            alt=""
          />
          <p>Forever Aloe Vera Cosmetics</p>
        </div>
      </Wrapper>
    </div>
  );
};
