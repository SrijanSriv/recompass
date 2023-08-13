import React from "react";

const Panel = (props) => {
    return(
        <h1 style={{ position: "absolute",
        right: "0",
        backgroundColor: "skyblue",
        fontSize: "1.5rem",
        height: "100vh",
        width: "30vw",
        zIndex: "10000"}}>
            {props.text}
        </h1>
    )
}

export default Panel