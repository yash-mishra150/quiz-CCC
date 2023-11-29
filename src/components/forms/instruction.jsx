import React, { useState } from 'react'
import './instruction.css';
import Vector1 from '../images/Vector1.svg';
import Vector2 from '../images/Vector2.svg';
import Vector3 from '../images/Vector3.svg';
import Vector4 from '../images/Vector4.svg';
import Vector5 from '../images/Vector5.svg';
import Vector7 from '../images/Vector7.svg';
import Vector8 from '../images/Vector8.svg';
import Vector9 from '../images/Vector9.svg';
import Vector10 from '../images/Vector10.svg';





const Instruction = () => {
    
  return (
    <body>
      <div className='main'>
      <div className='first'>
        <img src={Vector5}className='design'/>
         <img src={Vector10} className='girl'/>
        </div>
        <div className="e">
          
        <div className="logo">
        <img src={Vector2} className='hck'/>
        
        </div>
        <div className='base'>
        <div className='heading'>Let's <span>Begin!</span></div>
       
       
        <div className='head'>Challenge Your Intellect: Welcome to the Ultimate College Quiz Experience!</div>
       <div className="done">
        <h2>Instruction:-</h2>
        <ul>
             <li >1.This assessment test consists of 4 sections having 5 Questions each.</li>
            <li>2. We suggest you allow 90 minutes to complete the test.</li>
             <li>3. Do not make click picture and copy question to any browser.</li>
                <li>5. The candidates are advised to read all options thoroughly.</li>
            <li>6. Use of calculator is prohibited.</li>
        </ul>  
       </div>
       
       
        <div className='form'>
        <form>
        <input type='checkbox' className='checkbox' ></input>
        <span className='rem'>By selecting this checkbox, you affirm that you have thoroughly reviewed all provided instructions and hereby<br></br> express your intent to commence the examination</span>
        
        
          <input type="submit" className='button' value="Back to Login" /> 
          <div className='hr'>
          <hr></hr>
          <div className='log'>
          Need an account <span>Sign up</span>

        </div>
        </div>
         
        </form>
      
        {/* <div className='form'>
        <form>
       
         
          <input type='text' name='username' id='username' className='npm'placeholder='Enter Your name' required/>
          <div className="try">Name</div>
        
          
          <input type='email' name='email' id='username' placeholder='Enter email' required/>
          <div className="try2">Email</div>
        
         
          <input type='password' name='phone' id='username' className='npm3' placeholder='Enter Password' required/>
          <div className="try3">Password</div>
          <div>
           
          </div>
         
     
          <input type='password' name='password' id='username' placeholder='Re-Enter Password' required/>
          <div className="try4">Confirm Password</div>

          <input type="submit" className='button' value="Sign Up" /> 
          </form>
        </div>
        <div className='hr'>
          <hr></hr>
        </div>
        <div className='log'>
          Existing User?<span>Log In</span>

        </div> */}

        
        </div>
        </div>
        




        </div>
        
        </div>
    </body>
  )
}

export default Instruction