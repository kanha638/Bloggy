import React from 'react';
import Signimg from "../../../Images/Signimg.png";
import "./Signin.css";


export const Signin = () => {
  return (<>

    <div className="flex-container">

    <div className='left'>
      <h2 className="center">Sign in</h2>
      <form action="#">
          <div className="field space">
            <span className="fas fa-envelope"></span>
            <input type="text" required placeholder="Email" />
          </div>
          <div className="field space">
            <span className="fas fa-lock"></span>
            <input type="password" required placeholder="password" />
          </div>
          
        <div className="space">
          <button type="submit">Login</button>
        </div>
        <div className="signup space">haven't account?Create 
        </div>
      </form>
    </div>

    <div className='right'>
    <img src={Signimg} className="image" alt="" />
    </div>

    </div>
    

  </>
  )
}