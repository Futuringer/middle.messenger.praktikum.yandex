import Handlebars from "handlebars";
import chatPage from "bundle-text:./chat.hbs";

export const renderChat = () => {
  return Handlebars.compile(chatPage)();
};
