import React, { useState } from 'react'
import GetOtp from './GetOtp'
import styles from "./SignIn.module.css"

const Otp = () => {
  let mob = JSON.parse(localStorage.getItem("signIn"))
  const [isRequest, setIsRequest] = useState(false)  

  const handleOtp = () => {
    setIsRequest(!isRequest)
  }  

  if(!isRequest) {
    return (   
      <div className={styles.otp_box}>
        <div className={styles.verify}>
          <h2 >Verify Your Mobile Number</h2>
        </div>        
        <h3 className={styles.t3}>Get Connected to Verified Sellers</h3>
        <p className={styles.t4}>Click below to get 4 digit One Time Password(OTP) on your MobileNumber +91-{mob.phone} via SMS</p>
        <button onClick={handleOtp} className={styles.sub}>Request OTP</button>
      </div>
    )      
  }
  
  return (
    <GetOtp />
    
  )
  
}

export default Otp