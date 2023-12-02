import React from "react";
import { useState } from "react";
import Human from "./images/MainPageMobile.svg";
import bars from "./images/threebars.svg";
import whitebars from "./images/whitebars.svg";

function Quiz() {
  const [ishidden, setIshidden] = useState("container");
  const [iswhitebox, setiswhitebox] = useState("whitebox");
  const [ishuman, setishuman] = useState("Human4");
  const [isbars, setisbars] = useState("bars");
  const [istext, setistext] = useState("Hide");
  const [iscss, setiscss] = useState("hide");
  const [isbody, setisbody] = useState("hack");
  const [istexty, setistexty] = useState("white");
  const [iscontainer, setiscontainer] = useState("section1");

  const HandleClickFunction = () => {
    setIshidden("hidden");
    setiswhitebox("nobox");
    setishuman("nohuman");
    setisbars("nobars");
    setistext("Show");
    setiscss("show");
    setisbody("nobody");
    setistexty("nobody");
    setiscontainer("section1");
  };
  const HandleClickAgain = () => {
    setIshidden("container");
    setiswhitebox("whitebox");
    setishuman("Human4");
    setisbars("bars");
    setistext("Hide");
    setiscss("hide");
    setisbody("hack");
    setistexty("white");
  };
  return (
    <div className={ishidden}>
      <div className={iswhitebox}>
        <img
          src={bars}
          alt="ImageNA"
          className={isbars}
          onClick={HandleClickFunction}
        />
        <img
          src={whitebars}
          alt="ImageNA"
          className="whitebars"
          onClick={HandleClickAgain}
        />
      </div>
      <img src={Human} alt="ImageNA" className={ishuman} />
      <div className={iscss}>{istext}</div>
      <section className={isbody}>
        <div className={isbody}>
          HACKA<div className={istexty}>ZONE</div>
        </div>
        <div className={iscontainer}>
          <div>
            <div className="c1">1</div>
            <div className="c2">2</div>
            <div className="c3">3</div>
            <div className="c4">4</div>
            <div className="c5">5</div>
            <div className="c6">6</div>
            <div className="c7">7</div>
            <div className="c8">8</div>
            <div className="c9">9</div>
            <div className="c10">10</div>
            <div className="c11">11</div>
            <div className="c12">12</div>
            <div className="c13">13</div>
            <div className="c14">14</div>
            <div className="c15">15</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Quiz;
