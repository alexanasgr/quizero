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
      <div className="nicejob">🏆 Great Job, {userName}</div>
      <h1>Score is {score}</h1>

      <div class="buttons">
        <button className="restart" onClick={restart}>
          🚀 Restart Quiz
        </button>
      </div>
    </>
  );
}
