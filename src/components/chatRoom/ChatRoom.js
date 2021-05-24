import { useState, useRef } from "react";
import firebase from "firebase";
import "./ChatRoom.css";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Message from "./Message";

const ChatRoom = ({ currentRoom }) => {
  const customRef = useRef();
  const messagesRef = firebase.firestore().collection("messages");

  const query = messagesRef
    .where("room", "==", currentRoom)
    .orderBy("createdAt")
    .limit(20);

  const [messages] = useCollectionData(query, { idField: "id" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();
    const { uid, photoURL, displayName } = firebase.auth().currentUser;
    await messagesRef.add({
      uid,
      photoURL,
      createdAt,
      text: message,
      room: currentRoom,
      userName: displayName,
    });

    setMessage("");
    customRef.current.scrollIntoView({ behavior: "smooth" });
  };
  console.log(messages);

  return (
    <div className="chat">
      <div className="messages">
        {messages &&
          messages.map((message, i) => <Message message={message} key={i} />)}
        <span ref={customRef}></span>
      </div>

      <form onSubmit={handleSubmit} className="message-form">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
          id="type-line"
        />
        <button type="submit" id="send" disabled={!message}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatRoom;
