import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetLangs } from "../../../reduxstore/action/langaction/langCrud";
import { GetEmployees } from "../../../reduxstore/action/useraction/userDashAc";
import { Conversation } from "../../../reduxstore/reducer/contactr/conversation/converRinter";
import { Lang } from "../../../reduxstore/reducer/langreducer/langRinter";
import { RootState } from "../../../reduxstore/store";

import { AccountDiv, AccountInfo } from "../accountAd/AccounStyle";
function ContactAd() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetLangs());
  }, [dispatch]);

  const LangRed = useSelector((state: RootState) => state.lanGuage);
  const { langDa } = LangRed;
  const [conversation, setconversation] = useState<Conversation>({
    title: "",
    members: [],
    picture: "",
    supervisor: [],
    language: "",
  });
  useEffect(() => {
    if (conversation.language && conversation.language !== "") {
      //GetEmployees
      dispatch(GetEmployees(conversation.language));
    }
  }, [conversation.language]);
  const updateConverstion = (e: any) => {
    setconversation((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <AccountDiv>
      <AccountInfo>
        {langDa && langDa.length > 0 ? (
          <Autocomplete
            disablePortal
            onChange={(event, newValue) => {
              setconversation((prev) => ({
                ...prev,
                language: newValue ? newValue._id : "",
              }));
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
          label="Title"
          name="title"
          variant="standard"
          style={{ margin: "10px" }}
          onChange={(e) => {
            updateConverstion(e);
          }}
        />
      </AccountInfo>
    </AccountDiv>
  );
}

export default ContactAd;
