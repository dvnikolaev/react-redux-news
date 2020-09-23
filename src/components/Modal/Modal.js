import React from 'react';
import ReactDOM from 'react-dom';

import './modal.css';

const Modal = ({ children, isOpen }) => {
  if (!isOpen) {
    return null;
  }
  
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-body">
        { children }
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal;