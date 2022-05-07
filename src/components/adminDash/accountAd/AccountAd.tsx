import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AccountDiv, AccountInfo } from "./AccounStyle";
import TextField from "@mui/material/TextField";
import { UserOrig } from "../../../reduxstore/reducer/usereducer/userRinter";
import { ButtonCl } from "../../reusable/ButtonStyle";
import { CreateAccount } from "../../../reduxstore/action/useraction/userAsup";
import { RootState } from "../../../reduxstore/store";
import { Autocomplete } from "@mui/material";
import { Role } from "../../../reduxstore/reducer/rolereducer/roleRinter";
import { GetRoles } from "../../../reduxstore/action/roleaction/roleInfo";
import { DashHeader, HomeDashText } from "../homeDash/HomeDashStyle";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AutoComLang from "../../reusable/AutoComLang";
function AccountAd() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetRoles());
  }, []);
  const RoleRed = useSelector((state: RootState) => state.roLe);
  const { roleDa } = RoleRed;

  const [account, setAccount] = useState<UserOrig>({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    languages: [],
    roles: [],
  });
  const handlertext = (e: any) => {
    setAccount((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addLanguageH = (newValue: any) => {
    setAccount((preState) => {
      let languages = [...preState.languages];
      languages =
        newValue?.map((lan: any) => {
          return lan._id;
        }) || [];
      return { ...preState, languages };
    });
  };

  const sign = () => {
    dispatch(CreateAccount(account));
  };

  return (
    <AccountDiv>
      <DashHeader>
        <SupervisorAccountIcon
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
        <HomeDashText>Create Account</HomeDashText>
      </DashHeader>
      <AccountInfo>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <TextField
            label="name"
            name="name"
            variant="standard"
            style={{ margin: "10px" }}
            onChange={(e) => handlertext(e)}
          />
          <TextField
            label="email"
            name="email"
            variant="standard"
            style={{ margin: "10px" }}
            onChange={(e) => handlertext(e)}
          />
          <TextField
            label="password"
            name="password"
            variant="standard"
            style={{ margin: "10px" }}
            onChange={(e) => {
              handlertext(e);
            }}
          />
          <TextField
            label="Confirm password"
            name="confirmpassword"
            variant="standard"
            style={{ margin: "10px" }}
            onChange={(e) => {
              handlertext(e);
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <AutoComLang
            setState={addLanguageH}
            multiple={true}
            label={"Experiances"}
          />
          {roleDa && roleDa.length > 0 ? (
            <Autocomplete
              disablePortal
              multiple
              onChange={(event, newValue) => {
                setAccount((preState) => {
                  let roles = [...preState.roles];
                  roles = newValue?.map((lan) => {
                    return lan._id;
                  });
                  return { ...preState, roles };
                });
              }}
              id="combo-box-demo"
              sx={{ width: "250px", margin: "10px 0px" }}
              options={roleDa}
              getOptionLabel={(option) => option.prival}
              isOptionEqualToValue={(option: Role, value: Role) =>
                option.prival === value.prival
              }
              renderInput={(params) => <TextField {...params} label="Roles" />}
            />
          ) : (
            ""
          )}
        </div>
      </AccountInfo>
      <ButtonCl
        onClick={() => {
          sign();
        }}
      >
        Create Account
      </ButtonCl>
    </AccountDiv>
  );
}

export default AccountAd;
