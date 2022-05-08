import React, { useState } from 'react';
import Otp from './Otp';
import styles from './SignIn.module.css';

const SignIn = (props) => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [signData, setSignData] = useState({});

  const handleChange = (e) => {
    const mobile = e.target.name;
    // console.log(e.target.value)
    setSignData({
      ...signData,
      [mobile]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('signIn', JSON.stringify(signData));
    setIsSignIn(!isSignIn);
    //fetch(url, {method: post, body: JSON.stringify(formData)})
  };

  if (!isSignIn) {
    return (
      <div className={styles.sign}>
        <div className={styles.head}>
          <h2 className={styles.heading}>Sign In</h2>
        </div>
        <div className={styles.bott}>
          <form onSubmit={handleSubmit}>
            <h3 className={styles.t2}>Sign In using your mobile number</h3>
            <div>
              <br />
              <label className={styles.lab}>Mobile Number</label>
              <br />
              <input
                type='text'
                name='phone'
                className={styles.inp}
                placeholder='Enter your number'
                onChange={handleChange}
              />
            </div>
            <div>
              <br />
              <input type='submit' name='Submit' className={styles.sub} />
            </div>
          </form>
        </div>
      </div>
    );
  }

  return <Otp a={props.a}/>;
};

export default SignIn;
