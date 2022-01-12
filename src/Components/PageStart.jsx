import React, { PureComponent } from "react";
import "./Styles/PageStart.css";

let comp = "";
if (window.innerWidth <= 1024) {
  comp = "0";
} else {
  comp = "1300";
}

export class PageStart extends PureComponent {
  render() {
    return (
      <>
        <section className="section-container">
          <div className="texts-container">
            <h1 data-aos="fade-down" data-aos-delay="250">
              Simple Bookmark Manager
            </h1>
            <p data-aos="fade-up" data-aos-delay="500">
              Uma interface limpa e simples para organizar seus sites favoritos.
              Abra uma nova guia do navegador e veja seus sites carregarem instantaneamente! Tente de graça.
            </p>
            <div className="text-container-btns">
              <a
                href="https://chrome.google.com/webstore/detail/bookmark-sidebar/jdbnofccmhefkmjbkkdkfiicjkgofkdh"
                target="_blank"
              >
                <button
                  className="chrome-btn"
                  data-aos="fade-right"
                  data-aos-delay="800"
                >
                  Obtenha no Chrome
                </button>
              </a>
              <a
                href="https://addons.mozilla.org/pt-BR/firefox/addon/bookmarks-organizer/"
                target="_blank"
              >
                <button
                  className="firefox-btn"
                  data-aos="fade-in"
                  data-aos-delay="1000"
                >
                  Obtenha no Firefox
                </button>
              </a>
            </div>
          </div>
          <div className="img-wrapper" data-aos="fade-in" data-aos-delay={comp}>
            <img src="images/illustration-hero.svg" alt="Illustration" />
          </div>
        </section>
      </>
    );
  }
}

export default PageStart;
