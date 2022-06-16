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
            <h2>Welcome to the <b>Solve the Shuffle</b> page!</h2>
            <br/>
            <p>
              Try to solve the shuffled cube using the algorithms you know! You can rotate the cube sides using the buttons on the top.
              If you are not familiar with the notations, please visit the <b>To know</b> page first.
            </p>
            <br/>
            <p>
              Happy cubing!
            </p>
            <AiIcons.AiOutlineClose style={style} className="close-modal" onClick={toggleModal}/>
          </div>
        </div>
      )}
    </>
  );
}