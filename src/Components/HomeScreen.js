import React, { useContext, useState } from "react";
import { GameContext } from "../Helpers/Context";

export default function HomeScreen() {
  const { userName, setUserName, gameState, setGameState } =
    useContext(GameContext);
  const [score] = useState(0);

  return (
    <div className="homescreen">
      <div className="appname">
        <h1>QUIZERO</h1>
      </div>

      <div className="forms">
        <h2>
          👋 Hi <span id="username">{userName}</span>
        </h2>

        <div className="nameForm">
          <p>Insert your name:</p>
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
          👍 Let's play
        </button>
        <button
          onClick={() => {
            setGameState("about");
          }}
        >
          🌐 ABOUT
        </button>
      </div>
    </div>
  );
}
