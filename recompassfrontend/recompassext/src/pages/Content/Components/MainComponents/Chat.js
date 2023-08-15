import React, { useState } from 'react'
// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
// import DirectionsIcon from '@mui/icons-material/Directions';
// import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
// import UploadIcon from '@mui/icons-material/Upload';
// const { Configuration, OpenAIApi } = require("openai");

const Chat = () => {
  const [val, setVal] = useState("")
  const [allMessages, setAllMessages] = useState([])
  function handleVal(e) {
    setVal(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    console.log(val);
    setAllMessages([...allMessages, {'role': 'user', 'content': val}])
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' // add token here
      },
      body: JSON.stringify({
        'model': "gpt-3.5-turbo",
        'messages':allMessages,
        'temperature': 0.1,
        'max_tokens': Math.floor(1000),
        'top_p': 1,
        'frequency_penalty': 0,
        'presence_penalty': 0.5,
        'stop': ["\"\"\""],
      })
    };
    fetch('	https://api.openai.com/v1/chat/completions', requestOptions)
        .then(response => response.json())
        .then(data => {
          let gpt_response =  data.choices[0].message.content
          console.log(gpt_response);
          setAllMessages([...allMessages, {'role': 'assistant', 'content': gpt_response}])
          console.log(allMessages);
      }).catch(err => {
        console.log(err + " haa bhai ja soja");
      });
      setVal("")
  }
  return (
    <div id="inside-chat">
      <div id=" chat-show">

      </div>
      <div id="input-chat">
        <div>
          <form onSubmit={handleSubmit}>
            <input value={val} onChange={handleVal} placeholder='send a messege' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat