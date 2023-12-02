import React from "react";
import Logo from "./images/ImageInBlue.svg";
import Logo2 from "./images/ImageUpsideDown.svg";
import MainPage from "./images/MainPage.svg";
import { Link } from "react-router-dom";
import MainMobile from "./images/MainPageMobile.svg";
import Human from "./images/Human3.svg";

function VerifyOTP() {
  return (
    <section className="MainOTP">
      <section className="form">
        <div className="BlueRectangle">
          <img src={MainMobile} alt="ImageNA" className="hftp" />
          <img src={Logo} alt="ImageNA" className="Image" />
          <img src={Logo2} alt="ImageNA" className="Image2" />
          <img src={MainPage} alt="ImageNA" className="MainPageF" />
        </div>
        <div className="Password">
          Verify Your<div className="Forgot"> Email</div>
        </div>

        <div className="text3">
          Please Enter The Four Digit Code sent to your Email
        </div>
        <div>
          <form className="VerifyOTP">
            <h4>Enter OTP</h4>
            <div class="input-field">
              <input type="username" maxLength="1" />
              <input type="username" maxLength="1" />
              <input type="username" maxLength="1" />
              <input type="username" maxLength="1" />
            </div>
            <br></br>
            <Link to="/" className="Link">
              Resend OTP
            </Link>
            <button>Verify OTP</button>
          </form>
          <div className="line2"></div>
        </div>
        <section>
          <img src={Human} alt="ImageNA" className="Human2" />
        </section>
      </section>
    </section>
  );
}

export default VerifyOTP;
