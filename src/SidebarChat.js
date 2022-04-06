import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import "./Sidebar.css";

const SidebarChat = ({addnewchat}) => {
  const [seed,setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random()*5000));
  }, [])
  
  return (
    !addnewchat ? (
      <div className='sidebar__chat'>
        <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
        <div className='sidebar__chatInfo'>
        <h2>React Tutorials</h2>
        <p>last message...</p>
        </div> 
        
    </div>
    ):(
    <div className='sidebar__chat'>
        <h2>Add New Chat</h2>
    </div>
    ) 
  )
};

export default SidebarChat;