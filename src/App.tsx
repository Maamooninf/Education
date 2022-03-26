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
import LectureAd from "./components/adminDash/lectureAd/Lecture";

function App() {
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
            <Route path="lecture" element={<LectureAd />} />
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
