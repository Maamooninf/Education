import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Register } from "../../reduxstore/action/useraction/userAsup";
import { User } from "../../reduxstore/reducer/usereducer/userRinter";
import { RootState } from "../../reduxstore/store";
import { ButtonCl } from "../reusable/ButtonStyle";
import { ToastContainer } from "react-toastify";
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
import TextField from "@mui/material/TextField";
function SignUp() {
  const dispatch = useDispatch();
  const userRigister = useSelector((state: RootState) => state.userRigister);
  // const { errorup } = userRigister;
  const [user, setUser] = useState<User>({
    name: "",
    confirmpassword: "",
    email: "",
    password: "",
  });
  const handlertext = (e: any) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const sign = () => {
    dispatch(Register(user));
  };

  return (
    <SignCont>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Screen>
        <ScreenCont>
          <SignForm>
            <TextField
              label="name"
              name="name"
              variant="standard"
              style={{ margin: "10px", width: "45%" }}
              onChange={(e) => {
                handlertext(e);
              }}
            />

            <TextField
              label="email"
              name="email"
              variant="standard"
              style={{ margin: "10px", width: "45%" }}
              onChange={(e) => {
                handlertext(e);
              }}
            />

            <TextField
              label="password"
              name="password"
              variant="standard"
              style={{ margin: "10px", width: "45%" }}
              onChange={(e) => {
                handlertext(e);
              }}
            />

            <TextField
              label="confirm password"
              name="confirmpassword"
              variant="standard"
              style={{ margin: "10px", width: "45%" }}
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
              bottom: "8%",
              left: "10%",
              right: "10%",
            }}
          >
            <ButtonCl onClick={() => sign()}>Sign up</ButtonCl>
          </div>
        </ScreenCont>

        <ScreenBack>
          <ScreenShape
            backgroundColor={"white"}
            borderRadius="10px 72px 10px 10px"
            height="440"
            width="420"
            right="100"
            top="-50"
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
        {/* <SignRoute>Already have an account?</SignRoute>  */}
      </Screen>
    </SignCont>
  );
}

export default SignUp;
