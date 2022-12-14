import { useState, useEffect } from "react";
import Signimg from "../../../Images/Signimg.png";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { registerUser } from "../../../api/auth";
import { useDispatch } from "react-redux";
import { UserState } from "../../../features/userSlice";
import { useSelector } from "react-redux";

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
  }, []);
  const dispatch = useDispatch();
  const userState = useSelector(UserState);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (cpassword === password) {
      const tmp = { name: name, email: email, password: password };

      console.log("using submit handler");

      await registerUser(tmp, dispatch);
      console.log(userState);
      if (userState.isErrors === false) {
        navigate("/");
        Swal.fire({
          title: "Congratulations!",
          html: "Signup Successfully",
          timer: 1500,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Sorry Something Went Wrong",
          html: "Signup Failed",
          timer: 1500,
          icon: "error",
        });
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
