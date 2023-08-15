import React from 'react'
import Headers from './MainComponents/Headers'
import SliderBar from './MainComponents/SliderBar'
import Chat from './MainComponents/Chat'
const Main = () => {
  return (
    <div id="main_component" >
      <div id="header-component">
        <Headers />
      </div>
      <div id="chat-component">
        <Chat />
      </div>
    </div>
  );
}

export default Main