import React from "react";


class ImageHolder extends React.Component {
    
    

    // function handleClick (e) {
    //     e.preventDefault();
    //     console.log(e.currentTarget)
        
    // }
    render() {
    return (
        <>
         <img id={this.props.id} className="images" src={this.props.src} alt="pic" onClick={this.props.setScoreCB} ></img>
        </>
    )
}
}

export default ImageHolder;