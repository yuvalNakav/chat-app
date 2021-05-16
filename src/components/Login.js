import React from "react";
import firebase from "firebase";

function Login() {
  const SignUpWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  return (
    <div>
      Sign Up
      <button onClick={SignUpWithGoogle}>Sign Up Using Google</button>
    </div>
  );
}
export default Login;
