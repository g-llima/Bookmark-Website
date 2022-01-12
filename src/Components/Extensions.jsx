import React from "react";
import "./Styles/Extensions.css";

function Extensions() {
  return (
    <>
      <section className="extensions-container" id="download">
        <div className="extensions-texts-container" data-aos="fade-down">
          <h2>Adicione a extensão</h2>
          <p>
            Temos mais navegadores na mesa de produção. Por favor, avise-nos caso você tenha um favorito que gostaria que priorizermos.
          </p>
        </div>
        <ul className="extensions-cards-container">
          <li data-aos="flip-up" data-aos-offset="400">
            <a
              href="https://chrome.google.com/webstore/detail/bookmark-sidebar/jdbnofccmhefkmjbkkdkfiicjkgofkdh"
              target="_blank"
              className="extensions-card-item"
            >
              <img className="card-logo-img" src="/images/logo-chrome.svg" />
              <h3>Adicionar ao Chrome</h3>
              <p>Versão mínima: 62</p>
              <img src="/images/bg-dots.svg" className="dots" />
              <button className="btn-card-item">Adicionar & Instalar Extensão</button>
            </a>
          </li>
          <li data-aos="flip-down" data-aos-offset="400" data-aos-delay="100">
            <a
              href="https://addons.mozilla.org/pt-BR/firefox/addon/bookmarks-organizer/"
              target="_blank"
              className="extensions-card-item firefox"
            >
              <img
                className="card-logo-imgfire"
                src="/images/logo-firefox.svg"
              />
              <h3>Adicionar ao Firefox</h3>
              <p>Versão mínima: 55</p>
              <img src="/images/bg-dots.svg" className="dots" />
              <button className="btn-card-item">Adicionar & Instalar Extensão</button>
            </a>
          </li>
          <li data-aos="flip-up" data-aos-offset="400" data-aos-delay="200">
            <a
              href="https://addons.opera.com/pt-br/extensions/details/v7-bookmarks/"
              target="_blank"
              className="extensions-card-item opera"
            >
              <img className="card-logo-img" src="/images/logo-opera.svg" />
              <h3>Adicionar ao Opera</h3>
              <p>Versão mínima: 46</p>
              <img src="/images/bg-dots.svg" className="dots" />
              <button className="btn-card-item">Adicionar & Instalar Extensão</button>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Extensions;
