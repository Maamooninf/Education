import React, { useEffect, useState } from "react";
import { DropBody, NavLinks } from "./NavBarStyle";
import Profile from "@material-ui/icons/AccountBox";
// import Exit from "@material-ui/icons/ExitToAppOutlined";
const DropDown: React.FC<{ drop: boolean }> = ({ drop }) => {
  // const [wa, setwa] = useState<boolean>(false);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setwa(drop);
  //   }, 100);

  //   return () => clearInterval(interval);
  // }, [drop]);
  return (
    <>
      {drop && (
        <DropBody>
          <NavLinks to={"/myprofile"} fontSize="0.9em">
            <Profile />
            My Profile
          </NavLinks>
        </DropBody>
      )}
    </>
  );
};

export default DropDown;
