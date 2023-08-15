import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';

const Headers = () => {
  return (
    <header className="Navbar">
      <div className="Toolbar">
        <div className="Logo">
          <IconButton
            color="primary"
            sx={{ p: '10px' }}
            aria-label="directions"
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className="Title"> ReCompass 🧭 </div>
        <div>
          <IconButton
            color="primary"
            sx={{ p: '10px' }}
            aria-label="directions"
          >
            <AddIcon />
          </IconButton>
        </div>
      </div>
    </header>
  );
}

export default Headers