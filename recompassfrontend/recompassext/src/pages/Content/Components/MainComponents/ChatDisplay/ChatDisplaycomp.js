import React from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
          <ReactMarkdown
            className="prose"
            children={props.content}
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ node, ...props }) => (
                <a style={{ color: 'blue' }} {...props} />
              ),
            }}
          ></ReactMarkdown>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ChatDisplaycomp

/* 

<ReactMarkdown
            className="prose"
            children={props.content}
            remarkPlugins={[remarkGfm]}
            components={{
                a: ({node, ...props}) => <a style={{color: 'blue'}} {...props} />             
            }}
          ></ReactMarkdown>
*/