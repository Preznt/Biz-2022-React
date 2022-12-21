import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import {
  BBsMain,
  NoticeMain,
  UserMain,
  UserLogin,
  UserJoin,
  NoticeList,
  NoticeWrite,
} from "../comps/Index";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/">
        {/* index는 위에 path="/"를 그대로 받아서 쓴다 */}
        <Route index element={<h1>홈페이지</h1>}></Route>
        <Route path="/notice" element={<NoticeMain />}>
          <Route index element={<NoticeList />} />
          <Route path="write" element={<NoticeWrite />} />
        </Route>
        <Route path="/bbs" element={<BBsMain />}></Route>
      </Route>

      <Route path="/user" element={<UserMain />}>
        {/* 이게 바로 Outlet부분 include 하는 방법? */}
        <Route path="login" element={<UserLogin />}></Route>
        <Route path="join" element={<UserJoin />}></Route>
        <Route path="profile/:username" element={<UserJoin />}></Route>
      </Route>

      {/* 위에서 요청을 했는데 없을때 */}
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
export default MainRouter;
