import React from "react";
import "./TopBar.css";
import Profile from "../../Images/User.jpeg";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div className="TopBar">
      <div className="TopBarBig">
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
      <div className="TopBarSmall">
        <div className="Left1">
          <i class="leftIcon fa-brands fa-facebook-square"></i>
          <i class="leftIcon fa-brands fa-instagram-square"></i>
          <i class="leftIcon fa-brands fa-linkedin"></i>
          <i class="leftIcon fa-brands fa-twitter-square"></i>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search Writtings"
            className="searchInput"
          />
          <i class="searchIcon fa-solid fa-magnifying-glass"></i>
        </div>

        <div class="dropdown">
          <span>
            <i class="leftIcon fa-solid fa-bars"></i>
          </span>
          <div class="dropdown-content">
            <ul className="dropdownlist">
              <Link className="link" to="/">
                <li className="dropdownlistitem"> HOME</li>
              </Link>

              <Link className="link" to="/about">
                <li className="dropdownlistitem">ABOUT</li>
              </Link>

              <Link className="link" to="/write">
                <li className="dropdownlistitem"> WRITE</li>
              </Link>

              <Link className="link" to="/contact">
                <li className="dropdownlistitem">CONTACT</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
