import { HomePage } from "./Components/Pages/HomePage/HomePage";
import { PostView } from "./Components/Pages/PostView/PostView";
import { UploadPost } from "./Components/Pages/UploadPost/UploadPost";
import { UserSettting } from "./Components/Pages/UserSetting/UserSetting";
import TopBar from "./Components/TopBar/TopBar";

function App() {
  return (
    <>
      <TopBar />
      {/* <UploadPost /> */}
      {/* <PostView /> */}
      {/* <HomePage /> */}
      <UserSettting />
    </>
  );
}

export default App;
