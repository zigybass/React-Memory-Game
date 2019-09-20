import React from "react";


function jumbo (props) {
    return (
        <div>
            <div className="jumbotron">
                <h1>Clicky Game!</h1>
                <h4>Click on the images for a high score</h4>
                <br></br>
                <h4>You guessed {props.correct}</h4>
            </div>
        </div>
    )
}

export default jumbo;