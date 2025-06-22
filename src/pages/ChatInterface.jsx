import React, { useContext, useEffect, useRef, useState } from 'react';
import BackgroundImage from '../assets/whatsap.png'
import { ChatContext } from '../context/ChatContext';
import { BsSend } from 'react-icons/bs';
import ChatHeader from '../components/ChatHeader'
import EmojiPicker from 'emoji-picker-react';

const Chatinterface = () => {
  const { messages, userInput, setUserInput, handleSend, handleKeyDown } =
    useContext(ChatContext);
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  const [emojiPicker, setEmojiPicker] = useState(false)

  return (
    <div className="h-[100dvh] w-full flex flex-col bg-white rounded-2xl shadow-lg relative overflow-hidden">
      {/* Header */}
      <div className="shrink-0 sticky top-0 z-10 bg-white shadow">
        <ChatHeader />
      </div>

      {/* Chat messages area (takes all remaining space) */}
      <div
        className="flex-1 overflow-y-auto px-4 md:px-12 py-4 scrollbar-none"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
        }}
      >
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

      {/* Input at the bottom */}
      <div className="shrink-0 bg-white border-t border-gray-300 px-4 py-2">
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Enter your Message"
            className="flex-grow bg-white border border-gray-300 p-4 rounded-lg text-black"
            value={userInput}
            onKeyDown={handleKeyDown}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
  onClick={() => setEmojiPicker((prev) => !prev)}
  className="text-xl"
  type="button"
>
  😊
</button>

          <button
            onClick={handleSend}
            aria-label="Send message"
            className="p-3 bg-green-500 text-white rounded-full hover:bg-green-700 transition"
          >
            <BsSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatinterface;
