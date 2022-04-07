import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import db from './firebase';
import "./Sidebar.css";
import { Link } from 'react-router-dom';

const SidebarChat = ({id,name,addnewchat}) => {
  const [seed,setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random()*5000));
  }, [])
  
  const createChat = () =>{
    const room = prompt("Please enter room name");
    if(room)
    {
      db.collection("rooms").add({
        name:room
      })
    }
  }
  return (
    !addnewchat ? (
      <Link to={{pathname:`/rooms/${id}`}}>
      <div className='sidebar__chat' >
        <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
        <div className='sidebar__chatInfo'>
        <h2>{name}</h2>
        <p>last message...</p>
        </div> 
        
    </div>
    </Link>
    ):(
    <div className='sidebar__chat' onClick={createChat}>
        <h2>Add New Chat</h2>
    </div>
    ) 
  )
};

export default SidebarChat;