import Handlebars from "handlebars";
import clientErrorPage from "bundle-text:./404.hbs";

export const renderClientError = () => {
  return Handlebars.compile(clientErrorPage)();
};
