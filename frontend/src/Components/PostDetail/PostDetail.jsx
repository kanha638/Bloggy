import "./PostDetail.css";
import { useState, useEffect } from "react";
import image from "../../Images/fitness.webp";
import { useParams } from "react-router-dom";

export const PostDetail = () => {
  let params = useParams();
  const [data, setData] = useState({});

  const getData = async () => {
    const postId = params.id;
    let result = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/posts/${postId}`
    );
    result = await result.json();
    console.log(result);
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="PostDetail">
      <div className="postWrapper">
        <img src={data.image} alt="PostImage" className="postimg" />

        <h1 className="Posttitle">
          {data.title}
          <div className="editPost">
            <i class="EditPostIcon fa-solid fa-pen-to-square"></i>
            <i class="EditPostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="Postinfo">
          <span className="author">
            Author : <b>Kanha Tiwari</b>
          </span>
          <span className="Postcategories">
            <span className="PostCategory">Sports</span>
            <span className="PostCategory">Health</span>
          </span>
          <span className="date">1 Hour Ago </span>
        </div>
        <hr></hr>
        <p className="postcontent">
          {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          ullam accusamus numquam aliquam, exercitationem debitis laudantium
          modi architecto similique nostrum molestiae id molestias quaerat
          optio! Quam aut voluptatibus nam tempora. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Perspiciatis ullam accusamus numquam
          aliquam, exercitationem debitis laudantium modi architecto similique
          nostrum molestiae id molestias quaerat optio! Quam aut voluptatibus
          nam tempora. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Perspiciatis ullam accusamus numquam aliquam, exercitationem debitis
          laudantium modi architecto similique nostrum molestiae id molestias
          quaerat optio! Quam aut voluptatibus nam tempora. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Perspiciatis ullam accusamus
          numquam aliquam, exercitationem debitis laudantium modi architecto
          similique nostrum molestiae id molestias quaerat optio! Quam aut
          voluptatibus nam tempora. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Perspiciatis ullam accusamus numquam aliquam,
          exercitationem debitis laudantium modi architecto similique nostrum
          molestiae id molestias quaerat optio! Quam aut voluptatibus nam
          tempora. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Perspiciatis ullam accusamus numquam aliquam, exercitationem debitis
          laudantium modi architecto similique nostrum molestiae id molestias
          quaerat optio! Quam aut voluptatibus nam tempora. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Perspiciatis ullam accusamus
          numquam aliquam, exercitationem debitis laudantium modi architecto
          similique nostrum molestiae id molestias quaerat optio! Quam aut
          voluptatibus nam tempora. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Perspiciatis ullam accusamus numquam aliquam,
          exercitationem debitis laudantium modi architecto similique nostrum
          molestiae id molestias quaerat optio! Quam aut voluptatibus nam
          tempora. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Perspiciatis ullam accusamus numquam aliquam, exercitationem debitis
          laudantium modi architecto similique nostrum molestiae id molestias
          quaerat optio! Quam aut voluptatibus nam tempora. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Perspiciatis ullam accusamus
          numquam aliquam, exercitationem debitis laudantium modi architecto
          similique nostrum molestiae id molestias quaerat optio! Quam aut
          voluptatibus nam tempora. */}
          {data.Desc}
        </p>
        <br></br>
        <br></br>
      </div>
      {/* <h1>{params.id}</h1> */}
    </div>
  );
};
