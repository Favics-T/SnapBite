import React, { useContext, useEffect, useRef } from 'react'
import BackgroundImage from '../assets/whatsap.png'
import ChatHeader from '../components/ChatHeader'
import {BsSend} from 'react-icons/bs'
import { ChatContext } from '../context/ChatContext'

const ChatInterface = () => {
  const {messages, setMessages, handleSend, userInput, setUserInput} = useContext(ChatContext);
  const messageEndRef = useRef(null);

   useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
   <div className='flex flex-col h-[95vh] flex-1 rounded-lg relative'>
   <div className='shrink sticky top-0 z-10 '>
 <ChatHeader />
   </div>
       {/* chat area */}
       <div
    className='flex-1 overflow-y-auto px-4 md:px-12 py-4 scrollbar-none '
    style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
        }}>
            {messages.map((msg, idx) => {
          if (!msg || !msg.sender || !msg.message) return null;
          return (
            <div
              key={idx}
              className={`rounded flex ${
                msg.sender === 'snapBite' ? 'justify-start' : 'justify-end'
              }`}
            >
              <div
                className={`${
                  msg.sender === 'snapBite' ? 'bg-white' : 'bg-green-200'
                } md:w-[40%] rounded-lg my-4 p-4`}
                style={{ whiteSpace: 'pre-wrap' }}
              >
                {msg.message}
              </div>
            </div>
          );
        })}
        <div ref={messageEndRef} />
     
    </div>

        {/* input section */}
        <div className='shrink-0 bg-white border-t border-gray-300 px-4 py-2'>
           <div className='flex gap-2 items-center'>
            <input type="text"
            value={userInput}
            onChange={(e)=> setUserInput(e.target.value)}
            placeholder='Enter your message'
            className='bg-white border flex-grow border-gray-300 p-4 text-black' />
            
            <button>😊</button>
            <button
            onClick={handleSend}
            className='className=" p-3 bg-green-500 text-white rounded-full hover:bg-green-700 transition'><BsSend /></button>
            </div> 
        </div>
    </div>
  )
}

export default ChatInterface
