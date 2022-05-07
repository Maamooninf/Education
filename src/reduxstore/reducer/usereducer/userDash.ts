import { ActionUser } from "../../action/useraction/actionInterface";
import { UserDashState, UserForSerach } from "./userRinter";

export const userDash = (
  state: UserDashState = {
    userload: false,
    users: [],
    totalusers: [],
    totalUsers: 0,
    usererror: {},
  },
  action: ActionUser
) => {
  switch (action.type) {
    case "REQUEST_GET_USERS":
      return { ...state, userload: true, users: [] };
    case "SUCCESS_GET_USERS_CONVERSATION":
      return { ...state, userload: false, users: action.payload };
    case "UPDATE_USERS_CONVERSATION":
      let inconver = [...state.users];
      let newarr = inconver.map((inc) => {
        if (inc._id === action.payload._id) {
          return action.payload;
        } else return inc;
      });

      return { ...state, userload: false, users: newarr };
    case "ADD_USER_CONVERSATION_N":
      return {
        ...state,
        userload: false,
        users: [...state.users, action.payload],
      };
    case "DELETE_USER_CONVERSATION":
      let inconve: UserForSerach[] = [];
      state.users.forEach((inc) => {
        if (inc._id !== action.payload) {
          inconve.push(inc);
        }
      });
      return { ...state, userload: false, users: inconve };
    case "SUCCESS_GET_USERS":
      return {
        ...state,
        userload: false,
        totalusers: action.payload,
        usererror: {},
      };
    case "SUCCESS_GET_USERS_ALL":
      return {
        ...state,
        userload: false,
        users: action.payload.users,
        totalUsers: action.payload.totalCount[0]
          ? action.payload.totalCount[0].total
          : 0,
        usererror: {},
      };
    case "FAILED_GET_USERS":
      return {
        ...state,
        userload: false,
        usererror: action.payload,
        users: [],
        totalUsers: 0,
      };

    default: {
      return state;
    }
  }
};
