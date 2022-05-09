import React, { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 91%;
  margin: auto;
  display: flex;
  gap: 1px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  margin-top:30px;

  &::-webkit-scrollbar{
      display: none;
  }
`;

const Idiv = styled.div`
  width: 300px;
  height: 300px;
  position: relative;

  & > div {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #eaeaea;

    & img {
      max-width: 300px;
      max-height: 300px;
    }
  }
`;

const P = styled.p`
  width: 300px;
  height: 30px;
  text-align: center;
  margin: 0;
  position: absolute;
  bottom: 0;
  padding: 10px 0;
  background: rgba(51, 51, 51, 0.86);
  color: #fff;
`;

export const Slider = () => {
  useEffect(() => {
    let wrapp = document.getElementById("wrapper");
    setInterval(() => {
      if (wrapp.scrollLeft >= 1100) {
        wrapp.scrollLeft = 0;
      } else {
        wrapp.scrollLeft += 300;
      }
    }, 5000);
  }, []);

  const images = [
    {
      img: "https://3.imimg.com/data3/RK/XF/MY-3792183/01-250x250.jpg",
      title: "Lip Gloss",
    },
    {
      img: "https://3.imimg.com/data3/US/UJ/MY-3792183/lip-balm-250x250.jpg",
      title: "Lip Balm",
    },
    {
      img: "https://3.imimg.com/data3/ML/RO/MY-3792183/mascara-250x250.jpg",
      title: "Mascara",
    },
    {
      img: "https://3.imimg.com/data3/BX/CS/MY-3792183/foundation-250x250.jpg",
      title: "Foundation",
    },
    {
      img: "https://3.imimg.com/data3/WJ/EO/MY-3792183/01-250x250.jpg",
      title: "Sindoor",
    },
    {
      img: "https://3.imimg.com/data3/BK/MD/MY-3792183/01-250x250.jpg",
      title: "Nail Enamel",
    },
    {
      img: "https://3.imimg.com/data3/NL/QG/MY-3792183/fruit-bleach-250x250.jpg",
      title: "Fruit Bleach",
    },
    {
      img: "https://3.imimg.com/data3/QC/FL/MY-3792183/fairness-scrub-250x250.jpg",
      title: "Fairness Scrub",
    },
  ];
  return (
    <Wrapper id="wrapper">
      {images.map((e) => (
        <Idiv>
          <div>
            <img src={e.img} alt="" />
          </div>
          <P>{e.title}</P>
        </Idiv>
      ))}
    </Wrapper>
  );
};
