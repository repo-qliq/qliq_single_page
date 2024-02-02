import { Route, Routes } from "react-router-dom";
import Hero from "../hero";
import Investor_page from "../investor_page";
import Borrower_page from "../borrower_page";

const routes = (
  <Routes>
    <Route exact path="/" element={<Hero />} />
    <Route path="/Investor" element={<Investor_page />} />
    <Route path="/Borrower" element={<Borrower_page />} />
  </Routes>
);

export default routes;
