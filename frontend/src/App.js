import { HomePage } from "./Components/Pages/HomePage/HomePage";
import { PostView } from "./Components/Pages/PostView/PostView";
import { UploadPost } from "./Components/Pages/UploadPost/UploadPost";
import { UserSetting } from "./Components/Pages/UserSetting/UserSetting";
import TopBar from "./Components/TopBar/TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        {/* <UploadPost /> */}
        {/* <PostView /> */}
        {/* <HomePage /> */}
        {/* <UserSettting /> */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/write" element={<UploadPost />}></Route>
          <Route path="/settings" element={<UserSetting />}></Route>
          <Route path="/post/:id" element={<PostView />}></Route>
          <Route path="/resister" element={"Resister"}></Route>
          <Route path="/Login" element={"Login"}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
