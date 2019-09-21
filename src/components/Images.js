import React from "react";


function ImageHolder (props) {
    
    
    function handleClick (e) {
        e.preventDefault();
        console.log("click")
    }


    return (
        <div>
         <img className="img-responsive images" src={props.src} alt="pic" onClick={handleClick} ></img>
        </div>
    )
}

export default ImageHolder;