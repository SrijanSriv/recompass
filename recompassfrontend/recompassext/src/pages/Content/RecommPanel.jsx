import React, { useState } from 'react';
import './content.styles.css';
import Main from './Components/Main';
import MoreIcon from '@mui/icons-material/More';

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
      <div  onClick={() => setPanelClass(!panelClass)} id="bookmark">
        <MoreIcon sx={{ color: 'white' }} />
      </div>
      <Main />
    </div>
  );
};

export default Panel;


/*


*/