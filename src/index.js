import { renderLogin } from "./pages/login/login";

const container = document.getElementById("root_body");
const path = window.location.pathname;

container.innerHTML = renderLogin();
