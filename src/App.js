import React from "react";
import ImageHolder from "./components/Images";
import Jumbo from "./components/Jumbo";
import Header from "./components/Header";
// import ImageRow from "./components/ImageRow";
// import { arrayExpression } from "@babel/types";

class App extends React.Component {
  state = {
    userScore: 0,
    highScore: 0,
    idArr: []
  };

  setUserScore = () => {
    // console.log("setScore")
    console.log(this.state.idArr);
    this.setState({ userScore: this.state.userScore + 1 });
  };

  resetUserScore = () => {
    this.setState({ userScore: 0})
    this.setState({ idArr: []})
  }

  checkScore = file => {
    // console.log(file)
    // this.state.idArr.push(file)
    console.log(this.state.idArr);
    if (this.state.idArr.length === 0) {
      this.state.idArr.push(file);
      console.log(`new file: ${file}`);
      this.setUserScore();
    } else {
      this.state.idArr.forEach(item => {
        if (file === item) {
          console.log("match found");
          this.resetUserScore();
        } 
      });
    }
  };

  render() {
    let names = [
      "bergen",
      "Bern",
      "kyoto",
      "marrakech",
      "Rome-1",
      "tibet",
      "newyork",
      "greece",
      "bonn",
      "russia",
      "seoul",
      "oregon"
    ];
    let images = names.map((item, i) => {
      return (
        <ImageHolder
          key={i}
          id={item}
          src={require("./images/" + item + ".jpg")}
          setScoreCB={this.checkScore}
        />
      );
    });
    return (
      <div>
        <Header
          userScore={this.state.userScore}
          highScore={this.state.highScore}
        />
        <Jumbo correct="Correct!" wrong="Wrong..." />
        <div className="container imageCont">{images}</div>
      </div>
    );
  }
}

export default App;
