import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import "./Sidebar.css";
import SidebarChat from './SidebarChat';
//import db from './firebase';
//import { collection } from 'firebase/firestore/lite';

const Sidebar = () => {
     //const [rooms,setRooms] = useState([]);
    // useEffect(() => {
    //  db.collection("rooms").onSnapshot(snapshot=>{
    //      setRooms(snapshot.docs.map(doc=>({
    //          id:doc.id,
    //          data:doc.data()
    //      })))
    //  })
    // }, []);
    
    //console.log(rooms);
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar />

                <div className='sidebar__headerRight'>

                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>

                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                 <SearchIcon/>
                 <input type="text" placeholder="Search or start a new Chat"/>
                </div>
            </div>

            <div className='sidebar__Chats'>
             <SidebarChat addnewchat />
             <SidebarChat/>
             <SidebarChat/>
             <SidebarChat/>
             <SidebarChat/>
             
             
            </div>
        </div>
    )
}

export default Sidebar