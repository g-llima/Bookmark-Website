import React, { useState } from "react";
import "./Styles/Questions.css";
import { HashLink as Link } from "react-router-hash-link";

function Questions() {
  const [num, setNum] = useState(0);

  return (
    <>
      <section className="questions-section">
        <div className="questions-texts-container">
          <h2 data-aos="fade-down" data-aos-offset="300">
            Perguntas frequentes
          </h2>
          <p
            data-aos="fade-down"
            data-aos-offset="300"
            className="question-header-text"
          >
            Aqui estão algumas de nossas perguntas mais frequentes. Se você tiver outras perguntas
            sinta-se à vontade para nos enviar um e-mail.
          </p>
          <div className="question-container">
            <hr />
            <div className="button-container">
              <button
                onClick={() => {
                  if (num == 1) {
                    setNum(-1);
                  } else {
                    setNum(1);
                  }
                }}
              >
                Para que serve a extensão?
              </button>
              <i
                className={`fas fa-chevron-${num == 1 ? "up red" : "down"}`}
              ></i>
            </div>
            <p className={`question-text ${num == 1 ? "opened" : null}`}>
              Aliquam erat volutpat. Praesent vitae ex nulla. Nullam porttitor
              dignissim tellus in malesuada. Fusce bibendum libero est, quis
              vulputate ipsum semper quis. Phasellus facilisis vehicula blandit.
              Sed a malesuada purus. Fusce rutrum, massa vel sollicitudin
              sollicitudin, nisi nisl lobortis nisi, eget scelerisque nulla dui
            </p>
            <hr />
          </div>

          <div className="question-container">
            <div className="button-container">
              <button
                onClick={() => {
                  if (num == 2) {
                    setNum(-1);
                  } else {
                    setNum(2);
                  }
                }}
              >
                Como posso solicitar para um novo navegador?
              </button>
              <i
                className={`fas fa-chevron-${num == 2 ? "up red" : "down"}`}
              ></i>
            </div>
            <p className={`question-text ${num == 2 ? "opened" : null}`}>
              Aliquam erat volutpat. Praesent vitae ex nulla. Nullam porttitor
              dignissim tellus in malesuada. Fusce bibendum libero est, quis
              vulputate ipsum semper quis. Phasellus facilisis vehicula blandit.
              Sed a malesuada purus. Fusce rutrum, massa vel sollicitudin
              sollicitudin, nisi nisl lobortis nisi, eget scelerisque nulla dui
            </p>
            <hr />
          </div>

          <div className="question-container">
            <div className="button-container">
              <button
                onClick={() => {
                  if (num == 3) {
                    setNum(-1);
                  } else {
                    setNum(3);
                  }
                }}
              >
                Existe uma versão mobile?
              </button>
              <i
                className={`fas fa-chevron-${num == 3 ? "up red" : "down"}`}
              ></i>
            </div>
            <p className={`question-text ${num == 3 ? "opened" : null}`}>
              Aliquam erat volutpat. Praesent vitae ex nulla. Nullam porttitor
              dignissim tellus in malesuada. Fusce bibendum libero est, quis
              vulputate ipsum semper quis. Phasellus facilisis vehicula blandit.
              Sed a malesuada purus. Fusce rutrum, massa vel sollicitudin
              sollicitudin, nisi nisl lobortis nisi, eget scelerisque nulla dui
            </p>
            <hr />
          </div>

          <div className="question-container">
            <div className="button-container">
              <button
                onClick={() => {
                  if (num == 4) {
                    setNum(-1);
                  } else {
                    setNum(4);
                  }
                }}
              >
                E quanto a outros navegadores Chromium?
              </button>
              <i
                className={`fas fa-chevron-${num == 4 ? "up red" : "down"}`}
              ></i>
            </div>
            <p className={`question-text ${num == 4 ? "opened" : null}`}>
              Aliquam erat volutpat. Praesent vitae ex nulla. Nullam porttitor
              dignissim tellus in malesuada. Fusce bibendum libero est, quis
              vulputate ipsum semper quis. Phasellus facilisis vehicula blandit.
              Sed a malesuada purus. Fusce rutrum, massa vel sollicitudin
              sollicitudin, nisi nisl lobortis nisi, eget scelerisque nulla dui
            </p>
            <hr />
          </div>
        </div>
        <div className="moreInfo">
        <Link to="#download">
                <button className="questions-add-btn">ADICIONAR</button>
        </Link>
        </div>
      </section>
    </>
  );
}

export default Questions;
