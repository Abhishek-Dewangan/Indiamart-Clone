import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { H2, Review } from "../Review";
import { Slider } from "../Slider";
import Data from "../../../Home/Pages/db.json";
import { Contact } from "../Contact";
import { ShipProducts } from "../ShipProducts";
import { Form } from "../Form";
import { Suppliers } from "../Suppliers";
import { Categories } from "../Categories";
import { useDispatch, useSelector } from "react-redux";
import { getDataL } from "../../../Redux/action";

const Wrapper = styled.div`
  margin-top: 30px;
  width: 90%;
  margin: auto;
`;
const P = styled.p`
  color: #444;
  text-align: center;
  width: 90%;
  margin: auto;
`;
const More = styled.div`
  margin: auto;
  width: 95px;
  margin-top: 10px;
`;
const Adiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0;
  flex-wrap: wrap;
  gap: 50px;

  & > div {
    display: flex;
    align-items: center;
    gap: 30px;

    & img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }
`;
const Prod = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: auto;
  width: 85%;
  margin-bottom: 50px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    line-height: 0.4;

    & h3 {
      color: #2e3192;
    }
    & p {
      color: #777777;
    }
    & h4 {
      color: #068076;
    }

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }
  & img {
    max-width: 250px;
    max-height: 250px;
  }
`;
const IMdiv = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const View = styled.div`
  border: 1px solid #068076;
  border-radius: 3px;
  margin: auto;
  color: #068076;
  width: 160px;
  margin-bottom: 50px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background: #068076;
    color: white;
  }
`;

export const HomePageUp = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ldata);

  useEffect(() => {
    fetch("https://aditya-fake-server.herokuapp.com/lip-gloss")
      .then((d) => d.json())
      .then((d) => dispatch(getDataL(d)))
      .catch((e) => console.log(e));
  }, []);
  return (
    <Wrapper>
      <Slider />
      <div>
        <H2>
          About Us <div></div>
        </H2>
        <div>
          <P>
            Blue Heaven Cosmetics was started in 1974 by two young brothers,
            company MD's Mr.Charanjit Singh and Mr. Gurnam Singh with big dreams
            and ambitions. By virtue of their determination and commitment Blue
            Heaven Cosmetics has been able to experience such an eventful
            journey revolutionizing the Indian decorative cosmetics industry.
          </P>

          <More>
            <Link to="/about" id="read_link">
              +Read More
            </Link>
          </More>

          <Adiv>
            <div>
              <img
                alt=""
                src="https://media.istockphoto.com/vectors/founded-building-vector-id1359481667?k=20&m=1359481667&s=612x612&w=0&h=mHsqHjSfnH0RlT80ZrNR1qleyI7svzpo67C-YirKIQ8="
              ></img>
              <div>
                <p>Year of Establishment</p>
                <p>1974</p>
              </div>
            </div>

            <div>
              <img
                alt=""
                src="https://i.pinimg.com/236x/16/ce/e4/16cee4ef16e76df45daecdc0e10acea5--scales-of-justice-tattoo-lawyer-website.jpg"
              ></img>
              <div>
                <p>Legal Status of Firm</p>
                <p>Limited Company (Ltd./Pvt.Ltd.)</p>
              </div>
            </div>

            <div>
              <img
                alt=""
                src="https://static.vecteezy.com/system/resources/thumbnails/000/546/297/small/bar_graph_005.jpg"
              ></img>
              <div>
                <p>Annual Turnover</p>
                <p>Rs. 50 - 100 Crore</p>
              </div>
            </div>

            <div>
              <img
                alt=""
                src="https://png.pngtree.com/png-vector/20191010/ourlarge/pngtree-globe-vector-logo-png-image_1811679.jpg"
              ></img>
              <div>
                <p>Import Export Code (IEC)</p>
                <p>05040*****</p>
              </div>
            </div>

            <div>
              <img
                alt=""
                src="https://www.ti.com/content/dam/ticom/images/icons/illustrative-icons/safety/document-check-mark-icon.png"
              ></img>
              <div>
                <p>GST Number</p>
                <p>07AACCB1155C1ZB</p>
              </div>
            </div>
          </Adiv>
        </div>
      </div>

      <div>
        <H2>
          Products & Services <div></div>
        </H2>
        <Prod>
          {Data.map((e) => (
            <div key={e.id}>
              <IMdiv>
                <img src={e.img} alt="" />
              </IMdiv>
              <h3>{e.title}</h3>
              <p>{e.use_1}</p>
              <p>{e.use_2}</p>
              <p>{e.use_3}</p>
              <h4>View Details&nbsp;&nbsp;<i class="fa-solid fa-angle-right"></i></h4>
            </div>
          ))}
        </Prod>
        <View>View Complete Range</View>
      </div>

      <Review />
      <Contact />
      <ShipProducts label={"ldata"} />
      <Form />
      <Suppliers label={"ldata"} />
      <Categories />
    </Wrapper>
  );
};
