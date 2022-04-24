import React from "react";
import Profile from "./Profile/Profile";
import negan from "./images/negan.jpg";
import "./styles.css";

export default function App() {
  function handleName(name) {
    alert(`Hello my name is ${name}`);
  }

  return (
    <div className="App">
      <Profile
        fullName="alam"
        bio="Hello "
        profession="Developer"
        handleName={handleName}
      >
        <img
          style={{ borderRadius: "100%", width: "200px", height: "200px" }}
          src={negan}
          alt="avatar"
        />
      </Profile>
      <Profile
        fullName="alammmmmmmmmmmmmmmmmmm"
        bio="Hello , my name is alam"
        profession="dev"
        handleName={handleName}
      >
        <img
          style={{ borderRadius: "100%", width: "200px", height: "200px" }}
          src={negan}
          alt="avatar"
        />
      </Profile>
    </div>
  );
}
