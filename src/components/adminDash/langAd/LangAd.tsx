import { TextField } from "@mui/material";
import { AccountDiv, AccountInfo } from "../accountAd/AccounStyle";

function LangAd() {
  return (
    <AccountDiv>
      <AccountInfo>
        <TextField
          label="email"
          name="email"
          variant="standard"
          style={{ margin: "10px", width: "50%" }}
          onChange={(e) => {
            // handlertext(e);
          }}
        />
      </AccountInfo>
    </AccountDiv>
  );
}

export default LangAd;
