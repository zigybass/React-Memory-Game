import React from "react";
import ImageHolder from "./components/Images";
import Jumbo from "./components/Jumbo";
import Header from "./components/Header";
// import { arrayExpression } from "@babel/types";

class App extends React.Component {
  state = {
    userScore: 2,
    highScore: 3
  };



  render() {
    return (
      <div>
        <Header userScore={this.state.userScore} highScore={this.state.highScore} />
        <Jumbo correct="Correct!" wrong="Wrong..." />
        <ImageHolder className="image" /> 
      </div>
    );
  }
}

export default App;
