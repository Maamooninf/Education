import axios from "axios";
import { Dispatch } from "react";
import { toast } from "react-toastify";
import { Account, UserDashInter } from "../../reducer/usereducer/userRinter";
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

export const GetEmployees = (langId: string) => {
  return async (dispatch: Dispatch<ActionUser>, getState: () => RootState) => {
    try {
      dispatch({ type: "REQUEST_GET_USERS" });
      const {
        userSign: { userInfo },
      } = getState();
      const { data } = await axios.get<Account[]>(
        `http://localhost:4010/account/${langId}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo.accesstoken ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({ type: "SUCCESS_GET_TEACHERS", payload: data });
    } catch (err: any) {
      toast.error(err.message);
      dispatch({ type: "FAILED_GET_USERS", payload: err });
    }
  };
};
