import { Route, Routes } from "react-router-dom";
import Hero from "../hero";
import Investor_page from "../investor_page";
import Borrower_page from "../borrower_page";
import Document_page from "../document_page";

const routes = (
  <Routes>
    <Route exact path="/" element={<Hero />} />
    <Route path="/investor" element={<Investor_page />} />
    <Route path="/borrower" element={<Borrower_page />} />
    <Route path="/documents" element={<Document_page />} />
  </Routes>
);

export default routes;
