import userEvent from "@testing-library/user-event";
import React from "react";

function Message({ message }) {
  const messageClass = message.uid === userEvent.id ? "sent" : "received";
  return (
    <div>
      <p className={`message ${messageClass}`}>{message.text}</p>
    </div>
  );
}

export default Message;
