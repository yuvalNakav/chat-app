import React from "react";
import { Link, NavLink } from "react-router-dom";
import firebase from "firebase";
function NavBar(props) {
  return (
    <nav id="navbar">
      <NavLink className="nav-item" to="/rooms">
        chat rooms
      </NavLink>
      <NavLink className="nav-item" to="/">
        home page
      </NavLink>
      <button
        className="nav-item"
        onClick={() => {
          firebase.auth().signOut();
        }}
      >
        sign out
      </button>
    </nav>
  );
}

export default NavBar;
