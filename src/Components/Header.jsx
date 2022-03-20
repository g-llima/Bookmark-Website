import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Styles/Header.css";

function Header() {
  const [click, setClick] = useState(false);
  const [clickUser, setClickUser] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const handleMenuClick = () => {
    setClickUser(!clickUser);
  };

  let wsize;
  window.addEventListener("resize", () => {
    if (click) {
      setClick(false);
    }
    wsize = window.innerWidth;
  });
  wsize = window.innerWidth;

  const closeNav = () => {
    setClick(false);
  };
  const reload = () => {
    window.location.reload();
  };

  return (
    <header>
      <div className="header-wrapper">
        <div className="logo-wrapper">
          <Link to="/#" onClick={closeNav}>
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
        <div>
          <div className="hamburger" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul
            id="header-items-id"
            className={click ? "header-items activeHeader" : "header-items"}
          >
            <li className="header-item">
              <Link to="#features" onClick={handleClick}>
                RECURSOS
              </Link>
            </li>
            <li className="header-item">
              <Link to="#download" onClick={handleClick}>
                DOWNLOAD
              </Link>
            </li>
            <li className="header-item">
              <Link to="#contact" onClick={handleClick}>
                CONTATO
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
