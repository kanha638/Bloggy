import React from "react";
import Signimg from "../../../Images/Signimg.png";
import "./Signin.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { loginUser } from "../../../api/auth";
import { useDispatch } from "react-redux";
import { UserState } from "../../../features/userSlice";
import { useSelector } from "react-redux";

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
  const dispatch = useDispatch();
  const userState = useSelector(UserState);
  const submitHandler = async (e) => {
    e.preventDefault();
    const tmp = { email: email, password: password };
    await loginUser(tmp, dispatch);
    if (userState.isErrors === false) {
      navigate("/");
      Swal.fire({
        title: " ",
        html: "Logged In successfully",
        timer: 1500,
        icon: "success",
      });
    } else {
      Swal.fire({
        title: " ",
        html: "Wrong Credintials / Some Error occured",
        timer: 1500,
        icon: "error",
      });
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
