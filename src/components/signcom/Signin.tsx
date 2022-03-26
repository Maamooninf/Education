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
  SignField,
  GlobalStyle,
  SignLabel,
} from "./SignStyle";
import { ButtonCl } from "../reusable/ButtonStyle";
import { RootState } from "../../reduxstore/store";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../reduxstore/action/useraction/userAsine";
import { ToastContainer } from "react-toastify";
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
            <SignField
              name="email"
              onChange={(e) => {
                handlertext(e);
              }}
              error={
                errorin
                  ? Object.keys(errorin).length !== 0
                    ? true
                    : false
                  : false
              }
            />
            <SignLabel>Email</SignLabel>
            <SignField
              name="password"
              type="password"
              onChange={(e) => {
                handlertext(e);
              }}
              error={
                errorin
                  ? Object.keys(errorin).length !== 0
                    ? true
                    : false
                  : false
              }
            />
            <SignLabel>Password</SignLabel>
          </SignForm>
          <ButtonCl onClick={() => signIn()}>Sign in</ButtonCl>
        </ScreenCont>
        <ScreenBack>
          <ScreenShape
            backgroundColor={"white"}
            borderRadius="10px 72px 10px 10px"
            height="520"
            width="520"
            right="120"
            top="-120"
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
        <SignRoute>Don't have an account?</SignRoute>
      </Screen>
    </SignCont>
  );
}

export default Signin;
