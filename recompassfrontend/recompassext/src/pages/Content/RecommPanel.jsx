import React, {  useState } from "react";
import './content.styles.css';
import Main from "./Components/Main";

const Panel = (props) => {
    const [panelClass, setPanelClass] = useState(false);
    return (
      <>
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
            position: 'absolute',
            transform: 'translate(-80px, 50vh)',
            width: '80px',
            padding: '20px',
            backgroundColor: '#f8e831',
            textAlign: "center"
          }}
          onClick={()=>setPanelClass(!panelClass)}
          >
            &lt; &gt;
        </div>
        <Main />
      </div>
      </>
    );
}

export default Panel

/* 
<p onClick={() => setPanelClass(true)} id="close_panel">
          &#62;&#62;
        </p>
*/