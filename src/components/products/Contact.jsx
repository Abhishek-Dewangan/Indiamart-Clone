import React from "react";
import styled from "styled-components";
import { Button } from "./MainProducts";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  letter-spacing: 1px;
  background: #f8f8f8;
  margin: 0;
`;
const H2 = styled.h2`
  margin: 0;
  background-color: #2d3192;
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  padding: 15px 20px;
  margin-top: 50px;
`;
const H3 = styled.h3`
  font-size: 22px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 100px;

  & > div:first-child > p {
    font-size: 17px;
    color: #333;
    margin: 0;
    line-height: 1.8;
  }

  & > div:last-child {
    font-size: 17px;
    color: #333;

    & > i:not(:first-child) {
      font-size: 24px;
      margin-left: 10px;
    }

    & .bi-facebook {
      color: #485cc6;
    }
    & .bi-linkedin {
      color: #0e76a8;
    }
    & .bi-twitter {
      color: #559dff;
    }
  }
`;

const Middle = styled.div`
  color: #333333;
  font-size: 17px;
  margin: 0;
  line-height: 0.9;
  padding-bottom: 100px;

  & i {
    color: #777777;
    font-size: 19px;
    margin-right: 5px;
  }
  & > div {
    font-size: 14px;
    line-height: 1.2;
    width: 340px;
    padding: 0;
    padding-left: 20px;
    margin: 0;

    & > p:last-child {
      color: #4996e8;
      font-weight: 500;
      text-decoration: underline;

      & > i {
        color: #4996e8;
        font-size: 16px;
      }
    }
  }

  & button {
    width: 150px;
    margin: 10px;

    & i {
      color: #fff;
      margin-right: 5px;
    }
  }
`;

const P = styled.p`
  font-size: 12px;
  padding-left: 27px;

  & span {
    color: #068076;
    font-weight: bold;
    font-size: 15px;
  }
`;

const Right = styled.div`
color: #333;
background: #fff;
margin: 5px;
padding: 5px 20px;

& h3{
  margin: 0;
  color: #2e3192;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0;

  & span {
    font-size: 20px;
  font-weight: 400;
  
  }
}

&>p{
  font-size: 13px;
  text-align: center;
  background: #fff
  margin-bottom: -5px;
}
& button{
  width: 170px;
}
`;

export const Contact = () => {
  return (
    <div>
      <H2>Get in touch with us</H2>
      <Wrapper>
        <Left>
          <div>
            <H3>Our Company</H3>
            <p>Aboout Us</p>
            <p>Products & Services</p>
            <p>Contact Us</p>
            <p>Sitemap</p>
            <p>Download Brochure</p>
          </div>
          <div>
            <i class="bi bi-share-fill"></i> <span>Share us via</span>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-twitter"></i>
          </div>
        </Left>

        <Middle>
          <H3>Reach Us</H3>
          <h3>
            <i class="fa-solid fa-location-dot"></i>Blue Heaven Cosmetics (P)
            Ltd
          </h3>
          <div>
            <p>
              No. 39, DLF Industrial Area, Kirti Nagar, New Delhi-110019, Delhi,
              India
            </p>
            <p>
              <i class="fa-solid fa-diamond-turn-right"></i>Get Directions
            </p>
          </div>
          <p>
            <i class="fa-solid fa-circle-user"></i>Arvind Srivastava (Manager)
          </p>
          <p>
            <i class="fa-solid fa-phone"></i>Call <b>08048361220</b>
          </p>
          <P>
            Dial Ext <span>167</span> when connected
          </P>
          <br />
          <Button>
            <i class="bi bi-chat-left-text"></i>Send SMS
          </Button>
          <Button>
            <i class="bi bi-envelope-fill"></i>Send Email
          </Button>
        </Middle>

        <Right>
          <h3>
            Leave a Message, <span>we will call you back!</span>
          </h3>
          <p>Requirement Details</p>
          <textarea
            name=""
            id=""
            cols="50"
            rows="8"
            placeholder="Aditional details about your requirements.."
          ></textarea>
          <br />
          <Button>Submit Requirement</Button>
        </Right>
      </Wrapper>
    </div>
  );
};
