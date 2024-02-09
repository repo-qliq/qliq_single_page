import React, { useState, useEffect } from "react";
import qliqLogo from "./assets/svg/qliq_f2.svg";
import { Link } from "react-router-dom";

const Footer = () => {
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
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a
                href="https://qliqinvest.ru"
                className="logo d-flex align-items-center"
              >
                <span>
                  <img
                    src={qliqLogo}
                    alt=""
                    width=""
                    style={{ "max-height": "140px!important", width: "250px" }}
                  />
                </span>
              </a>
              <p>
                <p>
                  Осуществляет деятельность в соответствии с Федеральным законом
                  от 02.08.2019 N 259-ФЗ &#171;О привлечении инвестиций с
                  использованием инвестиционных платформ и о внесении изменений
                  в отдельные законодательные акты Российской Федерации&#187;.
                </p>
                <p>
                  ООО “<strong>Клик Инвест</strong>” зарегистрировано в реестре
                  Банка России в качестве Оператора инвестиционной платформы
                  22.12.2022 года.
                </p>
                <p>
                  ООО “<strong>Клик Инвест</strong>”, ИНН 9727002857, ОГРН
                  1227700402962
                </p>
              </p>
            </div>

            <div className="col-lg-3 col-6 footer-links">
              <br />
              <br />
              <br />
              <br />
              <br />
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="/index.php">Главная страница</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="/borrower">Заемщику</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <Link to={"/Documents"}>Раскрытие информации</Link>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="/#faq">Часто задаваемые вопросы</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="/privacy">Политика конфиденциальности</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="/about/">О платформе</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-6 footer-links">
              <br />
              <br />
              <br />
              <br />
              <br />
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="/investor">Инвестору</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <Link to={"/Documents"}>Документы</Link>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="https://qliqinvest.ru#contact_us">Контакты</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal modal_qliq fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog qliq_modal-dialog modal-dialog-centered">
          <div className="modal-content qliq_modal">
            <div className="row">
              <div className="col-md-4 qliq_modal_banner">
                <div className="qliq_banner"></div>
              </div>
              <div className="col-md-8">
                <div className="modal-body">
                  <div
                    className="qliq_close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></div>

                  <form action="forms/contact.php" method="post">
                    <input
                      type="text"
                      name="name"
                      className="qliq_input form-control"
                      placeholder="Email"
                      required=""
                    />
                    <input
                      type="text"
                      name="name"
                      className="qliq_input form-control"
                      placeholder="Пароль"
                      required=""
                    />
                    <label className="qliq_label">
                      <a href="#">Восстановление пароля</a>
                    </label>
                    <br />
                    <br />
                    <center>
                      <button
                        type="button"
                        name="button"
                        className="qliq_button"
                      >
                        Войти в аккаунт
                      </button>
                    </center>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; 2024{" "}
          <strong>
            <span>qliq</span>
          </strong>
        </div>
        <div className="credits"></div>
      </div>
    </footer>
  );
};

export default Footer;
