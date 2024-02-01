import React from "react";
import { Helmet } from "react-helmet";
import Header from "./header";
import Hero from "./borrower";
import Footer from "./footer";
// import Footer from './footer';

// Импорт стилей
import "./assets/css/style.css";
import "./assets/css/cube.css";
import "./assets/css/profile.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";

// Если у вас есть дополнительные компоненты (например, Footer, MainSection и т.д.), импортируйте их здесь
// Пример: import Footer from './components/Footer';
// Пример: import MainSection from './components/MainSection';

function App() {
  return (
    <div>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        />
      </Helmet>
      <Header />
      <Hero />
      <Footer />
      {/* <Footer /> */}
      {/* Здесь вы можете добавить другие компоненты, например <MainSection /> или <Footer /> */}
    </div>
  );
}

export default App;
