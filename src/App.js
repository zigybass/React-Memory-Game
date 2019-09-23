import React from "react";
import ImageHolder from "./components/Images";
import Jumbo from "./components/Jumbo";
import Header from "./components/Header";
// import files from "./utils/files.json";

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
    if ( this.state.userScore > this.state.highScore ) {
      this.setState({ highScore: this.state.userScore})
    }
    this.setState({ userScore: 0})
    this.setState({ idArr: [] })
  }

  checkScore = file => {
    console.log(file, this)
    // this.state.idArr.push(file)
    console.log(this.state.idArr);
    if (this.state.idArr.length === 0) {
      this.state.idArr.push(file);
      console.log(`new file: ${file}`);
      this.setUserScore();
    } else if (!this.state.idArr.includes(file)) {
      console.log("match not found")
      this.state.idArr.push(file);
      this.setUserScore();
    } else if (this.state.idArr.includes(file)) {
      console.log("match found")

      this.resetUserScore();

    }
  };

  shuffleFiles = (arr) => {
    for ( let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr
  }

  render() {
    let names = [
      "bergen",
      "bern",
      "kyoto",
      "marrakech",
      "rome",
      "tibet",
      "newyork",
      "greece",
      "bonn",
      "russia",
      "seoul",
      "oregon"
    ];
    this.shuffleFiles(names)
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
