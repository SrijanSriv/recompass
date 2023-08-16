import React, { useEffect, useRef, useState } from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import UploadIcon from '@mui/icons-material/Upload';
// const { Configuration, OpenAIApi } = require("openai");
import ChatDisplaycomp from './ChatDisplay/ChatDisplaycomp'



const Chat = () => {
  const ref = useRef(null)
  const [val, setVal] = useState("")
  const [loading, setLoading] = useState(false)
  const [allMessages, setAllMessages] = useState([])
  function handleVal(e) {
    setVal(e.target.value)
  }

  const scrollToLastMessage = () => {
    const lastChildElement = ref.current?.lastElementChild;
    
    lastChildElement?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(()=>{
    scrollToLastMessage();
  },[allMessages])


  function handleSubmit(e) {
    e.preventDefault();

    if (val === '') return;

    console.log(val);

    let tempArray = [...allMessages];
    tempArray.push({ role: 'user', content: val });
    setAllMessages([...tempArray]);
    console.log(allMessages);

    setLoading(true);

    // setTimeout(() => {
    //   tempArray.push({ role: 'assistant', content: "just checking now" });
    //   setAllMessages([...tempArray]);
      
    // }, 3000);

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:'Bearer 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',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: tempArray,
        temperature: 0.1,
        max_tokens: Math.floor(1000),
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.5,
        stop: ['"""'],
      }),
    };
    fetch('https://api.openai.com/v1/chat/completions', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          let gpt_response =  data.choices[0].message.content
          console.log(gpt_response);
          tempArray.push({
            role: 'assistant',
            content: `${data.choices[0].message.content}`,
          });
          setAllMessages([...tempArray])
          setLoading(false);
          console.log(allMessages);
      }).catch(err => {
        console.log(err + " haa bhai ja soja");
      });
    setVal('');
  }


  return (
    <div id="inside-chat1">
      <div id="chat-show" ref={ref}>
        {allMessages.map((item, ind) => {
          return (
            <ChatDisplaycomp
              role={item.role}
              content={item.content}
              id={ind}
              len={allMessages.length - 1}
              loading={loading}
            />
          );
        })}
      </div>
      <div id="input-chat">
        <div>
          <div
            style={{ width: '100%', height: '1px', backgroundColor: '#bdbdbd' }}
          ></div>
          <Paper
            component="form"
            sx={{
              p: '2px 2px',
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              boxShadow: 'none',
            }}
            onSubmit={handleSubmit}
          >
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <KeyboardVoiceIcon />
            </IconButton>
            <Divider
              sx={{ height: 28, m: 0.5, borderColor: '#bdbdbd' }}
              orientation="vertical"
            />
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              value={val}
              onChange={handleVal}
              placeholder="Send a message"
              inputProps={{ 'aria-label': 'Send a message' }}
            />
            <Divider
              sx={{ height: 28, m: 0.5, borderColor: '#bdbdbd' }}
              orientation="vertical"
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon onClick={handleSubmit} />
            </IconButton>
            <Divider
              sx={{ height: 28, m: 0.5, borderColor: '#bdbdbd' }}
              orientation="vertical"
            />
            <IconButton sx={{ p: '10px' }} aria-label="directions">
              <UploadIcon />
            </IconButton>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default Chat