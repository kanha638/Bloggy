import React from 'react'
import "./SideBar.css";
import  userimage  from "../../Images/User.jpeg";

export const SideBar = () => {
  return (
      <div className="sidebar">
          <div className="item">
              <span className="title">ABOUT ME</span>
              <img src={userimage} className="sidebarimg" alt="UseImage" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  
              </p>
          </div>
          <div className="item">
              <span className="title">CATEGORIES </span>
              <ul className="itemlist">
                  <li className="listitem">Sports</li>
                  <li className="listitem">Movie</li>
                  <li className="listitem">Life</li>
                  <li className="listitem">Love</li>
                  <li className="listitem">Politics</li>
                  <li className="listitem">Crime</li>

              </ul>

          </div>
          <div className="item">
              <span className="title">FOLLOW US</span>
            <div className="socialIcons">
            <i class="sidebarIcon fa-brands fa-facebook-square"></i>
              <i class="sidebarIcon fa-brands fa-instagram-square"></i>
              <i class="sidebarIcon fa-brands fa-linkedin"></i>
                  <i class="sidebarIcon fa-brands fa-twitter-square"></i>
                  </div>
          </div>
      </div>
  )
}
