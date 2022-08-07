import { HomePage } from "./Components/Pages/HomePage/HomePage";
import { PostView } from "./Components/Pages/PostView/PostView";
import { UploadPost } from "./Components/Pages/UploadPost/UploadPost";
import { UserSetting } from "./Components/Pages/UserSetting/UserSetting";
import TopBar from "./Components/TopBar/TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signin } from "./Components/Pages/Signin/Signin";
import { Signup } from "./Components/Pages/Signup/Signup";
import { About } from "./Components/Pages/About/About";
import { ContactPage } from "./Components/Pages/ContactPage/ContactPage";

import PrivateComponent from "./Components/PrivateComponent/PrivateComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        {/* <UploadPost />*/}
        {/* <PostView /> */}
        {/* <HomePage /> */}
        {/* <UserSettting /> */}

        {/* <Signin/> */}
        {/* <Signup/> */}

        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/write" element={<UploadPost />}></Route>
            <Route path="/settings" element={<UserSetting />}></Route>
            <Route path="/post/:id" element={<PostView />}></Route>
          </Route>
          <Route path="/Contact" element={<ContactPage />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/login" element={<Signin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
