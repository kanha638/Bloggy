import React from "react";
import Signimg from "../../../Images/Signimg.png";
import "./Signin.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const check = localStorage.getItem("user");
    if (check) {
      navigate("/");
    }
  });
  const submitHandler = async (e) => {
    e.preventDefault();

    const tmp = { email: email, password: password };

    console.log("using submit handler");
    let result = await fetch("http://localhost:5002/api/auth/login", {
      method: "post",
      body: JSON.stringify(tmp),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(result.status);
    if (result.status === 200) {
      result = await result.json();
      console.log(result);
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else if (result.status === 400) {
      alert("Wrong Credintials");
    } else {
      alert("Some Error occured");
    }
  };

  return (
    <>
      <div className="flex-container">
        <div className="left">
          <h2 className="center">Sign in</h2>
          <form onSubmit={submitHandler}>
            <div className="field space">
              <span className="fas fa-envelope"></span>
              <input
                type="text"
                required
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="field space">
              <span className="fas fa-lock"></span>
              <input
                type="password"
                required
                placeholder="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="space">
              <button type="submit">Login</button>
            </div>
            <div className="signup space">
              haven't account? <Link to="/register">Create </Link>
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
