import React from 'react';
import "./Post.css"
import postimage from "../../Images/fitness.webp";
export const Post = () => {
  return (
      <div className="post">
      <img src={postimage} alt="postimage" className="postimage" />
      <div className="postInfo">
        <div className="categories">
          <span className="category">Fitness</span>
          <span className="category">Sports</span>
        </div>
        <span className="posttitle">Women are Getting More involved in Gyms</span>
        <hr />
        <span className="postdate">1 day ago</span>
      </div>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Libero repellat sed facere modi ex minima,
        reiciendis corrupti voluptatem fuga quae,
        debitis inventore quod maxime obcaecati a sunt. Pariatur, saepe harum!
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Libero repellat sed facere modi ex minima,
        reiciendis corrupti voluptatem fuga quae,
        debitis inventore quod maxime obcaecati a sunt. Pariatur, saepe harum!
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Libero repellat sed facere modi ex minima,
        reiciendis corrupti voluptatem fuga quae,
        debitis inventore quod maxime obcaecati a sunt. Pariatur, saepe harum!
      </p>

          
    </div>

  )
}
