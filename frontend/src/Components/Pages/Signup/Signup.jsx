import { useState, useEffect } from "react";
import Signimg from "../../../Images/Signimg.png";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const check = localStorage.getItem("user");
    if (check) {
      navigate("/");
    }
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    if (cpassword === password) {
      const tmp = { name: name, email: email, password: password };

      console.log("using submit handler");
      let result = await fetch("http://localhost:5002/api/auth/register", {
        method: "post",
        body: JSON.stringify(tmp),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.log(result);

      if (result) {
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/");
      } else {
        alert("User Already resister with this email");
      }
    } else {
      alert("write both password same");
    }
  };

  return (
    <>
      <div className="flex-container">
        <div className="left">
          <h2 className="center">Sign up</h2>
          <form onSubmit={submitHandler}>
            <div className="field space">
              <span className="fas fa-user"></span>
              <input
                type="text"
                required
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
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
            <div className="field space">
              <span className="fas fa-lock"></span>
              <input
                type="password"
                required
                placeholder="confirm password"
                onChange={(e) => {
                  setcpassword(e.target.value);
                }}
              />
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
