import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import UploadIcon from '@mui/icons-material/Upload';
const Chat = () => {
  return (
    <div id="inside-chat">
      <div id=" chat-show">chat</div>
      <div id="input-chat">
        <div>
          <Paper
            component="form"
            sx={{
              p: '2px 2px',
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <KeyboardVoiceIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Send a message"
              inputProps={{ 'aria-label': 'Send a message' }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              color="primary"
              sx={{ p: '10px' }}
              aria-label="directions"
            >
              <UploadIcon />
            </IconButton>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default Chat