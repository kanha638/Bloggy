import React from "react";
import "./TopBar.css";
import Profile from "../../Images/User.jpeg";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div className="TopBar">
      <div className="Left">
        <i class="leftIcon fa-brands fa-facebook-square"></i>
        <i class="leftIcon fa-brands fa-instagram-square"></i>
        <i class="leftIcon fa-brands fa-linkedin"></i>
        <i class="leftIcon fa-brands fa-twitter-square"></i>
      </div>
      {/* Center of the NavBar */}
      <div className="Center">
        <ul className="List">
          <li className="ListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="ListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="ListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="ListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>

          <li className="ListItem">
            <Link className="link" to="/login">
              LOGOUT
            </Link>
          </li>
        </ul>
      </div>
      {/* Right of the Navbar */}
      <div className="Right">
        <div className="search">
          <input
            type="text"
            placeholder="Search Writtings"
            className="searchInput"
          />
          <i class="searchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        <Link className="link" to="/settings">
          <img src={Profile} alt="img" className="userimage" />
        </Link>
      </div>
    </div>
  );
}

export default TopBar;
