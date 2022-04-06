import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetLangs } from "../../../reduxstore/action/langaction/langCrud";
import { RootState } from "../../../reduxstore/store";
import { AccountDiv, AccountInfo } from "./AccounStyle";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Account } from "../../../reduxstore/reducer/usereducer/userRinter";
import { Lang } from "../../../reduxstore/reducer/langreducer/langRinter";
import { ButtonCl } from "../../reusable/ButtonStyle";
import { CreateAccount } from "../../../reduxstore/action/useraction/userAsup";

function AccountAd() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetLangs());
  }, [dispatch]);
  const LangRed = useSelector((state: RootState) => state.lanGuage);
  const { langDa } = LangRed;
  const [account, setaccount] = React.useState<Account>({
    email: "",
    expertise: [""],
    supername: "",
    profilePic: "",
  });
  console.log(account);
  const updateAccount = (e: any) => {
    setaccount((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <AccountDiv>
      <AccountInfo>
        {langDa && langDa.length > 0 ? (
          <Autocomplete
            disablePortal
            multiple
            onChange={(event, newValue) => {
              setaccount((preState) => {
                let expertise = [...preState.expertise];
                expertise = newValue?.map((lan) => {
                  return lan._id;
                });
                return { ...preState, expertise };
              });
            }}
            id="combo-box-demo"
            sx={{ minWidth: "200px" }}
            options={langDa}
            getOptionLabel={(option) => option.lang}
            isOptionEqualToValue={(option: Lang, value: Lang) =>
              option.lang === value.lang
            }
            renderInput={(params) => (
              <TextField {...params} label="Languages" />
            )}
          />
        ) : (
          ""
        )}
        <TextField
          label="name"
          name="name"
          variant="standard"
          style={{ margin: "10px" }}
          onChange={(e) => updateAccount(e)}
        />
        <TextField
          label="email"
          name="email"
          variant="standard"
          style={{ margin: "10px" }}
          onChange={(e) => updateAccount(e)}
        />
        <ButtonCl
          onClick={() => {
            dispatch(CreateAccount(account));
          }}
        >
          Create Account
        </ButtonCl>
      </AccountInfo>
    </AccountDiv>
  );
}

export default AccountAd;
