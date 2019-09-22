import React from "react";
import ImageHolder from "./components/Images";
import Jumbo from "./components/Jumbo";
import Header from "./components/Header";
// import ImageRow from "./components/ImageRow";
// import { arrayExpression } from "@babel/types";

class App extends React.Component {
  state = {
    userScore: 0,
    highScore: 5,
    idArr: [],
    fileName: []
  };

  setUserScore = () => {
    console.log("setScore")
    this.setState({ userScore: this.state.userScore + 1})
  }

  checkScore = (file) => {
    console.log(file)
    this.state.idArr.push(file)
    console.log(this.state.idArr)
    this.setUserScore();
    // this.state.idArr.forEach( item => {
    //   console.log("forEach")
    //   if ( item === id ) {
    //     console.log("if")
    //     this.state.idArr.push(id)
    //     // this.setScore()
    //   } else {
    //     this.state.idArr.push(id)
    //     console.log("else")
    //     // this.state.idArr.push(id)
    //   }
    // })
  }


  render() {
    let names = ["bergen", "Bern", "kyoto", "marrakech", "Rome-1", "tibet", "newyork", "greece", "bonn", "russia", "seoul", "oregon"]
    let images = names.map( (item, i) => {
      return (
        <ImageHolder key={i} id={item} src={require("./images/" + item + ".jpg")} setScoreCB={this.checkScore} />
      )
    })
    return (
      <div>
        <Header
          userScore={this.state.userScore}
          highScore={this.state.highScore}
        />
        <Jumbo correct="Correct!" wrong="Wrong..." />
        <div className="container imageCont">
          {images}
        </div>
      </div>
    );
  }
}

export default App;
