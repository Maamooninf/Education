import "./ContactAdStyle.css";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetLangs } from "../../../reduxstore/action/langaction/langCrud";
import { GetUsers } from "../../../reduxstore/action/useraction/userDashAc";
import { Conversation } from "../../../reduxstore/reducer/contactreducer/conversation/converRinter";
import { Lang } from "../../../reduxstore/reducer/langreducer/langRinter";
import { RootState } from "../../../reduxstore/store";

import { AccountDiv, AccountInfo } from "../accountAd/AccounStyle";
import { DashHeader, HomeDashText } from "../homeDash/HomeDashStyle";
import GroupsIcon from "@mui/icons-material/Groups";
import FooterPagination from "../pagination/FooterPagination";
import axios, { CancelTokenSource } from "axios";
import IteratUser from "./IteratUser";
import { ButtonCl } from "../../reusable/ButtonStyle";
import {
  AddConversation,
  CreateConversation,
} from "../../../reduxstore/action/contacta/conversation/convACrud";
let cancelToken: CancelTokenSource;
function ContactAd() {
  let PageSize = 5;
  const dispatch = useDispatch();

  const LangRed = useSelector((state: RootState) => state.lanGuage);
  const UserRed = useSelector((state: RootState) => state.userDash);
  const [selected, setselected] = useState<{ name: string; _id: string }[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setfilter] = useState("");
  const { langDa } = LangRed;
  const { users, totalUsers } = UserRed;

  const [conversation, setconversation] = useState<Conversation>({
    _id: "",
    title: "",
    members: [],
    picture: "",
    language: "",
  });
  useEffect(() => {
    dispatch(GetLangs());
  }, [dispatch]);

  useEffect(() => {
    if (conversation.language) {
      const searchTerm = `?filterName=${filter}&page=${currentPage}&language=${conversation.language}`;
      if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel("Operation canceled due to new request.");
      }
      cancelToken = axios.CancelToken.source();

      dispatch(GetUsers(searchTerm, cancelToken));
    }
  }, [conversation.language, dispatch]);

  const updateConverstion = (e: any) => {
    setconversation((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSearchChange = async (e: any) => {
    setfilter(e.target.value);
    if (conversation.language) {
      const searchTerm = `?filterName=${e.target.value}&page=${currentPage}&language=${conversation.language}`;
      if (typeof cancelToken !== typeof undefined) {
        cancelToken.cancel("Operation canceled due to new request.");
      }
      cancelToken = axios.CancelToken.source();

      dispatch(GetUsers(searchTerm, cancelToken));
    }
  };
  //AddConversation
  const handlecreateconv = () => {
    dispatch(CreateConversation(conversation));
  };
  return (
    <AccountDiv>
      <DashHeader>
        <GroupsIcon
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
        <HomeDashText>Create Group</HomeDashText>
      </DashHeader>
      <AccountInfo>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
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
              sx={{ minWidth: "200px", marginBottom: "10px" }}
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
            label="Find Users"
            name="title"
            variant="standard"
            style={{ margin: "10px" }}
            onChange={(e) => {
              handleSearchChange(e);
            }}
          />
        </div>

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

      {selected?.map((sel) => {
        return <div key={sel._id}>{sel.name}</div>;
      })}

      <table>
        <caption>Available Users</caption>
        <thead>
          <tr>
            <th scope="col">Select</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((us, index) => {
            return (
              <IteratUser
                us={us}
                setconversation={setconversation}
                setselected={setselected}
                index={index}
                key={us._id}
              />
            );
          })}
        </tbody>
      </table>
      <FooterPagination
        currentPage={currentPage}
        totalCount={totalUsers}
        pageSize={PageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
      <ButtonCl onClick={() => handlecreateconv()}>Create Group</ButtonCl>
    </AccountDiv>
  );
}

export default ContactAd;
