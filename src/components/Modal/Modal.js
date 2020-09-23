import React from 'react';
import ReactDOM from 'react-dom';

import './modal.css';

const Modal = ({ children, setIsOpen }) => {
  return ReactDOM.createPortal(
    <div className="modal" onClick={() => setIsOpen(false)}>
      <div className="modal-body">
        { children }
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal;