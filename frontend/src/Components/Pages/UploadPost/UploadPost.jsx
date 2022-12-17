import "./UploadPost.css";
// import image from "../../../Images/default-image.jpeg";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import { AddCircleOutline } from "@mui/icons-material";
import axios from "axios";

export const UploadPost = () => {
  // const user = JSON.parse(localStorage.getItem("user"));
  const [title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [imageURL, setImageURL] = useState("");
  const user = useSelector(selectUser);

  const authorid = user._id;
  const image =
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(await data.get("title"));
    data.append("author", user._id);

    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/posts/upload`,
      data,
      { withCredentials: true }
    );

    // let result = await fetch(
    //   `${process.env.REACT_APP_SERVER_URL}/api/posts/upload`,
    //   {
    //     method: "post",
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    console.log(data.get("title"));
  };

  return (
    <div className="uploadpostcontainer">
      {/* <h1 className="pagetitle">Upload Here</h1> */}
      <div className="UploadPost">
        <div className="blogimgcontainer">
          <img
            src={imageURL ? imageURL : image}
            alt="img"
            className="blogimg"
          />
        </div>
        <Box
          component="form"
          noValidate
          onSubmit={submitHandler}
          sx={{ mt: 3, width: "100%" }}
        >
          <Grid
            container
            spacing={0}
            sx={{
              width: "100%",
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <input
                accept="image/*"
                // className={classes.input}
                style={{ display: "none" }}
                id="raised-button-file"
                name="file"
                // multiple

                type="file"
                onChange={(e) => {
                  const img = URL.createObjectURL(e.target.files[0]);
                  setImageURL(img);
                }}
              />
              <label htmlFor="raised-button-file">
                <AddCircleOutline
                  sx={{
                    cursor: "pointer",
                  }}
                />
              </label>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                // autoComplete="Title"
                InputProps={{
                  style: {
                    fontSize: "1.5rem",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                required
                fullWidth
                id="desc"
                label="Description"
                name="desc"
                placeholder="Enter Here"
                style={{
                  width: "100%",
                  border: "none",
                  fontSize: "30px",
                  outline: "none",
                  marginTop: "30px",
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "black" }}
            onLoad
          >
            Upload Post
          </Button>
        </Box>
      </div>
    </div>
  );
};
