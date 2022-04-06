import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userSign } from "./reducer/usereducer/userSignin";
import { userRigister } from "./reducer/usereducer/userSignup";
import { quesTion } from "./reducer/questionreducer.ts/questionR";
import { lecTure } from "./reducer/lecturereducer/lectureR";
import { lanGuage } from "./reducer/langreducer/langR";
import { userDash } from "./reducer/usereducer/userDash";
import { getSocket } from "./reducer/socketreducer/SocketReducer";
import { ConVersation } from "./reducer/contactr/conversation/converR";
const check = localStorage.getItem("UserData");
if (typeof check === "string") {
  var userInfo: any = JSON.parse(localStorage.getItem("UserData")!);
}

const initialstate: any = { userSign: { userInfo }, userRigister: {} };

const reducer = combineReducers({
  userSign: userSign,
  userRigister: userRigister,
  userDash: userDash,
  quesTion: quesTion,
  lecTure: lecTure,
  lanGuage: lanGuage,
  getSocket: getSocket,
  ConVersation: ConVersation,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "SUCCESS_SIGNOUT") {
    state = undefined;
  }
  return reducer(state, action);
};

export const Store =
  rootReducer &&
  createStore(
    rootReducer,
    initialstate,
    composeWithDevTools(applyMiddleware(thunk))
  );
//initMessageListener(store);

export type RootState = ReturnType<typeof reducer>;
