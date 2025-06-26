import React, { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'

const ChatHeader = () => {
  const {userData} = useContext(ChatContext);

  return (
    <div className=' p-4 shadow '>
      <h1>{userData.name}</h1>
    </div>
  )
}

export default ChatHeader
