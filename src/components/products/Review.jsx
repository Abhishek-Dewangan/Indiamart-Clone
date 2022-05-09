import React from "react";
import styled from "styled-components";
import { RatingBar } from "./RatingBar";

const Wrapper = styled.div`
  display: flex;
  margin: 20px 0 40px;
`;

export const H2 = styled.h2`
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  margin-top: 80px;

  & > div {
    margin: 0px 91px;
    background: #2d3192;
    width: 45px;
    height: 4px;
    margin: auto;
  }
`;

const Left = styled.div`
  width: 20%;
  margin: 0;
  padding-top: 10px;

  & > div {
    display: flex;
    align-items: center;
    margin: 0;

    & > p {
      font-size: 34px;
      font-weight: 700;
      color: #444;
      line-height: 0.8;
      margin: 0;

      & > span {
        font-size: 18px;
        font-weight: 400;
      }
    }

    & > i {
      font-size: 24px;
      margin-left: 5px;
      color: #cccccc;
    }
    & > i:not(:last-child) {
      color: #fdc12a;
    }
  }

  & > p {
    color: #666;
    font-size: 18px;
    margin: 0;
    margin-top: 15px;
    padding: 0;
  }
`;

const Middle = styled.div`
  border-right: 1px solid #dcdcdc;
  padding-right: 25px;
  margin-right: 25px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div:first-child {
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 17px;
    font-weight: 700;

    & > i {
      color: #72ae44;
      font-size: 18px;
    }
  }
`;

const H3 = styled.h3`
  font-size: 19px;
  color: #333;
`;

const Rev = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Rev1 = styled.div`
  width: 52px;
  height: 52px;
  background-color: #eaeaea;
  border-radius: 50%;
  flex-shrink: 0;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-right: 10px;
  font-size: 18px;
`;

const Rev2 = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: #333;
  margin-top: -13px;
  padding: 0;

  & > p {
    font-size: 17px;
    color: #333;
  }
`;
const I = styled.i`
  color: #cccccc;

  & > i:not(:last-child) {
    color: #fdc12a;
  }
`;

const Res = styled.div`
  display: flex;
  // justify-content: space-between;
  align-items: center;
  font-size: 17px;
  color: #333;

  & .fa-thumbs-down{
    color:red;
    margin: 0px 20px 0 5px;

  }
  & .fa-thumbs-up{
    color:green;
    margin: 0px 20px 0 5px;
  }
`;

export const Review = () => {
  return (
    <div>
      <H2>
        Reviews & Rating <div></div>
      </H2>
      <Wrapper>
        <Left>
          <div>
            <p>
              4.2<span>/5</span>
            </p>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p>Reviewed by 6 Users</p>
        </Left>
        <Middle>
          <RatingBar star={"5 star"} rate={4} len={67} />
          <RatingBar star={"4 star"} rate={1} len={17} />
          <RatingBar star={"3 star"} rate={0} len={0} />
          <RatingBar star={"2 star"} rate={0} len={0} />
          <RatingBar star={"1 star"} rate={1} len={17} />
        </Middle>
        <Right>
          <div>
            <i class="fa-solid fa-thumbs-up"></i> <p>User Satisfaction</p>
          </div>
          <RatingBar star={"Response"} rate={"50%"} len={50} />
        </Right>
      </Wrapper>

      <H3>Most Relevant Reviews</H3>
      <Rev>
        <Rev1>j</Rev1>
        <Rev2>
          <p>
            <b>Jyoti</b> | Rama Collection | New Delhi, Delhi
          </p>
          <I>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </I>
          <p>15-December-21</p>
          <Res>
            <div>
              Response<i class="fa-solid fa-thumbs-down"></i>
            </div>
            <div>
              Quality<i class="fa-solid fa-thumbs-down"></i>
            </div>
            <div>
              Delivery<i class="fa-solid fa-thumbs-down"></i>
            </div>
          </Res>
        </Rev2>
      </Rev>
      <Rev>
        <Rev1>r</Rev1>
        <Rev2>
          <p>
            <b>Rohit</b> | Blue Heaven | Delhi, Delhi
          </p>
          <I>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </I>
          <p>20-August-21</p>
          <div>
            <Res>
              Response<i class="fa-solid fa-thumbs-up"></i>
            </Res>
          </div>
        </Rev2>
      </Rev>
    </div>
  );
};
