import React, { useState } from "react";
import {Messagers, MyFriend} from "./widgets/constantas/DataChat";
import { ContactUI } from "./widgets/contacts";
import MessagersUI from "./widgets/messagers/components/messagers/MessagersUI";
import { Form } from "react-bootstrap";

export function ChapterTwo() {
  const myprofile = { id: "0419029203", name: "Febry" };

  const [selectedUser, setSelectedUser] = useState(0);
  const [selectedChat, setSelectedChat] = useState([]);

  const HandlerSelectedChat = (data) => {
    setSelectedUser(data);
    const the_msg = [...Messagers];
    const findChatByUserID = the_msg.find(
      (item) => item.user_id === data.user_id
    );
    if (findChatByUserID) {
      setSelectedChat(findChatByUserID.messages);
    } else {
      setSelectedChat([]);
    }
  };

  return (
    <div className="row p-5">
      <div className="col-md-3">
        {/* (Daftar kontak disini) */}
        {myprofile ? (
          <ContactUI
            my_account={myprofile}
            friends={MyFriend}
            selectedUser={selectedUser}
            HandlerSelectedChat={HandlerSelectedChat}
          />
        ) : (
          ""
        )}
      </div>

      <div className="col-md-9">
        {myprofile ? (
          <MessagersUI
            profile={myprofile}
            selectedUser={selectedUser}
            selectedChat={selectedChat}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}