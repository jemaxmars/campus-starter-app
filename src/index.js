import { App } from "./components/App/App.js";

console.log("Campus Starter App loaded successfully!");

// Initialize the app when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  const appContainer = document.getElementById("app");

  // Clear the existing content
  appContainer.innerHTML = "";

  // Create and render the App component
  const app = new App();
  app.render(document.body);
});
