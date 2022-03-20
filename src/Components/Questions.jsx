import React, { useState } from "react";
import "./Styles/Questions.css";
import { HashLink as Link } from "react-router-hash-link";

const questionsList = [
  {
    quest: "Para que serve a extensão?",
    res: "Aliquam erat volutpat. Praesent vitae ex nulla. Nullam porttitor  dignissim tellus in malesuada. Fusce bibendum libero est, quis  vulputate ipsum semper quis. Phasellus facilisis vehicula blandit.Sed a malesuada purus. Fusce rutrum, massa vel sollicitudin   sollicitudin, nisi nisl lobortis nisi, eget scelerisque nulla dui",
  },
  {
    quest: "Como posso solicitar para um novo navegador?",
    res: "Aliquam erat volutpat. Praesent vitae ex nulla. Nullam porttitor  dignissim tellus in malesuada. Fusce bibendum libero est, quis  vulputate ipsum semper quis. Phasellus facilisis vehicula blandit.Sed a malesuada purus. Fusce rutrum, massa vel sollicitudin   sollicitudin, nisi nisl lobortis nisi, eget scelerisque nulla dui",
  },
  {
    quest: "Existe uma versão mobile?",
    res: "Aliquam erat volutpat. Praesent vitae ex nulla. Nullam porttitor  dignissim tellus in malesuada. Fusce bibendum libero est, quis  vulputate ipsum semper quis. Phasellus facilisis vehicula blandit.Sed a malesuada purus. Fusce rutrum, massa vel sollicitudin   sollicitudin, nisi nisl lobortis nisi, eget scelerisque nulla dui",
  },
  {
    quest: "E quanto a outros navegadores Chromium?",
    res: "Aliquam erat volutpat. Praesent vitae ex nulla. Nullam porttitor  dignissim tellus in malesuada. Fusce bibendum libero est, quis  vulputate ipsum semper quis. Phasellus facilisis vehicula blandit.Sed a malesuada purus. Fusce rutrum, massa vel sollicitudin   sollicitudin, nisi nisl lobortis nisi, eget scelerisque nulla dui",
  },
];

function Questions() {
  const [num, setNum] = useState(-1);

  return (
    <>
      <section className="questions">
        <div className="questions__content">
          {/* SECTION TITLE */}
          <h2 data-aos="fade-down" data-aos-offset="300">
            Perguntas frequentes
          </h2>

          <p
            data-aos="fade-down"
            data-aos-offset="300"
            className="questions__content__header"
          >
            Aqui estão algumas de nossas perguntas mais frequentes. Se você
            tiver outras perguntas sinta-se à vontade para nos enviar um e-mail.
          </p>

          {/* QUESTIONS ITEMS */}
          {questionsList.map((item, index) => (
            <div className="questions__content__item" key={index}>
              <hr />
              <div className="questions__content__item__btn">
                <button
                  // IF INDEX === USESTATE INDEX IT OPENS
                  onClick={() => {
                    if (num === index) {
                      setNum(-1);
                    } else {
                      setNum(index);
                    }
                  }}
                >
                  {/* QUESTION TITLE */}
                  {item.quest}
                </button>
                <i
                  className={`fas fa-chevron-${
                    num === index ? "up red" : "down"
                  }`}
                ></i>
              </div>
              <p
                className={`questions__content__item__text ${
                  num === index ? "opened" : null
                }`}
              >
                {/* QUESTION RESPONSE */}
                {item.res}
              </p>
            </div>
          ))}
          <hr />
        </div>

        {/* "ADICIONAR" BUTTON*/}
        <div className="questions__moreInfo">
          <Link to="#download">
            <button className="questions__moreInfo__addBTN">ADICIONAR</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Questions;
