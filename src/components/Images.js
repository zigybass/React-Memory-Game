import React from "react";


class ImageHolder extends React.Component {
    
    

    // function handleClick (e) {
    //     e.preventDefault();
    //     console.log(e.currentTarget)
        
    // }
    render() {
        console.log(this.props.setScoreCB)
    return (
        <>
         <img id={this.props.id} className="images" src={this.props.src} alt="pic"></img>
        </>
    )
}
}

export default ImageHolder;