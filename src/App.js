import "./App.css";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import ChatRoom from "./components/chatRoom/ChatRoom";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import { useState } from "react";
firebase.initializeApp({
  apiKey: "AIzaSyDL2FL502xNXJPUa6yj3I9aY8QNuTsuG00",
  authDomain: "fir-demo-15723.firebaseapp.com",
  projectId: "fir-demo-15723",
  storageBucket: "fir-demo-15723.appspot.com",
  messagingSenderId: "96684015271",
  appId: "1:96684015271:web:be8f7789410bcc13512582",
  measurementId: "G-QV62MGRZWY",
});

const auth = firebase.auth();
function App() {
  const [user] = useAuthState(auth);
  const [currentRoom, setCurrentRoom] = useState("general");
  const [showListMenu, setShowListMenu] = useState(true);
  return (
    <div className="App">
      <Router>
        <NavBar
          user={user}
          currentRoom={currentRoom}
          setShowListMenu={setShowListMenu}
        />
        <Switch>
          <Route exact path="/rooms">
            {user && currentRoom && (
              <ChatRoom user={user} currentRoom={currentRoom} />
            )}
          </Route>
          <Route exact path="/">
            {user ? (
              showListMenu && (
                <HomePage
                  user={user}
                  currentRoom={currentRoom}
                  setCurrentRoom={setCurrentRoom}
                  setShowListMenu={setShowListMenu}
                />
              )
            ) : (
              <Login />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
