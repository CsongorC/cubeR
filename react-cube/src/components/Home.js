import React from 'react'
import logo from '../assets/images/logo.png';
import Modal from './Modal';

function Home() {
  return (
    <>
    <Modal/>
    <div className='home'>
      <img src={logo} alt="Logo" />
    </div>
    </>
  );
}

export default Home;