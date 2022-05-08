import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

const Wrapper = styled.div`
  border: solid 1px #eaeaea;
  border-radius: 3px;
  margin-bottom: 50px;
`;

const Head = styled.h4`
  background-color: #f2f2f2;
  padding: 8px 10px;
  margin-bottom: 0px;
  margin-top: 0px;
  color: #111;
`;

const Idiv = styled.div`
  color: #777;
  font-size: 13px;
  margin-top: -22px;

  & > p {
    line-height: 0.8;
    cursor: pointer;
  }

  & > p:hover {
    text-decoration: underline;
  }
`;

const P = styled.p`
  font-weight: 700;
  color: #17615a;
  font-size: 14px;
  padding-left: 15px;

  & > i {
    font-size: 18px;
  }
`;

export function ProductServices() {
  return (
    <Wrapper>
      <Head>Products & Services</Head>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
            Makeup
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Idiv>
              <p>Foundation</p>
              <p>Compact</p>
              <p>Pan cake foundation</p>
              <p>Pan stick foundation</p>
            </Idiv>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
            Lipstick
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Idiv>
              <p>Baked Brick Lipstick</p>
              <p>Cerise Pink Lipstick</p>
              <p>Coral Red Lipstick</p>
              <p>Desert Rose Lipstick</p>
              <p>Eternal Red Lipstick</p>
            </Idiv>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
            Lip Products
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Idiv>
              <p>Baked Brick Lipstick</p>
              <p>Cerise Pink Lipstick</p>
              <p>Coral Red Lipstick</p>
              <p>Desert Rose Lipstick</p>
              <p>Eternal Red Lipstick</p>
            </Idiv>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
            Bleach Cream
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Idiv>
              <p>Baked Brick Lipstick</p>
              <p>Cerise Pink Lipstick</p>
              <p>Coral Red Lipstick</p>
              <p>Desert Rose Lipstick</p>
              <p>Eternal Red Lipstick</p>
            </Idiv>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
            Scrubs
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Idiv>
              <p>Baked Brick Lipstick</p>
              <p>Cerise Pink Lipstick</p>
              <p>Coral Red Lipstick</p>
              <p>Desert Rose Lipstick</p>
              <p>Eternal Red Lipstick</p>
            </Idiv>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
            Eye Products
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Idiv>
              <p>Baked Brick Lipstick</p>
              <p>Cerise Pink Lipstick</p>
              <p>Coral Red Lipstick</p>
              <p>Desert Rose Lipstick</p>
              <p>Eternal Red Lipstick</p>
            </Idiv>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
            Lipcare
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Idiv>
              <p>Baked Brick Lipstick</p>
              <p>Cerise Pink Lipstick</p>
              <p>Coral Red Lipstick</p>
              <p>Desert Rose Lipstick</p>
              <p>Eternal Red Lipstick</p>
            </Idiv>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
            Traditional Items
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Idiv>
              <p>Baked Brick Lipstick</p>
              <p>Cerise Pink Lipstick</p>
              <p>Coral Red Lipstick</p>
              <p>Desert Rose Lipstick</p>
              <p>Eternal Red Lipstick</p>
            </Idiv>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <P>
        <i class="fa-duotone fa-plus"></i>View All
      </P>
    </Wrapper>
  );
}
