import { App } from "./components/App/App.js";

console.log("Campus Starter App loaded successfully!");

// Initialize the app when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // Initialize the App component to bind events
  new App();
});
