import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetLangs } from "../../reduxstore/action/langaction/langCrud";
import { Lang } from "../../reduxstore/reducer/langreducer/langRinter";
import { RootState } from "../../reduxstore/store";
interface AutoCom {
  setState: any;
  multiple: boolean;
  label: string;
}
function AutoComLang(props: AutoCom) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetLangs());
  }, [dispatch]);
  const LangRed = useSelector((state: RootState) => state.lanGuage);
  const { langDa } = LangRed;
  return (
    <Autocomplete
      disablePortal
      multiple={props.multiple}
      onChange={(ev, newValue) => {
        if (newValue) props.setState(newValue);
      }}
      id="combo-box-demo"
      sx={{
        width: "250px",
        margin: "20px 0px 0px 0px",
      }}
      options={langDa}
      getOptionLabel={(option) => option.lang}
      isOptionEqualToValue={(option: Lang, value: Lang) =>
        option.lang === value.lang
      }
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
}

export default AutoComLang;
