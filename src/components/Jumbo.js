import React from "react";

function jumbo(props) {
  return (
    <div>
      <div className="jumbotron">
        <h1>Memory Game</h1>
        <h5>
          Click on the images to get a point. Clicking on the same image twice
          will set your score back to zero.
        </h5>
        <br></br>
        <h4 className="guessCard">You guessed {props.correct}</h4>
      </div>
    </div>
  );
}

export default jumbo;
