import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = ({ currentRoom, setShowListMenu, setCurrentRoom }) => {
  const handleRoomChange = (room) => {
    setCurrentRoom(room);
    setShowListMenu(false);
    console.log(room);
  };
  return (
    <div className="HomePage">
      <h1 id="header">Select chat</h1>
      <ul>
        <Link
          className="chat-link"
          to="/rooms"
          onClick={() => {
            handleRoomChange("HTML");
          }}
        >
          HTML
        </Link>
        <Link
          to="/rooms"
          className="chat-link"
          onClick={() => {
            handleRoomChange("CSS");
          }}
        >
          CSS
        </Link>
        <Link
          to="/rooms"
          className="chat-link"
          onClick={() => {
            handleRoomChange("General");
          }}
        >
          General
        </Link>
        <Link
          to="/rooms"
          className="chat-link"
          onClick={() => {
            handleRoomChange("ReactJs");
          }}
        >
          ReactJs
        </Link>
        <Link
          to="/rooms"
          className="chat-link"
          onClick={() => {
            handleRoomChange("JavaScript");
          }}
        >
          JavaScript
        </Link>
      </ul>
    </div>
  );
};

export default HomePage;
