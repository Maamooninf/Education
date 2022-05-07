import axios, { CancelTokenSource } from "axios";
import { Dispatch } from "react";
import { toast } from "react-toastify";
import {
  UserDashInter,
  UserForSerach,
  UserSearch,
} from "../../reducer/usereducer/userRinter";
import { RootState } from "../../store";
import { ActionUser } from "./actionInterface";

export const ActiveUsers = () => {
  return async (dispatch: Dispatch<ActionUser>, getState: () => RootState) => {
    try {
      dispatch({ type: "REQUEST_GET_USERS" });
      const {
        userSign: { userInfo },
      } = getState();
      const { data } = await axios.get<UserDashInter[]>(
        "http://localhost:4010/user/numbers",
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo.accesstoken ? userInfo.accesstoken : "",
          },
        }
      );
      const statsList: UserDashInter[] = data.sort(function (a: any, b: any) {
        return a._id - b._id;
      });
      const month = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let arr: any[] = [];
      for (var i = 0; i < statsList.length; i++) {
        arr.push({
          name: month[statsList[i]._id - 1],
          "Active Users": data[i].total,
        });
      }
      dispatch({ type: "SUCCESS_GET_USERS", payload: arr });
    } catch (err: any) {
      if (err.response) {
        toast.error("Error");
        dispatch({ type: "FAILED_GET_USERS", payload: err.response.data });
      } else {
        toast.error(err.message);
        dispatch({ type: "FAILED_GET_USERS", payload: err });
      }
    }
  };
};

export const GetUsers = (query: string, cacelToken: CancelTokenSource) => {
  return async (dispatch: Dispatch<ActionUser>, getState: () => RootState) => {
    try {
      dispatch({ type: "REQUEST_GET_USERS" });
      const {
        userSign: { userInfo },
      } = getState();
      const { data } = await axios.get<UserSearch[]>(
        `http://localhost:4010/user/allusers${query}`,
        {
          cancelToken: cacelToken.token,
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo.accesstoken ? userInfo.accesstoken : "",
          },
        }
      );
      if (data) dispatch({ type: "SUCCESS_GET_USERS_ALL", payload: data[0] });
    } catch (err: any) {
      console.log(err);
      dispatch({ type: "FAILED_GET_USERS", payload: err });
    }
  };
};

export const GetUsersInConv = () => {
  return async (dispatch: Dispatch<ActionUser>, getState: () => RootState) => {
    try {
      dispatch({ type: "REQUEST_GET_USERS" });
      const {
        userSign: { userInfo },
      } = getState();
      const {
        ConVersation: { currentChat },
      } = getState();
      const { data } = await axios.get<any[]>(
        `http://localhost:4010/conversation/${currentChat?._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo.accesstoken ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({
        type: "SUCCESS_GET_USERS_CONVERSATION",
        payload: data[0].members,
      });
    } catch (err: any) {
      console.log(err);
      dispatch({ type: "FAILED_GET_USERS", payload: err });
    }
  };
};
export const UpdateUsersInConv = (user: UserForSerach) => {
  return async (dispatch: Dispatch<ActionUser>) => {
    try {
      dispatch({
        type: "UPDATE_USERS_CONVERSATION",
        payload: user,
      });
    } catch (err: any) {
      console.log(err);
      dispatch({ type: "FAILED_GET_USERS", payload: err });
    }
  };
};
