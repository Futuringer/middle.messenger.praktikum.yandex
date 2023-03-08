import Handlebars from "handlebars";
import serverErrorPage from "bundle-text:./500.hbs";

export const renderServerError = () => {
  return Handlebars.compile(serverErrorPage)();
};
