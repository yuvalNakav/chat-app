import React from "react";
import { Link, NavLink } from "react-router-dom";
import firebase from "firebase";
import "./NavBar.css";
function NavBar({ user }) {
  return (
    <nav id="navbar">
      <NavLink className="nav-item" to="/rooms">
        chat rooms
      </NavLink>
      <NavLink className="nav-item" to="/">
        home page
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
    </nav>
  );
}

export default NavBar;
