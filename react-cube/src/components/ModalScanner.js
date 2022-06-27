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
            <h2>Welcome to the <b>Scanner</b> page!</h2>
            <br/>
            <p>
              Scan your Rubik's cube's faces using the SAVE button. Start with the UP (white) face then follow with
              FRONT (green), LEFT (orange), RIGHT (red), POSTERIOR (blue) and DOWN (yellow) faces. You can reset your
              lastly scanned face with the CLEAR LAST button or reset the whole cube with the CLEAR button.
              In case you want to correct some colors on a face, you can use the color pickers.
            </p>
            <br/>
            <p>
              Keep it up!
            </p>
            <AiIcons.AiOutlineClose style={style} className="close-modal" onClick={toggleModal}/>
          </div>
        </div>
      )}
    </>
  );
}