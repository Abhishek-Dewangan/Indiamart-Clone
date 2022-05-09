import React from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { BiCurrentLocation } from "react-icons/bi";
import { FaDirections } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";
//import styled from 'styled-components'

import Data from "./db.json";
import Datas from "./ship_products.json";
import Datum from "./related.json";
import Category from "./Category.json";
import { Slider } from "../../components/products/Slider";
import { Review } from "../../components/products/Review";
//import Carousel from 'carousel';

//import styled from 'styled-components'

const submit = () => {
  alert(`Your Requirement has been Submitted`);
};

const Home = () => {
  let nav_product = useNavigate();

  const product_page = () => {
    nav_product("/products");
  };

  return (
    <>
      {/* <Slider /> */}
      <div id="slide"></div>

      <div id="about_us">
        <div id="about_us_heading">
          <h2>About Us</h2>
          <h5 id="about_text">
            Blue Heaven Cosmetics was started in 1974 by two young brothers,
            company MD's Mr.Charanjit Singh and Mr. Gurnam Singh with big dreams
            and ambitions. By virtue of their determination and commitment Blue
            Heaven Cosmetics has been able to experience such an eventful
            journey revolutionizing the Indian decorative cosmetics industry.
          </h5>

          <div id="read_us">
            <Link to="/about" id="read_link">
              +Read More
            </Link>
          </div>
          <p></p>
          <div id="features">
            <div>
              <img
                alt=""
                src="https://cdn4.vectorstock.com/i/thumb-large/70/38/best-value-stamp-on-white-vector-24357038.jpg"
              ></img>
              <h5>Nature of Business</h5>
              <h5>Exporter and Manufacturer</h5>
            </div>

            <div>
              <img
                alt=""
                src="https://media.istockphoto.com/vectors/founded-building-vector-id1359481667?k=20&m=1359481667&s=612x612&w=0&h=mHsqHjSfnH0RlT80ZrNR1qleyI7svzpo67C-YirKIQ8="
              ></img>
              <h5>Year of Establishment</h5>
              <h5>1974</h5>
            </div>

            <div>
              <img
                alt=""
                src="https://i.pinimg.com/236x/16/ce/e4/16cee4ef16e76df45daecdc0e10acea5--scales-of-justice-tattoo-lawyer-website.jpg"
              ></img>
              <h5>Legal Status of Firm</h5>
              <h5>Limited Company (Ltd./Pvt.Ltd.)</h5>
            </div>

            <div>
              <img
                alt=""
                src="https://static.vecteezy.com/system/resources/thumbnails/000/546/297/small/bar_graph_005.jpg"
              ></img>
              <h5>Annual Turnover</h5>
              <h5>Rs. 50 - 100 Crore</h5>
            </div>

            <div>
              <img
                alt=""
                src="https://png.pngtree.com/png-vector/20191010/ourlarge/pngtree-globe-vector-logo-png-image_1811679.jpg"
              ></img>
              <h5>Import Export Code (IEC)</h5>
              <h5>05040*****</h5>
            </div>

            <div>
              <img
                alt=""
                src="https://www.ti.com/content/dam/ticom/images/icons/illustrative-icons/safety/document-check-mark-icon.png"
              ></img>
              <h5>GST Number</h5>
              <h5>07AACCB1155C1ZB</h5>
            </div>
          </div>
        </div>
      </div>

      <div id="products">
        <div id="product_heading">
          <h2>Products & Services</h2>
        </div>

        <div id="products_details">
          {Data.map((post) => {
            return (
              <div id="prod">
                <img alt="" src={post.img}></img>
                <h3 onClick={product_page}>{post.title}</h3>
                <p id="use_1" onClick={product_page}>
                  {post.use_1}
                </p>
                <p id="use_2" onClick={product_page}>
                  {post.use_2}
                </p>
                <Link to="/product" id="details">
                  View Details
                </Link>
              </div>
            );
          })}
        </div>
        <p></p>
        <div id="button_complete">
          <button>View Complete Range</button>
        </div>
      </div>

      <div id="review">
        <div id="review_heading">
          <h2>Reviews & Rating</h2>
        </div>
        <div id="review_columns">
          <img alt="" src="https://www.linkpicture.com/q/review.jpg"></img>
        </div>
        <div id="review_button">
          <button>View More Reviews</button>
        </div>
      </div>

      {/* <div style={{display:"flex",}}>
      <Review />
      </div> */}

      <div id="touch_with_us">
        <h2 id="touch">Get in touch with us </h2>
        <div id="details_columns">
          <div id="company_columns">
            <h3>Our Company</h3>
            <div id="Links_to">
              <Link
                to="/about"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "17px",
                }}
              >
                About Us
              </Link>
              <br></br>
              <p></p>
              <Link
                to="/product"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "17px",
                }}
              >
                Product & Services
              </Link>
              <br></br>
              <p></p>
              <Link
                to="/contact"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "17px",
                }}
              >
                Contact Us
              </Link>
              <br></br>
              <p></p>
              <Link
                to="/about"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "17px",
                }}
              >
                Site Map
              </Link>
              <br></br>
              <p></p>

              <Link
                to="/about"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "17px",
                }}
              >
                Download Brochure
              </Link>
            </div>

            <div id="reach_us">
              <h3>Reach Us</h3>
              <div>
                <h3>
                  <BiCurrentLocation />
                  Blue Heaven Cosmetics (P) Ltd
                </h3>

                <p id="address">
                  No. 39,DLF Industrial Area,Kirti Nagar,New Delhi-<br></br>
                  110019,Delhi,India
                </p>

                <Link to="/contact" id="direction">
                  {" "}
                  <FaDirections />
                  Get Directions
                </Link>

                <h4 id="manager">
                  <FaUserCircle />
                  Arvind Srivastava (Manager)
                </h4>

                <h5 id="call">
                  <FiPhoneCall />
                  Call 08048361220
                </h5>

                <p id="connect">Dial Ext 167 when connected</p>
                <div id="sms_button">
                  <button id="sms">
                    <BiMessageDetail />
                    SEND SMS
                  </button>
                  <button id="emails">
                    <BsFillEnvelopeFill />
                    SEND EMAIL
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="details_requirment">
            <h3 id="leave">Leave a Message,we will call you back!</h3>
            <form>
              <input
                type={`text`}
                placeholder={"  Additional details about your requirement..."}
                id="requirment_box"
              ></input>
              <button id="submit_require" onClick={submit}>
                Submit Requirement
              </button>
            </form>
          </div>
        </div>
      </div>

      <div id="ship_products">
        <div id="ship_products_heading">
          <h2>Ready to Ship Products in Similar Categories</h2>
        </div>
        <div id="ship_products_details">
          {Datas.map((posts) => {
            return (
              <div id="ship">
                <img alt="" src={posts.img}></img>

                <h6>{posts.title}</h6>
                <h6>{posts.price}</h6>
                <h6>
                  <MdVerifiedUser />
                  {posts.brand}
                </h6>

                <button>Buy Now</button>
              </div>
            );
          })}
        </div>
      </div>

      <div id="related">
        <div id="related_heading">
          <h2>Related Product from Top Suppliers</h2>
        </div>

        <div id="related_details">
          {Datum.map((posts) => {
            return (
              <div id="relates">
                <img alt="" src={posts.img}></img>

                <h4>{posts.title}</h4>
                <h5>{posts.price}</h5>
                <h5>
                  <MdVerifiedUser />
                  {posts.brand}
                </h5>
                <p>{posts.place}</p>
                <button>Contact Supplier</button>
              </div>
            );
          })}
        </div>
      </div>

      <div id="related_category">
        <div id="related_category_heading">
          <h2 id="heading_cate">Related Categories</h2>
        </div>

        <div id="related_category_details">
          {Category.map((posts) => {
            return (
              <div id="relates_cate">
                <img alt="" src={posts.img}></img>
                <h4>{posts.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
