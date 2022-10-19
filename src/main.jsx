import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
if (process.env.NODE_ENV !== "development") {
  console.log = () => {};
  document.onkeydown = function (e) {
    console.log(e.key);
    if (e.key === "F12") {
      return false;
    }

    if (e.ctrlKey) {
      return false;
    }
  };

  setInterval(() => {
    let time = Date.now();
    // eslint-disable-next-line no-undef
    debugger;
    if (Date.now() - time > 300) {
      // zzzzz();
      setTimeout(() => {
        while (true) {
          alert("不要亂看!!!！");
          window.addEventListener("blur", function () {
            window.close();
          });
        }
      }, 500);
    }
  }, 100);
}
