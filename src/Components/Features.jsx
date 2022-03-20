import React, { useState } from "react";
import "./Styles/Features.css";
import { HashLink as Link } from "react-router-hash-link";

const changeBTNS = [
  {
    title: "Simple Bookmarking",
    fadeType: "fade-right",
  },
  {
    title: "Pesquisa rápida",
    fadeType: "",
  },
  {
    title: "Pesquisa fácil",
    fadeType: "fade-up",
  },
];
const changeIMGS = [
  "/images/illustration-features-tab-1.svg",
  "/images/illustration-features-tab-2.svg",
  "/images/illustration-features-tab-3.svg",
];
const changeCONTENT = [
  {
    title: "Favoritos em 1 clique",
    desc: "Organize seus favoritos como quiser. Nossa simples interface de arrastar e soltar oferece controle total sobre como você gerencia seus sites preferidos.",
  },
  {
    title: "Pesquisa inteligente",
    desc: "Nosso poderoso recurso de pesquisa ajudará você a encontrar seus sites salvos num instante. Não há mais a necessidade de vasculhar por todos os seus favoritos.",
  },
  {
    title: "Compartilhe os seus favoritos",
    desc: "Compartilhe facilmente seus favoritos e coleções com outras pessoas. Crie um link compartilhável para enviá-lo com o clique de um botão.",
  },
];

function Features() {
  const [indexBTN, setIndexBTN] = useState(0);

  return (
    <>
      <section className="features" id="features">
        <div
          className="features__texts"
          data-aos="fade-up"
          data-aos-offset="200"
        >
          {/* SECTION TITLE */}
          <h2>Recursos</h2>
          <p>
            Nosso objetivo é facilitar e agilizar o acesso ao seu sites
            favoritos. Seus favoritos são sincronizados entre seus dispositivos
            para que você possa acessá-los em qualquer lugar.
          </p>
        </div>

        <div className="features__change">
          {/* CHANGE CONTENT BUTTONS (3) */}
          <ul className="features__change__items">
            {changeBTNS.map((item, index) => (
              <li data-aos={item.fadeType} key={index}>
                <button
                  onClick={() => setIndexBTN(index)}
                  className={`features__change__items__item ${
                    index === indexBTN ? "active" : null
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>

          <div className="features__change__content">
            {/* IMGS (3) */}
            <div
              className="features__change__content__imgWrapper"
              data-aos="fade-right"
              data-aos-offset="220"
            >
              <img src={changeIMGS[indexBTN]} alt="Bookmark" />
            </div>

            {/* CONTENT (3) */}
            <div
              className="features__change__content__texts"
              data-aos="fade-up"
              data-aos-offset="220"
            >
              <h2>{changeCONTENT[indexBTN].title}</h2>
              <p>{changeCONTENT[indexBTN].desc}</p>

              {/* ADD EXTENSION BTN */}
              <Link to="#download">
                <button className="features__change__content__texts__addBTN">
                  ADICIONAR
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
