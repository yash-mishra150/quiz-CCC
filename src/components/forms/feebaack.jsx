import React, { useState } from 'react'

import './feedback.css';
import Vector1 from '../images/Vector1.svg';
import Vector2 from '../images/Vector2.svg';
import Vector3 from '../images/Vector3.svg';
import Vector4 from '../images/Vector4.svg';
import Vector5 from '../images/Vector5.svg';
import Vector7 from '../images/Vector7.svg';
import Vector8 from '../images/Vector8.svg';
import Vector11 from '../images/Vector11.svg';
import Vector12 from '../images/Vector12.svg';
import Vector13 from '../images/Vector13.svg';
import Vector14 from '../images/Vector14.svg';
import Vector15 from '../images/Vector15.svg';
import Vector16 from '../images/Vector16.svg';
import Vector17 from '../images/Vector17.svg';




const Login = () => {
    
  return (
    <body>
      <div className='main'>
        <div className='first'>
        <img src={Vector5}className='design'/>
         <img src={Vector12} className='girl'/>
        </div>
        <div className="e">
         
        <div className="logo">
        <img src={Vector2} className='hck'/>
        
        </div>
        <div className='base'>
        <div className='head'><img src={Vector13} className='sngup'/></div>
        <div className='form'>
            <div className="scr">
                <div className="scrr">
                    Your Score : <div className="scrrr" >30</div>
                </div>
            </div>
            <div className='subjects'>
               <div className="subject1"><img src={Vector14} className='sngup'/></div>
               <div className="subject2"><img src={Vector15} className='sngup'/></div>
               <div className="subject3"><img src={Vector16} className='sngup'/></div>
               <div className="subject4"><img src={Vector17} className='sngup'/></div>

            </div>
          <div className='stats'>
            <h5>Total questions</h5><h5>Correct answers</h5><h5>Incorrect answers</h5>
          </div>
          <div className='achieved'>
          <h5>15</h5><h5>10</h5><h5>5</h5>
          </div>
       
       

      
      
   
    

        
        </div>
        </div>
        




        </div>
        
        </div>
    </body>
  )
}

export default Login