import "./login.css";
import Vector2 from "../images/Vector2.svg";
import Vector5 from "../images/Vector5.svg";
import Vector7 from "../images/Vector7.svg";
import Vector8 from "../images/Vector8.svg";

import React from "react";

function login() {
  return (
    <div>
      <div className="main">
        <div className="first">
          <img src={Vector5} alt="ImageNA" className="design" />
          <img src={Vector7} alt="ImageNA" className="girl" />
        </div>
        <div className="e">
          <div className="goto">Sign up</div>
          <div className="logo">
            <img src={Vector2} alt="ImageNA" className="hck" />
          </div>
          <div className="base">
            <div className="head">
              <img src={Vector8} alt="ImageNA" className="sngup" />
            </div>
            <div className="form">
              <form>
                <input
                  type="Email"
                  name="username"
                  id="username"
                  className="npm"
                  placeholder="Enter Your Email"
                  required
                />
                <div className="try">Email</div>

                <input
                  type="password"
                  name="email"
                  id="username"
                  placeholder="Enter Password"
                  required
                />
                <div className="try3">Password</div>

                <input type="checkbox" className="checkbox"></input>
                <label className="rem">Remember me </label>
                <span className="fgp">Forget Password? </span>
                <input type="submit" className="button" value="Login" />
                <div className="hr">
                  <hr></hr>
                  <div className="log">
                    Need an account <span>Sign up</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
