import React from 'react'
import "./TopBar.css"
import Profile from "../../Images/User.jpeg"



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
                  <li className="ListItem">HOME</li>
                  <li className="ListItem">ABOUT</li>
                  <li className="ListItem">WRITE</li>
                  <li className="ListItem">CONTACT</li>
                  <li className="ListItem">LOGOUT</li>
              </ul>
          </div>
          {/* Right of the Navbar */}
          <div className="Right">
              <div className="search">
                  <input type="text" placeholder="Search Writtings" className='searchInput' />
                  <i class="searchIcon fa-solid fa-magnifying-glass"></i>
              </div>
              <img src={Profile} alt="img" className="userimage" />
          </div>
      </div>
  )
}

export default TopBar