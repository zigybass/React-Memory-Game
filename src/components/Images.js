import React from "react";


function ImageHolder (props) {
    
    
    function handleClick (e) {
        e.preventDefault();
        console.log("click")
        console.log(e.currentTarget)
    }


    return (
        <div className="container">
         <img id={props.id} className="img-responsive images" src={props.src} alt="pic" onClick={handleClick} ></img>
        </div>
    )
}

export default ImageHolder;