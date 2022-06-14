import React, { useState } from "react";
import "./Modal.css";
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';

export default function Modal() {
  const [modal, setModal] = useState(false);

  const style = { color: "white", fontSize: "2.5em" };

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <BsIcons.BsInfoCircle style={style} onClick={toggleModal} className="btn-modal"/>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Welcome to the Solving page!</h2>
            <br/>
            <p>
              In order to solve your Rubik's Cube, make sure you previously scanned it in the Scanning page! You can access the Scanning page using the menu in the left of your screen. 
            </p>
            <br/>
            <p>
              Keep it simple!
            </p>
            <AiIcons.AiOutlineClose style={style} className="close-modal" onClick={toggleModal}/>
          </div>
        </div>
      )}
    </>
  );
}