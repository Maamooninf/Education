import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import { ActiveUsers } from "../../../reduxstore/action/useraction/userDashAc";
import { RootState } from "../../../reduxstore/store";
import {
  DashHeader,
  HomeChart,
  HomeDashDiv,
  HomeDashText,
} from "./HomeDashStyle";
import HomeOutlines from "@material-ui/icons/Home";
function HomeDash() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ActiveUsers());
  }, [dispatch]);
  const userDash = useSelector((state: RootState) => state.userDash);
  const { totalusers } = userDash;
  return (
    <HomeDashDiv>
      <DashHeader>
        <HomeOutlines
          style={{
            fontSize: "2em",
            padding: "10px",
            color: "white",
            borderRadius: "4px",
            marginLeft: "2px",
            background: "linear-gradient(90deg,#da8cff,#9a55ff)",
            boxShadow: "0 3px 8.3px 0.7px rgb(163 93 255 / 35%)",
          }}
        />
        <HomeDashText>Dashboard</HomeDashText>
      </DashHeader>

      <HomeDashText>Active Users</HomeDashText>
      <HomeChart>
        <ResponsiveContainer width={"99%"} height={"100%"}>
          <LineChart data={totalusers}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="Active Users" stroke="#8884d8" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </HomeChart>
    </HomeDashDiv>
  );
}

export default HomeDash;
