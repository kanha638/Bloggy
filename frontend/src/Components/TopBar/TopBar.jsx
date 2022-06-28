import React from "react";
import "./TopBar.css";
// import Profile from "../../Images/User.jpeg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TopBar() {
  let check = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="TopBar">
      <div className="TopBarBig">
        <div className="Left">
          <i className="leftIcon fa-brands fa-facebook-square"></i>
          <i className="leftIcon fa-brands fa-instagram-square"></i>
          <i className="leftIcon fa-brands fa-linkedin"></i>
          <i className="leftIcon fa-brands fa-twitter-square"></i>
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
              <Link onClick={logout} className="link" to="/login">
                {check ? "LOGOUT" : <></>}
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
            {check ? (
              <img src={check.profpic} alt="img" className="userimage" />
            ) : (
              <></>
            )}
          </Link>
        </div>
      </div>
      <div className="TopBarSmall">
        <div className="search">
          <input
            type="text"
            placeholder="Search Writtings"
            className="searchInput"
          />
          <i className="searchIcon fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="dropdown">
          <span>
            <i className="leftIcon fa-solid fa-bars"></i>
          </span>
          <div className="dropdown-content">
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
            <hr></hr>
            <Link className="link" to="/settings">
              <div className="dropdownimg">
                {check ? (
                  <>
                    <img src={check.profpic} alt="img" className="userimage" />
                    <div className="dropdownitemp">PROFILE</div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </Link>
            <hr></hr>
            <div className="Left1">
              <i className="leftIcon fa-brands fa-facebook-square"></i>
              <i className="leftIcon fa-brands fa-instagram-square"></i>
              <i className="leftIcon fa-brands fa-linkedin"></i>
              <i className="leftIcon fa-brands fa-twitter-square"></i>
            </div>
            <hr></hr>
            <Link className="link" to="/login" onClick={logout}>
              <div className="dropdownitem">{check ? "LOGOUT" : <></>}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
