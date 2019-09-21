import React from "react";
import ImageHolder from "./components/Images";
import Jumbo from "./components/Jumbo";
import Header from "./components/Header";
// import { arrayExpression } from "@babel/types";

class App extends React.Component {
  state = {
    userScore: 0,
    highScore: 0
  };


  render() {
    let names = ["bergen", "Bern", "kyoto", "marrakech", "Rome-1", "tibet"]
    let images = names.map( item => {
      return (
        <ImageHolder key={item} src={require("./images/" + item + ".jpg")} />
      )
    })
    return (
      <div>
        <Header
          userScore={this.state.userScore}
          highScore={this.state.highScore}
        />
        <Jumbo correct="Correct!" wrong="Wrong..." />
        {images}  
      </div>
    );
  }
}

export default App;
