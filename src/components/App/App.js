import "./App.css";

export class App {
  constructor() {
    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    const nav = document.getElementById("nav");

    if (nav) {
      // Clear any existing content
      nav.innerHTML = "";

      // Add dining button
      const diningButton = document.createElement("button");
      diningButton.textContent = "Dining Halls & Cafes";
      diningButton.addEventListener("click", function () {
        alert("Welcome to Dining Information!");
      });
      nav.appendChild(diningButton);

      // Add key campus button
      const keyCampusButton = document.createElement("button");
      keyCampusButton.textContent = "Key Campus Buildings";
      keyCampusButton.addEventListener("click", function () {
        alert("Welcome to Campus Buildings Information!");
      });
      nav.appendChild(keyCampusButton);

      // Add campus life button
      const campusButton = document.createElement("button");
      campusButton.textContent = "Campus Life & Events";
      campusButton.addEventListener("click", function () {
        alert("Welcome to Campus Life Information!");
      });
      nav.appendChild(campusButton);
    }

    // FAQ functionality
    this.bindFAQEvents();
  }

  bindFAQEvents() {
    document.querySelectorAll(".faq__item").forEach((faq) => {
      faq.addEventListener("click", () => {
        faq.classList.toggle("show");
      });
    });
  }
}
