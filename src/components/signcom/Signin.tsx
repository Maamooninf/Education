import { useState } from "react";
import { User } from "../../reduxstore/reducer/usereducer/userRinter";
import {
  SignCont,
  Screen,
  ScreenCont,
  SignRoute,
  ScreenBack,
  ScreenShape,
  SignForm,
  GlobalStyle,
} from "./SignStyle";
import { ButtonCl } from "../reusable/ButtonStyle";
import { RootState } from "../../reduxstore/store";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../reduxstore/action/useraction/userAsine";
import { ToastContainer } from "react-toastify";
import TextField from "@mui/material/TextField";
function Signin() {
  const dispatch = useDispatch();
  const userSign = useSelector((state: RootState) => state.userSign);
  const { errorin } = userSign;
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });
  const handlertext = (e: any) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const signIn = () => {
    dispatch(Login(user));
  };
  return (
    <SignCont>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Screen>
        <ScreenCont>
          <SignForm>
            <TextField
              label="Email"
              name="email"
              variant="standard"
              style={{ margin: "10px", width: "50%" }}
              onChange={(e) => {
                handlertext(e);
              }}
            />

            <TextField
              label="Password"
              name="password"
              variant="standard"
              type="password"
              style={{ margin: "10px", width: "50%" }}
              onChange={(e) => {
                handlertext(e);
              }}
            />
          </SignForm>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              position: "absolute",
              bottom: "10%",
              left: "10%",
              right: "10%",
            }}
          >
            <ButtonCl onClick={() => signIn()}>Sign in</ButtonCl>
          </div>
        </ScreenCont>
        <ScreenBack>
          <ScreenShape
            backgroundColor={"white"}
            // borderRadius="10px 72px 10px 10px"
            // height="500"
            // width="500"
            // right="120"
            // top="-100"
            borderRadius="10px 72px 10px 10px"
            height="440"
            width="420"
            right="100"
            top="-100"
            zIndex={2}
          />
          <ScreenShape
            backgroundColor="#69167eb7"
            borderRadius="14px"
            height="220"
            width="220"
            right="0"
            top="-158"
            zIndex={0}
          />
          <ScreenShape
            backgroundColor="#69167eb7"
            borderRadius="32px"
            height="440"
            width="190"
            right="0"
            top="50"
            zIndex={0}
          />
          <ScreenShape
            backgroundColor="#69167eb7"
            borderRadius="32px"
            height="440"
            width="200"
            right="50"
            top="420"
            zIndex={0}
          />
        </ScreenBack>
      </Screen>
    </SignCont>
  );
}

export default Signin;
