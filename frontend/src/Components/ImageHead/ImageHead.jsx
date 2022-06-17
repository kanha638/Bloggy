import React from 'react';
import "./ImageHead.css";
import headimg from "../../Images/nature.jpeg";

export const ImageHead = () => {
  return (
      <div className="Head">
          <img src={headimg} alt="" className="headimg" />
    </div>
  )
}
