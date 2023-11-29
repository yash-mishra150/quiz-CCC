import React from "react";
import Logo from "./images/ImageInBlue.svg";
import Logo2 from "./images/ImageUpsideDown.svg";
import MainPage from "./images/MainPage.svg";
import MainMobile from "./images/MainPageMobile.svg";
import Human from "./images/Human4.svg";

function NewPassword() {
  return (
    <div>
      <section className="">
        <div className="BlueRectangle">
          <img src={MainMobile} alt="ImageNA" className="hftp" />
          <img src={Logo} alt="ImageNA" className="Image" />
          <img src={Logo2} alt="ImageNA" className="Image2" />
          <img src={MainPage} alt="ImageNA" className="MainPageF" />

          <div className="Password">
            Create New<div className="Forgot"> Password</div>
          </div>

          <div className="text3">
            Your new password must be different from previously used password
          </div>

          <div class="input-group">
            <section>
              <input
                class="input"
                required
                autocomplete="off"
                type="password"
                name="password"
                id="password"
              />
              <label class="label" type="password">
                Old PassWord
              </label>
            </section>
            <section>
              <input
                class="input2"
                required
                autocomplete="off"
                type="text"
                name="username"
                id="username"
              />
              <label class="label2" type="Email">
                New Password
              </label>
            </section>

            <button type="submit" class="btn-ftp">
              Verify
            </button>

            <div className="End" />
            <section>
              <img src={Human} alt="ImageNA" className="Human2" />
            </section>

            <div className="End" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewPassword;
