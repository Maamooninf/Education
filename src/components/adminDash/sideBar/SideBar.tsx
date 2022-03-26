import {
  SideBarBody,
  SideShapeBody,
  SlideShap,
  SlideLogoBody,
  SlideLogoItem,
  SlideShowOrHide,
} from "./SideBarStyle";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";
//import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AddOutlined from "@material-ui/icons/AddOutlined";
import { useState } from "react";
function SideBar() {
  const [toggle, settoggle] = useState<boolean>(true);
  const changetog = () => {
    settoggle(!toggle);
  };
  return (
    <SideBarBody toggle={toggle}>
      <SideShapeBody>
        <SlideShap />
        <SlideShap backgroundColor="rgb(245, 241, 7)" />
        <SlideShap backgroundColor="rgb(52, 200, 7)" />
        {toggle ? (
          <FirstPageIcon
            style={{ color: "gray", cursor: "pointer" }}
            onClick={() => changetog()}
          />
        ) : (
          <LastPageIcon
            style={{
              color: "gray",
              cursor: "pointer",
              position: "absolute",
              left: "10px",
            }}
            onClick={() => changetog()}
          />
        )}
      </SideShapeBody>
      <SlideLogoBody>
        <SlideLogoItem>
          <SlideShowOrHide toggle={toggle}>Keep Going</SlideShowOrHide>
        </SlideLogoItem>

        <SlideLogoItem>
          <SlideShowOrHide toggle={toggle}> Manage Lecture</SlideShowOrHide>
        </SlideLogoItem>
        <SlideLogoItem padding="20px 0px 0px 0px">
          <AddOutlined style={{ fontSize: "2.2em", height: "1.8em" }} />
          <SlideShowOrHide toggle={toggle}> Add Lecture</SlideShowOrHide>
        </SlideLogoItem>
      </SlideLogoBody>
    </SideBarBody>
  );
}

export default SideBar;
