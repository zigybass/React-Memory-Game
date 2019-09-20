import React from "react";


function Header (props) {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark header">
                Score: {props.userScore}  <span>High Score: {props.highScore}</span>
            </nav>
        </div>
    )
}

export default Header;