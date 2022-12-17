import { HomePage } from "./Components/Pages/HomePage/HomePage";
import { PostView } from "./Components/Pages/PostView/PostView";
import { UploadPost } from "./Components/Pages/UploadPost/UploadPost";
import { UserSetting } from "./Components/Pages/UserSetting/UserSetting";
import TopBar from "./Components/TopBar/TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Signn } from "./Components/Pages/Signin/Signin";
import SignUp from "./Components/Pages/Signup/SignUp";
import { About } from "./Components/Pages/About/About";
import { ContactPage } from "./Components/Pages/ContactPage/ContactPage";
import "./app.css";

import PrivateComponent from "./Components/PrivateComponent/PrivateComponent";
import SignIn from "./Components/Pages/Signin/SignIn";

function App() {
  return (
    <div className="app">
      {/* <img src="http://localhost:5002/api/files/blog/4445069011603.jpg"></img> */}
      <BrowserRouter>
        <TopBar />
        {/* <UploadPost />*/}
        {/* <PostView /> */}
        {/* <HomePage /> */}
        {/* <UserSettting /> */}

        {/* <Signin/> */}
        {/* <Signup/> */}

        <Routes>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/login" element={<SignIn />}></Route>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/write" element={<UploadPost />}></Route>
            <Route path="/settings" element={<UserSetting />}></Route>
            <Route path="/post/:id" element={<PostView />}></Route>
          </Route>
          <Route path="/Contact" element={<ContactPage />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
