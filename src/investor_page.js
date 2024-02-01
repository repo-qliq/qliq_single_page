import React, { useState } from "react";
// import Accordion from "react-bootstrap/Accordion";
import qliqLogo from "./assets/svg/qliq_f2.svg";
import invest_girl_4 from "./assets/img/invest_girl_4.png";
import { Link } from "react-router-dom";
// import ninefour from "./assets/img/900x450.png";
// import bankrussia from "./assets/img/svg/bankrussia.svg";
// import aoip from "./assets/img/svg/aoip.svg";

const Investor_page = () => {
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
  return (
    <div>
  
<section id="hero" className="hero d-flex align-items-center" style={{'position': 'relative', 'overflow': 'hidden'}}>

	<div className="placer_background investor">
	  <div className="svg_background_s"></div>
	</div>

  <div className="fiolent_line header fixed-top"></div>

  <div className="container" style={{'z-index': '9'}}>
    <div className="row activation_cube" style={{'position': 'relative'}}>
      <div className="col-lg-6 d-flex flex-column justify-content-center">
				<Link to="/">
	        <img decoding="async" src={qliqLogo} alt="" width="300px" style={{'margin-bottom': '30px'}} />
				</Link>
        <h1>Инвестиции в действующий бизнес онлайн</h1>
        <h2 style={{'width': '80%'}}>Инвестируйте в малый и средний бизнес РФ и получайте пассивный доход от <b>15% годовых</b></h2>
        <div>
          <div className="text-center text-lg-start">
            <Link to="https://personal.qliqinvest.ru" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
              <span>Инвестировать</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>

      <img decoding="async" src={invest_girl_4} className="invest_girl" alt="" />
      <div className="block_pre investor">
        <div className="row justify-content-md-center">
          <div className="col-md-4 main_item_pre">
            <a data-text="Заявка не выходя из дома!">
              <div className="item_pre">
                <i className="bi bi-check2-circle"></i>
                Индивидуальные условия
							</div>
            </a>
          </div>
          <div className="col-md-4 main_item_pre">
            <div className="item_pre">
              <i className="bi bi-cpu"></i>
              Электронный документооборот
						</div>
          </div>
          <div className="col-md-4 main_item_pre">
            <a data-text="У нас лучшие условия">
              <div className="item_pre">
                <i className="bi bi-emoji-smile"></i>
                Удобный интерфейс
							</div>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<section id="team" className="team">
    <div className="container">
  
      <header className="section-header">
        <p>Кто может стать заемщиком?</p>
                <br/>
          <h5 className="prem">Работающий бизнес, порядок с финансовыми документами и четкий план развития бизнеса позволят вам привлечь финансирование от частных инвесторов!</h5>
            </header>
  
      <div className="row gy-4 multiple_arrow">
  
      <div className="qliq-stage invest_req col d-flex align-items-stretch" data-stage="01">
              <div className="member">
                    <div className="stage"><i aria-hidden="true" className="fas fa-user-check"></i></div>
                  <div className="member-img">
  
          </div>
          <div className="member-info">
            <h4>Индивидуальный предприниматель</h4>
            <div className="req"><p>Необходимые документы:</p><ul><li>Паспорт (разворот с фото и прописка)</li><li>ИНН</li><li>Реквизиты для перечисления денежных средств</li></ul></div>        </div>
        </div>
      </div>
      <div className="qliq-stage invest_req col d-flex align-items-stretch" data-stage="02"  data-aos-delay="0">
              <div className="member">
                    <div className="stage"><i aria-hidden="true" className="fas fa-user-tie"></i></div>
                  <div className="member-img">
  
          </div>
          <div className="member-info">
            <h4>Юридическое лицо</h4>
            <div className="req"><p>Необходимые документы:</p><ul><li>Карточка предприятия (ИНН, банковские реквизиты)</li><li>Паспорта директора и участников</li><li>Реквизиты для перечисления денежных средств</li></ul></div>        </div>
        </div>
      </div>
  
      </div>
    </div>
</section>

<section id="contact" className="contact qliq_preim features">

<div className="container aos-init aos-animate" data-aos="fade-up">

  <header className="section-header">
    <p>Как мы отбираем получателей инвестиций</p>
          <br/>
      <h5 className="prem">Каждая компания проходит несколько этапов тщательной проверки в процессе регистрации и подготовки инвестпредложения для публикации на платформе</h5>
      </header>

  <div className="row feature-icons aos-init aos-animate" style={{'margin-top': '0px'}}>

    <div className="row">

      <div className="col-xl-12 d-flex content">
        <div className="row align-self-center gy-4 place_stage_investor">

          <div className="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up">
            <div className="stage_investor" data-number="1">
              <i aria-hidden="true" className="fas fa-file-contract"></i>              <div>
                <h4>Проверка учредительных документов</h4>
              </div>
            </div>
          </div>

          <div className="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
            <div className="stage_investor" data-number="2">
              <div className="arrow">
                <i className="bi bi-arrow-right-circle"></i>
              </div>
              <i aria-hidden="true" className="fas fa-user-check"></i>              <div>
                <h4>Проверка учредителей, генерального директора</h4>
              </div>
            </div>
          </div>


          <div className="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="50">
            <div className="stage_investor" data-number="3">
              <div className="arrow">
                <i className="bi bi-arrow-right-circle"></i>
              </div>
              <i aria-hidden="true" className="far fa-money-bill-alt"></i>              <div>
                <h4>Анализ финансовой отчетности</h4>
              </div>
            </div>
          </div>

          <div className="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="50">
            <div className="stage_investor" data-number="4">
              <div className="arrow">
                <i className="bi bi-arrow-right-circle"></i>
              </div>
              <i aria-hidden="true" className="fas fa-chart-line"></i>              <div>
                <h4>Анализ действующих контрактов</h4>
              </div>
            </div>
          </div>

          <div className="line_ar investor" style={{'-webkit-mask-composite': 'xor'}}></div>
        </div>
      </div>
    </div>
  </div>
</div>
<br/><br/>
</section>

<section class="color_dinamic">
  <div class="container" data-aos="">
    <header class="section-header white">
      <p>Как начать инвестировать и зарабатывать?</p>
          </header>

  <div class="time_place founder">
  <div class="timeline">
    <div class="outer">

          <div class="time_card">
        <div class="info">
          <h3 class="title">№<b>1</b></h3>
          <h3 class="pre_title">Регистрация</h3>
          <p><p>Создайте аккаунт на платформе qliq для себя и своей компании.</p></p>
        </div>
      </div>
          <div class="time_card">
        <div class="info">
          <h3 class="title">№<b>2</b></h3>
          <h3 class="pre_title">Заполнение анкеты инвестора</h3>
          <p><p>Ответьте на вопросы анкеты и загрузите документы.</p></p>
        </div>
      </div>
          <div class="time_card">
        <div class="info">
          <h3 class="title">№<b>3</b></h3>
          <h3 class="pre_title">Знакомство с инвестиционными предложениями</h3>
          <p><p>Выбирайте отрасль и предложения, интересные вам.</p></p>
        </div>
      </div>
          <div class="time_card">
        <div class="info">
          <h3 class="title">№<b>4</b></h3>
          <h3 class="pre_title">Пополнение счета</h3>
          <p><p>Внесите сумму предполагаемых инвестиций на счет инвестора в системе.</p></p>
        </div>
      </div>
          <div class="time_card">
        <div class="info">
          <h3 class="title">№<b>5</b></h3>
          <h3 class="pre_title">Электронное оформление</h3>
          <p><p>Оформите все документы и договор инвестирования на платформе.</p></p>
        </div>
      </div>
          <div class="time_card">
        <div class="info">
          <h3 class="title">№<b>6</b></h3>
          <h3 class="pre_title">Получение дохода и возврат инвестиций</h3>
          <p><p>Получайте доход на ваш счет в системе.</p></p>
        </div>
      </div>
    

    </div>
  </div>
</div>
</div>
</section>

<section id="contact_us" class="contact">
  <div class="container" data-aos="">

    <header class="section-header">
      <p>Связаться с нами</p>
          </header>

    <div class="row gy-4 justify-content-center">

      <div class="col-lg-6">

        <div class="row gy-4">
                    <div class="col-md-6 col-6">
            <div class="info-box">
              <i class="bi bi-geo-alt"></i>
              <h3>Адрес</h3>
              <p><a href="https://yandex.ru/maps/-/CCURyTF8XA" target="_blank">123112, город Москва, Пресненская наб, д. 12, помещ. 1/13</a></p>
            </div>
          </div>
                                <div class="col-md-6 col-6">
              <div class="info-box">
                <i class="bi bi-telephone"></i>
                <h3>Телефоны</h3>
          	          		          		                <p><a href="tel:+7 (495) 136-27-90">+7 (495) 136-27-90</a></p>
              </div>
            </div>
          	                              <div class="col-md-6 col-6">
            <div class="info-box">
              <i class="bi bi-envelope"></i>
              <h3>Email</h3>
              <p><a href="mailto:info@qliqinvest.ru">info@qliqinvest.ru</a></p>
            </div>
          </div>
                              <div class="col-md-6 col-6">
            <div class="info-box">
              <i class="bi bi-clock"></i>
              <h3>Часы работы</h3>
              <p>Пн - Пт<br />09:00 - 18:00</p>
            </div>
          </div>
                </div>

      </div>

      <div class="col-lg-6">
        <form action="forms/contact.php" method="post" class="php-email-form">
          <div class="row gy-4 justify-content-center">

            <div class="col-md-6 mt-0">
              <input type="text" name="name" class="form-control" placeholder="Имя" required />
            </div>

            <div class="col-md-6 mt-0">
              <input type="email" class="form-control" name="email" placeholder="Телефон" required />
            </div>

            <div class="col-md-12 mt-0">
              <textarea class="form-control" name="message" rows="6" placeholder="Текст обращения" required></textarea>
            </div>

            <center>
              Нажимая кнопку "Отправить", Вы подтверждаете, что ознакомлены и согласны с <Link to="/privacy" target="_blank"><b>Политикой конфиденциальности</b></Link>
            </center>

            <div class="col-md-12 text-center">
              <div class="loading">Идет отправка</div>
              <div class="error-message"></div>
              <div class="sent-message">Ваше сообщение отправлено!</div>

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

export default Investor_page;
