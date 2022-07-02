import "./UploadPost.css";
// import image from "../../../Images/default-image.jpeg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const UploadPost = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");

  const authorid = user._id;
  const image =
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (title.Emtpy || Desc.Empty) {
      alert("Please Fill all feilds");
    } else {
      const tmp = {
        title: title,
        image: image,
        Desc: Desc,
        authorid: authorid,
      };
      console.log(tmp);

      let result = await fetch("http://localhost:5002/api/posts/upload", {
        method: "post",
        body: JSON.stringify(tmp),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (result.status === 200) {
        alert("your post uploaded successfully");
        result = await result.json();
        console.log(result);
        navigate("/");
      } else {
        alert("some error occured");
      }
    }
  };

  return (
    <>
      <h1 className="pagetitle">Upload Here</h1>
      <div className="UploadPost">
        <div className="blogimgcontainer">
          <img src={image} alt="" className="blogimg" />
        </div>
        <form className="uploadform" onSubmit={submitHandler}>
          <div className="portion1">
            <label htmlFor="fileinput">
              <i class=" fileinputIcon fa-solid fa-circle-plus"></i>
            </label>
            <input type="file" className="fileinput" id="fileinput" />
            <input
              type="text"
              className="titleinput"
              autoFocus="true"
              required
              placeholder="Write Your Title ( Max 15 words )"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>

          {/* <div className="portion2"> */}
          <textarea
            type="text"
            placeholder="Write Something ...."
            className="textinput"
            required
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          ></textarea>
          {/* </div> */}
          <button type="submit" className="SubmitForm">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
