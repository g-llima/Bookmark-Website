import React, { useState } from "react";
import "./Styles/Features.css";
import { HashLink as Link } from "react-router-hash-link";

function Features() {
  const [SBactivated, setSBActivated] = useState(true);
  const [SSactivated, setSSActivated] = useState(false);
  const [ESactivated, setESActivated] = useState(false);

  const changeToSimpleBookmarking = () => {
    setSBActivated(true);
    setESActivated(false);
    setSSActivated(false);
  };
  const changeToSpeedySearch = () => {
    setSBActivated(false);
    setESActivated(false);
    setSSActivated(true);
  };
  const changeToEasySharing = () => {
    setSBActivated(false);
    setESActivated(true);
    setSSActivated(false);
  };

  return (
    <>
      <section className="features-container" id={"features"}>
        <div
          className="features-texts-container"
          data-aos="fade-up"
          data-aos-offset="200"
        >
          <h2>Recursos</h2>
          <p>
            Nosso objetivo é facilitar e agilizar o acesso ao seu sites favoritos. Seus favoritos são sincronizados entre seus dispositivos para que você possa acessá-los em qualquer lugar.
          </p>
        </div>
        <div className="features-list-container">
          <ul className="features-list">
            <li data-aos="fade-right">
              <button
                onClick={changeToSimpleBookmarking}
                className={`features-list-item ${
                  SBactivated ? "active" : null
                }`}
              >
                Simple Bookmarking
              </button>
            </li>
            <li>
              <button
                onClick={changeToSpeedySearch}
                className={`features-list-item ${
                  SSactivated ? "active" : null
                }`}
              >
                Pesquisa rápida
              </button>
            </li>
            <li data-aos="fade-up">
              <button
                onClick={changeToEasySharing}
                className={`features-list-item ${
                  ESactivated ? "active" : null
                }`}
              >
                Pesquisa fácil
              </button>
            </li>
            <div className="marker"></div>
          </ul>

          <div className="features-bookmark-container">
            <div
              className="bookmark-img-wrapper"
              data-aos="fade-right"
              data-aos-offset="220"
            >
              {SBactivated && (
                <>
                  <img
                    src="/images/illustration-features-tab-1.svg"
                    alt="Bookmark"
                  />
                </>
              )}

              {SSactivated && (
                <img
                  src="/images/illustration-features-tab-2.svg"
                  alt="Bookmark"
                />
              )}

              {ESactivated && (
                <img
                  src="/images/illustration-features-tab-3.svg"
                  alt="Bookmark"
                />
              )}
            </div>

            <div
              className="bookmark-texts-container"
              data-aos="fade-up"
              data-aos-offset="220"
            >
              {SBactivated && (
                <>
                  <h2>Favoritos em 1 clique</h2>
                  <p>
                    Organize seus favoritos como quiser. Nossa simples
                    interface de arrastar e soltar oferece controle total sobre como
                    você gerencia seus sites preferidos.
                  </p>
                </>
              )}

              {SSactivated && (
                <>
                  <h2>Pesquisa inteligente</h2>
                  <p>
                    Nosso poderoso recurso de pesquisa ajudará você a encontrar seus sites salvos
                    num instante. Não há mais a necessidade de vasculhar por todos os seus favoritos.
                  </p>
                </>
              )}

              {ESactivated && (
                <>
                  <h2>Compartilhe os seus favoritos</h2>
                  <p>
                    Compartilhe facilmente seus favoritos e coleções com outras pessoas.
                    Crie um link compartilhável para enviá-lo com o clique de um botão.
                  </p>
                </>
              )}
              <Link to="#download">
                <button className="features-add-btn">ADICIONAR</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
