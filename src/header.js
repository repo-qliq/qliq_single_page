import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10; // Можно изменить этот порог на любое значение в пикселях
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Слушатель события скролла
    window.addEventListener("scroll", handleScroll);

    // Удаление слушателя события при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <header
      id="header"
      className={`header fixed-top ${scrolled ? "header-scrolled" : ""}`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        {/* eslint-disable-next-line */}
        <a href="/" className="d-flex align-items-center"></a>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link className="nav-link scrollto" to="/investor">
                Инвестору
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/borrower">
                Заемщику
              </Link>
            </li>
            <li>
              <a className="nav-link scrollto" href="tel:+7 (495) 136-27-90">
                +7 (495) 136-27-90
              </a>
            </li>
            <li>
              <a
                className="nav-link getstarted"
                href="https://personal.qliqinvest.ru"
              >
                Войти
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
