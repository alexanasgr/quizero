import React,{ useContext, useEffect, useState } from "react";
import { GameContext } from "../Helpers/Context";

import logo from '../icons/logo.png';


export default function HomeScreen() {
  const { userName, score, setScore, setUserName, gameState, setGameState } =
    useContext(GameContext);

  return (
    <div className="homescreen">
    
      <div className="appname">
        <img src={logo} className="logo" alt="logo"/>
        <h1>QUIZERO</h1>
      </div>

      <div className="forms">
        <h2>
          👋 Hi <span id="username">{userName}</span>
        </h2>

        <div className="nameForm">
          <p>Whats your name ?</p>
          <input
            type="text"
            onKeyUp={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setGameState("game");
          }}
        >
          🚀 Let's play
        </button>
        <button
          onClick={() => {
            setGameState("credits");
          }}
        >
          ❤️ Credits
        </button>

      </div>
    </div>
  );
}
