import React from "react";
import "./Styles/Modal.css";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground" onClick={() => closeModal(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {/* WEBSITE LOGO (TOP CENTER) */}
        <div className="modal__logo">
          <img src="./images/logo.svg" alt="BOOKMARK" />
        </div>

        {/* MODAL TITLE */}
        <div className="modal__title">
          <h1>CADASTRADO</h1>
        </div>

        {/* MODAL BODY */}
        <div className="modal__body">
          <p>
            Você agora receberá todas as notícias e atualizações sobre a
            extensão.
          </p>
        </div>

        {/* MOVAL FOOTER */}
        <div className="modal__footer">
          <button
            onClick={() => closeModal(false)}
            className="modal__footer__cancelBTN"
          >
            FECHAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
