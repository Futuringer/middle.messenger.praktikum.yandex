import {
  renderLogin,
  renderProfile,
  renderRegistration,
  renderClientError,
  renderServerError,
  renderChat,
} from "./pages";

const container = document.getElementById("root");
const path = window.location.pathname;

console.log("window", window);
console.log("path", path);

switch (path) {
  // case "/":
  //   window.location.href = "/login";
  case "/login":
    container.innerHTML = renderLogin();
    break;
  case "/registration":
    container.innerHTML = renderRegistration();
    break;
  case "/profile":
    container.innerHTML = renderProfile();
    break;
  case "/500":
    container.innerHTML = renderServerError();
    break;
  case "/chat":
    container.innerHTML = renderChat();
    break;
  default:
    container.innerHTML = renderClientError();
    break;
}
