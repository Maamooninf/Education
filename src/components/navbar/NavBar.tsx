import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../reduxstore/action/useraction/userAsine";
import { RootState } from "../../reduxstore/store";
import {
  NavBarBody,
  NavLogoName,
  NavInfo,
  NavLinks,
  Navele,
  NavImg,
} from "./NavBarStyle";
import head from "../../images/right-image.png";
import { useState } from "react";
import DropDown from "./DropDown";
import Exit from "@material-ui/icons/ExitToAppOutlined";
import Arrow from "@material-ui/icons/ArrowDownward";
// import { ReactComponent as LogoSvg } from "../home/logo1.svg";
function NavBar() {
  const [drop, setdrop] = useState<boolean>(false);
  const useSign = useSelector((state: RootState) => state.userSign);
  const { userInfo } = useSign;
  const dispatch = useDispatch();
  const sigout = () => {
    dispatch(Logout());
  };
  return (
    <NavBarBody>
      <NavLinks to="/">
        <NavLogoName>Thaber</NavLogoName>
      </NavLinks>
      <NavInfo>
        {userInfo && Object.keys(userInfo).length > 0 ? (
          <>
            <Navele onClick={() => setdrop(!drop)}>
              <NavImg src={head} />
              <Arrow style={{ fontSize: "0.9em" }} />
              <DropDown drop={drop} />
            </Navele>
            <Navele onClick={() => sigout()}>
              <Exit />
            </Navele>
          </>
        ) : (
          <>
            <NavLinks to="/signin">Sign in</NavLinks>
            <NavLinks to="/signup">Register</NavLinks>
          </>
        )}
      </NavInfo>
    </NavBarBody>
  );
}

export default NavBar;
