import React, { useState } from 'react'
import './login.css';
import Vector1 from '../images/Vector1.svg';
import Vector2 from '../images/Vector2.svg';
import Vector3 from '../images/Vector3.svg';
import Vector4 from '../images/Vector4.svg';
import Vector5 from '../images/Vector5.svg';
import Vector7 from '../images/Vector7.svg';
import Vector8 from '../images/Vector8.svg';
import Vector11 from '../images/Vector11.svg';





const Login = () => {
    
  return (
    <body>
      <div className='main'>
        <div className='first'>
        <img src={Vector5}className='design'/>
         <img src={Vector7} className='girl'/>
        </div>
        <div className="e">
          <div className='goto'>Sign up</div>
        <div className="logo">
        <img src={Vector2} className='hck'/>
        
        </div>
        <div className='base'>
        <div className='head'><img src={Vector8} className='sngup'/></div>
        <div className='form'>
        <form>
       
         
          <input type='Email' name='username' id='username' className='npm'placeholder='Enter Your Email' required/>
          <div className="try">Email</div>
        
          
          <input type='password' name='email' id='username'  placeholder='Enter Password' required/>
          <div className="try3">Password</div>


          <input type='checkbox' className='checkbox' ></input>
          <label className='rem'>Remember me </label>
          <span className='fgp'>Forget Password? </span>
          <input type="submit" className='button' value="Login" /> 
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

export default Login