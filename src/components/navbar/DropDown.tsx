import React from "react";
import { DropBody, NavLinks } from "./NavBarStyle";
import Profile from "@material-ui/icons/AccountBox";
const DropDown: React.FC<{ drop: boolean }> = ({ drop }) => {
  return (
    <>
      {drop && (
        <DropBody>
          <NavLinks to={"/myprofile"} fontSize="0.9em">
            <Profile />
            My Profile
          </NavLinks>
          <NavLinks to={"/chating"} fontSize="0.9em">
            <Profile />
            Chating
          </NavLinks>
        </DropBody>
      )}
    </>
  );
};

export default DropDown;
