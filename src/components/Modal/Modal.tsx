import './Modal.scss';
import React from 'react';

const Modal = ({ handleClose, show, body }: {handleClose:any, show: boolean, body:any}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div> {body}</div>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};
export default Modal;