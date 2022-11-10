import React, { useContext, useState } from "react";
import { GameContext } from "../Helpers/Context";

export default function CreditScreen() {

  const { userName, score, setScore, setUserName, gameState, setGameState } =
    useContext(GameContext);
  return (
    <div className="creditscreen">
      <div className="goback" onClick={()=>{setGameState('intro')}} >GO TO MAIN MENU</div>
      <div className="about">
        <h1>About</h1>
        <p>
          Hi , my name is{" "}
          <a target="blank" href="https://github.com/alexanastasgr">
            Alexander Anastasiadis
          </a>
          . I'm Front-end developer from Athens Greece 🇬🇷 . I love to create & design web apps for clients and friends.
        </p>
      </div>

      <div className="credits">
        <h1>Credits</h1>
        <p>For this project i used the followed</p>
      </div>
    </div>
  );
}
