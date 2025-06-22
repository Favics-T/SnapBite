import React, { createContext } from 'react'

export const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  return (
    <div>
      <ChatContext.Provider value={{
        
      }}>
        {children}
      </ChatContext.Provider>
    </div>
  )
}

export default ChatProvider
