import React from "react";
import { useState } from "react";
import Human from "./images/MainPageMobile.svg";
import bars from "./images/threebars.svg";
import whitebars from "./images/whitebars.svg";
import { Link } from "react-router-dom";

function Quiz4() {
  const [ishidden, setIshidden] = useState("container");
  const [iswhitebox, setiswhitebox] = useState("whitebox");
  const [ishuman, setishuman] = useState("Human4");
  const [isbars, setisbars] = useState("bars");
  const [istext, setistext] = useState("Hide");
  const [iscss, setiscss] = useState("hide");
  const [isbody, setisbody] = useState("hack");
  const [istexty, setistexty] = useState("white");
  const [iscontainer, setiscontainer] = useState("section1");
  const [selectedOption, setSelectedOption] = useState("");

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

  const HandleCheckEvent = (e) => {
    console.log({selectedOption})
    if (selectedOption === "1"){
      alert("Correct Answer")
    }else{
      alert("Wroung Answer")
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <>
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
            </div>
          </div>
        </section>
      </div>
      <div className="Question">
      Q4-How can we change the background color of an element? 
      </div>
      <div className="option1">
        <input type="radio" name="q1" className="Radio1" value="1" onChange={handleOptionChange}/>
        background-color 
      </div>
      <div className="option2">
        <input type="radio" name="q1" className="Radio2" value="2" onChange={handleOptionChange}/>
        color 
      </div>
      <div className="option3">
        <input type="radio" name="q1" className="Radio3" value="3" onChange={handleOptionChange}/>
        Both A and B 
      </div>
      <div className="option4">
        <input type="radio" name="q1" className="Radio4" value="4" onChange={handleOptionChange}/>
        None of the above 
      </div>

      <button className="CheckAnswer" onClick={HandleCheckEvent}>
        Check
      </button>

      <Link to="/login/instruction/Quiz5" className="NextQuestion">Next Question -> </Link>
    </>
  );
}

export default Quiz4;
