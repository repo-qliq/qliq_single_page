import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Убедитесь, что путь к App.js верен
import "./index.css"; // Если у вас есть глобальный файл стилей, импортируйте его здесь

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
