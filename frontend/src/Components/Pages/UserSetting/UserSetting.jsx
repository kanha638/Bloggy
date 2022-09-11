import "./UserSetting.css";
// import myimage from "../../../Images/User.jpeg";
import { SideBar } from "../../SideBar/SideBar";
import { useState, useEffect } from "react";
import { selectUser } from "../../../features/userSlice";
import { useSelector } from "react-redux";

// import { useEffect } from "react";

export const UserSetting = () => {
  /* Use State hooks for storing user information*/
  const user = useSelector(selectUser);

  const [desc, setDesc] = useState(user.profdesc);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [newPassword, setNewpassword] = useState(null);
  const [currentPassword, setCurrentPassword] = useState(null);
  const [flag, setFlag] = useState(true);

  // console.log(check);

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(name.length, email, newPassword, currentPassword);
    const id = user._id;
    if (currentPassword) {
      console.log(name);
      if (
        name.length < 30 &&
        name.length > 4 &&
        desc.length > 5 &&
        desc.length < 100
      ) {
        if (newPassword) {
          let result = await fetch(`http://localhost:5002/api/user/${id}`, {
            method: "put",

            body: JSON.stringify({
              userId: id,
              changedPassword: newPassword,
              profdesc: desc,
              name: name,
              currentPassword: currentPassword,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          result = await result.json();
          console.log(result);
          if (result.success) {
            localStorage.removeItem("user");
            localStorage.setItem("user", result.data);
            if (flag) setFlag(false);
            else setFlag(true);
          } else {
            alert("Profile changed UnsuccessFull");
          }
        } else {
          let result = await fetch(`http://localhost:5002/api/user/${id}`, {
            method: "put",
            body: JSON.stringify({
              userId: id,
              profdesc: desc,
              name: name,
              currentPassword: currentPassword,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          result = await result.json();
          console.log(result);
          if (result.success) {
            localStorage.removeItem("user");
            localStorage.setItem("user", result.data);
            if (flag) setFlag(false);
            else setFlag(true);
          } else {
            alert("Profile changed UnsuccessFull");
          }
        }
      } else {
        alert("Enter name of size above 4 and description below 100");
      }
    } else {
      alert("Enter Your current Password");
    }
  };
  // useEffect(() => {
  //   console.log("it is rerendered");
  // }, [flag]);
  return (
    <div className="setting">
      <form className="settingcontainer" onSubmit={submitHandler}>
        <h1
          style={{
            "margin-bottom": "20px",
          }}
        >
          User Setting
        </h1>
        <div className="settingWrapper">
          <img src={user.profpic} alt="" className="settingimg" />
          <label htmlFor="changeimg">
            <i class=" changeimgicon fileinputIcon fa-solid fa-circle-plus"></i>
          </label>
          <div className="changeimg">
            <input type="file" id="changeimg" />
          </div>
        </div>
        <div className="inputcontainer">
          {/* Basic Info  */}
          <div className="basicinfo">
            <div className="name">
              <label>
                Change Your Name :<br />{" "}
                <input
                  type="text"
                  className="changename"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </label>
            </div>
            <div className="email">
              <label>
                Change Your Email :<br></br>
                <input
                  type="email"
                  className="changeemail"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
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
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          ></textarea>

          {/* Password Area */}
          <div className="passwordarea">
            <label>
              Change Your Password :<br />
              <input
                type="password"
                className="changepassword"
                value={newPassword}
                onChange={(e) => {
                  setNewpassword(e.target.value);
                }}
              />
            </label>

            <label>
              Enter Current Password :<br />
              <input
                type="password"
                className="currentpassword"
                value={currentPassword}
                required={true}
                onChange={(e) => {
                  setCurrentPassword(e.target.value);
                }}
              />
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
