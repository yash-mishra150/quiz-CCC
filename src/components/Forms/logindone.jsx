import React, { useState } from 'react'
import './logindone.css';
import Vector1 from '../Images/Vector1.svg';
import Vector2 from '../Images/Vector2.svg';
import Vector3 from '../Images/Vector3.svg';
import Vector4 from '../Images/Vector4.svg';
import Vector5 from '../Images/Vector5.svg';
import Vector7 from '../Images/Vector7.svg';
import Vector8 from '../Images/Vector8.svg';
import Vector9 from '../Images/Vector9.svg';





const Logindone = () => {
    
  return (
    <body>
      <div className='main'>
        <div className='first'>
        <img src={Vector5}className='design'/>
         
        </div>
        <div className="e">
          
        <div className="logo">
        <img src={Vector2} className='hck'/>
        
        </div>
        <div className='base'>
        <div className='heading'>You are all <span>set!</span></div>
       
       
        <div className='head'>Your password has been successfully changed. Please make sure you use your new password to login!</div>
       <div className="done"><img src={Vector9}className='tick'/></div>
       
       
        <div className='form'>
        <form>
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

export default Logindone