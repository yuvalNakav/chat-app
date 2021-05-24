import { NavLink } from "react-router-dom";
import firebase from "firebase";
import "./NavBar.css";

function NavBar({ user, currentRoom, setShowListMenu }) {
  return (
    <div id="navbar">
      <NavLink className="nav-item" to="/rooms">
        {currentRoom} Chat Room
      </NavLink>
      <NavLink
        className="nav-item"
        to="/"
        onClick={() => {
          setShowListMenu(true);
        }}
      >
        home page-All Chats
      </NavLink>
      {user && (
        <NavLink
          id="sign-out"
          className="nav-item"
          onClick={() => {
            firebase.auth().signOut();
            console.log(user);
          }}
          to="/"
        >
          sign out
        </NavLink>
      )}
    </div>
  );
}

export default NavBar;
