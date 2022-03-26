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
  SignField,
  GlobalStyle,
  SignLabel,
} from "./SignStyle";
function SignUp() {
  const dispatch = useDispatch();
  const userRigister = useSelector((state: RootState) => state.userRigister);
  const { errorup } = userRigister;
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
            <SignField
              name="name"
              onChange={(e) => {
                handlertext(e);
              }}
              error={errorup ? (errorup.name ? true : false) : false}
            />
            <SignLabel>Name</SignLabel>

            <SignField
              name="email"
              onChange={(e) => {
                handlertext(e);
              }}
              error={errorup ? (errorup.email ? true : false) : false}
            />
            <SignLabel>Email</SignLabel>

            <SignField
              name="password"
              type="password"
              onChange={(e) => {
                handlertext(e);
              }}
              error={errorup ? (errorup.password ? true : false) : false}
            />
            <SignLabel>Password</SignLabel>
            <SignField
              name="confirmpassword"
              type="password"
              onChange={(e) => {
                handlertext(e);
              }}
              error={errorup ? (errorup.confirmpassword ? true : false) : false}
            />
            <SignLabel>Confirm password</SignLabel>
          </SignForm>
          <ButtonCl onClick={() => sign()}>Sign up</ButtonCl>
        </ScreenCont>
        <ScreenBack>
          <ScreenShape
            backgroundColor={"white"}
            borderRadius="10px 72px 10px 10px"
            height="520"
            width="520"
            right="120"
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
        <SignRoute>Already have an account?</SignRoute>
      </Screen>
    </SignCont>
  );
}

export default SignUp;
