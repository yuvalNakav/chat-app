// import userEvent from "@testing-library/user-event";

// function Message({ message, user }) {
//   const messageClass = message.uid === userEvent.id ? "received" : "sent";
//   return (
//     <div className={`message ${messageClass}`}>
//       <span className="name">{user.displayName}</span>
//       {/* <span className="time">{user.createdAt}</span> */}
//       <img className="image" src={user.photoURL} alt="user" />
//       <span>{message.text}</span>
//     </div>
//   );
// }

// export default Message;

import React, { useState } from "react";
import firebase from "firebase";
import "./ChatRoom.css";
const Message = ({ message }) => {
  const { id, text, uid, userName, createdAt, photoURL } = message;
  const messageClass =
    uid === firebase.auth().currentUser.uid ? "sent" : "received";
  const [showActionsButtons, setShowActionsButtons] = useState(false);
  const toggleCard = () => {
    setShowActionsButtons(!showActionsButtons);
  };
  console.log(message);
  return (
    <>
      <div className={`message ${messageClass}`}>
        <div className="contents" onClick={toggleCard}>
          <div className="user-name">
            <p>{userName}</p>
            <p>{createdAt.toDate().toLocaleTimeString("it-IT")}</p>
          </div>
          <div className="photo">
            <img src={photoURL} alt="avatar" />
          </div>
          <div className="text">
            <p>{text}</p>
          </div>
          <div
            style={{
              display:
                showActionsButtons && uid === firebase.auth().currentUser.uid
                  ? "block"
                  : "none",
            }}
            className="actions"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Message;
