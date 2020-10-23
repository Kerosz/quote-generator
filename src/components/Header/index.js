import Component from "../component";

import "./header.scss";
import Footer from "../Footer";

export default function Header() {
  return Component({ type: "header", id: "header" });
}

Header.Container = function HeaderContainer() {
  return Component({ type: "div", cssClass: ["container"] });
};

Header.Branding = function HeaderBranding(text) {
  return Component({
    type: "span",
    inner: text,
    cssClass: ["header__branding"],
  });
};

Header.Group = function HeaderGroup() {
  return Component({ type: "div", cssClass: ["header__group"] });
};

Header.Social = function HeaderSocial(text, link) {
  return Component({
    type: "a",
    inner: text,
    to: link,
    cssClass: ["header__social"],
  });
};
