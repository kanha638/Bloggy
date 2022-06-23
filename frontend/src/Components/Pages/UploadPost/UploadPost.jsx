import "./UploadPost.css";
import image from "../../../Images/default-image.jpeg"
export const UploadPost = () => {
    return (
        <>
            <h1 className="pagetitle">Upload Here</h1>
      <div className="UploadPost">
          <div className="blogimgcontainer">
              <img src={image} alt="" className="blogimg" />
          </div>
          <form className="uploadform">
              <div className="portion1">
                  <label htmlFor="fileinput">
                      <i class=" fileinputIcon fa-solid fa-circle-plus"></i>
                  </label>
                  <input type="file" className="fileinput" id="fileinput" />
                  <input type="text" className="titleinput" autoFocus="true" placeholder="Write Your Title ( Max 15 words )" />
              </div>
               
              {/* <div className="portion2"> */}
                  <textarea type="text" placeholder="Write Something ...." className="textinput">

                  </textarea>
              {/* </div> */}
             <button type="submit" className="SubmitForm">Submit</button>

                </form>
                
            </div>
            </>
  )
}