/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.closeModal} className="modal-overlay">
      <div onClick={(e) => e.stopPropagation()} className="modal-container">
        <div className="upper-section">
          <h1>Huge announcement</h1>
          <p className="close">&times;</p>
        </div>

        <div className="middle-section">
          <h3>React mega tutorial is live!</h3>
          <p>Do you wish want to learn react</p>
          <p>I have done it you can also need to do it buddy!</p>
          <p>
            listen it is not easy you have to do it by hardwork and full
            enthisuism!
          </p>
        </div>

        <div className="lower-section">
          <button
            onClick={props.closeModal}
            className="modal-btn btn-red"
            target="_blank"
            alt="my_link"
          >
            Close
          </button>
          <button
            onClick={props.closeModal}
            className="modal-btn btn-green"
            target="_blank"
            alt="my_link"
          >
            My channel
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
export default Modal;
