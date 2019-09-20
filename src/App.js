import React from "react";
import ImageHolder from "./components/Images";
import Jumbo from "./components/Jumbo";
import Header from "./components/Header";
import { arrayExpression } from "@babel/types";

class App extends React.Component {
  state = {
    userScore: 0,
    highScore: 0
  };

  genImages = () => {
    for (let i = 0; i <= 12; i++) {
      return (
        <div>
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-aston-martin-db11-amr-manu-slide-4-1533936729.jpg?crop=0.822xw:1.00xh;0.0929xw,0&resize=640:*"></img>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Jumbo />
        <div>{genImages}</div>
      </div>
    );
  }
}

export default App;
