import React from "react";


function ImageHolder (props) {
    
    

    function handleClick (e) {
        e.preventDefault();
        console.log(e.currentTarget)

    }


    return (
        <>
         <img id={props.id} className="images" src={props.src} alt="pic" onClick={handleClick} ></img>
        </>
    )
}

export default ImageHolder;