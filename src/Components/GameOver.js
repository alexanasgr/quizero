import React from "react";
import { useContext } from "react";
import { GameContext } from "../Helpers/Context";

export default function GameOver() {
  const { userName, score, setScore, setGameState } = useContext(GameContext);

  // restart quizero
  const restart = () => {
    setScore(0);
    setGameState("game");
  };
  return (
    <>
      <div className="nicejob">
        🏆 Great Job, <span>{userName}</span>
      </div>
      <h1>Your score is {score}</h1>

      <div class="buttons">
        <button className="btn restart" onClick={restart}>
          🚀 Restart
        </button>
        <button className="btn restart" onClick={restart}>
          📢 Share
        </button>
      </div>
    </>
  );
}
