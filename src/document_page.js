import React, { useState } from "react";
// import Accordion from "react-bootstrap/Accordion";
import qliqLogo from "./assets/svg/qliq_f2.svg";
import qliqLogo2 from "./assets/svg/qliq_b2.svg";
import founder_men_2 from "./assets/img/founder_men_2.png";
import { Link } from "react-router-dom";
import { PinContainer, PinPerspective } from "./components/3d_pin";
import { TypewriterEffectSmooth } from "./components/type-writer";
// import ninefour from "./assets/img/900x450.png";
// import bankrussia from "./assets/img/svg/bankrussia.svg";
// import aoip from "./assets/img/svg/aoip.svg";

const Document_page = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  // const getTabContent = (tabName) => {
  //   switch (tabName) {
  //     case "tab1":
  //       return (
  //         <div>
  //           <img src={ninefour} alt="" />
  //           <div className="desc">
  //             Выбор предложений, легкое инвестирование и полный контроль над
  //             документооборотом
  //           </div>
  //         </div>
  //       );
  //     case "tab2":
  //       return (
  //         <div>
  //           <img src={ninefour} alt="" />
  //           <div className="desc">
  //             Создание инвестиционных предложений, отслеживание поступлений и
  //             беспроцентное погашение
  //           </div>
  //         </div>
  //       );
  //     case "tab3":
  //       return (
  //         <div>
  //           <img src={ninefour} alt="" />
  //           <div className="desc">
  //             Простое переключение ролей без дополнительных логинов и паролей
  //           </div>
  //         </div>
  //       );
  //     default:
  //       return null;
  //   }
  // };

  const words = [
    {
      text: "Документация",
    },
    {
      text: "инвестиционной",
    },
    {
      text: "платформы",
    },
  ];
  const qliqDocuments = [
    {
      label: "Положение по управлению конфликтами интересов",
      path: "/platform_documents/положение_по_управлению_конфликтами.pdf",
    },
    {
      label: "Политика конфиденциальности",
      path: "/platform_documents/Политика-конфиденциальности-1.pdf",
    },
    {
      label:
        "Порядок действий, необходимых для присоединения к договору об оказании услуг по привлечению инвестиций.",
      path: "/platform_documents/ПОРЯДОК РЕГИСТРАЦИИ И ПРИСОЕДИНЕНИЯ К ПРАВИЛАМ.pdf",
    },
    {
      label:
        "Тарифы, сведения о видах, размерах и сроках взимания платы за услуги оператора",
      path: "/platform_documents/Тарифы.pdf",
    },
    {
      label: "Правила инвестиционной платформы Клик Инвест от 21.04.2023",
      path: "/platform_documents/Правила_инвестиционной_платформы.pdf",
    },
    {
      label: "Конфликт интересов от 15.09.2023 г.",
      path: "/platform_documents/Конфликт-интересов-15.09.23.pdf",
    },
    {
      label:
        "Годовой отчет оператора инвестиционной платформы о результатах деятельности по организации привлечения инвестиций",
      path: "/platform_documents/Годовой_отчет_2022.pdf",
    },
    {
      label:
        "Годовая бухгалтерская (финансовая) отчетность за последний завершенный отчетный год и аудиторское заключение в отношении такой отчетности",
      path: "/platform_documents/Упрощенная-бухгалтерская-финансовая-отчетность-за-2022-год.pdf",
    },
    {
      label: "Выписка из реестра ОИП",
      path: "/platform_documents/Выписка-из-реестра-ОИП.pdf",
    },
    {
      label: "Процедура проверки Заёмщиков",
      path: "/platform_documents/Процедура_проверки_заёмщиков.pdf",
    },
  ];
  return (
    <div>
      <section
        id="hero"
        className="hero d-flex"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div className="placer_background founder">
          <div className="svg_background_s"></div>
        </div>

        <div className="fiolent_line header fixed-top"></div>

        <div className="container" style={{ "z-index": "9" }}>
          <div
            className="row activation_cube"
            style={{ position: "relative", paddingTop: "80px" }}
          >
            <div className="flex flex-col items-center justify-center  ">
              <TypewriterEffectSmooth words={words} />
            </div>
            <div class="grid grid-cols-4">
              {qliqDocuments.map((el) => {
                return (
                  <>
                    <div className="w-full flex items-center justify-center ">
                      <PinContainer title="Открыть документ" href={el.path}>
                        <div className="flex basis-full flex-col p-0 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] h-[16rem] ">
                          <h3 className="max-w-xs !pb-1 !m-0 font-bold  text-sm text-slate-100">
                            qliq-invest
                          </h3>
                          <div className="text-xs !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">{el.label}</span>
                          </div>
                          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-800 to-blue-500" />
                        </div>
                      </PinContainer>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="contact_us" className="contact">
        <div className="container" data-aos="">
          <header className="section-header">
            <p>Связаться с нами</p>
          </header>

          <div className="row gy-4 justify-content-center">
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-md-6 col-6">
                  <div className="info-box">
                    <i className="bi bi-geo-alt"></i>
                    <h3>Адрес</h3>
                    <p>
                      <Link
                        to="https://yandex.ru/maps/-/CCURyTF8XA"
                        target="_blank"
                      >
                        123112, город Москва, Пресненская наб, д. 12, помещ.
                        1/13
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  <div className="info-box">
                    <i className="bi bi-telephone"></i>
                    <h3>Телефоны</h3>
                    <p>
                      <Link to="tel:+7 (495) 136-27-90">
                        +7 (495) 136-27-90
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  <div className="info-box">
                    <i className="bi bi-envelope"></i>
                    <h3>Email</h3>
                    <p>
                      <Link to="mailto:info@qliqinvest.ru">
                        info@qliqinvest.ru
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  <div className="info-box">
                    <i className="bi bi-clock"></i>
                    <h3>Часы работы</h3>
                    <p>
                      Пн - Пт
                      <br />
                      09:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
              >
                <div className="row gy-4 justify-content-center">
                  <div className="col-md-6 mt-0">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Имя"
                      required
                    />
                  </div>

                  <div className="col-md-6 mt-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Телефон"
                      required
                    />
                  </div>

                  <div className="col-md-12 mt-0">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Текст обращения"
                      required
                    ></textarea>
                  </div>

                  <center>
                    Нажимая кнопку "Отправить", Вы подтверждаете, что
                    ознакомлены и согласны с{" "}
                    <Link to="/privacy" target="_blank">
                      <b>Политикой конфиденциальности</b>
                    </Link>
                  </center>

                  <div className="col-md-12 text-center">
                    <div className="loading">Идет отправка</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Ваше сообщение отправлено!
                    </div>

                    <button type="submit">Отправить</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Document_page;
