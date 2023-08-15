import React from "react";

const PanelCard = () => {
    return(
        <>
        <p>
            some words
        </p>
        <button onClick={() => {window.open("http://amazon.com", '_blank', 'noopener,noreferrer');}}>some clickable thing</button>
        </>
    )
}

export default PanelCard