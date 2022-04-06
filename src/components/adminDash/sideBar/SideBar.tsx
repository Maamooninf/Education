import {
  SideBarBody,
  SideShapeBody,
  SideLogoBody,
  SideItem,
  SideShowOrHide,
  SideImage,
  SideNav,
} from "./SideBarStyle";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";
import HomeOutlines from "@material-ui/icons/Home";
import header from "../../../images/left-image.png";
import QuizIcon from "@mui/icons-material/Quiz";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupsIcon from "@mui/icons-material/Groups";
import { useState } from "react";
function SideBar() {
  const [toggle, settoggle] = useState<boolean>(false);
  const changetog = () => {
    settoggle(!toggle);
  };
  return (
    <SideBarBody toggle={toggle}>
      <SideShapeBody>
        {toggle ? (
          <FirstPageIcon
            style={{ color: "gray", cursor: "pointer", marginTop: "18px" }}
            onClick={() => changetog()}
          />
        ) : (
          <LastPageIcon
            style={{
              color: "gray",
              cursor: "pointer",
              marginTop: "20px",
            }}
            onClick={() => changetog()}
          />
        )}
      </SideShapeBody>
      <SideLogoBody>
        <SideItem>
          <SideShowOrHide toggle={toggle}>
            <SideImage src={header} />
            Admin
          </SideShowOrHide>
        </SideItem>
        <SideNav end to="/admindash">
          <SideItem>
            <HomeOutlines
              style={{
                fontSize: "1.5em",
                height: "1.6em",
                color: "gray",
                marginLeft: "2px",
              }}
            />
            <SideShowOrHide toggle={toggle}>Dashboard</SideShowOrHide>
          </SideItem>
        </SideNav>

        <SideNav end to="/admindash/lecture">
          <SideItem>
            <MenuBookIcon
              style={{ fontSize: "1.5em", height: "1.6em", color: "gray" }}
            />
            <SideShowOrHide toggle={toggle}> Add Lecture</SideShowOrHide>
          </SideItem>
        </SideNav>

        <SideNav end to="/admindash/question">
          <SideItem>
            <QuizIcon
              style={{
                fontSize: "1.5em",
                height: "1.6em",
                color: "inherit",
              }}
            />
            <SideShowOrHide toggle={toggle} style={{ color: "inherit" }}>
              Add Exerice
            </SideShowOrHide>
          </SideItem>
        </SideNav>
        <SideNav end to="/admindash/account">
          <SideItem>
            <SupervisorAccountIcon
              style={{
                fontSize: "1.5em",
                height: "1.6em",
                color: "inherit",
              }}
            />
            <SideShowOrHide toggle={toggle} style={{ color: "inherit" }}>
              Add Teacher
            </SideShowOrHide>
          </SideItem>
        </SideNav>

        <SideNav end to="/admindash/conver">
          <SideItem>
            <GroupsIcon
              style={{
                fontSize: "1.5em",
                height: "1.6em",
                color: "inherit",
              }}
            />
            <SideShowOrHide toggle={toggle} style={{ color: "inherit" }}>
              Add Teacher
            </SideShowOrHide>
          </SideItem>
        </SideNav>
      </SideLogoBody>
    </SideBarBody>
  );
}

export default SideBar;
