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
            <h2>Welcome to CubR!</h2>
            <br/>
            <p>
              An interactive web application that allows its user to
              solve the "magic cube", better known as the Rubiks Cube. Within the framework of the
              application, we have the opportunity to scan the configuration of each side of our cube,
              using our webcam, to generate a series of rotations to solve the cube and illustrate it step
              by step with a 3D representation.
            </p>
            <br/>
            <p>
              Enjoy!
            </p>
            <AiIcons.AiOutlineClose style={style} className="close-modal" onClick={toggleModal}/>
          </div>
        </div>
      )}
    </>
  );
}