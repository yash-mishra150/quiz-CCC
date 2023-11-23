import l from "./loginStyles.module.css";
import Vector2 from "../images/Vector2.svg";
import Vector5 from "../images/Vector5.svg";
import Vector7 from "../images/Vector7.svg";
import Vector8 from "../images/Vector8.svg";

import React from "react";

function login() {
  return (
    <div>
      <div className={l.main}>
        <div className={l.first}>
          <img src={Vector5} alt="ImageNA" className={l.design} />
          <img src={Vector7} alt="ImageNA" className={l.girl} />
        </div>
        <div className={l.e}>
          <div className={l.goto}>Sign up</div>
          <div className={l.logo}>
            <img src={Vector2} alt="ImageNA" className={l.hck} />
          </div>
          <div className={l.base}>
            <div className={l.head}>
              <img src={Vector8} alt="ImageNA" className={l.sngup} />
            </div>
            <div className={l.form}>
              <form>
                <input
                  type="Email"
                  name="username"
                  id={l.username}
                  className={l.npm}
                  placeholder="Enter Your Email"
                  required
                />
                <div className={l.try}>Email</div>

                <input
                  type="password"
                  name="email"
                  id={l.username}
                  placeholder="Enter Password"
                  required
                />
                <div className={l.try3}>Password</div>

                <input type="checkbox" className={l.checkbox}></input>
                <label className={l.rem}>Remember me </label>
                <span className={l.fgp}>Forget Password? </span>
                <input type="submit" className={l.button} value="Login" />
                <div className={l.hr}>
                  <hr></hr>
                  <div className={l.log}>
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
