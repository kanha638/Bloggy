import React, { useState, useEffect } from "react";
import "./Post.css";
// import postimage from "../../Images/fitness1.jpeg";
import { Link } from "react-router-dom";
export const Post = (props) => {
  return (
    <div className="post">
      <img
        src={`${process.env.REACT_APP_SERVER_URL}/api/files/blog/${props?.img}`}
        alt="postimage"
        className="postimage"
      />
      <div className="postInfo">
        <div className="categories">
          <span className="category">Fitness</span>
          <span className="category">Sports</span>
        </div>
        <Link className="link" to={`/post/${props.postId}`}>
          <span className="posttitle">{props.title}</span>
        </Link>

        <hr />
        <span className="postdate">{props.createdAt}</span>
      </div>
      <p className="description">{props.description}</p>
    </div>
  );
};
