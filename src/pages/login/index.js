import Handlebars from "handlebars";
import loginPage from "bundle-text:./login.hbs";

export const renderLogin = () => {
  return Handlebars.compile(loginPage)();
};
