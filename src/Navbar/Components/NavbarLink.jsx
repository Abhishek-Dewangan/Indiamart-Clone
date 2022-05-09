import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
  style,
  img,
  left,
  selectcity,
  search,
  mic,
  searchbutton,
  getbestprice,
  right,
  link,
  additional,
  searchbuttonhover,
  loginButton,
} from './NavbarLink.style';
import { Covid, Help, Login } from './PopupContents';
import SignIn from '../../SignIn/SignIn';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  height: 'auto',
  bgcolor: 'background.paper',
  boxShadow: '24',
  borderRadius: '15px',
};

export const NavbarLink = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [shopping, setShopping] = useState(false);
  const [covid, setCovid] = useState(false);
  const [sell, setSell] = useState(false);
  const [help, setHelp] = useState(false);
  const [messages, setMessages] = useState(false);
  const [login, setLogin] = useState(false);
  const [searchs, setSearchs] = useState(false);

  const onHover = (props) => {
    props(true);
  };
  const OffHover = (props) => {
    props(false);
  };
  return (
    <>
      <nav style={style}>
        <Link to='/'>
          <img src='indiamart.jpeg' alt='logo' style={img} />
        </Link>
        <div style={left}>
          <select style={selectcity}>
            <option>All India</option>
            <option>Bilaspur</option>
            <option>Pune</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Kolkata</option>

          </select>
          <input
            placeholder='Enter products/service to search'
            style={search}></input>
          <i className='fa-solid fa-microphone' style={mic}></i>
          <Link to='/inputsearched'>
            <button
              onMouseEnter={() => onHover(setSearchs)}
              onMouseLeave={() => OffHover(setSearchs)}
              style={searchs ? searchbuttonhover : searchbutton}>
              <i className='fa-solid fa-magnifying-glass'></i> Search
            </button>
          </Link>
        </div>
        <Link style={getbestprice} to='/getbestprice'>
          Get Best Price
        </Link>
        <div style={right}>
          <Link style={link} to='/imshpping'>
            <div
              onMouseEnter={() => onHover(setShopping)}
              onMouseLeave={() => OffHover(setShopping)}
              className='shopping'>
              <i
                className='fa-solid fa-tags'
                style={shopping ? { color: 'white' } : { color: 'gray' }}></i>
              <p style={additional}>IM Shopping</p>
            </div>
          </Link>
          <Link style={link} to='/covidsupplies'>
            <div
              onMouseEnter={() => onHover(setCovid)}
              onMouseLeave={() => OffHover(setCovid)}>
              <i
                className='fa-solid fa-briefcase-medical'
                style={covid ? { color: 'white' } : { color: 'gray' }}></i>
              <p style={additional}>Covid Supplies</p>
            </div>
          </Link>
          <Link style={link} to='/sell'>
            <div
              onMouseEnter={() => onHover(setSell)}
              onMouseLeave={() => OffHover(setSell)}>
              <i
                className='fa-solid fa-shop'
                style={sell ? { color: 'white' } : { color: 'gray' }}></i>
              <p style={additional}>Sell</p>
            </div>
          </Link>
          <Link style={link} to='/help'>
            <div
              onMouseEnter={() => onHover(setHelp)}
              onMouseLeave={() => OffHover(setHelp)}>
              <i
                className='fa-solid fa-circle-question'
                style={help ? { color: 'white' } : { color: 'gray' }}></i>
              <p style={additional}>Help</p>
            </div>
          </Link>
          <Link style={link} to='/messages'>
            <div
              onMouseEnter={() => onHover(setMessages)}
              onMouseLeave={() => OffHover(setMessages)}>
              <i
                className='fa-solid fa-message'
                style={messages ? { color: 'white' } : { color: 'gray' }}></i>
              <p style={additional}>Messages</p>
            </div>
          </Link>
          <button style={loginButton} onClick={handleOpen}>
            <div
              onMouseEnter={() => onHover(setLogin)}
              onMouseLeave={() => OffHover(setLogin)}>
              <i
                className='fa-solid fa-user'
                style={login ? { color: 'white' } : { color: 'gray' }}></i>
              <p style={additional} id="userName">Login</p>
            </div>
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'>
            <Box sx={styles}>
              <SignIn a={setOpen}/>
            </Box>
          </Modal>
        </div>
      </nav>
      <div>{covid && <Covid />}</div>
      <div>{help && <Help />}</div>
      <div>{login && <Login />}</div>
    </>
  );
};
