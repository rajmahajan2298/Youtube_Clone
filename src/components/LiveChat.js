import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from '../utlis/chatSlice';
import { generateRandomName, generateRandomString } from '../utlis/helper';

const LiveChat = () => {

  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);

    // API Polling Logic 

    useEffect(() => {
        const i = setInterval(() => {
          dispatch(addMessage({
          name: generateRandomName(),
          message: generateRandomString(20) + " 🚀"
        }))
        },500);
      
        return () => clearInterval(i);
    },[])

  return (
    <div className='w-full h-[500px] ml-2 border border-black rounded-lg overflow-y-scroll flex flex-col-reverse'>
      {
        chatMessage.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))
      }
    </div>
  )
}

export default LiveChat;
