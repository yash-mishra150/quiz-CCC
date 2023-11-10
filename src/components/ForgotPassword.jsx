import React from 'react'
import Logo from "./images/ImageInBlue.svg";
import Logo2 from "./images/ImageUpsideDown.svg";
import MainPage from "./images/MainPage.svg";

function ForgotPassword() {
  return (
    <div>
       <section className="form">
      <div className="BlueRectangle">
        <img src={Logo} alt="ImageNA" className="Image" />
        <img src={Logo2} alt="ImageNA" className="Image2" />
        <img src={MainPage} alt="ImageNA" className="MainPageF" />

        <div className="Password">
          Forgot<div className="Forgot"> Password</div>
        </div>

        <div className="text3">
          Don't worry! It happens, please enter your Email address to receive a verification code
        </div>
        <input type="email" className="Email" />
    </div>
    </section>
    </div>
  )
}

export default ForgotPassword
