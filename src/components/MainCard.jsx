import React from "react";
import Logo from "./images/ImageInBlue.svg";
import Logo2 from "./images/ImageUpsideDown.svg";
import MainPage from "./images/MainPage.svg";
import Human1 from './images/Human1.svg'

function MainCard() {
  return (
    <section className="form">
      <div className="BlueRectangle">
        <img src={Logo} alt="ImageNA" className="Image" />
        <img src={Logo2} alt="ImageNA" className="Image2" />
        <img src={MainPage} alt="ImageNA" className="MainPage" />

        <div className="hackazone">
          HACKA<div className="blue">ZONE</div>
        </div>

        <div className="text">
          Unleash Your Knowladge:Dive into the Ultimate Quiz Experience!
        </div>
        <div className="text2">
          Explore, Discover, Conquer: Where Development Come to Life
        </div>
        <button type="submit" class="btn-primary">
          Log in
        </button>
        <section>
          <div className="or"> OR</div>
          <div className="line" />
        </section>
        <button type="submit" class="btn-secondry">
          Sign Up
        </button>
      </div>
      <img src={Human1} alt="ImageNA" className="Human" />
    </section>
  );
}

export default MainCard;
