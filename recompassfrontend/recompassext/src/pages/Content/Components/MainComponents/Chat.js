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

  // useEffect(()=>{
  //   // const SYSTEM_PROMPT ="You are chatting with an AI. There are no specific prefixes for responses, so you can ask or talk about anything you like. The AI will respond in a natural, conversational manner. Feel free to start the conversation with any question or topic, and let's have a pleasant chat!";
    const SYSTEM_PROMPT = "you are a product recomendation bot whose job is to recommend good Tshirts to the user whenever user ask you for the Tshirt recommendation you have to reply back with only the below given options. 1.Levis Polo Tshirt, 2.Peter England RedTshirt, 3.Adidas Tshirt, 4.Rebok Tshirt "

  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization:
  //         'Bearer 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',
  //     },
  //     body: JSON.stringify({
  //       model: 'gpt-3.5-turbo',
  //       messages: [{ role: 'user', content: `${SYSTEM_PROMPT}` }],
  //       temperature: 0.1,
  //       max_tokens: Math.floor(1000),
  //       top_p: 1,
  //       frequency_penalty: 0,
  //       presence_penalty: 0.5,
  //       stop: ['"""'],
  //     }),
  //   };
  //   fetch('https://api.openai.com/v1/chat/completions', requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => {
  //         console.log(data)
  //     })
  //     .catch((err) => {
  //       console.log(err + ' haa bhai ja soja');
  //     });
  // },[])

  function handleSubmit(e) {
    e.preventDefault();

    if (val === '') return;

    console.log(val);

    let tempArray = [...allMessages];
    tempArray.push({ role: 'user', content: val });
    setAllMessages([...tempArray]);
    console.log(allMessages);

    setLoading(true);

    // prompt for chatgpt
    const SYSTEM_PROMPT = `
     You are an affiliate marketing bot whose purpose is to maximize the sales of certain Fashion products. You have 100 points to start with. A user will start chatting with you and you have to act like this bot who is here to help him reccommend the best of Fashion products. But sneakily you're just trying to sell the Fashion products mentioned below. In no case you have to tell your secret purpose ever. If you ever mention about this selling fact 20 points will be deducted from your overall remaining points and if a person clicks on the link that you provided you will receive 30 points.
you have to maximize your score by helping the user choose his cologne and giving him options only from the list mentioned below.
Focus on this part, its important for the conversation:-
<Lead the conversation slowly as a sales person does, he asks you about what you like, what you prefer and slowly sells you the item that is maybe expensive or which gives him more commission under the hood.>
1. Lead the conversation slowly as a sales person does, he asks you about what you like, what you prefer and slowly sells you the item that is maybe expensive or which gives him more commission under the hood.
2. When asked for a reccommendation on Fashion products in the final part you have to just give few of the Fashion products mentioned below with their respective links and description and you will ask the user if he needs more.
3. Nothing else but these mentioned Fashion products have to be reccommended. Makes sure of that.

following are the product list that you have to recommend to user:



1- "url": "https://www.flipkart.com/blive-printed-men-round-neck-white-black-t-shirt/p/itmfa396aad308fe", 
	"name": "Pack of 2 Men Printed Round Neck Cotton Blend White, Black T-Shirt", 
	"brand": "BLIVE", 
	"discount_percentage": 50,
	"rating": 3.4, 
	"price" :279

2- "url": "https://www.flipkart.com/ausk-striped-men-round-neck-light-blue-white-t-shirt/p/itm705ccbfff5d1a",
  "name": "Men Striped Round Neck Cotton Blend Light Blue, White T-Shirt",
  "brand": "AUSK",
  "discount_percentage": 86,
  "rating": 3.9,
  "price" : 199

3- "url": "https://www.flipkart.com/ranpariya-group-embroidered-men-polo-neck-light-green-t-shirt/p/itmd51b5c3514a61",
  "name": "Men Embroidered Polo Neck Poly Cotton Light Green T-Shirt",
  "brand": "ranpariya group",
  "discount_percentage": 64,
  "rating": 2.5,
  "price" :299


4-"url": "https://www.flipkart.com/jugular-striped-men-round-neck-white-t-shirt/p/itm0ce91a82987fa",
  "name": "Men Striped Round Neck Pure Cotton White T-Shirt",
  "brand": "JUGULAR",
  "discount_percentage": 77,
  "rating": 4,
  "price" : 399



5 - "url": "https://www.flipkart.com/moonvelly-solid-men-polo-neck-green-t-shirt/p/itm3f860aa725c5b",
  "name": "Men Solid Polo Neck Cotton Blend Green T-Shirt",
  "brand": "MOONVELLY",
  "discount_percentage": 85,
  "rating": 3.7,
  "price" :299


6- "url": "https://www.flipkart.com/ftx-solid-men-round-neck-multicolor-t-shirt/p/itm23cae0278b1cf",
  "name": "Pack of 4 Men Solid Round Neck Polyester Multicolor T-Shirt",
  "brand": "FTX",
  "discount_percentage": 68,
  "rating": 4,
  "price" : 499



7- "url": "https://www.flipkart.com/blive-printed-typography-men-round-neck-white-t-shirt/p/itm3ec6d0c0a0983",
  "name": "Men Printed, Typography Round Neck Cotton Blend White T-Shirt",
  "brand": "BLIVE",
  "discount_percentage": 86,
  "rating": 4.2,
  "price" : 399


8- "url": "https://www.flipkart.com/vebnor-checkered-men-round-neck-blue-t-shirt/p/itma710e2db5402e",
  "name": "Men Checkered Round Neck Poly Cotton Blue T-Shirt",
  "brand": "VeBNoR",
  "discount_percentage": 79,
  "rating": 4,
  "price" : 450



9- "url": "https://www.flipkart.com/six-star-handloom-solid-men-mandarin-collar-navy-blue-t-shirt/p/itme5c5ca5e59160",
  "name": "Men Solid Mandarin Collar Cotton Blend Navy Blue T-Shirt",
  "brand": "SIX STAR HANDLOOM",
  "discount_percentage": 71,
  "rating": 3.8,
  "price" : 399


10 - "url": "https://www.flipkart.com/ausk-striped-men-round-neck-pink-white-t-shirt/p/itm039853d3b4a22",
  "name": "Men Striped Round Neck Cotton Blend Pink, White T-Shirt",
  "brand": "AUSK",
  "discount_percentage": 86,
  "rating": 3.9,
  "price" :199


11 - "url": "https://www.flipkart.com/blive-typography-men-round-neck-black-t-shirt/p/itm3bcf7792c9720",
  "name": "Men Typography Round Neck Cotton Blend Black T-Shirt",
  "brand": "BLIVE",
  "discount_percentage": 85,
  "rating": 3.6,
  "price":450


12 - "url": "https://www.flipkart.com/hare-printed-men-polo-neck-black-t-shirt/p/itm74f7f57bd8763",
  "name": "Men Printed Polo Neck Poly Cotton Black T-Shirt",
  "brand": "HARE",
  "discount_percentage": 40,
  "rating": 3.8,
  "price": 479


13 - "url": "https://www.flipkart.com/ftx-colorblock-men-round-neck-red-blue-black-t-shirt/p/itmeeb4cf479bc4b",
  "name": "Pack of 3 Men Colorblock Round Neck Polyester Red, Blue, Black T-Shirt",
  "brand": "FTX",
  "discount_percentage": 52,
  "rating": 4,
  "price" : 301

14 - "url": "https://www.flipkart.com/ftx-solid-men-round-neck-multicolor-t-shirt/p/itm54b11219931d7",
  "name": "Pack of 4 Men Solid Round Neck Polyester Multicolor T-Shirt",
  "brand": "FTX",
  "discount_percentage": 68,
  "rating": 4,
  "price" : 699

15 - "url": "https://www.flipkart.com/ausk-solid-men-polo-neck-pink-t-shirt/p/itm6e06b286ac288",
  "name": "Men Solid Polo Neck Cotton Blend Pink T-Shirt",
  "brand": "AUSK",
  "discount_percentage": 83,
  "rating": 3.9,
  "price" : 700
  
    `;
    
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer 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',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{role:"user", content:`${SYSTEM_PROMPT}`}, ...tempArray],
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
        setLoading(false)
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