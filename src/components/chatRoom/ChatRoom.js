import { useState, useRef, useEffect } from "react";
import firebase from "firebase";
import "./ChatRoom.css";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Message from "./Message";

const ChatRoom = ({ currentRoom }) => {
  const customRef = useRef();
  const messagesRef = firebase.firestore().collection("messages");

  const [messages, loading] = useCollectionData(
    messagesRef.limit(20).orderBy("createdAt")
  );
  const [message, setMessage] = useState("");
  const [relevantMessages, setRelevantMessages] = useState([]);

  useEffect(
    () =>
      messages
        ? setRelevantMessages(
            messages.filter((message) => message.room === currentRoom)
          )
        : console.log("no messages!"),
    [messages]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdAt = new Date();
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

  return (
    <div className="chat">
      <div className="messages">
        {relevantMessages &&
          relevantMessages.map((message, i) => (
            <Message message={message} key={i} />
          ))}
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
