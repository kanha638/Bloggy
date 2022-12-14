import { Post } from "../Post/Post";
import "./Blogs.css";
import { useState, useEffect } from "react";

export const Blogs = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    let result = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/posts/allposts`
    );
    result = await result.json();
    console.log(result);
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Blogs">
      {data &&
        data.map((index) => {
          return (
            <Post
              key={index._id}
              postId={index._id}
              title={index.title}
              img={index.image}
              description={index.Desc}
              createdAt={index.createdAt}
            />
          );
        })}
    </div>
  );
};
