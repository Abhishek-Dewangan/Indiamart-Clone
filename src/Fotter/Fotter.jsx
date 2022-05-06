import React from 'react';
import styles from './Fotter.module.css';
import {
  FaApple,
  FaAndroid,
  FaMobileAlt,
  FaFacebook,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className={styles.mainfooter}>
      <div className={styles.footer}>
        <div className={styles.help}>
          <div>
            <h2>We are here to help you !</h2>
          </div>
          <div className={styles.icons}>
            <div>
              Go Mobile:
              <a href='https://www.apple.com/'><FaApple id={styles.icon} /></a>
              <a href='https://www.android.com'><FaAndroid id={styles.icon} /></a>
              <a href='https://www.att.com/'><FaMobileAlt id={styles.icon} /></a>
            </div>
            <div>
              Follow us on:
              <a href='https://www.facebook.com'><FaFacebook id={styles.ficon} /></a>
              <a href='https://www.twitter.com'><FaTwitterSquare id={styles.ticon} /></a>
              <a href='https://www.linkedin.com'><FaLinkedin id={styles.licon} /></a>
            </div>
          </div>
        </div>
        <div className={styles.link}>
          <div>
            <a href='/'> About Us</a>
            <br />
            <a href='/'> Join Sales</a>
            <br />
            <a href='/'> Success Stories</a> <br />
            <a href='/'> Press Section</a> <br />
            <a href='/'> Advertise With Us</a> <br />
            <a href='/'> Jobs & Careers</a>
          </div>
          <div>
            <a href='/'>Help</a> <br />
            <a href='/'>Feedback</a> <br />
            <a href='/'>Complaints</a> <br />
            <a href='/'>Customer Care</a> <br />
            <a href='/'>Contact Us</a> <br />
          </div>
          <div>
            <a style={{ color: 'black' }}>Suppliers Tool Kit</a>
            <br />
            <a href='/'>Sell on IndianMART</a> <br />
            <a href='/'>Latest BuyLead</a> <br />
            <a href='/'>Learing Centre</a>
          </div>
          <div>
            <a style={{ color: 'black' }}>Buyers Tool Kit</a>
            <br />
            <a href='/'>Post Yours Requirement</a> <br />
            <a href='/'>Product You Buy</a> <br />
            <a href='/'>Search Product & suppliers</a>
            <br />
            <a href='/'>Pay With IndianMART</a>
          </div>
          <div>
            <a style={{ color: 'black' }}>Events</a>
            <br />
            <a href='/'>Trand Shows</a> <br />
            <a href='/'>Conferences</a> <br />
            <a href='/'>Events By Country</a>
          </div>
        </div>
        <div className={styles.term}>
          <a href='/'>
            Copyright © 1996-2022 IndiaMART InterMESH Ltd. All rights reserved.
          </a>
          <a href='/'>Terms Od Use-Privacy Policy-Link To Us</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
