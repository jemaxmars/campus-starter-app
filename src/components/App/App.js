import "./App.css";

export class App {
  constructor() {
    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    const welcomeBtn = document.getElementById("welcome-btn");
    if (welcomeBtn) {
      welcomeBtn.addEventListener("click", this.handleClick);
    }
  }

  handleClick() {
    alert("Hello from Starlight University!");
  }
}
