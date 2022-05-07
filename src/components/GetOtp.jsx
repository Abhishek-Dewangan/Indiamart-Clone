import React, { useState } from 'react'
import styles from "./SignIn.module.css"


const GetOtp = () => {

  let mob = JSON.parse(localStorage.getItem("signIn"))
  // let num = JSON.parse(localStorage.getItem("otp_no"))
  const [isCorrect, setIsCorrect] = useState(false)
  const [isOtp, setIsOtp] = useState("")


  const handleChange = (e) => {    
    let otp = e.target.value   
    localStorage.setItem("otp_no", JSON.stringify(otp))
    setIsOtp(otp)
  }

  const handleSubmit = (e) => { 
    e.preventDefault();    
    console.log(isOtp)
    if(isOtp === "1234"){
      setIsCorrect(!isCorrect)
      // console.log(isCorrect)
    } 
        
  }  

  if(isCorrect) {
    return <h1>Hello</h1>
    
  }
   
  return (
    <div className={styles.otp_req}>
      <div className={styles.verify}>
          <h2 >Verify Your Mobile Number</h2>
      </div>        
      <h3 className={styles.t3}>Get Connected to Verified Sellers</h3>
      <p className={styles.t4}>Click below to get 4 digit One Time Password(OTP) on your MobileNumber +91-{mob.phone} via SMS</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.final}>
          <input type="text" name="otp" onChange={handleChange}/>
          <input type="submit" name="Submit" className={styles.but}/>
        </div>
        <div className={styles.resend}>
          <p>Did not receive OTP?</p>
          <p>Resend</p>
        </div>
      </form>                   
    </div>
  )
}

export default GetOtp