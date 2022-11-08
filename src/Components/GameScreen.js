import React, { useState } from "react";
import { Questions } from "../Helpers/Questions";

export default function GameScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selOption, setSelOption] = useState("");
  const [score,setScore] = useState(0)

// check for correct answer
  const submitAnswer = () => {
    

        if(selOption === Questions[currentQuestion].correct){
           setScore(score + Questions[currentQuestion].points)
           setCurrentQuestion(currentQuestion + 1)

        }

  }

  return (
    <div className="gamescreen">
      <div className="score">
        <h1>
          Score: <span id="score">{score}</span>
        </h1>
      </div>
      <div className="question">
        <h1>💬 {Questions[currentQuestion].question}</h1>
      </div>

     

      <div className="answers">
        <div className="answer" onClick={()=>{setSelOption(1)}}>{Questions[currentQuestion].options[1]}</div>
        <div className="answer" onClick={()=>{setSelOption(2)}}>{Questions[currentQuestion].options[2]}</div>
        <div className="answer" onClick={()=>{setSelOption(3)}}>{Questions[currentQuestion].options[3]}</div>
        <div className="answer" onClick={()=>{setSelOption(4)}}>{Questions[currentQuestion].options[4]}</div>
      </div>

      <div className="submitanswer" onClick={()=>{submitAnswer()}}>NEXT QUESTION</div>
    </div>
  );
}
