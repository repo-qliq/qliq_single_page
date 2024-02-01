import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import qliqLogo from "./assets/svg/qliq_f2.svg";
import ninefour from "./assets/img/900x450.png";
import bankrussia from "./assets/img/svg/bankrussia.svg";
import aoip from "./assets/img/svg/aoip.svg";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const getTabContent = (tabName) => {
    switch (tabName) {
      case "tab1":
        return (
          <div>
            <img src={ninefour} alt="" />
            <div className="desc">
              Выбор предложений, легкое инвестирование и полный контроль над
              документооборотом
            </div>
          </div>
        );
      case "tab2":
        return (
          <div>
            <img src={ninefour} alt="" />
            <div className="desc">
              Создание инвестиционных предложений, отслеживание поступлений и
              беспроцентное погашение
            </div>
          </div>
        );
      case "tab3":
        return (
          <div>
            <img src={ninefour} alt="" />
            <div className="desc">
              Простое переключение ролей без дополнительных логинов и паролей
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div>
      <section
        id="hero"
        className="hero d-flex align-items-center"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <svg
          className="svg_background_2"
          version="1.1"
          id="Слой_1"
          x="0px"
          y="0px"
          viewBox="0 0 1921.4 1081.5"
        >
          <g>
            <path
              className="st0"
              d="M1766,1080.2c-587,0-1174,0-1761,0.1c-4,0-4.9-0.7-4.9-4.8C0.2,718.7,0.2,362,0.1,5.3c0-4.4,1.1-5,5.2-5
          c134.6,0.1,269.3,0.1,403.9,0.1c33.4,7.3,64.7,20.1,95.6,34.3c32.1,14.8,62,33,89.5,55.2c29,23.4,53.1,51,70.4,84
          c12.1,23.1,19.3,47.8,22.7,73.6c5.4,41.1,10.3,82.3,18.7,123c5.2,24.9,12.3,49.1,23.2,72.1c8.6,18.2,19.9,34.6,33.2,49.7
          c28.8,32.8,64.2,57.3,100.4,81c22.7,14.9,46.7,27.7,68.4,44.1c30.9,23.5,55.3,52.3,72.8,87c9.8,19.3,18.6,39.2,29.7,57.8
          c13.9,23.2,32.8,41.3,56.4,54.7c27,15.3,56.4,23.9,86.3,30.9c34.9,8.2,70.6,12,106,17c49.2,7,98.2,14.8,146.4,27
          c27,6.8,53.5,15.2,78.4,28c18.3,9.4,34.3,21.7,49.2,35.6c15.9,14.7,31.7,29.5,49.6,41.9c14.4,10.5,28.9,20.8,43.6,31
          c22.8,15.8,47.8,27.1,73.8,36.2c12.7,4.4,25.5,8.8,38.4,12.7C1763.6,1077.6,1765.9,1077.6,1766,1080.2z"
            />
          </g>
        </svg>

        <svg
          className="svg_background"
          version="1.1"
          id="Слой_1"
          x="0px"
          y="0px"
          viewBox="0 0 1921.4 1081.5"
          style={{ background: "#19D3C5" }}
        >
          <g>
            <path
              className="st0"
              d="M1766,1080.2c-587,0-1174,0-1761,0.1c-4,0-4.9-0.7-4.9-4.8C0.2,718.7,0.2,362,0.1,5.3c0-4.4,1.1-5,5.2-5
            c134.6,0.1,269.3,0.1,403.9,0.1c33.4,7.3,64.7,20.1,95.6,34.3c32.1,14.8,62,33,89.5,55.2c29,23.4,53.1,51,70.4,84
            c12.1,23.1,19.3,47.8,22.7,73.6c5.4,41.1,10.3,82.3,18.7,123c5.2,24.9,12.3,49.1,23.2,72.1c8.6,18.2,19.9,34.6,33.2,49.7
          c28.8,32.8,64.2,57.3,100.4,81c22.7,14.9,46.7,27.7,68.4,44.1c30.9,23.5,55.3,52.3,72.8,87c9.8,19.3,18.6,39.2,29.7,57.8
          c13.9,23.2,32.8,41.3,56.4,54.7c27,15.3,56.4,23.9,86.3,30.9c34.9,8.2,70.6,12,106,17c49.2,7,98.2,14.8,146.4,27
          c27,6.8,53.5,15.2,78.4,28c18.3,9.4,34.3,21.7,49.2,35.6c15.9,14.7,31.7,29.5,49.6,41.9c14.4,10.5,28.9,20.8,43.6,31
          c22.8,15.8,47.8,27.1,73.8,36.2c12.7,4.4,25.5,8.8,38.4,12.7C1763.6,1077.6,1765.9,1077.6,1766,1080.2z"
            />
            <path
              className="st1"
              d="M1431,826.2c2,0,4,0,6,0c2.5,1.4,5.5-0.3,8,1c1.7,0,3.3,0,5,0c2.2,1.4,4.8-0.3,7,1c1.7,0,3.3,0,5,0
            c2.2,1.4,4.8-0.3,7,1c4.4-0.1,8.6,1.6,13,1c2.2,1.4,4.8-0.3,7,1c1.3,0,2.7,0,4,0c2.2,1.4,4.8-0.3,7,1c0.3,0,0.7,0,1,0
            c1.8,1.3,4.2-0.3,6,1c1.3,0,2.7,0,4,0c1.8,1.3,4.2-0.3,6,1c3.2,1.2,6.6,1,10,1c1.5,1.2,3.5-0.2,5,1c5,0.7,10,1.3,15,2
          c1.5,1.2,3.5-0.2,5,1c10,1.7,20,3.3,30,5c1.2,0.9,2.7,0.4,4,1c12.7,3.2,25.4,6.1,38,9.8c25.7,7.6,49.6,18.8,71.2,34.8
          c21.2,15.8,41.4,33.2,64,47.1c25.9,15.9,51.6,32.3,79.3,44.9c10.6,4.8,21.3,9.3,32.6,12.2c1.7,0.5,3.6,0.7,5,2.1
          c-1.7,1.6-3.8,1-5.7,0.5c-5-1.2-10-2.4-15-3.8c-3.8-1.1-7.3-3.1-11.4-0.3c-1.6,1.1-3.9-0.3-5.7-1c-11.5-4.7-23.2-9.2-34.7-14.1
          c-6.2-2.7-12.5-3.2-19-2.7c-11.8,1-23.6,1.2-35.3,1.9c-17.1,1-34.2,1.3-51.3,2.7c-7.4,0.6-14.9,0.5-22.4,1
          c-14.1,0.9-28.2,1.3-42.3,2.1c-4.4,0.3-8,1.5-11.3,4.4c-3.6,3.2-7.3,6.3-11.1,9.2c-1.4,1.1-2.7,2.6-4.8,2.1
          c-7.8-3.8-14-9.8-20.7-15.3c-17.5-14.3-32.9-30.9-50.8-44.6c-16.5-12.6-34.9-21.8-54.2-29.2c-35.4-13.5-72.4-21.6-109.5-28.7
          c-27.6-5.2-55.3-9.9-83.2-13.4c-23.6-3-47.2-6.2-70.7-10c-35.4-5.7-70.3-13.6-103.6-27.3c-23.9-9.9-45.5-23.3-63-42.8
          c-9.4-10.4-17.1-22-23.5-34.4c-8.6-16.7-16.8-33.7-25.3-50.4c-13.6-26.4-31.5-49.6-53.6-69.4c-18.2-16.3-38.8-29.3-59.7-42
          c-28.5-17.3-56.5-35.3-82.6-56.3c-12.4-10-24.6-20.3-35.6-31.8c-25.6-26.5-43.8-57.3-54.8-92.5c-7.3-23.1-12.1-46.8-16-70.6
          c-3.2-19.6-6.3-39.1-8.8-58.8c-2-15.1-3.5-30.2-6.1-45.2c-6.5-37.3-22.3-70.3-46-99.7c-7.4-9.2-14.9-18.3-23.5-26.3
          c-21.6-20.3-45.2-37.8-70.8-52.9c-35.1-20.7-72.4-36.2-111-48.9c-7.8-2.6-16-4-23.6-7.3c26.7,0,53.3,0,80,0
          c10.7,4,21.5,7.9,32.1,11.9c33.2,12.6,64.7,28.6,94.1,48.6c19.7,13.4,37.8,28.7,54,46.2c22.4,24.3,39.5,52.1,50.3,83.4
          c5.8,16.8,8.8,34.3,12.4,51.6c4.9,23.7,9.8,47.3,15.4,70.8c5.9,24.4,12.5,48.5,21.7,71.8c10.1,25.6,23.2,49.5,41.3,70.5
          c24.9,28.9,55.1,51.2,87.4,70.9c23.8,14.6,48.3,28,73.3,40.4c23.1,11.5,45.7,23.8,66,39.8c16.4,12.8,31.1,27.4,44,43.8
          c17.1,21.8,30,46.2,44.2,69.8c20.8,34.5,49.3,59.5,86.9,74.2c22.7,8.9,46.2,14.2,69.9,18.8c3.6,0.7,7.2,0.8,10.8,1.2
          c1.5,1.2,3.5-0.2,5,1c3.2,1.2,6.6,1,10,1c1.5,1.2,3.5-0.2,5,1c0.7,0,1.3,0,2,0c1.8,1.3,4.2-0.3,6,1c1.3,0,2.7,0,4,0
          c2.2,1.4,4.8-0.3,7,1c4.6,0.7,9.3,1.3,14,1c2.5,1.4,5.5-0.3,8,1c2,0,4,0,6,0c2.9,1.4,6.1-0.3,9,1c2.3,0,4.7,0,7,0
          c3.2,1.4,6.8-0.4,10,1c3.3,0,6.7,0,10,0c1.8,1.3,4.2-0.3,6,1c3,0,6,0,9,0c1.8,1.3,4.2-0.3,6,1c2,0,4,0,6,0
          C1425.5,826.6,1428.5,824.9,1431,826.2z"
            />
            <path
              className="st2"
              d="M1606,998.2c6.3-5.1,12.6-10.2,18.8-15.4c1.1-0.9,2.1-1.8,3.5-1.6c6,0.6,11.8-1.1,17.8-1.1
          c17.1,0.1,34.1-1.6,51.1-2.1c13.9-0.4,27.8-1.4,41.7-1.9c16-0.6,32.1-1.6,48-3c9.7-0.9,17.7,3.6,26.1,6.8c9.1,3.5,18.1,7.4,27.2,11
          c1.8,0.7,3.7,2.8,4.9-1.1c0.6-1.9,3.2-0.4,4.7,0c7.4,1.9,14.7,4,22,6c1.3,0.3,2.6,0.3,3.9,0.5c12.1,3.1,24.2,6.2,36.3,9.2
          c2.5,0.6,5.1,1.2,7.7,1.8c0,23.2-0.1,46.3,0.1,69.5c0,3-0.6,3.6-3.6,3.6c-50.2-0.1-100.3-0.1-150.5-0.1c-11.9-4-23.7-8.3-35.7-12
          c-40.1-12.4-75.8-33-109-58.3C1616.2,1006,1610.5,1002.8,1606,998.2z"
            />
          </g>
        </svg>

        <div id="world"></div>
        <link rel="stylesheet" href="./assets/css/cube.css"></link>
        <div className="assembly">
          <div className="comp-3d comp-3d--i">
            <div className="cube">
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
            </div>
            <div className="cube">
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
            </div>
            <div className="cube">
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
            </div>
            <div className="cube">
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
            </div>
            <div className="cube">
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
            </div>
            <div className="cube">
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
            </div>
            <div className="cube">
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
            </div>
            <div className="cube">
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
            </div>
            <div className="cube">
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
            </div>
            <div className="cube">
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
            </div>
            <div className="cube">
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
            </div>
            <div className="cube">
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
            </div>
            <div className="cube">
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
            </div>
            <div className="cube">
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
            </div>
            <div className="cube">
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
            </div>
            <div className="cube">
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
            </div>
            <div className="cube">
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
            </div>
            <div className="cube">
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
            </div>
            <div className="cube">
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
              <div className="cube__face"></div>
            </div>
          </div>
          <div className="comp-3d comp-3d--o">
            <div className="pos">
              <div className="cube">
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
              </div>
            </div>
            <div className="pos">
              <div className="cube">
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
              </div>
            </div>
            <div className="pos">
              <div className="cube">
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
              </div>
            </div>
            <div className="pos">
              <div className="cube">
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
              </div>
            </div>
            <div className="pos">
              <div className="cube">
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
              </div>
            </div>
            <div className="pos">
              <div className="cube">
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
              </div>
            </div>
            <div className="pos">
              <div className="cube">
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
              </div>
            </div>
            <div className="pos">
              <div className="cube">
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
                <div className="cube__face"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="placer_background">
          <div
            className="svg_background_s"
            style={{ "background-size": "104% 340%" }}
          ></div>
        </div>
        <div className="container" style={{ zIndex: 9 }}>
          <div className="fiolent_line header fixed-top"></div>
          <div className="row activation_cube">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <a href="https://qliqinvest.ru">
                <img
                  src={qliqLogo}
                  alt=""
                  width="300px"
                  style={{ marginBottom: "30px" }}
                />
              </a>
              <h1 data-aos="fade_no-up" className="aos-init aos-animate">
                Цифровая инвестиционная платформа
              </h1>
              <h2
                data-aos="fade_no-up"
                data-aos-delay="30"
                className="aos-init aos-animate"
              >
                Собрать инвестиции - теперь просто
              </h2>
              <div
                data-aos="fade_no-up"
                data-aos-delay="50"
                className="aos-init aos-animate"
              >
                <div className="text-center text-lg-start">
                  <a
                    href="https://personal.qliqinvest.ru"
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Начать использование</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="block_pre">
              <div className="row justify-content-md-center">
                <div className="col-md-4 main_item_pre">
                  <div className="item_pre">
                    <i className="bi bi-laptop"></i>
                    <span>Создание заявки онлайн</span>
                  </div>
                </div>
                <div className="col-md-4 main_item_pre">
                  <div className="item_pre">
                    <i className="bi bi-person-check"></i>
                    <span>Только проверенные пользователи</span>
                  </div>
                </div>
                <div className="col-md-4 main_item_pre">
                  <div className="item_pre">
                    <i className="bi bi-hand-thumbs-up"></i>
                    <span>Индивидуальные условия</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="team">
        <div className="container aos-init aos-animate" data-aos="fade_no-up">
          <header className="section-header">
            <p>Как это работает?</p>
          </header>

          <div className="row gy-4 multiple_arrow">
            <div
              className="qliq-stage col d-flex align-items-stretch aos-init aos-animate"
              data-stage="01"
              data-aos="fade_no-up"
              data-aos-delay="0"
            >
              <div className="member">
                <div className="stage">1</div>
                <div className="member-img"></div>
                <div className="member-info">
                  <h4>Регистрация</h4>
                  <p>Проходят все участники в qliqinvest</p>{" "}
                </div>
              </div>
            </div>
            <div
              className="qliq-stage col d-flex align-items-stretch aos-init aos-animate"
              data-stage="02"
              data-aos="fade_no-up"
              data-aos-delay="0"
            >
              <div className="arrow"></div>
              <div className="member">
                <div className="stage">2</div>
                <div className="member-img"></div>
                <div className="member-info">
                  <h4>Проверка</h4>
                  <p>Деятельности и документации каждого заемщика</p>{" "}
                </div>
              </div>
            </div>
            <div
              className="qliq-stage col d-flex align-items-stretch aos-init aos-animate"
              data-stage="03"
              data-aos="fade_no-up"
              data-aos-delay="0"
            >
              <div className="arrow"></div>
              <div className="member">
                <div className="stage">3</div>
                <div className="member-img"></div>
                <div className="member-info">
                  <h4>Публикация</h4>
                  <p>Размещение инвестиционного предложения на площадке</p>{" "}
                </div>
              </div>
            </div>
            <div
              className="qliq-stage col d-flex align-items-stretch aos-init aos-animate"
              data-stage="04"
              data-aos="fade_no-up"
              data-aos-delay="0"
            >
              <div className="arrow"></div>
              <div className="member">
                <div className="stage">4</div>
                <div className="member-img"></div>
                <div className="member-info">
                  <h4>Инвестирование</h4>
                  <p>
                    Подача заявок и перевод денежных средств инвестором в
                    выбранные инвестиционные предложения
                  </p>{" "}
                </div>
              </div>
            </div>
            <div
              className="qliq-stage col d-flex align-items-stretch aos-init aos-animate"
              data-stage="05"
              data-aos="fade_no-up"
              data-aos-delay="0"
            >
              <div className="arrow"></div>
              <div className="member">
                <div className="stage">5</div>
                <div className="member-img"></div>
                <div className="member-info">
                  <h4>Получение дохода</h4>
                  <p>
                    Возврат денежных средств инвестору в соответствии с
                    условиями договора
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="features">
        <div className="container">
          <div className="row feature-tabs">
            <header className="section-header">
              <p>Отсутствие посредников</p>
              <br />
              <h5 className="prem">
                <b>qliqinvest</b> берет на себя проведение переговоров,
                посещения офисов и проверки надежности контрагента. Заемщики и
                инвесторы заключают договор без привлечения банков, юристов,
                иных посредников.
              </h5>
            </header>
            {/* <div className="col-lg-12">
              <ul className="nav nav_qliq nav-pills mb-3">
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "tab1" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("tab1")}
                  >
                    КАБИНЕТ ИНВЕСТОРА
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "tab2" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("tab2")}
                  >
                    ПЕРЕКЛЮЧЕНИЕ МЕЖДУ КАБИНЕТАМИ
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "tab3" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("tab3")}
                  >
                    КАБИНЕТ ЗАЕМЩИКА
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade_no show item_preview" id="tab1">
                  <br />
                  <div className="row">
                    <div className="col-md-9">
                      <img decoding="async" src={ninefour} alt="" />
                      <div className="desc">
                        Выбор предложений, легкое инвестирование и полный
                        контроль над документооборотом{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade_no item_preview active" id="tab2">
                  <br />
                  <div className="row">
                    <div className="col-md-9">
                      <img decoding="async" src={ninefour} alt="" />
                      <div className="desc">
                        Создание инвестиционных предложений, отслеживание
                        поступлений и беспроцентное погашение{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade_no item_preview" id="tab3">
                  <br />
                  <div className="row">
                    <div className="col-md-9">
                      <img decoding="async" src={ninefour} alt="" />
                      <div className="desc">
                        Простое переключение ролей без дополнительных логинов и
                        паролей{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section id="contact" className="contact qliq_preim">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <header className="section-header">
            <p>Преимущества</p>
          </header>

          <div className="row gy-4">
            <div className="col-lg-12">
              <div className="row gy-4">
                <div className="col-md-3">
                  <div className="info-box">
                    <i aria-hidden="true" className="fab fa-salesforce"></i>
                    <br />
                    <h3>Выгодные условия</h3>
                    <p>Сроки и ставки, выгодные для всех участников сделки</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="info-box">
                    <i
                      aria-hidden="true"
                      className="fas fa-universal-access"
                    ></i>
                    <br />
                    <h3>Доступность</h3>
                    <p>
                      Осуществлять вложения могут, как физические, так и юр.
                      лица
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="info-box">
                    <i aria-hidden="true" className="fas fa-cogs"></i>
                    <br />
                    <h3>Технологичность</h3>
                    <p>Полностью электронный документооборот</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="info-box">
                    <i aria-hidden="true" className="fas fa-file-contract"></i>
                    <br />
                    <h3>Прозрачность</h3>
                    <p>Простые договоры без скрытых комиссий</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="info-box">
                    <i aria-hidden="true" className="fas fa-award"></i>
                    <br />
                    <h3>Проверенные заемщики</h3>
                    <p>
                      Тщательный андеррайтинг получателя инвестиций до
                      публикации предложения
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="info-box">
                    <i
                      aria-hidden="true"
                      className="fas fa-balance-scale-left"
                    ></i>
                    <br />
                    <h3>Юридическая защищенность</h3>
                    <p>
                      Юридическое сопровождение на всех этапах инвестирования.
                      Деятельность регулируется Федеральным законом от
                      02.08.2019 N 259-ФЗ
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="info-box">
                    <i aria-hidden="true" className="fas fa-shield-alt"></i>
                    <br />
                    <h3>Государственное регулирование</h3>
                    <p>
                      Ведение реестра операторов инвестиционных платформ
                      осуществляется Банком России
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="info-box">
                    <i className="fas fa-phone-volume"></i>
                    <br />
                    <h3>Поддержка</h3>
                    <p>
                      На связи ежедневно в будние дни с 09:00 до 18:00 по Москве
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="investor-founder" className="investor-founder">
        <div className="row mans_place">
          <div className="col-md-6 fo-3 investor_column">
            <div
              className="block_in investor"
              style={{ border: "17px solid #1ad3c5", borderLeft: "0" }}
            >
              <a href="/borrower">
                <div className="description">
                  <h2>Инвестору</h2>
                  Выберите качественные инвестпредложения от проверенных
                  компаний.{" "}
                </div>
              </a>
            </div>
          </div>
          <div className="man_1 fo-1" style={{ filter: "brightness(100%)" }}>
            <svg
              width="100%"
              viewBox="0 0 364 568"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M111.5 106.1C114.63 100.958 116.179 96.4618 119.9 91.5C121.1 89.9 122.3 88.3 123.5 86.8C125.8 84 127.6 80.7 130.8 78.6C132.1 77.4 133.4 76.1 134.7 74.9C145.701 66.9795 157.927 58.3856 172 58C172.8 58.4 173.3 59 173.6 59.8C175.6 70.1 176.2 80.7 176.7 91.1C177.9 112.2 179.3 133.3 178.7 154.5C178 175.3 177.3 196.1 175.4 216.9C174.1 231.4 172.5 245.8 170.2 260.1C169.6 263.8 171 264.8 174.4 264.7C177.8 264.6 181.1 263.9 184.5 263.6C186.3 263.4 188.2 262.9 190 263.7C192 267.8 190 271.8 189.5 275.8C185.7 309.5 180.5 343 173.9 376.3C173.5 378.5 173.8 380.6 173.5 382.7C172.2 383.6 171.7 386.5 171.7 386.5C162.7 433.9 152 481 140.3 527.8C138.3 535.8 136.5 544 133.8 551.8C127.6 550.3 121.3 549.9 114.9 550.3C113.7 550.4 112.4 550.5 111.7 549.1C110.5 540.7 110.1 532.2 110.1 523.8C109.9 484.2 109.9 444.5 110.1 404.8C110.1 396.9 108.7 389.1 109.1 381.2C109.2 379 109 376.9 109.6 374.8C110.2 372.8 111.8 372.9 113.3 373C117.4 373.4 119.5 371.3 120.7 367.6C124.1 357.2 127 346.7 130.1 336.2C133.7 325.9 136.6 315.3 139.8 304.8C142.2 297 141.2 295.5 133.5 293.1C127 291.1 120.7 288.7 114.1 287.1C112.1 286.6 110.2 285.9 109.6 283.6C109.2 277.8 108.7 272.1 109.9 266.3C111.5 263.9 114 264.5 116.2 264.9C124.3 266.1 132.3 267.3 139.1 269.4C134.4 268.5 129.1 266 124.1 263C119.8 260.5 117.7 256.6 117.6 251.5C117.4 238.6 119.9 226 122.3 213.4C127.6 185.5 134.2 157.9 142.1 130.6C143 127.4 144.1 124.3 145.2 120.5C141.6 131.1 138.8 141.3 135.3 151.3C128.5 170.7 122.1 190.2 115.3 209.6C111.89 219.261 108.986 229.054 106.5 239C104.8 244.4 103.4 249.9 101.8 255.3C101.2 257.4 100.6 259.4 98.2 260.2C91.3 261 84.9 260.1 79.3 255.7C78.4 253.7 79 251.8 79.3 249.8C81.5932 235.713 85.6787 166.35 111.5 106.1Z"
                fill="#0C3B56"
              ></path>
              <path
                d="M334.1 202.199C336.4 203.099 338.699 203.899 340.999 204.799C342.199 209.699 340.6 213.999 337.9 217.999C336.9 218.599 335.799 218.699 334.699 218.799C321.099 218.499 307.699 216.499 294.199 214.899C271.599 212.199 249.299 208.399 227.599 201.199C224.299 200.099 223.899 201.399 224.099 204.199C225.099 214.199 226.3 224.099 227.4 234.099C228.1 240.899 228.799 247.599 229.599 254.399C230.199 259.699 229.199 261.199 223.999 262.799C220.999 263.699 219.599 265.299 219.699 268.399C219.799 270.099 219.699 271.799 219.699 273.499C219.699 313.799 219.699 354.099 219.699 394.399C219.699 397.099 220.399 399.999 218.199 402.299C215.299 400.899 215.999 398.199 215.999 395.899C215.899 381.399 216 366.899 215.9 352.299C215.9 326.699 215.599 300.999 216.099 275.399C216.199 268.499 213.799 263.799 209.099 259.499C213.899 250.399 212.899 240.499 213.099 230.899C213.299 222.899 213.099 214.799 213.199 206.799C213.599 167.099 209.799 127.799 204.499 88.5993C203.799 83.6993 202.599 78.8993 202.699 73.8993C202.999 72.3993 203.9 71.5993 205.4 71.3993C208.5 72.1993 210.299 74.2994 211.599 76.9994C212.799 79.0994 213.999 81.0993 215.199 83.1993C230.867 105.582 240.312 141.101 251 168C278.601 191.101 321 197.073 334.1 202.199Z"
                fill="#0C3B57"
              ></path>
              <path
                d="M206 72.1C205.2 72.4 204.3 72.7 203.5 73C201.5 74.7 197.1 72.8 195 71.5C192.722 70.1385 175 64.5 172 58C172.6 56.1 172.7 53.4 173.6 51.7C174.5 48.3 176.6 41.9 177.5 38.5C177.9 38.3 177.1 41.1 177.6 41.2C180 42.2 181.7 41.1 183.4 39.6C186.6 36.8 188.5 33.1 190.5 29.4C193.7 23.4 197.1 23.2 201.4 28.3C202.2 29.2 202.7 30.8 204.1 30.4C205.8 30 205.6 28.2 205.6 26.9C205.6 22.2 205 17.7 202.6 13.6C201.8 12.3 200.5 11.1 201.6 9.39999C202.7 7.79999 204.5 7.59999 206.2 7.89999C210.9 8.69999 215.5 9.9 219.5 12.6C219.8 13.2 220.2 13.9 220.5 14.5C221.8 15.7 222.1 17.5 222.5 19C222.1 24.1 223.4 28.8 224 33.8C224.2 35.2 225.3 35.8 226.2 36.6C226.2 37.8 226.3 39.1 226.3 40.3C226.8 42.5 227.5 44.6 228.6 46.6C238.298 63.8885 207.5 66 200.6 57.8C202.9 60.4 205.8 61.8 208.5 64C207.4 66.5 208.2 70.2 206 72.1Z"
                fill="#E99F81"
              ></path>
              <path
                d="M219.6 12.6C215.3 11.3 211.1 9.99999 206.8 8.89999C205.4 8.49999 203.5 7.99999 202.5 9.39999C201.2 11.1 203.2 12.1 204 13.3C207.1 18.4 207.3 24.1 207.1 29.8C207 31.1 206.3 32.2 205 32.6C203.5 33.1 202.8 32 202 31C196.1 23.6 194.6 23.8 190.5 32.4C188.4 36.8 185.8 40.7 181.1 42.7C179.8 43.2 177.8 44.7 177.1 41.8C177.4 35.8 179.5 30.2 180.4 24.3C180.9 21.1 181.8 18 181.6 14.7C181.5 11.6 183.2 9.49999 185.9 8.19999H185.8C188 6.29999 190.7 5.39999 193.3 4.39999C195 3.59999 197.2 4 198.7 2.5C206.4 0.499996 214.1 0.599999 221.8 2.8C223.5 3.6 225.3 4.5 227 5.3C229.3 8.1 226.5 9.1 225.1 10.6C223.5 12 221.5 12.1 219.6 12.6Z"
                fill="#10334D"
              ></path>
              <path
                d="M353 206.5C371 213.5 362.5 224 358 227.5C354 229.5 342 218.4 339.7 218.6C339.5 218.6 339.3 218.6 339.2 218.6C338.7 218.4 338.3 218.1 338 217.6C339 213.4 340 209.2 340.9 205C344.1 204 347.4 203 350.6 202C353.5 201.5 352.9 205.8 353 206.5Z"
                fill="#EAA081"
              ></path>
              <path
                d="M221.8 2.8C214.1 1.5 206.4 1.8 198.7 2.5C206.4 -0.399999 214.1 -0.599996 221.8 2.8Z"
                fill="#EEF4F9"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M223.271 20.5819C223.048 20.1771 222.794 19.6608 222.5 19C221.333 22.8264 222.177 26.5266 223.025 30.237C223.484 32.2478 223.943 34.2615 224.084 36.3C224.184 37.9 225.984 37.2 227.084 36.6C227.256 36.4966 227.381 36.4526 227.512 36.4066C227.76 36.3191 228.029 36.2243 228.684 35.7C229.684 34.9 229.284 30.7 227.784 28.4C227.595 28.0911 227.401 27.788 227.207 27.4868C226.68 26.6662 226.161 25.8593 225.795 24.9843C224.992 23.7018 223.93 21.962 223.271 20.5819Z"
                fill="#E19476"
              ></path>
              <path
                d="M193.3 4.3C190.8 5.6 188.3 6.80001 185.8 8.10001C186 6.50001 187.8 6.3 188.5 5.2C190.1 4.9 191.7 4.6 193.3 4.3Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M225.1 10.6C226.1 9.00001 227.8 7.6 227 5.3C229 8 228.8 8.70001 225.1 10.6Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M185.8 4.89999C186.9 4.29999 187.3 3.89999 187.8 3.69999C188.4 3.49999 189 3.4 188.8 4.3C188.7 4.6 188.8 5.3 188.1 5.1C187.5 5.1 187 5.09999 185.8 4.89999Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M217.3 565.4C212.1 565.1 206.9 564.7 201.7 564.4C199.3 564.3 198.4 563.3 198.6 561C198.9 556.6 198.7 552.1 199.7 547.8C200.2 546.8 201 546.1 202.1 545.9C207 545.3 211.8 545.3 216.7 545.9C217.8 546.1 218.5 546.9 219.2 547.8C224.9 551.2 230.5 554.6 236.2 557.9C238.8 559.4 240.1 561.2 239.3 564.2C235.6 566.2 231.6 565 227.7 565.2C224.3 565.4 220.8 565.4 217.3 565.4Z"
                fill="#030405"
              ></path>
              <path
                d="M109.6 557.1C110.5 554.6 111.4 552.1 112.4 549.6C119.6 548.8 126.9 547.1 133.7 551.4C134.6 553 135.4 554.6 136.3 556.3C136.3 556.5 136.3 556.6 136.3 556.8C139.1 565.6 139.1 565.6 129.9 565.6C124.5 565.6 119.1 565.6 113.7 565.3C107.9 565 107.9 564.9 109.3 559.4C109.5 558.7 109.5 557.9 109.6 557.1Z"
                fill="#060709"
              ></path>
              <path
                d="M137.2 567.1C129.9 567.1 122.6 567.1 115.2 567.1C115.2 567 115.2 566.8 115.2 566.7C122.5 566.7 129.9 566.7 137.2 566.7C137.2 566.8 137.2 567 137.2 567.1Z"
                fill="#F1F1F1"
              ></path>
              <path
                d="M219.2 547.8C212.7 546.5 206.2 546.2 199.7 547.8C196.7 537.8 195.8 527.5 194.1 517.3C187.1 475.2 180.2 433.1 173.3 391.1C172.884 388.603 172.6 384 172.6 384C171.5 373.4 175.5 363.6 176.9 353.4C179 338.3 182.1 323.3 183.9 308.1C185.6 294.3 187.5 280.5 189.4 266.8C189.5 265.9 190 265.1 190.3 264.2C196 260.9 202 259 208.6 259.4C210.4 259.7 213.3 258.3 212.6 262.2C212.5 263 212.9 264 213.7 263.9C218.7 263.3 217.1 266.9 217.1 269.2C217.2 311.8 217.2 354.5 217.2 397.1C217.2 398.9 216.5 400.9 218.2 402.3C218.4 419.4 218.6 436.6 218.7 453.7C219 485.1 219.1 516.4 219.2 547.8Z"
                fill="#0F324C"
              ></path>
              <path
                d="M110.3 284.2C118.8 287.8 127.8 289.8 136.6 292.7C141.5 294.3 143.4 296.4 142 301.2C138.7 313.1 135.5 324.9 131.1 336.4C129 339.9 126 339.6 122.6 338.7C111.9 335.7 101.4 332.4 90.8 329.3C87.8 328.4 84.9 327.8 81.8 327.4C80.3 325.2 82.1 323.3 82.6 321.4C83.5 318.2 82.4 316.6 79.3 315.7C74.9 314.4 70.4 313.3 66.1 311.7C62.6 310.4 60.6 311.5 59.6 315.1C59.1 317 59.1 319.1 57.8 320.7C46.2 314.7 33.5 312 21.1 308.4C19.3 307.9 17.4001 307.6 15.9001 306.6C12.2001 303.9 11.6001 306.3 10.7001 309.3C9.60007 312.8 10.0001 317.1 5.90009 319.2C5.50009 318.9 3.60006 325.4 3.50006 325C3.80006 320.1 7.30004 308.8 8.60004 304.2C9.90004 301.2 10.4001 297.9 11.4001 294.8C12.7001 290.5 13.8 286.1 15.1 281.8C17 276.9 18.1 271.8 19.8 266.8C22.3 259.9 25 258.4 32.1 260.4C41.6 263.1 51.1001 265.7 60.4001 268.9C63.6001 270 65.4001 269.1 66.2001 265.9C69.5001 260 72.6001 259 77.5001 262.3C78.1001 263.6 78.0001 264.7 76.9001 265.7C76.0001 266.3 74.9001 266.3 73.9001 266.7C72.0001 267.3 71.3 268.8 71.3 270.6C71.3 272.3 72.8001 272.7 74.2001 273.1C77.8001 274 81.2001 275.2 84.7001 276.3C87.5001 277.2 90.3 277.9 93.1 278.8C95.2 279.5 97.4001 280.2 98.4001 277.2C99.3001 274.6 97.8001 273.5 95.7001 272.8C95.3001 272.6 94.9001 272.4 94.5001 272.2C93.2001 271.1 91.9001 269.8 93.0001 267.9C94.0001 266.3 95.7001 266.8 97.2001 267.2C98.1001 267.4 99 267.7 99.8 268C103.8 269.5 105.8 272.5 104.7 276.6C103.6 280.6 104.3 282.8 108.5 283.4C109.2 283.1 109.8 283.7 110.3 284.2Z"
                fill="#7B3C11"
              ></path>
              <path
                d="M208.7 259.2C202.6 260.8 196.5 262.4 190.4 264C184.3 264.7 178.1 265.2 172 266.1C168.3 266.6 167.9 265.2 168.4 262C172.3 238.2 174.5 214.2 175.8 190.1C178.2 147.6 177.3 105.2 172.7 62.9C172.5 61.5 172.5 60.1 172.4 58.7C179.9 61.8 186.7 66.3 193.6 70.4C196.8 72.3 199.8 73.4 203.5 72.7C211.5 124.4 215.8 176.4 214.5 228.7C214.3 236.1 213.7 243.5 213.7 250.9C213.7 255.2 212.6 258 208.7 259.2Z"
                fill="#DDE7F2"
              ></path>
              <path
                d="M11.0001 296.5C9.50006 306.5 15.5001 303 38.5001 312.5C43.617 314.614 49.7 315.4 55 317C56.8 317.5 56.4 319.7 57.7 320.5C62.9 320.8 67.7 323 72.6 324.4C75.7 325.3 78.8 325.8 81.8 327C86.1 324.8 89.8 327.7 93.6 328.8C103.9 331.6 114 334.9 124.2 337.9C126.8 338.7 129 337.8 131.1 336.3C127.9 347.3 124.8 358.4 121.3 369.3C119.7 374.5 117.2 375.3 110.6 373.6C107.1 372.6 103.7 371.6 100.2 370.7C98.3 371.3 96.5 370.7 94.8 370.2C86.1 367.4 77.3 365.1 68.7 362.2C51.1 357 33.6 351.4 15.9 346.4C12.5 345 8.8 344.5 5.5 343.1C3.1 342.1 0.7 341 0 338.1C6.50006 311 6.50006 310 11.0001 296.5Z"
                fill="#6F300E"
              ></path>
              <path
                d="M125 176.6C131 157.6 137.9 138.9 144.4 120C144.7 119.3 144.8 118.5 146 118.1C143.5 128 141.5 137.9 138.5 147.5C134.5 160.6 131.9 174 128.7 187.2C125.1 202.1 122.2 217.1 119.9 232.3C118.8 239.4 118 246.6 118.5 253.9C118.8 257.9 121.2 260.7 124.7 262.5C129.7 265.2 127.9 264.7 133.5 266C134.7 266.3 167.5 265 170 266.2C163.7 265 131.5 269.2 125.4 268C120.3 267 115.3 266.8 110 267.2C110 258.5 114.5 223 125 176.6Z"
                fill="#0F324D"
              ></path>
              <path
                d="M98.1 260C98.3 262.8 99.5 265.4 99.2 268.3C98.3 268.1 97.4 268 96.5 267.8C95.4 267.6 94 266.6 93.3 268.2C92.6 269.7 94.2 270.3 94.8 271.2C96.4 274.3 94.4 275.4 92 276C89.3 276.8 86.6 276.4 84 275.3C81.8 274.4 79.5 273.5 77.8 271.8C76 269.9 74.3 267.9 76.4 265.1C76.8 264.1 77.1 263.1 77.5 262.2C77.3 260.9 77.9 260 79 259.3C79.5 258.2 80 257 80.5 255.9C86 258.4 92 259.3 98.1 260Z"
                fill="#F3A889"
              ></path>
              <path
                d="M213.9 105.5C217 116.4 218.5 127.6 220.2 138.8C222.7 156 222.5 173.4 224.8 190.5C225.2 193.5 226.1 196.5 229.6 198.7C222 196.7 221.1 195.6 221.1 188.8C221.1 172.2 219 155.8 217.6 139.3C216.5 128 214.3 116.9 213.9 105.5Z"
                fill="#0E344F"
              ></path>
              <path
                d="M209 61.9C207.5 68.5 208.5 68 203.7 62.5C201.7 60.5 199.3 58.8 198.3 55.8C201.8 57.9 206.2 58.5 209 61.9Z"
                fill="#DE9072"
              ></path>
              <path
                d="M81.8 327.1C79.3 328.7 77.1 326.8 74.9 326.2C69.1 324.5 63.1 323.5 57.7 320.6C57.7 319.7 57.5 318.7 57.8 317.8C60.3 308.6 60.1 307.9 68.5 311C72.4 312.4 76.4 313.8 80.4 314.6C84.7 315.4 85.1 317.4 84.1 321.1C83.5 323.2 82.1 324.9 81.8 327.1Z"
                fill="#844513"
              ></path>
              <path
                d="M195 90.5C193.8 87.7 192.4 84.9 193.7 81.6C194.4 79.8 195.3 78.2 197.5 78.1C199.6 78 200.8 79.5 201.7 81.2C202.4 82.6 202.9 84.3 202.4 85.7C200.1 91.4 202.4 96.9 203 102.5C206.3 130 208.8 157.5 210.3 185.1C210.6 190.2 210.5 195.3 209.7 200.4C209.2 203.5 208.5 206.5 206.9 209.2C205.7 211.3 204 212.9 201.4 212.8C198.6 212.7 196.9 210.9 196 208.5C194.3 204.1 194.2 199.4 194.2 194.8C194.5 175.6 194.8 156.5 195.1 137.3C195.1 135.3 195 133.3 194.9 131.3C193.6 127.8 194.9 124.3 194.8 120.9C194.6 112.9 195.3 104.9 194.4 96.9C194.3 94.8 194.7 92.7 195 90.5Z"
                fill="#a71b8d"
              ></path>
              <path
                d="M195 90.5C195.9 104.1 195.8 117.7 195.1 131.3C194 130.6 194.1 129.5 194.1 128.4C194.1 116.7 194.1 105.1 194.1 93.4C194.1 92.4 194 91.3 195 90.5Z"
                fill="#E7E9F6"
              ></path>
            </svg>
          </div>

          <div className="man_2 fo-2" style={{ filter: "brightness(100%)" }}>
            <svg
              width="100%"
              viewBox="0 0 238 559"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.4 196.7C61.5 188.8 78.6 180.9 95.7 172.9C104.3 168.9 113.2 165.3 117.7 155.9C118.9 154 120 152.1 121.4 150.3C124.1 145.5 126.6 140.4 129.6 135.9C132.9 130.9 132.9 125.2 134.3 119.7C135.4 118.3 134.1 116.4 135.2 115.1C135.9 110.1 136.3 105.1 138 100.3C138.9 97.6 139.1 94.7 139.9 92C140.7 89.6 140.8 87 141.8 84.6C142.1 81.8 142.5 79 142.8 76.1C151.7 71.9 160.9 68.4 170.1 64.7C172.7 63.7 175.3 62.7 177.6 61.2C179.4 60.6 179.1 62.5 179.8 63.2C185.7 70 191.5 76.8 197.4 83.6C198.2 84.9 199.3 86 200.2 87.3C204.6 94.5 208.6 101.9 212.3 109.6C213.1 111.1 213.3 112.8 214.2 114.2C216.7 123.9 219.3 133.5 222.5 143C223.3 145.7 223.5 148.6 224.4 151.4C224.3 154.3 224.7 157.2 226.2 159.7C227.4 161.4 225.9 163.6 227.1 165.3C228.2 166.7 226.9 168.6 228 169.9C227.7 172.1 228.4 174.3 228.9 176.4C230 177.8 228.7 179.7 229.8 181C229.8 181.3 229.8 181.6 229.8 181.9C230.9 183.3 229.6 185.2 230.7 186.5C230.6 196 233.2 205.3 233.7 214.8C234.1 223.2 235.8 231.5 236.2 239.9C236.8 254.7 238.5 269.6 237 284.3C236.1 293.8 237.5 303.3 235.6 312.7C233.3 310.7 234.4 307.8 234 305.4C233.3 293 235.3 280.7 234.9 268.4C234.7 263.5 234.9 263.6 230 265C217.5 268.7 204.6 270.2 191.6 271.4C179 272.5 166.3 273 153.7 271.5C147.7 270.8 141.8 270 135.8 269.3C131.4 268.2 126.9 267.8 122.6 266.3C122.1 266.1 121.6 265.7 121.2 265.3C119.4 263 119.8 260.3 119.7 257.8C118.9 238.2 121.3 218.8 121.9 199.2C121.9 198 122.5 192.8 123.5 192C129.5 195.3 130.1 200.9 128.5 208.5C127.3 214.1 128.9 219.5 129.4 225C129.5 226.2 130 227.4 131.2 228.1C134 229.7 135.2 227.8 136.1 225.8C137.6 222.5 138 219 138.2 215.5C138.6 209.2 139.7 203 139.3 196.7C139.1 194.2 139.9 191.8 140.4 189.5C141.2 185.2 145.1 183.1 147.7 180.1C158 168.6 166.9 156 174.3 146.2C165.5 157.1 154.5 170.2 141.6 181.7C141.1 182.4 140.5 183 139.9 183.6C136.4 186.3 133 189 129.7 191.9C129.3 192.2 129 192.4 128.6 192.6C126.9 193.3 125.2 193.9 123.6 194.7C108.9 199.9 93.8 203.8 78.6 207.3C69.7 209.3 60.9 211.6 52 213.5C50.2 213.9 48.4 214.6 46.5 214.2C44.2 208.9 42.6 203.2 40.2 197.9C41.7 196.7 43.3 197.7 44.4 196.7Z"
                fill="#DDE7F2"
              ></path>
              <path
                d="M124.2 66.8C123.3 66.5 122.4 66.2 121.5 65.9C117.8 62.5 116.7 58.3 118.7 53.5C119.6 51.2 120.6 48.9 122.3 47.1C124.2 46.4 125.5 47.7 127 48.5C130.2 50.3 133.5 50.2 136.9 49.2C140.1 48.3 141.9 46.2 141.6 42.7C140.7 33.8 139.1 25 140.1 15.9C140.4 13.6 138.7 13 136.7 13.4C134.9 13.7 133.2 14.7 131.5 15.4C129.8 16.1 128.2 17.3 126.3 16C125.4 16 124.6 15.7 124.1 14.9C122.6 13.6 121 12.3 119.9 10.7C117.2 6.79999 118.5 3.39999 123 1.89999C124.8 1.29999 126.7 1.4 128.5 1.3C140 0.499999 151.2 1.4 161.9 6C162.5 6.2 163.1 6.3 163.2 7C164.1 7.5 165 8 165.8 8.5C169.1 10.6 168.9 14.3 169.4 17.5C170.4 23.2 171.2 29 171.2 34.8C171.1 36.8 171.4 38.8 171.6 40.8C172 44.6 170.7 45.8 166.8 45.7C160.3 45.6 156.4 42.1 155.5 35.4C155.3 34.2 155.2 32.9 154.4 31.9C153.4 30.5 152.1 29.3 150.2 29.7C148.3 30.1 147.4 31.5 147.1 33.3C146.5 37.3 147.3 40.9 149.5 44.3C150.8 46.4 152.6 48.1 154.1 50.1C157.5 54.4 157.3 55.7 152.9 59C148.3 62.4 142.8 63.6 137.6 65.7C135.4 66.1 133.1 66.4 130.9 66.8C128.5 67.6 126.4 67.6 124.2 66.8Z"
                fill="#49261B"
              ></path>
              <path
                d="M152 58.5C156.3 56 155.7 53.5 152.5 50.3C148.2 46.1 145 41.2 145.3 34.8C145.4 31.3 146.4 28.2 150.6 28C153.8 27.8 156.5 30.9 156.8 34.8C157.4 42 159.4 43.8 166.8 44.4C169.8 44.6 171.2 43.9 170.7 40.7C170.5 39 170.7 37.3 170.7 35.6C170.8 35.4 170.8 35.1 170.9 34.9C171.1 35.1 171.2 35.3 171.4 35.4C171.5 36.6 171.5 37.8 171.6 39C172.6 41.4 171.3 44.1 172.4 46.5C172.3 47.2 172.4 47.9 173 48.3C174.4 49.5 174.3 51.5 175.1 53C175.3 53.6 175.5 54.2 175.7 54.8C177 56.8 178.4 58.8 178.3 61.4C177.4 63.6 175.2 63.7 173.4 64.4C164.6 68 155.9 71.6 147.1 75.2C145.7 75.8 144.3 76.3 142.7 76V76.1C141.9 73.7 142 71.1 141.2 68.7C144.4 64.8 148 61.4 152 58.5Z"
                fill="#F3A88A"
              ></path>
              <path
                d="M126.2 16C129.5 15.5 132.2 13.7 135.1 12.4C136.8 11.7 138.7 11.1 140.4 12.3C142.2 13.6 141.6 15.6 141.2 17.4C139.7 24.5 141.8 31.5 142.1 38.5C142.2 42.2 144.9 46.7 139.9 49.3C134.8 51.9 129.6 52.5 124.7 48.6C124 48 123.2 47.6 122.4 47.1C120.9 45.5 122.5 43.3 121.4 41.7C121.2 41.4 121.1 41.2 121.2 40.9C121.3 40.6 121.4 40.5 121.4 40.5C122.6 39.8 123.8 39.1 123.8 37.4C123.8 32.4 125.4 27.4 124.5 22.3C125.1 20.3 125.7 18.1 126.2 16Z"
                fill="#F3A88A"
              ></path>
              <path
                d="M40.6 197.7C44.6 202.2 46.4001 207.5 46.5001 213.4C46.2001 213.7 45.8 213.8 45.3 213.9C40 214.1 36.9001 218.4 33.0001 221C32.0001 221.7 31.4 222.8 30.3 223.3C23.5 224.3 19.2001 220 15.0001 215.7C13.9001 214.6 13.9 212.9 14.6 211.4C17.8 208.7 21.0001 206.1 24.7001 204.2C24.7469 204.177 31.4001 200.5 29.1 198.5C27.9 198.1 26.0001 197.7 27.2001 195.5C28.6001 195.6 30.1001 195.1 31.4001 195.9C33.0001 197.2 34.9001 197 36.7001 196.9C37.9001 197.6 39.5 196.6 40.6 197.7Z"
                fill="#F3A98B"
              ></path>
              <path
                d="M163 7.00003C152.3 2.60003 141.2 0.900034 129.7 1.60003C126 1.80003 121.3 0.900034 119.5 5.10003C117.6 9.40003 121.8 11.9 124 14.8C121.4 14.2 119.9 12.2 118.7 10.1C116.5 6.40003 118.1 2.70003 122.2 1.50003C124.4 0.900027 126.7 0.300024 128.9 0.200024C139.7 -0.199976 150.3 0.700025 160.4 4.70002C161.5 5.10002 162.8 5.50003 163 7.00003Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M124.5 22.4C127.2 24.5 126.1 27.6 125.8 30.1C125.4 32.8 124.9 35.5 125.1 38.2C125.4 41.6 123.8 41.7 121.4 40.8C118.4 39.6 118.8 37.2 119.5 34.9C120.5 31.5 121.8 28.2 123.3 25C123.7 24.2 124.1 23.3 124.5 22.4Z"
                fill="#E5987B"
              ></path>
              <path
                d="M152 58.5C149.1 61.7 146.3 64.8 143.4 67.9C143.2 68.2 142.3 67.9 141.7 67.8C140.3 67.4 140.7 65.8 139.9 64.9C138.8 64.4 138.3 65.6 137.4 65.6C137.5 63.3 139.6 64 140.8 63.4C144.6 61.8 148.3 60.1 152 58.5Z"
                fill="#D88D71"
              ></path>
              <path
                d="M171.4 35.5H171L170.7 35.7C169.9 28.4 169.7 21.1 167.9 13.9C167.4 11.9 166.8 10.1 165.6 8.5C168.9 8.7 168.8 11.7 169.2 13.6C170.7 20.8 172 28.1 171.4 35.5Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M121.5 41.7C123.4 43.2 122.1 45.3 122.5 47.1C120.8 49.7 119.6 52.4 118.8 55.4C117.6 59.5 119.1 62.8 121.5 65.9C117 64.1 116.9 60.5 117.3 56.5C117.8 51.4 122.5 47.4 121.5 41.7Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M123.3 25.1C122.3 28.4 121.2 31.8 120.2 35.1C119.5 37.3 119.4 39.3 121.5 40.9C121.5 41.2 121.5 41.5 121.5 41.8C118.2 41 118.2 38.2 118.8 36C119.7 32.1 120.5 28.1 123.3 25.1Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M140 65C141.5 65.4 141.2 66.9 141.8 67.9C142.1 70.7 143.4 73.3 142.9 76.2C141.5 72.5 140.2 68.9 140 65Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M178.4 61.4C177.5 59.2 176.7 57 175.8 54.8C179.1 56.6 179.2 60 179.9 63.1C179.4 62.6 178.9 62 178.4 61.4Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M140 91.9C140.1 94.8 139.7 97.7 138.1 100.2C138 97.3 138.4 94.5 140 91.9Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M224.4 151.3C222.8 148.7 222.5 145.9 222.5 142.9C224.1 145.5 224.4 148.3 224.4 151.3Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M121.4 150.3C120.8 152.6 119.7 154.5 117.7 155.9C118.1 153.5 119.2 151.5 121.4 150.3Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M141.8 84.5C141.9 87.1 141.3 89.6 139.9 91.9C139.9 89.2 140 86.6 141.8 84.5Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M172.4 46.5C170.8 44.1 171.7 41.5 171.6 39C173.3 41.4 172.1 44.1 172.4 46.5Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M124.2 66.8C126.4 66.8 128.5 66.8 130.7 66.8C128.5 68.4 126.4 68.3 124.2 66.8Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M175.2 53.1C173.9 51.8 173.5 50.1 173.1 48.4C175.1 49.3 175.2 51.2 175.2 53.1Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M214.2 114.2C212.7 113 212.3 111.4 212.3 109.6C213.8 110.7 214.2 112.3 214.2 114.2Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M26.8 195.9C26.4 195.6 26 195.3 25.7 195C27.6 195.2 29.7 194.2 31.5 195.8C29.9 195.8 28.3 195.8 26.8 195.9Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M227.2 165.2C225.5 163.6 226.6 161.5 226.3 159.6C227.9 161.2 226.9 163.3 227.2 165.2Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M0.999976 190.2C0.699976 189.8 0.300001 189.5 0.400001 189.2C0.500001 188.9 0.899964 188.5 1.29996 188.5C1.89996 188.4 2.49999 188.8 2.19999 189.5C2.09999 189.8 1.49998 189.9 0.999976 190.2Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M200.3 87.3C198.8 86.5 197.6 85.5 197.5 83.6C199 84.3 200.2 85.4 200.3 87.3Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M172.2 21.3C171.4 20.5 171.4 19.5 171.9 18.5C173 19.4 172.1 20.4 172.2 21.3Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M125.3 68.7C126.1 68.8 127.6 68.8 127.7 68.9C127.8 70 126.8 69.4 126.3 69.5C125.9 69.6 125.5 69.3 125.1 69.2C125.1 69.1 125.2 68.9 125.3 68.7Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M228.1 169.8C226.6 168.5 227.4 166.7 227.2 165.2C228.7 166.5 227.9 168.2 228.1 169.8Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M135.3 115.1C135.1 116.7 135.9 118.4 134.4 119.7C134.6 118.2 133.8 116.4 135.3 115.1Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M230.9 186.5C229.4 185.2 230.2 183.4 230 181.9C231.5 183.2 230.7 184.9 230.9 186.5Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M229.9 180.9C228.4 179.6 229.2 177.8 229 176.3C230.6 177.6 229.7 179.4 229.9 180.9Z"
                fill="#EEF4F9"
              ></path>
              <path
                d="M194 505C191.2 489.7 188.4 474.5 185.5 459.2C181.8 447.5 180.7 435.2 178 423.2C177 418 176.2 412.8 175.3 407.6C174.5 400.8 172.6 394.1 172 387.2C170.842 373.886 172.725 391.417 166.1 360.5C160.2 332.3 154.1 304.2 148.3 276C147.6 272.8 145.9 271.9 143 271.2C140.3 270.6 136.6 271.8 135.3 267.9C149.3 269.6 163.2 271.2 177.3 270.6C195.1 269.9 212.8 268.4 230 263.3C236.8 261.3 236.8 261.2 236.5 268.4C236.1 280.6 235.7 292.8 235.4 305C234.3 309.1 234.7 313.3 234.6 317.4C233.9 337.6 233.2 357.9 232.6 378.1C232.5 379.8 232.7 381.5 232.8 383.2C233.1 383.6 233.3 384 233.4 384.4C233.5 386.3 233.3 388.2 233.3 390.1C232.6 406.6 232.3 423.2 231.2 439.7C231.2 441.8 231.5 443.9 231.5 446.1C231 450.2 229.7 454.3 230.3 458.6C229.4 467.7 229 476.8 228.1 485.8C227.1 493.1 226.8 500.4 226.5 507.8C226.5 510.2 225.5 512.5 225.6 514.9C225.6 516.8 225.5 518.7 225.4 520.6C224.5 526.7 224.3 532.9 223.7 539C223.5 541.3 223.6 543.7 221.7 545.4C214.7 545.9 207.8 546.4 200.9 544.7C199 543 198.8 540.7 198.4 538.4C197.4 532.5 196.1 526.6 195.2 520.7C195.2 518.4 194.4 516.3 194.1 514.1C193 511.2 194.7 508 194 505Z"
                fill="#0C3B57"
              ></path>
              <path
                d="M135.3 268C138.6 270.4 142.7 269.5 146.3 270.7C147.8 271.2 148.9 271.4 149.3 273.4C152.1 287.4 155.1 301.3 158 315.2C161.6 332.6 164.7 350.1 169 367.3C170.6 373.7 168.9 379.8 169.8 385.9C169.8 386.1 169.9 386.4 169.9 386.6C170 389.4 169.9 392.1 170 394.9C169.5 405.4 168.3 415.7 165.9 425.9C163.579 436.347 163.821 444.5 162.1 458.8C160.8 469.6 159.3 480.4 158.1 491.3C156 509.9 154 528.6 152 547.3C151.9 547.9 152.1 548.5 152.1 549.1C151.7 556.3 151.7 556.4 144.5 556.6C142.4 556.7 140.3 556.5 138.2 556.5C139.3 553.2 142.2 554.6 144.4 554.2C146.1 553.9 148.5 554.6 149.2 552.3C150.1 549.3 150.3 546.2 149 543.3C148.4 541.9 146.6 542.1 145.2 542.1C142 542 138.7 542.1 135.5 542C133.7 541.9 131.7 542.2 130.4 540.5C128.5 532.6 129.2 524.5 129.5 516.6C129.9 501.3 127.6 486.2 127.1 471C126.8 461.3 126.9 451.6 126.6 441.9C126.5 437.7 126.8 433.5 125.9 429.5C125.3 426.7 126.8 424.4 127.2 421.9C126.8 403.5 126.5 385.2 126.1 366.8C126.1 365.8 125.6 364.7 125.3 363.7C124.4 359.9 123.9 356 124 352.3C124.3 330.3 122.3 308.3 123 286.3C123 285.4 122.9 284.6 123 283.7C122.4 277.6 120.9 271.4 123.5 265.3C127.3 266.3 131.3 267.2 135.3 268Z"
                fill="#0F324C"
              ></path>
              <path
                d="M129 191.5C129.3 191.4 130.5 190 130.5 190.5C131.8 191.7 131.2 193.8 130.9 195.3C129.4 203.1 130.7 211 130.2 217.1C130.2 213.2 130.2 207.5 130.2 201.8C130.2 196.8 132.4 192.7 137.1 191.6C139.6 191 138.9 190 139 188.7C139.1 186.7 139.6 184.7 139.7 182.7C140.1 182.1 140.1 183.1 140.5 182.5C144.5 184.5 141.8 185.8 141.8 188.3C140.4 198.9 140.8 209.7 139.1 220.3C138.7 222.7 138.3 225.2 137.2 227.4C135.7 230.3 133.8 231.8 130.8 229.1C127.1 222.9 128 216.1 128.1 209.5C128.2 205.2 128.8 201 127.7 196.8C127.1 194.8 127.7 193.2 129 191.5Z"
                fill="#1ad3c5"
              ></path>
              <path
                d="M141.8 188.4C141.1 186 143.1 183.3 140.9 181.1C154.5 168.8 166.2 154.6 178.5 141C173.4 149.8 167.4 157.8 161.3 165.8C155.2 173.6 148.3 180.8 141.8 188.4Z"
                fill="#BCCBD9"
              ></path>
              <path
                d="M140.7 115C141.8 109.3 142.8 103.6 144.1 97.9C144.6 95.5 145.1 93.2 144.1 90.7C143.1 88.1 143.8 85.8 146.2 84.3C148.2 83 150.1 83.7 151.6 85.3C153.7 87.6 152.9 89.9 151.3 92C150.3 93.4 149.3 94.7 149.4 96.6C149.7 104 144.3 109 140.7 115Z"
                fill="#1ad3c5"
              ></path>
              <path
                d="M141 181C144.1 185 138.4 190.7 140.5 195.1C138.4 194.2 139.7 192.5 138.6 191.9C132.4 194.8 129.8 199.4 130.6 206.5C131.2 211.8 130.7 217.2 129.8 222.6C129.8 212.1 129.8 201.6 129.8 191C132.6 187.7 137.5 183.6 141 181Z"
                fill="#1ad3c5"
              ></path>
              <path
                d="M129.001 191.5C128.901 200.3 128.7 208.7 128.6 217.5C128.6 221.5 129.4 225.4 130.7 229.2C126.1 225 128 219.2 127.1 214.2C128.048 201.537 123.5 197.5 122.5 195C124.5 194 125.5 194 129.001 191.5Z"
                fill="#C2D0DE"
              ></path>
              <path
                d="M123.3 265.5C123.5 271.5 123.6 277.4 123.8 283.4C119.6 283 117.4 280.8 117.6 276.5C117.7 275.6 118 274.8 118.5 274C117 274.9 115.6 275 114.3 273.6C119.9 273.4 121.2 269.3 122.3 265C122.6 265.2 122.9 265.3 123.3 265.5Z"
                fill="#EDA68B"
              ></path>
              <path
                d="M45.4001 213.6C42.8001 218.9 37.5 221 32.8 223.7C32.1 224.1 31.0001 223.6 30.4001 222.8C32.8001 217.7 38.4001 216.3 42.2001 212.8C43.1001 212 44.6001 212.3 45.4001 213.6Z"
                fill="#EAA183"
              ></path>
              <path
                d="M114.2 273.7C115.8 274.3 119.8 271.3 118.5 276.4C117.9 277.1 117 277.5 116.5 278.3C114.5 280.9 115.2 282.8 118.3 283.6C120.2 284.1 122.3 284 123.7 285.7C123.8 286.8 124 287.8 124 288.9C124.4 309.5 124.8 330.1 125.1 350.8C125.1 355.2 127.2 359.6 125.1 363.9C104.8 360.7 84.5 357.5 64.3 354.1C59.6 353.3 57.9001 350.9 58.7001 346.2C62.1001 325.6 65.5001 305.1 69.0001 284.5C70.0001 278.5 71.9001 277.2 77.9001 278.2C87.1001 279.6 96.2 281 105.3 282.7C109 283.4 111.4 283.3 111.3 278.7C111.3 276.6 112.5 274.9 114.2 273.7Z"
                fill="#6F300E"
              ></path>
              <path
                d="M129.7 540.8C129.9 540.8 130.1 540.8 130.3 540.7C136 540.7 141.7 540.9 147.4 540.8C150.2 540.7 151.1 541.7 151.1 544.5C151.3 555.2 151.4 555.2 141 555.7C139.9 555.8 138.8 555.5 138 556.6C130.2 557.2 122.4 557 114.6 556.8C113.4 556.8 111.9 556.9 111.4 555.5C110.8 553.9 112.2 553 113.2 552.1C117 549 121.4 546.7 125.6 544.2C127.3 543.4 129.2 542.8 129.7 540.8Z"
                fill="#030405"
              ></path>
              <path
                d="M226.1 555.7C225.8 556.6 225.6 557.4 225.3 558.3C215.3 558.3 205.4 558.3 195.4 558.4C193.1 556.4 195.2 555.2 196.3 553.9C196.4 553.6 196.5 553.3 196.5 553C197.1 549.7 198.2 546.6 201.1 544.7C207.9 544.9 214.7 543.7 221.4 545.5C224.3 547.3 224.4 550.7 225.9 553.2C226.3 554 226.3 554.8 226.1 555.7Z"
                fill="#040505"
              ></path>
              <path
                d="M123.8 285.6C121.8 285.3 119.9 285.1 117.9 284.7C116.2 284.3 113.5 284.9 114 281.6C114.5 279 114.1 275.7 118.4 276.3C117.5 280.6 121.5 281.2 123.7 283.3C123.8 284.1 123.8 284.9 123.8 285.6Z"
                fill="#E8E6E6"
              ></path>
              <path
                d="M169.8 386C169.9 388.9 169.8 391.8 168.8 394.5C169.1 391.6 167.7 388.6 169.8 386Z"
                fill="#0C3B57"
              ></path>
            </svg>
          </div>
          <div className="col-md-6 fo-4 borrower_column">
            <div
              className="block_fo founder"
              style={{ border: "17px solid #a71b8d", borderRight: "0" }}
            >
              <a href="/borrower">
                <div className="description">
                  <h2>Получателю инвестиций</h2>
                  Получите инвестиции онлайн с минимальным пакетом документов.
                  Выбери качественные инвестпредложения от проверенных компаний.{" "}
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="faq">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <p>Часто задаваемые вопросы</p>
          </header>
          <center>
            <div className="row col-lg-6">
              <Accordion
                defaultActiveKey="0"
                className="accordion accordion-flush"
                id="faqlist1"
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Что такое &nbsp;<strong>qliqinvest</strong>?
                  </Accordion.Header>
                  <Accordion.Body>
                    qliqinvest - это инвестиционная платформа нового поколения,
                    позволяющая привлекать финансирование со стороны инвесторов
                    для целей бизнеса.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Как регулируется деятельность платформы?
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>qliqinvest</strong> осуществляет свою деятельность в
                    соответствии с Федеральным законом от 02.08.2019 N 259-ФЗ "О
                    привлечении инвестиций с использованием инвестиционных
                    платформ и о внесении изменений в отдельные законодательные
                    акты Российской Федерации"
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Кто может стать инвестором?
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>Индивидуальный предприниматель</strong>:
                    Максимальная сумма не ограничена.
                    <br />
                    <strong>Необходимые документы</strong>: паспорт РФ (разворот
                    с фото и прописка), ИНН, реквизиты для перечисления денежных
                    средств, финансовая (бухгалтерская) отчетность, налоговые
                    декларации.
                    <br />
                    <strong>Юридическое лицо</strong>: Максимальная сумма не
                    ограничена.
                    <br />
                    <strong>Необходимые документы</strong>: карточка предприятия
                    (ИНН, ОГРН, банковские реквизиты), паспорта директора и
                    участников, финансовая (бухгалтерская) отчетность, налоговые
                    декларации.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Как связаться с поддержкой?
                  </Accordion.Header>
                  <Accordion.Body>
                    Если у вас возникли вопросы по работе платформы или хотите
                    получить консультацию специалиста по сделкам, оставьте на
                    сайте свои контактные данные с текстом обращения и мы
                    обязательно с вами свяжемся. Также вы можете обратиться к
                    нам через почту info@qliqinvest.ru или позвонить по телефону{" "}
                    <strong>+7 (495) 136-27-90</strong>.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Есть ли риски для инвесторов?
                  </Accordion.Header>
                  <Accordion.Body>
                    Инвестирование в любой финансовый инструмент сопряжено с
                    рисками. Невозможно полностью исключить возможность
                    дефолтов, даже тщательно проверяя заемщиков. qliqinvest не
                    является банком и не подпадает под систему страхования
                    вкладов. Перед началом инвестирования рекомендуется
                    ознакомиться с Декларацией о рисках, диверсифицировать свой
                    портфель, самостоятельно анализировать документы заемщиков и
                    макроэкономические показатели, принимать взвешенные решения
                    и избегать импульсивных поступков.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </center>
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
                      <a
                        href="https://yandex.ru/maps/-/CCURyTF8XA"
                        target="_blank"
                      >
                        123112, город Москва, Пресненская наб, д. 12, помещ.
                        1/13
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  <div className="info-box">
                    <i className="bi bi-telephone"></i>
                    <h3>Телефоны</h3>
                    <p>
                      <a href="tel:+7 (495) 136-27-90">+7 (495) 136-27-90</a>
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-6">
                  <div className="info-box">
                    <i className="bi bi-envelope"></i>
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:info@qliqinvest.ru">info@qliqinvest.ru</a>
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
                    <a href="/privacy" target="_blank">
                      <b>Политикой конфиденциальности</b>
                    </a>
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

export default Hero;
