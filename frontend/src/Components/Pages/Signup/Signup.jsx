import React from "react";
import Signimg from "../../../Images/Signimg.png";
import "./Signup.css";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <>
      <div className="flex-container">
        <div className="left">
          <h2 className="center">Sign up</h2>
          <form action="#">
            <div className="field space">
              <span className="fas fa-user"></span>
              <input type="text" required placeholder="Name" />
            </div>
            <div className="field space">
              <span className="fas fa-envelope"></span>
              <input type="text" required placeholder="Email" />
            </div>
            <div className="field space">
              <span className="fas fa-lock"></span>
              <input type="password" required placeholder="password" />
            </div>
            <div className="field space">
              <span className="fas fa-lock"></span>
              <input type="password" required placeholder="confirm password" />
            </div>
            <div className="space">
              <button type="submit">Register</button>
            </div>
            {/* <!-- who don't have accout they sign up --> */}
            <div className="signup space">
              Do you have account?<Link to="/Login">Sign in</Link>
            </div>
          </form>
        </div>

        <div className="right">
          <img src={Signimg} className="image" alt="" />
        </div>
      </div>
    </>
  );
};
