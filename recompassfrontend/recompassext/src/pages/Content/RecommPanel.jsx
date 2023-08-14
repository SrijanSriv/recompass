import React, { useState } from "react";
import './content.styles.css'
// import Chat from "../../../app/page";

const Panel = () => {
    const [panelClass, setPanelClass] = useState(false)
    function handleSetPanelClass() {
        if (panelClass === true) {
            setPanelClass(false)   
        } else {
            setPanelClass(true)
        }
    }
    return(
        <div
        className= "the-panel"
        style={{ position: "absolute",
        right: "0",
        fontSize: "1.5rem",
        height: "100vh",
        width: "30vw",
        zIndex: "10000",
        animation: `${panelClass ? '0.5s slideOut forwards' :'0.5s ease-out 0s 1 slideIn'}`
        }}
        >
            <div
            style={{
                transform: "translate(-50px, 0)",
                width: "100px",
                height: "50px",
                backgroundColor: "lavender"
            }}
            onClick={handleSetPanelClass}
            >
                bookmark
            </div>
            <button onClick={handleSetPanelClass}>click to remove</button>
            {/* <Chat/> */}
        </div>
    )
}

export default Panel