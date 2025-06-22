import React, { createContext, useState } from 'react'

export const ChatContext = createContext();

const ChatProvider = ({ children }) => {

  const [step, setStep] = useState(1)
  const [userInput, setUserInput] = useState('')
  const [messages, setMessages] = useState([
    {sender:'snapBite', 
      message:"Welcome to SnapBite Pastries! I'm your personal pastry assistant. I can help you discover and order delicious pastries from local bakers in Port Harcourt.To get started, I'll need to know a bit about your preferences. Is that okay? \n \n1. Yes  \n2. Not Now \n\n Pick an option"
    }
  ]);

  const newMessage =(sender, message)=>{
    setMessages(prev => [...prev, {sender, message}])
  }

  const handleSend=()=>{

    if(!input.trim())
      return;

    newMessage('user',userInput);

    switch(step){

      case 1:
        if(userInput.toLowerCase() === 'yes' || userInput === 1){
          newMessage('snapBite',
            "Great! \n let's set up your profile  First, what's your name?");
            setStep(2)
        }
        else if(userInput.toLowerCase() === 'not now' || userInput === 2){
          newMessage('snapBite',
            "Okay, you can come back to set your Profile will you like to make an order?"
           )
           userInput.toLowerCase() === 'No' ? newMessage('snapBite', 'Allright') : setStep(9)
        }

        else
          newMessage('snapBite', 'Enter a valid response -yes or 1, Not now or 2')
        break;


        case 9:
          newMessage('snapBite', 'You can place your order');


          default: newMessage('snapBite', "No Response")

    }

  }


  return (
    <div>
      <ChatContext.Provider value={{
                                      messages,setMessages,handleSend,
                                      userInput,setUserInput,
                                   }}>
        {children}
      </ChatContext.Provider>
    </div>
  )
}

export default ChatProvider
