import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../reduxstore/action/useraction/userAsine";
import { RootState } from "../../reduxstore/store";
import {
  NavBarBody,
  NavLogoName,
  NavInfo,
  NavLinks,
  Navele,
} from "./NavBarStyle";
// import { ReactComponent as LogoSvg } from "../home/logo1.svg";
function NavBar() {
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
            <NavLinks to="/lang/12">Lectuers</NavLinks>
            <Navele onClick={() => sigout()}>Logout</Navele>
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
