import userEvent from "@testing-library/user-event";
import React from "react";
import "./ChatRoom.css";

function Message({ message, user }) {
  const messageClass = message.uid === userEvent.id ? "received" : "sent";
  return (
    <div className={`message ${messageClass}`}>
      <span className="name">{user.displayName}</span>
      <img className="image" src={user.photoURL} alt="user" />
      <span>{message.text}</span>
    </div>
  );
}

export default Message;
