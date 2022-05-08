import React from "react";
import styled from "styled-components";

const H2 = styled.h2`
  font-size: 24px;
  color: #333;
  margin: 0;
  padding: 0;
  margin-bottom: 8px;
`;
const H3 = styled.h3`
  font-size: 22px;
  color: #333;
  border: 1px #efefef solid;
  padding: 15px 30px;
  margin: 0;
  margin-top: 40px;
  width: 80%;
`;
const H4 = styled.h4`
  font-size: 22px;
  color: #333;
  margin: 0;
  margin-top: 40px;
`;

const Wrapper = styled.div`
  & p {
    color: #444;
    letter-spacing: 0.6px;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }
`;
const P1 = styled.p`
  font-weight: bold;
`;

const P2 = styled.h5`
  font-size: 18px;
  color: black;
  font-weight: 500;
  margin: 0;
`;

const Tdiv = styled.table`
  border-left: 1px #efefef solid;
  border-bottom: 1px #efefef solid;
  border-right: 1px #efefef solid;
  width: 80%;
  padding: 15px 30px;

  & tr > td:first-child {
    font-size: 15px;
    color: #777777;
  }
  & tr > td:last-child {
    font-size: 15px;
    color: #111;
    padding: 10px 30px;
    width: 70%;
  }
`;

export const About = () => {
  return (
    <Wrapper>
      <div>
        <H2>Blue Heaven Cosmetics (P) Ltd</H2>
        <p>
          Blue Heaven Cosmetics was started in 1974 by two young brothers,
          company MD's Mr.Charanjit Singh and Mr. Gurnam Singh with big dreams
          and ambitions.
        </p>
        <p>
          By virtue of their determination and commitment Blue Heaven Cosmetics
          has been able to experience such an eventful journey revolutionizing
          the Indian decorative cosmetics industry.
        </p>
        <p>
          Beauty cosmetics is an ever changing world. The company's product
          development departments therefore have been working systematically
          with the evolution of trendy color patterns ,themes, etc.Not only has
          Blue Heaven kept pace with the fashion trends but has also acted as
          benchmark and trendsetter in the beauty cosmetic field.
        </p>
        <p>
          With almost 4 decades of persistent presence in the industry BHC has
          carved a niche for itself making it one of the trustworthy and
          reliable brands. The brand continues to re-invent itself satisfying
          millions of customers
        </p>
        <P1>MAIN IDEA AND WORKING OF THE COMPANY</P1>
        <p>
          Our company has always thrived to provide quality products at
          economical rates, main motive is to satisfy the consumers. The
          company's main aim is to make each and every luxury cosmetic product
          available to the common man without hurting their budget.
        </p>
        <p>
          BHC after been received well in the decorative cosmetic market has now
          entered the personal care line enlarging its range and reach
        </p>
        <p>
          Now BHC offers more than 200 different products with huge variety. In
          such a competitive world, Blue Heaven has received an encouraging
          response from its foreign clients where BH Kajals have become a rage.
        </p>
        <P1>MOVING TO THE FUTURE</P1>
        <p>Looking ahead in time, we aim to:</p>

        <p>
          -Lead the industry in creating value for our customers and sales
          channels
        </p>
        <p>-Refocus the value we offer to our consumers</p>
        <p>-Increase operational excellence</p>

        <p>
          Fashion and trends in the beauty industry are changing faster than
          ever and it becomes increasingly difficult to predict the preference
          of the consumers. At the same time , market for traditional cosmetics
          is characterized by low priced products which forces cosmetic
          manufacturers to produce high quality goods at low costs. The
          organization plans to keep up with the market demands.
        </p>
      </div>

      <div>
        <H3>Factsheet</H3>
        <Tdiv>
          <P2>Basic Information</P2>
          <table>
            <tr>
              <td>Nature of Business</td>
              <td>Exporter and Manufacturer</td>
            </tr>
            <tr>
              <td>Company CEO</td>
              <td>Charanjeet Singh</td>
            </tr>
            <tr>
              <td>Year of Establishment</td>
              <td>1974</td>
            </tr>
            <tr>
              <td>Legal Status of Firm</td>
              <td>Limited Company (Ltd./Pvt.Ltd.)</td>
            </tr>
            <tr>
              <td>Annual Turnove</td>
              <td>Rs. 50 - 100 Crore</td>
            </tr>
          </table>
        </Tdiv>

        <Tdiv>
          <P2>Statutory Profile</P2>
          <table>
            <tr>
              <td>Import Export Code (IEC)</td>
              <td>05040*****</td>
            </tr>
            <tr>
              <td>GST No</td>
              <td>07AACCB1155C1ZB</td>
            </tr>
            <tr>
              <td>CIN No.</td>
              <td>U24246DL2002PTC118034</td>
            </tr>
          </table>
        </Tdiv>
      </div>

      <div>
        <H4>Manufacturing Unit</H4>
        <p>
          All the products are solely manufactured by plants owned by the
          company in Delhi and Baddi (Himachal Pradesh). The products are
          manufactured as per the specifications of DRUG & COSMETIC CONTROL
          DEPARTMENT by experienced work force under supervision of skilled
          technical staff. The company has its in-house R&D, Q/A, Q/C
          departments. They are facilitated by sophisticated equipments under
          requisite technical supervision.
        </p>
        <p>
          Blue Heaven Cosmetics is a quality conscious brand. Therefore the
          products undergo regular tests and analysis before dispatch in the
          laboratories.
        </p>
      </div>
    </Wrapper>
  );
};
