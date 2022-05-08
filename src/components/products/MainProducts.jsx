import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  border: 1px #efefef solid;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 27px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`;

const Left = styled.div`
  width: 40%;
  border: 1px #efefef solid;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    max-width: 236px;
    max-height: 384px;
  }
  & p {
    font-size: 14px;
    color: #777;
    margin-bottom: 0;
  }
  & > p:last-child {
    color: #068076;
    text-decoration: underline;
    font-weight: 400;
    font-size: 16px;
    margin: 0;
    margin-bottom: 50px;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }
`;

const Right = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  & > h3 {
    width: 250px;
    font-size: 22px;
    color: #111111;
    cursor: pointer;
    margin: 0;

    &:hover {
      color: #da2931;
    }
  }

  & > p {
    font-size: 15px;
    color: #2e3192;
    text-decoration: underline;
    cursor: pointer;
    font-weight: 700;
    letter-spacing: 0.1px;
    margin: 0;
    margin-top: 12px;
    width: 130px;

    &:hover {
      color: #da2931;
    }
  }

  & > ul {
    margin-left: -20px;
    color: #333333;
    letter-spacing: 0.2px;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  color: #fff;
  background: #02625a;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#058b80),
    to(#02625a)
  );
  border: 1px solid #02625a;
  border-radius: 3px;
  padding: 14px 0;
  width: 258px;
  display: inline-block;
  letter-spacing: -0.1px;
  font-weight: 400;
  cursor: pointer;
  text-align: center;
  margin: auto;
  margin-top: 30px;
`;

export const MainProducts = ({label}) => {
  const data = useSelector((state) => state[label]["main-prod"]);
  console.log(data);
  return (
    <div>
      {data
        ? data.map((e) => {
            return (
              <Wrapper key={e.id}>
                <Left>
                  <img src={e.img} alt="" />
                  <p>Interested in this product?</p>
                  <p>
                    <i class="fa-solid fa-file-pen"></i>&nbsp;&nbsp;Get Best
                    Quote
                  </p>
                </Left>
                <Right>
                  <h3>{e.title}</h3>
                  <p>Get Latest Price</p>
                  <ul>
                    <li>{e.f1}</li>
                    <li>{e.f2}</li>
                    <li>{e.f3}</li>
                    <li>{e.f4}</li>
                    <li>{e.f5}</li>
                  </ul>
                  <Button>Yes, I am interested!</Button>
                </Right>
              </Wrapper>
            );
          })
        : ""}
    </div>
  );
};
