import Handlebars from "handlebars";
import registrationPage from "bundle-text:./registration.hbs";

export const renderRegistration = () => {
  return Handlebars.compile(registrationPage)();
};
