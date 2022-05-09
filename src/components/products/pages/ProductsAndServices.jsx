import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getDataF, getDataL } from "./../../../Redux/action";
import { Review } from "../Review";
import { Contact } from "../Contact";
import { ShipProducts } from "../ShipProducts";
import { Form } from "../Form";
import { Suppliers } from "../Suppliers";
import { Categories } from "../Categories";
import { useNavigate } from "react-router-dom";

const H2 = styled.h2`
  font-size: 24px;
  color: #111111;
  line-height: 1.14;
  margin: 0;
  padding: 0;
  margin-top: 30px;
`;
const H3 = styled.h3`
  font-size: 22px;
  color: #2e3192;
  margin: 0;
  width: 200px;
  &:hover {
    color: red;
  }
`;
const Sp = styled.p`
  color: #2e3192;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const Wrapper = styled.div`
  width: 85%;
  padding: 15px;
  border: 1px #efefef solid;
  box-shadow: 0 0 13px 0 rgb(0 0 0 / 10%);
  margin-top: 30px;

  & > p:nth-child(2) {
    color: #777777;
  }
`;
const Pdiv = styled.div`
  display: flex;
  gap: 3%;

  & p {
    cursor: pointer;
    &:hover {
      font-weight: bold;
    }
  }

  & > div {
    width: 22%;

    & > div {
      border: 1px #efefef solid;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
      height: 230px;

      &:hover {
        box-shadow: 0 0 13px 0 rgb(0 0 0 / 10%);
      }
      & > img {
        max-width: 225px;
        max-height: 225px;
      }
    }
  }
`;

const P = styled.div`
  display: flex;
  justify-content: flex-end;
  & p {
    color: #2e3192;
    border: 1px solid #2e3192;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: #2e3192;
      color: #fff;
      -webkit-transition: background-color 0.5s linear;
    }
  }
`;
export const Main = styled.div`
  width: 85%;
  margin: auto;
`;

export const ProductsAndServices = () => {
  const dispatch = useDispatch();
  const ldata = useSelector((state) => state.ldata["main-prod"]);
  const fdata = useSelector((state) => state.fdata["main-prod"]);

  useEffect(() => {
    fetch("https://aditya-fake-server.herokuapp.com/lip-gloss")
      .then((d) => d.json())
      .then((d) => dispatch(getDataL(d)))
      .catch((e) => console.log(e));

    fetch("https://aditya-fake-server.herokuapp.com/foundation")
      .then((d) => d.json())
      .then((d) => dispatch(getDataF(d)))
      .catch((e) => console.log(e));
  }, []);

  const navigate = useNavigate();

  return (
    <Main>
      <H2>Products & Services</H2>
      <Wrapper>
        <H3>Makeup</H3>
        <p>
          Offering you a complete choice of products which include Foundation,
          Compact, Pan Cake Foundation and Pan Stick Foundation.
        </p>
        <Sp>View More</Sp>

        <Pdiv>
          {fdata
            ? fdata.map((e) => (
                <div key={e.id} onClick={() => navigate("/foundation")}>
                  <div>
                    <img src={e.img} alt="" />
                  </div>
                  <p>{e.title}</p>
                </div>
              ))
            : ""}
        </Pdiv>

        <P>
          <p>View more details</p>
        </P>
      </Wrapper>
      <Wrapper>
        <H3>Lips Products</H3>
        <p>
          Manufacturer of a wide range of products which include Lip Gloss, Lip
          Stick and Lip Liner.
        </p>
        <Sp>View More</Sp>

        <Pdiv>
          {ldata
            ? ldata.map((e) => (
                <div key={e.id} onClick={() => navigate("/lip-gloss")}>
                  <div>
                    <img src={e.img} alt="" />
                  </div>
                  <p>{e.title}</p>
                </div>
              ))
            : ""}
        </Pdiv>

        <P>
          <p>View more details</p>
        </P>
      </Wrapper>

      <Wrapper>
        <H3>Lipstick</H3>
        <p>
          Providing you the best range of Baked Brick Lipstick, Cerise Pink
          Lipstick, Coral Red Lipstick, Desert Rose Lipstick and Eternal Red
          Lipstick with effective & timely delivery.
        </p>
        <Sp>View More</Sp>

        <Pdiv>
          <div>
            <div>
              <img
                src="https://4.imimg.com/data4/QY/OX/GLADMIN-3792183/1-250x250.jpg"
                alt=""
              />
            </div>
            <p>Baked Brick Lipstick</p>
          </div>
          <div>
            <div>
              <img
                src="https://4.imimg.com/data4/QY/OX/GLADMIN-3792183/1-250x250.jpg"
                alt=""
              />
            </div>
            <p>Cerise Pink Lipstick</p>
          </div>
          <div>
            <div>
              <img
                src="https://4.imimg.com/data4/QY/OX/GLADMIN-3792183/1-250x250.jpg"
                alt=""
              />
            </div>
            <p>Coral Red Lipstick</p>
          </div>
          <div>
            <div>
              <img
                src="https://4.imimg.com/data4/QY/OX/GLADMIN-3792183/1-250x250.jpg"
                alt=""
              />
            </div>
            <p>Desert Rose Lipstick</p>
          </div>
        </Pdiv>

        <P>
          <p>View more details</p>
        </P>
      </Wrapper>

      <Wrapper>
        <H3>Bleach Cream</H3>
        <p>
          Providing you the best range of Fruit Bleach, Gold Bleach and Personal
          Bleach with effective & timely delivery.
        </p>
        <Sp>View More</Sp>

        <Pdiv>
          <div>
            <div>
              <img
                src="https://3.imimg.com/data3/NL/QG/MY-3792183/fruit-bleach-250x250.jpg"
                alt=""
              />
            </div>
            <p>Fruit Bleach</p>
          </div>
          <div>
            <div>
              <img
                src="https://3.imimg.com/data3/GE/KN/MY-3792183/gold-bleach-250x250.jpg"
                alt=""
              />
            </div>
            <p>Gold Bleach</p>
          </div>
          <div>
            <div>
              <img
                src="https://3.imimg.com/data3/PO/CT/MY-3792183/personal-bleach-250x250.jpg"
                alt=""
              />
            </div>
            <p>Personal Bleach</p>
          </div>
        </Pdiv>

        <P>
          <p>View more details</p>
        </P>
      </Wrapper>

      <Wrapper>
        <H3>Scrubs</H3>
        <p>
          Leading Manufacturer of Fairness Scrub, Mix Fruit Scrub and Facial
          Scrub - Walnut & Apricot from New Delhi.
        </p>
        <Sp>View More</Sp>

        <Pdiv>
          <div>
            <div>
              <img
                src="https://3.imimg.com/data3/QC/FL/MY-3792183/fairness-scrub-250x250.jpg"
                alt=""
              />
            </div>
            <p>Fairness Scrub</p>
          </div>
          <div>
            <div>
              <img
                src="https://3.imimg.com/data3/UL/IY/MY-3792183/mix-fruit-scrub-250x250.jpg"
                alt=""
              />
            </div>
            <p>Mix Fruit Scrub</p>
          </div>
          <div>
            <div>
              <img
                src="https://3.imimg.com/data3/GR/XE/MY-3792183/facial-scrub-walnut-apricot-250x250.jpg"
                alt=""
              />
            </div>
            <p>Facial Scrub - Walnut & Apricot</p>
          </div>
        </Pdiv>

        <P>
          <p>View more details</p>
        </P>
      </Wrapper>

      <Wrapper>
        <H3>Eyes Products</H3>
        <p>
          We are a leading Manufacturer of Mascara, Eye Shadow and Eye Liner
          from New Delhi, India.
        </p>
        <Sp>View More</Sp>

        <Pdiv>
          <div>
            <div>
              <img
                src="https://3.imimg.com/data3/ML/RO/MY-3792183/mascara-250x250.jpg"
                alt=""
              />
            </div>
            <p>Mascara</p>
          </div>
          <div>
            <div>
              <img
                src="https://3.imimg.com/data3/FX/IN/MY-3792183/eye-shadow-250x250.jpg"
                alt=""
              />
            </div>
            <p>Eye Shadow</p>
          </div>
        </Pdiv>

        <P>
          <p>View more details</p>
        </P>
      </Wrapper>

      <Wrapper>
        <H3>Other Products</H3>
        <p>
          Manufacturer of a wide range of products which include Facial Massage
          Gel, Face Pack, Hair Gel, Face/Loose Powder and Lotions.
        </p>
        <Sp>View More</Sp>

        <Pdiv>
          <div>
            <div>
              <img
                src="https://3.imimg.com/data3/KI/CJ/MY-3792183/facial-gel-massage-250x250.jpg"
                alt=""
              />
            </div>
            <p>Facial Massage Gel</p>
          </div>
          <div>
            <div>
              <img
                src="https://3.imimg.com/data3/MH/XP/MY-3792183/face-pack-250x250.jpg"
                alt=""
              />
            </div>
            <p>Face Pack</p>
          </div>
          <div>
            <div>
              <img
                src="https://3.imimg.com/data3/GO/AR/MY-3792183/hair-gel-250x250.jpg"
                alt=""
              />
            </div>
            <p>Hair Gel</p>
          </div>
          <div>
            <div>
              <img
                src="https://3.imimg.com/data3/KF/GF/MY-3792183/face-loose-powder-250x250.jpg"
                alt=""
              />
            </div>
            <p>Face/Loose Powder</p>
          </div>
        </Pdiv>

        <P>
          <p>View more details</p>
        </P>
      </Wrapper>

      <Review />
      <Contact />
      <ShipProducts label={"fdata"} />
      <Form />
      <Suppliers label={"ldata"} />
      <Categories />
    </Main>
  );
};
