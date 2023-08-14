import React from "react";
import './content.styles.css'
import PanelCard from "./PanelCard";

const Panel = (props) => {
    return(
        <div
        className="the-panel" 
        style={{ position: "absolute",
        right: "0",
        fontSize: "1.5rem",
        height: "100vh",
        width: "30vw",
        zIndex: "10000",
        animation: "0.5s ease-out 0s 1 slideIn"
        }}
        >
        <h3>
            {props.text}
        </h3>
        <input/>
        <PanelCard/>
        </div>
    )
}

export default Panel