import React, { useState } from "react";
import "./Styles/Hero.css";

const downloadBTNS = [
  {
    link: "https://chrome.google.com/webstore/detail/bookmark-sidebar/jdbnofccmhefkmjbkkdkfiicjkgofkdh",
    name: "chrome",
    fadeType: "right",
    fadeDelay: "800",
    text: "Obtenha no Chrome",
  },
  {
    link: "https://addons.mozilla.org/pt-BR/firefox/addon/bookmarks-organizer/",
    name: "firefox",
    fadeType: "in",
    fadeDelay: "1000",
    text: "Obtenha no Firefox",
  },
];

function Hero() {
  let comp;

  // CHANGE THE IMG ANIMATION DELAY WHEN SCREEN IS < 1024px
  useState(
    () => (window.innerWidth <= 1024 ? (comp = "0") : (comp = "1300")),
    [comp]
  );

  return (
    <>
      <section className="hero">
        <div className="hero__texts">
          {/* HERO TITLE */}
          <h1 data-aos="fade-down" data-aos-delay="250">
            Simple Bookmark Manager
          </h1>

          <p data-aos="fade-up" data-aos-delay="500">
            Uma interface limpa e simples para organizar seus sites favoritos.
            Abra uma nova guia do navegador e veja seus sites carregarem
            instantaneamente! Tente de graça.
          </p>

          {/* DOWNLOAD BUTTONS ITEMS */}
          <div className="hero__texts__btns">
            {downloadBTNS.map((item, index) => (
              <a href={item.link} target="_blank" key={index}>
                <button
                  className={`${item.name}-btn`}
                  data-aos={`fade-${item.fadeType}`}
                  data-aos-delay={item.fadeDelay}
                >
                  {item.text}
                </button>
              </a>
            ))}
          </div>
        </div>

        {/* SCREEN IMG */}
        <div
          className="hero__img__wrapper"
          data-aos="fade-in"
          data-aos-delay={comp}
        >
          <img src="images/illustration-hero.svg" alt="Illustration" />
        </div>
      </section>
    </>
  );
}

export default Hero;
