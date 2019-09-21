import React from "react";
import ImageHolder from "./components/Images";
import Jumbo from "./components/Jumbo";
import Header from "./components/Header";
// import ImageRow from "./components/ImageRow";
// import { arrayExpression } from "@babel/types";

class App extends React.Component {
  state = {
    userScore: 0,
    highScore: 0
  };


  render() {
    let names = ["bergen", "Bern", "kyoto", "marrakech", "Rome-1", "tibet"]
    let images = names.map( (item, i) => {
      return (
        <ImageHolder key={item} id={i} src={require("./images/" + item + ".jpg")} />
      )
    })
    return (
      <div>
        <Header
          userScore={this.state.userScore}
          highScore={this.state.highScore}
        />
        <Jumbo correct="Correct!" wrong="Wrong..." />
        <div className="container imagecont">
          {images}
        </div>
      </div>
    );
  }
}

export default App;
