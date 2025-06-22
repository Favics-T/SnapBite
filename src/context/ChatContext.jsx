import React, { createContext, useEffect, useState } from 'react';
import chatFlow from '../components/chatFlow';

export const ChatContext = createContext();

const ChatsProvider = ({ children }) => {

  // trying to debug, i was having an error saying children componnet cannot be restructured
  console.log(" ChatsProvider :", children); 
   

  const defaultWelcomeMessage = [
    {
      sender: 'snapBite',
      message:
        "Welcome to SnapBite Pastries! I'm your personal pastry assistant. I can help you discover and order delicious pastries from local bakers in Port Harcourt.\n\nTo get started, I'll need to know a bit about your preferences. Is that okay? (Type 'Yes' or 'Not Now') \n\nType Restart to start again",
    },
  ];

  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem('messages');
      const parsed = saved ? JSON.parse(saved) : null;
      if (Array.isArray(parsed) && parsed.some((msg) => msg?.sender && msg?.message)) {
        return parsed;
      }
      localStorage.setItem('messages', JSON.stringify(defaultWelcomeMessage));
      return defaultWelcomeMessage;
    } catch {
      localStorage.setItem('messages', JSON.stringify(defaultWelcomeMessage));
      return defaultWelcomeMessage;
    }
  });

  const [userInput, setUserInput] = useState('');
  const [userData, setUserData] = useState({
    name: '',
    location: '',
    pastryPreference: [],
    dietaryPreference: '',
    budget: '',
  });
  const [step, setStep] = useState(1);

  const newMessage = (sender, message) => {
    setMessages((prev) => [...prev, { sender, message }]);
  };

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  const resetChat = () => {
    setMessages(defaultWelcomeMessage);
    setUserInput('');
    setUserData({
      name: '',
      location: '',
      pastryPreference: [],
      dietaryPreference: '',
      budget: '',
    });
    setStep(1);
    localStorage.setItem('messages', JSON.stringify(defaultWelcomeMessage));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    const input = userInput.trim();
    if (!input) return;

    newMessage('user', input);
    setUserInput('');

    //  this function helps user reset
    if (input.toLowerCase() === 'restart') {
      newMessage('snapBite', 'Chat has been restarted.');
      resetChat();
      return;
    }

    const flow = chatFlow[step];
    if (flow) {
      const result = flow(input, userData);

      
      result.messages?.forEach((msg) => newMessage('snapBite', msg));

      
      if (result.updatedUserData) {
        setUserData((prev) => ({ ...prev, ...result.updatedUserData }));
      }

      
      if (result.nextStep) {
        setStep(result.nextStep);
      }
    } else {
      newMessage('snapBite', 'Please select an option to continue.');
    }
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        handleSend,
        userInput,
        setUserInput,
        handleKeyDown,
        userData,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatsProvider;
