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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./reduxstore/store";
import ProLang from "./components/proglang/ProLang";
import Load from "./components/reusable/Load";
import NavBar from "./components/navbar/NavBar";
import AdminBo from "./components/adminDash/AdminBo";
import LectureAd from "./components/adminDash/lectureAd/LectureCom";
import Questions from "./components/proglang/Questions";
import HomeDash from "./components/adminDash/homeDash/HomeDash";
// import io from "socket.io-client";
import { useEffect } from "react";
// import { socketioappend } from "./reduxstore/action/socketaction/Socketio";
import AccountAd from "./components/adminDash/accountAd/AccountAd";
import ContactAd from "./components/adminDash/contactAd/ContactAd";
function App() {
  const dispatch = useDispatch();
  const useSign = useSelector((state: RootState) => state.userSign);
  const { userInfo } = useSign;

  // useEffect(() => {
  //   if (userInfo && Object.keys(userInfo).length !== 0) {
  //     const socket = io("http://localhost:4010");
  //     let id = userInfo._id;
  //     socket?.emit("NewUser", "fds");
  //     dispatch(socketioappend(socket));
  //   }
  // }, [dispatch, userInfo]);
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
