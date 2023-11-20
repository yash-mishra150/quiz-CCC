import React from "react";
import { useState } from "react";
import Human from "./images/MainPageMobile.svg";
import bars from "./images/threebars.svg";
import whitebars from "./images/whitebars.svg";
import Arrow from "./images/Circlearrow.svg";

function Quiz() {
  const [ishidden, setIshidden] = useState("container");
  const [iswhitebox, setiswhitebox] = useState("whitebox");
  const [ishuman, setishuman] = useState("Human4");
  const [isbars, setisbars] = useState("bars");
  const [istext, setistext] = useState("Hide");
  const [iscss, setiscss] = useState("hide");
  const [isbody, setisbody] = useState("text");
  const [istexty, setistexty] = useState("white");
  const [iscontainer, setiscontainer] = useState("section1");
  const [isContainer, setisContainer] = useState("section1");
  const [isCOntainer, setisCOntainer] = useState("section1");
  const [isCONtainer, setisCONtainer] = useState("section1");
  const [iscontaineR, setiscontaineR] = useState('nocircles');
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
    setisContainer("section1");
    setisCOntainer("section1");
    setisCONtainer("section1 ");
    setiscontaineR('nocircles')
  };
  const HandleClickAgain = () => {
    setIshidden("container");
    setiswhitebox("whitebox");
    setishuman("Human4");
    setisbars("bars");
    setistext("Hide");
    setiscss("hide");
    setisbody("text");
    setistexty("white");
  };
  const Handle = () => {
    setiscontainer("sectionq");
    setisContainer("section1");
    setisCOntainer("section1");
    setisCONtainer("section1");
  };
  const Handle1 = () => {
    setisContainer("sectionq");
    setiscontainer("section1");
    setisCOntainer("section1");
    setisCONtainer("section1");
  };
  const Handle2 = () => {
    setisCOntainer("sectionq");
    setiscontaineR('')
    setiscontainer("section1");
    setisContainer("section1");
    setisCONtainer("section1");
  };
  const Handle3 = () => {
    setisCONtainer("sectionq");
    setiscontaineR('')
    setiscontainer("section1");
    setisCOntainer("section1");
    setisContainer("section1");
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
          Section 1
          <div className="arrow">
            <img src={Arrow} alt="ImageNA" className="Arrow" onClick={Handle} />
            <div>
              <div className="c1">1</div>
              <div className="c2">2</div>
              <div className="c3">3</div>
              <div className="c4">4</div>
              <div className="c5">5</div>
            </div>
          </div>
        </div>
        <div className={isContainer}>
          Section 2
          <div className="arrow">
            <img
              src={Arrow}
              alt="ImageNA"
              className="Arrow"
              onClick={Handle1}
            />
            <div>
              <div className="c1">1</div>
              <div className="c2">2</div>
              <div className="c3">3</div>
              <div className="c4">4</div>
              <div className="c5">5</div>
            </div>
          </div>
        </div>
        <div className={isCOntainer}>
          Section 3
          <div className="arrow">
            <img
              src={Arrow}
              alt="ImageNA"
              className="Arrow"
              onClick={Handle2}
            />
            <div className={iscontaineR}>
              <div className="c1">1</div>
              <div className="c2">2</div>
              <div className="c3">3</div>
              <div className="c4">4</div>
              <div className="c5">5</div>
            </div>
          </div>
        </div>
        <div className={isCONtainer}>
          Section 4
          <div className="arrow">
            <img
              src={Arrow}
              alt="ImageNA"
              className="Arrow"
              onClick={Handle3}
            />
            <div className={iscontaineR}>
              <div className="c1">1</div>
              <div className="c2">2</div>
              <div className="c3">3</div>
              <div className="c4">4</div>
              <div className="c5">5</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Quiz;
