import React, { useState } from "react";
import firebase, { firestore } from "firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Message from "./Message";
import "./ChatRoom.css";

function ChatRoom({ user }) {
  const [text, setText] = useState("");

  const firestore = firebase.firestore();
  const storage = firebase.storage();

  const messageRef = firestore.collection("messages");

  const query = messageRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idFiled: "id" });

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = user;
    await messageRef.add({
      text: text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setText("");
    e.target.value = "";
  };
  return (
    <div className="chat">
      chatRoom
      {messages?.map((message) => (
        <Message message={message} user={user} key={message.id} />
      ))}
      <form className="message-form" onSubmit={sendMessage}>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Write a message"
          id="type-line"
        />
        <button type="submit" id="send">
          send
        </button>
      </form>
    </div>
  );
}

export default ChatRoom;
