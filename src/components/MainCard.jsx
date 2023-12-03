import React from "react";
import Logo from "./images/ImageInBlue.svg";
import Logo2 from "./images/ImageUpsideDown.svg";
import MainPage from "./images/MainPage.svg";
import Human1 from "./images/Human1.svg";

function MainCard() {
  const HandleActionLogin = (e) => {
    e.preventDefault();
    window.location.href = "/login";
  }
  const HandleActionSignUp = (e) => {
    e.preventDefault();
    window.location.href = "/signup";
  }
  return (
    <section className="MainLS">
      <section className="form">
        <div className="BlueRectangle">
          <img src={Logo} alt="ImageNA" className="Image" />
          <img src={Logo2} alt="ImageNA" className="Image2" />
          <img src={MainPage} alt="ImageNA" className="MainPage" />
        </div>
        <div className="hackazone">
          HACKA<div className="blue">ZONE</div>
        </div>
        <div className="text">
          Unleash Your Knowladge:Dive into the Ultimate Quiz Experience!
        </div>
        <div className="text2">
          Explore, Discover, Conquer: Where Development Come to Life
        </div>

        <button type="submit" class="btn-primary" onClick={HandleActionLogin}>
          Log in
        </button>
        <section>
          <div className="or"> OR</div>
          <div className="line" />
        </section>
        <button type="submit" class="btn-secondry" onClick={HandleActionSignUp}>
          Sign Up
        </button>
        <section>
          <img src={Human1} alt="ImageNA" className="Human" />
        </section>
      </section>
    </section>
  );
}

export default MainCard;
