import "./App.css";
import React, { useState, useContext } from "react";

// screens
import HomeScreen from "./Components/HomeScreen";
import GameScreen from "./Components/GameScreen";

// the game context from helpers
import { GameContext } from "./Helpers/Context";

function App() {
  const [gameState, setGameState] = useState("intro");

  return (
    <div className="App">
      <GameContext.Provider value={{ gameState, setGameState }}>
        {gameState === "intro" && <HomeScreen />}
        {gameState === "game" && <GameScreen />}
      </GameContext.Provider>
    </div>
  );
}

export default App;
