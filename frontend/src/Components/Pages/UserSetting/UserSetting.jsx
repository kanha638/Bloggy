import "./UserSetting.css";
import myimage from "../../../Images/User.jpeg";
import { SideBar } from "../../SideBar/SideBar";

export const UserSetting = () => {
  return (
    <div className="setting">
      <form className="settingcontainer">
        <h1 style={{ "margin-bottom": "20px" }}>User Setting</h1>
        <div className="settingWrapper">
          <img src={myimage} alt="" className="settingimg" />
          <label htmlFor="changeimg">
            <i class=" changeimgicon fileinputIcon fa-solid fa-circle-plus"></i>
          </label>
          <input type="file" id="changeimg" className="changeimg" />
        </div>
        <div className="inputcontainer">
          {/* Basic Info  */}
          <div className="basicinfo">
            <div className="name">
              <label>
                Change Your Name :<br />{" "}
                <input type="text" className="changename" />
              </label>
            </div>
            <div className="email">
              <label>
                Change Your Email :<br></br>{" "}
                <input type="text" className="changeemail" />
              </label>
            </div>
          </div>

          <br />
          {/* Desctiption Area */}
          <label style={{ "text-align": "center", margin: "10px" }}>
            Change Profile Description :
          </label>
          <textarea
            placeholder="Change Your discription"
            className="textareainput"
          ></textarea>

          {/* Password Area */}
          <div className="passwordarea">
            <label>
              Change Your Password :<br />
              <input type="password" className="changepassword" />
            </label>

            <label>
              Enter Current Password :<br />
              <input type="password" className="currentpassword" />
            </label>
          </div>
        </div>
        <button type="submit" className="settingsubmit">
          Save Changes
        </button>
      </form>
      <SideBar />
    </div>
  );
};
