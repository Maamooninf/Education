import "./App.css";
import SignUp from "./components/signcom/Signup";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Maindiv } from "./AppStyle";
import Signin from "./components/signcom/Signin";
import { OnlineRoute, RequireAuth } from "./routes/AuthRoute";
import Home from "./components/home/Home";
import { useSelector } from "react-redux";
import { RootState } from "./reduxstore/store";
import ProLang from "./components/proglang/ProLang";
import Load from "./components/reusable/Load";
import NavBar from "./components/navbar/NavBar";
import AdminBo from "./components/adminDash/AdminBo";
import LectureAd from "./components/adminDash/lectureAd/LectureCom";
import Questions from "./components/adminDash/questionAd/Questions";
import HomeDash from "./components/adminDash/homeDash/HomeDash";

import AccountAd from "./components/adminDash/accountAd/AccountAd";
import ContactAd from "./components/adminDash/contactAd/ContactAd";
import Contact from "./components/chat/Contact";
import QuestionCom from "./components/question/QuestionCom";
function App() {
  // const dispatch = useDispatch();
  const useSign = useSelector((state: RootState) => state.userSign);
  const { userInfo } = useSign;

  return (
    <Maindiv>
      <Load />

      <Router>
        <NavBar />
        <Routes>
          <Route
            index
            element={
              <RequireAuth auth={userInfo}>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/signin"
            element={
              <OnlineRoute auth={userInfo}>
                <Signin />
              </OnlineRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <OnlineRoute auth={userInfo}>
                <SignUp />
              </OnlineRoute>
            }
          />
          <Route
            path="/lang/:prolang"
            element={
              <RequireAuth auth={userInfo}>
                <ProLang />
              </RequireAuth>
            }
          />

          <Route
            path="/admindash"
            element={
              <RequireAuth auth={userInfo}>
                <AdminBo />
              </RequireAuth>
            }
          >
            <Route path="" element={<HomeDash />} />
            <Route path="lecture" element={<LectureAd />} />
            <Route path="question" element={<Questions />} />
            <Route path="account" element={<AccountAd />} />
            <Route
              path="conver"
              element={
                <RequireAuth auth={userInfo}>
                  <ContactAd />
                </RequireAuth>
              }
            />
          </Route>
          <Route
            path="chating"
            element={
              <RequireAuth auth={userInfo}>
                <Contact />
              </RequireAuth>
            }
          />
          <Route
            path="chating/:langId"
            element={
              <RequireAuth auth={userInfo}>
                <Contact />
              </RequireAuth>
            }
          />
          <Route
            path="question/:idlang"
            element={
              <RequireAuth auth={userInfo}>
                <QuestionCom />
              </RequireAuth>
            }
          />
          <Route
            path="*"
            element={
              <RequireAuth auth={userInfo}>
                <Navigate replace to={"/"} />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </Maindiv>
  );
}

export default App;
