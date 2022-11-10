import React, { useState, useContext } from "react";
import { Questions } from "../Helpers/Questions";
import { GameContext } from "../Helpers/Context";

export default function GameScreen() {
  const { score, setScore, setGameState } = useContext(GameContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selOption, setSelOption] = useState("");

  // check for correct answer
  const submitAnswer = () => {
    if (selOption === Questions[currentQuestion].correct) {
      setScore(score + Questions[currentQuestion].points);
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  // finalize the game
  const finishGame = () => {
    setGameState("finish");
  };

  return (
    <div className="gamescreen">
      <div className="score">
        <h1>
          Your Score: <span id="score">{score}</span>
        </h1>
      </div>
      <div className="question">
        <h1>💬 {Questions[currentQuestion].question}</h1>
      </div>

      <div className="answers">
        <div
          className="answer"
          onClick={() => {
            setSelOption(1);
          }}
        >
          {Questions[currentQuestion].options[1]}
        </div>
        <div
          className="answer"
          onClick={() => {
            setSelOption(2);
          }}
        >
          {Questions[currentQuestion].options[2]}
        </div>
        <div
          className="answer"
          onClick={() => {
            setSelOption(3);
          }}
        >
          {Questions[currentQuestion].options[3]}
        </div>
        <div
          className="answer"
          onClick={() => {
            setSelOption(4);
          }}
        >
          {Questions[currentQuestion].options[4]}
        </div>
      </div>

      <div className="gamebuttons">
        <div className="">EXIT</div>
        {currentQuestion === Questions.length - 1 ? (
          <div
            className="submitanswer"
            onClick={() => {
              finishGame();
            }}
          >
            Finish Game
          </div>
        ) : (
          <div
            className="submitanswer"
            onClick={() => {
              submitAnswer();
            }}
          >
            NEXT QUESTION
          </div>
        )}
      </div>
    </div>
  );
}
