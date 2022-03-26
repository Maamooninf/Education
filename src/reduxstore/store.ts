import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userSign } from "./reducer/usereducer/userSignin";
import { userRigister } from "./reducer/usereducer/userSignup";
import { quesTion } from "./reducer/questionreducer.ts/questionR";
import { lecTure } from "./reducer/lecturereducer/lectureR";
const check = localStorage.getItem("UserData");
if (typeof check === "string") {
  var userInfo: any = JSON.parse(localStorage.getItem("UserData")!);
}

const initialstate: any = { userSign: { userInfo }, userRigister: {} };
const reducer = combineReducers({
  userSign: userSign,
  userRigister: userRigister,
  quesTion: quesTion,
  lecTure: lecTure,
});
export const Store = createStore(
  reducer,
  initialstate,
  composeWithDevTools(applyMiddleware(thunk))
);
//initMessageListener(store);

export type RootState = ReturnType<typeof reducer>;
