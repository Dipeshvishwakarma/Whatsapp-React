import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import "./Sidebar.css";
import SidebarChat from './SidebarChat';
 import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from "firebase";

const Sidebar = () => {
    const [rooms,setRooms] = useState([]);
    const [{user},dispatch] = useStateValue();
    useEffect(() => {
    db.collection("rooms").onSnapshot(snapshot=>{
        snapshot.docs.map(doc=>setRooms(prev=>[...prev,{
            id:doc.id,
            data:doc.data()
        }])
        )
    })
    
    }, []);  
   //console.log(rooms);
    
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar src={user.photoURL} onClick={e=>firebase.auth().signOut()}/>

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
             {
                 rooms.map(room =>{return <SidebarChat key={room.id} id={room.id} name = { room.data.name }/>})
                 //console.log(rooms)
                    
             }
             
             
             
            </div>
        </div>
    )
}

export default Sidebar