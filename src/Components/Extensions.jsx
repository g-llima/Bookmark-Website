import React from "react";
import "./Styles/Extensions.css";

const browserCards = [
  {
    img: "/images/logo-chrome.svg",
    link: "https://chrome.google.com/webstore/detail/bookmark-sidebar/jdbnofccmhefkmjbkkdkfiicjkgofkdh",
    text: "Adicionar ao Chrome",
    verMin: "62",
    flipType: "up",
    offset: "400",
    delay: "0",
  },
  {
    img: "/images/logo-firefox.svg",
    link: "https://addons.mozilla.org/pt-BR/firefox/addon/bookmarks-organizer/",
    text: "Adicionar ao Firefox",
    verMin: "55",
    flipType: "down",
    offset: "400",
    delay: "100",
  },
  {
    img: "/images/logo-opera.svg",
    link: "https://addons.opera.com/pt-br/extensions/details/v7-bookmarks/",
    text: "Adicionar ao Opera",
    verMin: "46",
    flipType: "up",
    offset: "400",
    delay: "200",
  },
];

function Extensions() {
  return (
    <>
      <section className="extensions" id="download">
        {/* SECTION TEXTS */}
        <div className="extensions__texts" data-aos="fade-down">
          <h2>Adicione a extensão</h2>
          <p>
            Temos mais navegadores na mesa de produção. Por favor, avise-nos
            caso você tenha um favorito que gostaria que priorizermos.
          </p>
        </div>

        {/* BROWSER CARDS ITEMS */}
        <ul className="extensions__cards">
          {browserCards.map((item, index) => (
            <li
              key={index}
              className="extensions__cards__card"
              data-aos={`flip-${item.flipType}`}
              data-aos-offset={item.offset}
              data-aos-delay={item.delay}
              style={{ top: index * 2.5 + "rem" }}
            >
              <a
                href={item.link}
                target="_blank"
                className="extensions__cards__card__content"
              >
                <img className="card-logo-img" src={item.img} />
                <h3>{item.text}</h3>
                <p>Versão mínima: {item.verMin}</p>
                <img src="/images/bg-dots.svg" className="dots" />
                <button className="extensions__cards__card__content__btn">
                  Adicionar & Instalar Extensão
                </button>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Extensions;
