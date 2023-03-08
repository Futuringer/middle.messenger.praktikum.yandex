import Handlebars from "handlebars";
import profilePage from "bundle-text:./profile.hbs";

export const renderProfile = () => {
  return Handlebars.compile(profilePage)();
};
