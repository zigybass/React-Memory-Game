import React from "react";
import ImageHolder from "./components/Images";
import Jumbo from "./components/Jumbo";
import Header from "./components/Header";
// import { arrayExpression } from "@babel/types";

class App extends React.Component {
  state = {
    userScore: 5,
    highScore: 6
  };


  render() {
    return (
      <div>
        <Header userScore={this.state.userScore} highScore={this.state.highScore} />
        <Jumbo />
        <ImageHolder /> 
      </div>
    );
  }
}

export default App;
