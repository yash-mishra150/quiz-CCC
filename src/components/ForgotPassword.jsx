import React from "react";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "./images/ImageInBlue.svg";
import Logo2 from "./images/ImageUpsideDown.svg";
import MainPage from "./images/MainPage.svg";
import Human from "./images/Human2.svg";
import MainMobile from "./images/MainPageMobile.svg";
import axios from "axios";
import UserContext from "../context/UserContext";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [BtnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [Style, setStyle] = useState("input");
  const [post, setpost] = useState({
    email: "",
  });
  const [OTP, setOTP] = useState({
  });
  const {SetState} = useContext(UserContext)

  const handleInputChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if (email === 0) {
      setIsValidEmail(false);
      setBtnDisabled(true);
      // setMessage(" ");
    } else if (email !== "") {
      setStyle("error");
      setBtnDisabled(false);
      setMessage("Invalid email format");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputEmail));
    if (isValidEmail === true) {
      setStyle("input");
      setMessage(" ");
      setpost({ ...post, [e.target.name]: e.target.value });
    }
  };
//   const fetchData = async () => {
//     const result = await axios.get("https://rest-api-a8nx.onrender.com/api/v1/auth/sendotp")
//     console.log(result);          
//  };
  const ClickAction = (e) => {
    e.preventDefault();
    console.log({ post });

    axios
      .post("https://rest-api-a8nx.onrender.com/api/v1/auth/sendotp", post)
      .then((response) => {
        setOTP(response.data)
        // console.log(response)
        alert('Please check your Email for the OTP');
        console.log(OTP.otp)
        SetState(OTP.otp)
        });
      
        console.log(OTP.otp)
        

    setMessage("OTP Send Successfully");
    // setOTP(response.data.otp);
  };

  return (
    <section className="MainFP">
      <section className="form">
        <div className="BlueRectangle">
          <img src={MainMobile} alt="ImageNA" className="hftp" />
          <img src={Logo} alt="ImageNA" className="Image" />
          <img src={Logo2} alt="ImageNA" className="Image2" />
          <img src={MainPage} alt="ImageNA" className="MainPageF" />
        </div>
        <div className="Password">
          Forgot<div className="Forgot"> Password</div>
        </div>

        <div className="text3">
          Don't worry! It happens, please enter your Email address to receive a
          verification code
        </div>
        <div class="input-group">
          <input
            class={Style}
            required
            autocomplete="off"
            type="username"
            value={email}
            onChange={handleInputChange}
            name="email"
            id="email"
          />
          <label class="label" type="Email">
            Email
          </label>
          <p className="error-message">{message}</p>

          <button
            type="submit"
            class="btn-ftp"
            disabled={BtnDisabled}
            onClick={ClickAction}
          >
            Send
          </button>
          <Link to="/login/forgotpassword/VerifyOTP" className="Link2">VerifyOTP</Link>
          <div className="End" />
          <section>
            <img src={Human} alt="ImageNA" className="Humanftp" />
          </section>
        </div>
      </section>
      
    </section>

    
  );
}

export default ForgotPassword;
