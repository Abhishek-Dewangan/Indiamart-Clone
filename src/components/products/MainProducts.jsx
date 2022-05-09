import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ModalForm } from "./ModalForm";

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
  &:hover {
  font-size: 17px;
    
  }
`;

const Hdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  & > i {
    color: #00a699;
  }
`;
const SHdiv = styled.div`
  color: #333;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #444;
`;
const Fdiv = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  & > div {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  & p:first-child {
    color: #5c5c5c;
    font-size: 14px;
    line-height: 1;
  }
`;
const B1 = styled.button`
  background-color: #00a699;
  border: none;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  padding: 5px 15px;
  
`;
const B2 = styled.button`
  border: none;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 5px 15px;
  font-weight: 700;
  border: 2px solid #00a699;
  
`;

const B3 = styled.button`
  background-color: #00a699;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  border: none;
  padding: 10px 25px;
  margin-top: 50px;
  &:hover{
    font-size: 15px;
  }
`;
const Limg = styled.img`
  width: 180px;
  height: 48px;
  border-radius: 8px;
  border: 2px solid #777777;
`;

export const MainProducts = ({ label }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "50%",
    transform: "translate(-50%, -50%)",
    height: "60%",
    // width: 400,
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const mstyle = {
    bgolor: "none",
  };
  const handleClose = (el) => {
    setIdata(el);
    setOpen(!open);
    console.log(idata, "data");
    isSuccess(false);
  };

  const data = useSelector((state) => state[label]["main-prod"]);
  const [idata, setIdata] = useState(null);
  const [success, isSuccess] = useState(false);
  const handleSuccess = (el) => {
    isSuccess(!success);
    // idata&&newOne()
  };

  const newOne = () => {};

  console.log(data);
  return (
    <div>
      {data
        ? data.map((el) => {
            return (
              <Wrapper key={el.id}>
                <Left>
                  <img src={el.img} alt="" />
                  <p>Interested in this product?</p>
                  <p>
                    <i class="fa-solid fa-file-pen"></i>&nbsp;&nbsp;Get Best
                    Quote
                  </p>
                </Left>
                <Right>
                  <h3>{el.title}</h3>
                  <p>Get Latest Price</p>
                  <ul>
                    <li>{el.f1}</li>
                    <li>{el.f2}</li>
                    <li>{el.f3}</li>
                    <li>{el.f4}</li>
                    <li>{el.f5}</li>
                  </ul>
                  <Button onClick={() => handleClose(el)}>
                    Yes, I am interested!
                  </Button>
                  <Modal
                    sx={{ backgroundColor: "transparent" }}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    {!success ? (
                      <Box sx={style}>
                        <ModalForm
                          item={idata}
                          handleSuccess={() => handleSuccess(el)}
                        />
                      </Box>
                    ) : (
                      <Box sx={style}>
                        <div>
                          <Hdiv>
                            <i class="fa-solid fa-circle-check"></i>
                            <p>Thank You!</p>
                          </Hdiv>
                          <SHdiv>
                            Your requirement has been sent to{" "}
                            <b>Blue Heaven Cosmetics (P) Ltd</b>
                          </SHdiv>
                          <Fdiv>
                            <div>
                              <p>
                                To check further replies from the supplier :
                              </p>
                              <B1>
                                <i class="fa-regular fa-message"></i>
                                <p>View Messages</p>
                              </B1>
                            </div>
                            <div>
                              <p>
                                To check further replies from the supplier :
                              </p>
                              <B2>
                                <i class="fa-regular fa-envelope-open"></i>
                                <p>Sell On Indiamart</p>
                              </B2>
                            </div>
                            <div>
                              <p>
                                Protect your payments for FREE, Pay sellers
                                online via Pay with IndiaMART
                              </p>
                              <Limg
                                src="https://th.bing.com/th/id/OIP.E_q2E2KlgGZBg_R8FKnSfwAAAA?w=203&h=43&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                                alt=""
                              />
                            </div>
                          </Fdiv>

                          <center>
                            <B3 onClick={() => navigate("/")}>
                              Continue To Home
                            </B3>
                          </center>
                        </div>
                      </Box>
                    )}
                  </Modal>
                </Right>
              </Wrapper>
            );
          })
        : ""}
    </div>
  );
};
