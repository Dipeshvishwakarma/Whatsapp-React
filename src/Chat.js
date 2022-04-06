import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./Chat.css";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicIcon from '@material-ui/icons/Mic';

const Chat = () => {
  return (
    <div className='chat'>
        <div className='chat__header'>
            <Avatar/>
            <div className='chat__headerInfo'>
                <h3>Room Name</h3>
                <p>Last seen..</p>
            </div>
            <div className='header__right'>
             <IconButton>
                 <SearchIcon/>
             </IconButton>
             <IconButton>
                <AttachFileIcon/>
             </IconButton>
             <IconButton>
                 <MoreVertIcon/>
             </IconButton>
            </div>
        </div>

        <div className='chat__body'>
            <p className='chat__message chat__reciever'>
                <span className='chat__name'>Deepesh Vishwakarma</span>
                This is test message
                <span className='chat__time'>12:40 PM</span>
            </p>
            <p className='chat__message chat__reciever'>
                <span className='chat__name'>Deepesh Vishwakarma</span>
                This is test message
                <span className='chat__time'>12:40 PM</span>
            </p>
            <p className='chat__message'>
                <span className='chat__name'>Deepesh Vishwakarma</span>
                This is test message
                <span className='chat__time'>12:40 PM</span>
            </p>
            <p className='chat__message '>
                <span className='chat__name'>Deepesh Vishwakarma</span>
                This is test message
                <span className='chat__time'>12:40 PM</span>
            </p>
        </div>

        <div className='chat__footer'>
          <EmojiEmotionsIcon/>
          <AttachFileIcon/>
          <form>
              <input type="text" placeholder="Type your message"/>
              <input type="submit"/>
          </form>
          <MicIcon/>
        </div>
    </div>
  )
}

export default Chat