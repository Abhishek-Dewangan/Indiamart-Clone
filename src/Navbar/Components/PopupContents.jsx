import React from 'react';

const Covide = {
  display: 'flex',
  position: 'absolute',
  left: '60%',
  backgroundColor: 'white',
  zIndex: '1',
  marginTop: '5px',
  boxShadow:
    'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
};
const ul = {
  listStyleType: 'none',
};
export const Covid = () => {
  return (
    <div style={Covide}>
      <div>
        <ul style={ul}>
          <li>
            <b>Oxigen Supply</b>
          </li>
          <li>Oxygen Cylender</li>
          <li>Portable Oxygen Can</li>
          <li>Empty Oxygen Cylender</li>
          <li>Oxygen Concentrator</li>
          <li>PSA Oxygen Gas Plants</li>
          <li>Oxygen Flow Meter</li>
          <li>Oxygen Mask</li>
          <li>Oxygen Generator</li>
          <li>
            <a href='#'>View All</a>
          </li>
          <li>
            <b>Safety Essentials</b>
          </li>
          <li>Face Mask</li>
          <li>PPE Kits</li>
          <li>Face Shield</li>
          <li>Disposable Gloves</li>
          <li>Sneeze Guard</li>
          <li>Car Partition</li>
          <li>Surgical Caps</li>
          <li>Hand Sanitizer & Disinfectant</li>
          <li>
            <a href='#'>View All</a>
          </li>
        </ul>
      </div>
      <div>
        <ul style={ul}>
          <li>
            <b>Oxigen Supply</b>
          </li>
          <li>Oxygen Cylender</li>
          <li>Portable Oxygen Can</li>
          <li>Empty Oxygen Cylender</li>
          <li>Oxygen Concentrator</li>
          <li>PSA Oxygen Gas Plants</li>
          <li>Oxygen Flow Meter</li>
          <li>Oxygen Mask</li>
          <li>Oxygen Generator</li>
          <li>
            <a href='#'>View All</a>
          </li>
          <li>
            <b>Safety Essentials</b>
          </li>
          <li>Face Mask</li>
          <li>PPE Kits</li>
          <li>Face Shield</li>
          <li>Disposable Gloves</li>
          <li>Sneeze Guard</li>
          <li>Car Partition</li>
          <li>Surgical Caps</li>
          <li>Hand Sanitizer & Disinfectant</li>
          <li>
            <a href='#'>View All</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
const help = {
  position: 'absolute',
  left: '60%',
  padding: '10px',
  backgroundColor: 'white',
  zIndex: '100',
  marginLeft: '15%',
  marginTop: '5px',
  boxShadow:
    'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
};
export const Help = () => {
  return (
    <div style={help}>
      <p>
        <i class='fa-solid fa-cart-shopping'></i> For Buying{' '}
        <i class='fa-solid fa-shop'></i> For Selling
      </p>
      <p>
        <i class='fa-solid fa-thumbs-up'></i> Share Your Feedback
      </p>
      <p>
        <i class='fa-solid fa-message'></i> Raise a Complaint
      </p>
      <p>
        <i class='fa-solid fa-envelope'></i> Email us on <br />
        <b>customercare@indiamart.com</b>
      </p>
      <p>
        <i class='fa-solid fa-phone'></i> Call us at <b>096-9696-9696</b>
      </p>
      <p>
        <i class='fa-solid fa-comment-dots'></i> Chat With us
      </p>
      <p>
        <i class='fa-brands fa-sellcast'></i> Seller Academy
      </p>
    </div>
  );
};
const login = {
  position: 'absolute',
  left: '83%',
  padding: '10px',
  backgroundColor: 'white',
  zIndex: '100',
  marginTop: '5px',
  boxShadow:
    'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
};
export const Login = () => {
  return (
    <div style={login}>
      <p>
        <i class='fa-solid fa-house-chimney'></i> Home
      </p>
      <p>
        <i class='fa-solid fa-signs-post'></i> Post Your Requirement
      </p>
      <p>
        <i class='fa-solid fa-check-double'></i> Varified Bussiness Buyer
      </p>
      <p>
        <i class='fa-solid fa-address-book'></i> Products/Service Directory
      </p>
      <p>
        <i class='fa-solid fa-basket-shopping'></i> My Order
      </p>
      <p>
        <i class='fa-solid fa-chart-line'></i> Recent Activity
      </p>
      <p>
        <i class='fa-solid fa-gear'></i> Settings
      </p>
      <p>
        <i class='fa-brands fa-amazon-pay'></i> Pay With IndiaMART
      </p>
      <p>
        <i class='fa-solid fa-mobile-retro'></i> Download App
      </p>
    </div>
  );
};
