import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Убедитесь, что путь к App.js верен
import "./index.css";
import "./output.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
