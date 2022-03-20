import React from "react";
import "./Styles/Modal.css";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground" onClick={() => closeModal(false)}>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <div className="modal-logo">
          <img src="./images/logo.svg" alt="BOOKMARK" />
        </div>
        <div className="modal-title">
          <h1>CADASTRADO</h1>
        </div>
        <div className="modal-body">
          <p>
            Você agora receberá todas as notícias e atualizações sobre a
            extensão.
          </p>
        </div>
        <div className="modal-footer">
          <button
            onClick={() => closeModal(false)}
            className="modal-cancel-btn"
          >
            FECHAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
