import React, { useEffect } from 'react'


import ContentLoader from 'react-content-loader'

const ChatDisplaycomp = (props) => {
    
  return (
    <div>
      {props.role === 'user' ? (
        <div className="bubble right">
          <p>{props.content}</p>
        </div>
      ) : (
        <div></div>
      )}

      {props.loading && props.id === props.len ? (
        <div>
          <ContentLoader backgroundColor="#c9c9ca" />
        </div>
      ) : (
        <div></div>
      )}
      {props.role === 'assistant' ? (
        <div className="bubble left">
          <p>{props.content}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ChatDisplaycomp