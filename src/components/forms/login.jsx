import React, { useState } from "react";
import "./login.css";

import Vector2 from "../images/Vector2.svg";
import { Link } from "react-router-dom";
import Vector5 from "../images/Vector5.svg";
import Vector7 from "../images/Vector7.svg";
import Vector8 from "../images/Vector8.svg";

const Login = () => {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")  

  const HandleChangeUsername = (e) => {
    console.log(e.target.value);
    setusername(e.target.value)
  }
  const HandleChangePassword = (e) => {
    console.log(e.target.value);
    setpassword(e.target.value)
    
  }
  const HandleClickEvent = (e) => {
    e.preventDefault();
    console.log({username})
    console.log({password})
    if(username==="admin" && password==="admin"){
      window.location.href = "/login/instruction";
    }
  }
  return (
    <body>
      <div className="main">
        <div className="first">
          <img src={Vector5} className="design" />
          <img src={Vector7} className="girl" />
        </div>
        <div className="e">
          <div className="goto">Sign up</div>
          <div className="logo">
            <img src={Vector2} className="hck" />
          </div>
          <div className="base">
            <div className="head">
              <img src={Vector8} className="sngup" />
            </div>
            <div className="form">
              <div>
                <input
                  type="username"
                  name="username"
                  id="username"
                  onChange={HandleChangeUsername}
                  className="npm"
                  placeholder="Enter Your Email"
                />
                <div className="try">Email</div>

                <input
                  type="password"
                  name="email"
                  id="username"
                  onChange={HandleChangePassword}
                  placeholder="Enter Password"
                />
                <div className="try3">Password</div>

                <input type="checkbox" className="checkbox" ></input>
                <label className="rem">Remember me </label>
                <span className="fgp"><Link className="Link" to="/login/forgotpassword">Forget Password? </Link></span>
                <button className="button" onClick={HandleClickEvent}> Login </button>
                <div className="hr">
                  <hr></hr>
                  <div className="log">
                    Need an account <span>Sign up</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Login;
