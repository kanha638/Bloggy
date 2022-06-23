import "./PostDetail.css";
import image from "../../Images/fitness.webp";

export const PostDetail = () => {
  return (
    <div className="PostDetail">
      <div className="postWrapper">
        <img src={image} alt="PostImage" className="postimg" />

        <h1 className="Posttitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
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
          voluptatibus nam tempora.
        </p>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};
