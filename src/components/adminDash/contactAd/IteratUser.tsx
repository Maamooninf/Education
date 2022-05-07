import React from "react";
import { Conversation } from "../../../reduxstore/reducer/contactreducer/conversation/converRinter";
import { UserForSerach } from "../../../reduxstore/reducer/usereducer/userRinter";
import { OptionInput } from "../../proglang/ProStyle";
import "./ContactAdStyle.css";
interface Cust {
  us: UserForSerach;
  setconversation: React.Dispatch<React.SetStateAction<Conversation>>;
  setselected: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        _id: string;
      }[]
    >
  >;
  index: number;
}
function IteratUser({ us, setconversation, setselected, index }: Cust) {
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setconversation((prev) => {
        let members = [...prev.members, us._id];
        return { ...prev, members };
      });
      setselected((prev) => [...prev, { name: us.name, _id: us._id }]);
    } else {
      setconversation((prev) => {
        let pre = [...prev.members];
        let members = pre.filter((mem) => {
          return mem !== us._id;
        });
        return { ...prev, members };
      });
      setselected((prev) => {
        let pre = [...prev];
        let members = pre.filter((mem) => {
          return mem._id !== us._id;
        });
        return members;
      });
    }
  };

  return (
    <tr>
      <td data-label="Select">
        <OptionInput
          type="checkbox"
          defaultChecked={false}
          name="isTrue"
          onChange={(e) => handleChecked(e)}
        />
      </td>
      <td data-label="UserName">{us.name}</td>
      <td data-label="Email">{us.email}</td>
    </tr>
  );
}

export default IteratUser;
