import React, { useContext } from "react";
import {BsCameraVideoFill} from "react-icons/bs";
import {AiOutlineUserAdd} from "react-icons/ai";
import {FiMoreHorizontal } from "react-icons/fi"
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
            <BsCameraVideoFill size={20} fill='white'/>
            <AiOutlineUserAdd size={20} fill='white'/>
            <FiMoreHorizontal size={20} fill='white'/>
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;




