import { App } from "./components/App/App.js";
import "./index.css";

console.log("Campus Starter App loaded successfully!");

document.addEventListener("DOMContentLoaded", function () {
  new App();
});

//faq dropdown logic
document.querySelectorAll(".faq__item").forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("show");
  });
});
