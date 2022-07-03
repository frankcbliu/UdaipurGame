import React, { Component } from "react";
import TemplatePage from "./templatePage";
import "./styles/resultPage.css";
class ResultPage extends Component {
  render() {
    const playerID = this.props.playerID;
    const gameOver = this.props.gameOver;
    const iWon = String(gameOver.winner) === String(playerID);
    const content = (
      <>
        <div>
          {iWon ? "恭喜你赢了！！！!" : "GG思密达！！！惜败！！"}
        </div>
        <div class="scoreboard">
          <div
            class={
              "score-item " +
              (String(gameOver.winner) === "0" ? "winner " : "loser ") +
              (playerID === "0" ? "me" : "")
            }
          >
            <span class="username">
              {playerID === "0" ? "你" : "对手"}
            </span>
            <span class="score">{gameOver.scores[0]}</span>
          </div>
          <div
            class={
              "score-item " +
              (String(gameOver.winner) === "1" ? "winner " : "loser ") +
              (playerID === "1" ? "me" : "")
            }
          >
            <span class="username">
              {playerID === "1" ? "你" : "对手"}
            </span>
            <span class="score"> {gameOver.scores[1]}</span>
          </div>
        </div>
      </>
    );
    return <TemplatePage content={content}></TemplatePage>;
  }
}

export default ResultPage;
