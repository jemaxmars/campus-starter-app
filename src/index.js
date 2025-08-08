import { App } from "./components/App/App.js";
import "./vendor/index.css";

console.log("Campus Starter App loaded successfully!");

// Initialize the app when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // Create and initialize the App component
  new App();
});
