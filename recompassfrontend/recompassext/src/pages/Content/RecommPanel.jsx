import React, {  useState } from "react";
import './content.styles.css';
import Main from "./Components/Main";
const Panel = (props) => {
    const [panelClass, setPanelClass] = useState(false);
    return (
      <div
        className="the-panel"
        id="slide_pannel"
        style={{
          animation: `${
            panelClass ? '0.5s slideOut forwards' : '0.5s ease-out 0s 1 slideIn'
          }`,
        }}
      >
        <div
          style={{
            transform: 'translate(-50px, 0)',
            width: '100px',
            height: '50px',
            backgroundColor: 'lavender',
          }}
          onClick={()=>setPanelClass(!panelClass)}
        >
          bookmark
        </div>
        <div onClick={() => setPanelClass(true)} id="close_panel">
          &#62;&#62;
        </div>
        <Main />
      </div>
    );
}

export default Panel

/* 
<p onClick={() => setPanelClass(true)} id="close_panel">
          &#62;&#62;
        </p>
*/