import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Styles/Header.css";

const headerItems = [
  {
    link: "#features",
    text: "RECURSOS",
  },
  {
    link: "#download",
    text: "DOWNLOAD",
  },
  {
    link: "#contact",
    text: "CONTATO",
  },
];

function Header() {
  const [click, setClick] = useState(false); // CLICK TRUE = OPEN MOBILE NAV

  let wsize = window.innerWidth;

  window.addEventListener("resize", () => {
    click && setClick(false);
    wsize = window.innerWidth;
  });

  return (
    <header className="header">
      <div className="header__content">
        {/* LOGO IMG */}
        <div className="header__content__logo">
          <Link to="/#" onClick={() => setClick(false)}>
            <img
              src={
                click && wsize <= 1024
                  ? "images/logo-bookmark-white.svg"
                  : "images/logo-bookmark.svg"
              }
              alt="BOOKMARK"
            />
          </Link>
        </div>

        <div className="header__content__items">
          {/* MOBILE NAVBAR HAMBURGUER */}
          <div
            className="header__content__items__hamburger"
            onClick={() => setClick(!click)}
          >
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul
            className={`header__content__items__container 
              ${click ? "activeHeader" : null}`}
          >
            {/* HEADER ITEMS */}
            {headerItems.map((item, index) => (
              <li
                className="header__content__items__container__item"
                key={index}
              >
                <Link to={item.link} onClick={() => setClick(!click)}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
