import "./App.css";
import React from "react";
import { useState } from "react";

// the game context from helpers
import { GameContext } from "./Helpers/Context";

// screens
import HomeScreen from "./Components/HomeScreen";
import GameScreen from "./Components/GameScreen";
import AboutScreen from "./Components/AboutScreen";
import GameOver from "./Components/GameOver";

function App() {


  const [gameState, setGameState] = useState("intro");
  const [userName, setUserName] = useState("Guest");
  const [score, setScore] = useState(0);



  return (
    <div className="App">
      <GameContext.Provider value={{ 
        userName,
        setUserName,
        score,
        setScore,
        gameState,
        setGameState }}>
        {gameState === "intro" && <HomeScreen />}
        {gameState === "game" && <GameScreen />}
        {gameState === "about" && <AboutScreen />}
        {gameState === "finish" && <GameOver />}
      </GameContext.Provider>
    </div>
  );
}

export default App;
