import React, { useContext } from "react";
import { GameContext } from "../Helpers/Context";

export default function HomeScreen() {
  const { gameState, setGameState } = useContext(GameContext);
  return (
    <div className="homescreen">
      <div className="appname">
        <h1>Quizeroo</h1>
        <p>Version 1.0 written with React.js</p>
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setGameState("game");
          }}
        >
          👍 START
        </button>
        <button>🌐 ABOUT</button>
      </div>
    </div>
  );
}
