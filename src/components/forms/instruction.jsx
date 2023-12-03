import React, { useState } from "react";
import "./instruction.css";

import Vector2 from "../images/Vector2.svg";

import Vector5 from "../images/Vector5.svg";

import Vector10 from "../images/Vector10.svg";

const Instruction = (e) => {
  const [Check,setCheck] = useState("")
  const [formaction,setformaction] = useState(" ")
  const HandleChangeEvent = (e) => {
    setCheck(e.target.value);
  }
  const HandleClickEvent = (e) => {
    if(Check !== '1'){
      alert("Please Check The Checkbox To Agree upon terms and Conditions")
      
    }
    else{
      setformaction("/login/instruction/Quiz")
    }
  }
  return (
    <body>
      <div className="main">
        <div className="first">
          <img src={Vector5} className="design" />
          <img src={Vector10} className="girl" />
        </div>
        <div className="e">
          <div className="logo">
            <img src={Vector2} className="hck" />
          </div>
          <div className="base">
            <div className="heading">
              Let's <span>Begin!</span>
            </div>

            <div className="head">
              Challenge Your Intellect: Welcome to the Ultimate College Quiz
              Experience!
            </div>
            <div className="done">
              <h2>Instruction:-</h2>
              <ul>
                <li>1.This assessment test consists of 5 Questions .</li>
                <li>2. There is no time limit.</li>
                <li>
                  3. Do not make click picture and copy question to any browser.
                </li>
                <li>
                  5. The candidates are advised to read all options thoroughly.
                </li>
                <li>6. No caluculator needed.</li>
              </ul>
            </div>

            <div className="form">
              <form action={formaction}>
                <input type="checkbox" className="checkbox" value="1" onChange={HandleChangeEvent}/>
                <span className="rem">
                  By selecting this checkbox, you affirm that you have
                  thoroughly reviewed all provided instructions and hereby
                  <br></br> express your intent to commence the examination
                </span>

                <button className="button" onClick={HandleClickEvent}>Start</button>
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
    </body>
  );
};

export default Instruction;
