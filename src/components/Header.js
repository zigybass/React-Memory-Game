import React from "react";


function Header (props) {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark">
                Score: {props.userScore} | High Score: {props.highScore}
            </nav>
        </div>
    )
}

export default Header;