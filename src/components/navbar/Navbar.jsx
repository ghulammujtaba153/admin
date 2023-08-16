import React, { useState } from 'react';
import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className='navbar'>
      <div className={`wrapper ${showDropdown ? 'hidden' : ''}`}>
        <div className="search">
          <input type="text" placeholder='Search..' />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon'/>
            English
          </div>

          <div className="item">
            <DarkModeOutlinedIcon className='icon'/>
          </div>

          <div className="item">
            <FullscreenExitOutlinedIcon className='icon'/>
          </div>

          <div className="item">
            <NotificationsOutlinedIcon className='icon'/>
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon'/>
            <div className="counter">1</div>
          </div>

          {/* ListIcon with click event */}
          <div className="item" onClick={toggleDropdown}>
            <ListOutlinedIcon className='icon'/>
          </div>

          <div className="item">
            <AccountCircleOutlinedIcon className='icon'/>
          </div>
        </div>
      </div>

      {/* Dropdown */}
      <div className={`dropdown`}>
      <div className="item" onClick={toggleDropdown}>
            <ListOutlinedIcon className='icon'/>
          </div>
        <ul className={`${showDropdown ? '' : 'hidden'}`}>
          <li>
            <LanguageIcon className='icon'/>
            English
          </li>
          <li>
            <DarkModeOutlinedIcon className='icon'/>
          </li>
          <li>
            <FullscreenExitOutlinedIcon className='icon'/>
          </li>
          <li>
            <NotificationsOutlinedIcon className='icon'/>
            <p>Notification</p>
          </li>
          <li>
            <ChatBubbleOutlineOutlinedIcon className='icon'/>
          </li>
          <li>
            <AccountCircleOutlinedIcon className='icon'/>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

