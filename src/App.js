import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./header";
import Hero from "./hero";
import Footer from "./footer";
import InvestorPage from "./investor_page";
import BorrowerPage from "./borrower_page";

// Импорт стилей
import "./assets/vendor/aos/aos.css";
import "./assets/css/cube.css";
import "./assets/css/profile.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import { YMInitializer } from "react-yandex-metrika";
function App() {
  return (
    <Router>
      <YMInitializer
        accounts={[96335293]}
        options={{
          webvisor: true,
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
        }}
        version="2"
      />
      <div>
        <Helmet>
          <title>Qliq &#8212; инвестиционная платформа</title>
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
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/Investor" element={<InvestorPage />} />
          <Route path="/Borrower" element={<BorrowerPage />} />
          {/* Другие маршруты */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
