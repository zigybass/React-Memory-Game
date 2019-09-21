import React from "react";


class ImageHolder extends React.Component {
    

    // function handleClick (e) {
    //     e.preventDefault();
    //     console.log(e.currentTarget)
        
    // }
    render() {
        const { id, src } = this.props
    return (
        <>
         <img id={id} className="images" src={src} alt="pic" onClick={this.props.setScoreCB.bind(this, id)} ></img>
        </>
    )
}
}

export default ImageHolder;