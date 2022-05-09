import styled from "styled-components";
import React, { useState } from "react";
const Maindiv = styled.div`
  width: 80%;
  height: 100%;
  margin-left: 1em;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 10px;
`;
const QInput = styled.input`
  padding: 5px;
  font-size: 15px;
  width: 100px;
  border: none;
  border: 1px solid #777777;
`;
const BInput = styled.input`
  padding: 5px;
  font-size: 15px;
  width: 400px;
  border: none;
  border: 1px solid #777777;
  border-radius: 5px;
`;
const VSelect = styled.select`
  padding: 5px;
  width: 200px;
  border-radius: 5px;
  font-size: 15px;
`;
const SInput = styled.input`
  padding: 5px;
  width: 200px;
  font-size: 18px;
  background: #007a6e;
  border: none;
  margin-top: 20px;
  border-radius: 5px;
  color: white;
  padding: 10px;
  border: none;
  border: 1px solid #777777;
`;
export const BuyerForm = ({handleSuccess}) => {
  const [gst, isGst] = useState(false);
  return (
    <Maindiv>
      {!gst ? (
        <form>
          <div>
            <h3>
              Adding a few details of your requiement can get you quick response
              from the supplier
            </h3>
            <p>Quantity</p>
            <QInput type="number" />
            <QInput value="Piece" />
            <p>Preferred Brand</p>
            <BInput type="text" />
            <p>Total Order Value(Rs)</p>
            <VSelect>
              <option>Select a Value</option>
              <option>Upto 1000</option>
              <option>1000 to 3000</option>
              <option>1000 to 3000</option>
              <option>3000 to 5000</option>
              <option>5000 to 10000</option>
              <option>10000 to 50000</option>
              <option>50000 to 1 Lakh</option>
              <option>1 to 2 Lakh</option>
              <option>2 to 5 Lakh</option>
            </VSelect>
            <br />
            <SInput type="submit" value="Next" onClick={() => isGst(!gst)} />
          </div>
        </form>
      ) : (
        <form>
          <h3>
            Please provide a few details to get quick response from the supplier
          </h3>
          <BInput type="text" placeholder="GST Number" />
          <SInput type="submit" value="Submit" onClick={handleSuccess}/>
        </form>
      )}
    </Maindiv>
  );
};
