import "./UploadPost.css";
import image from "../../../Images/fitness.webp"
export const UploadPost = () => {
    return (
        <>
            <h1 className="pagetitle">Upload Here</h1>
      <div className="UploadPost">
          <div className="blogimgcontainer">
              <img src={image} alt="" className="blogimg" />
          </div>
          <form className="uploadform">
              <div className="portion">
                  <label htmlFor="fileinput">
                      <i class=" fileinputIcon fa-solid fa-circle-plus"></i>
                  </label>
                  <input type="file" className="fileinput" id="fileinput" />
                  <input type="text" className="titleinput" autoFocus="true" placeholder="Write Your Title" />
              </div>
               
              <div className="portion">
                  <textarea type="text" placeholder="Write Something ...." className="textinput">

                  </textarea>
              </div>

          </form>
            </div>
            </>
  )
}
