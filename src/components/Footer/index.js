import Component from "../component";

import "./footer.scss";

export default function Footer() {
  return Component({ type: "footer", id: "footer" });
}

Footer.Container = function FooterContainer() {
  return Component({ type: "div", cssClass: ["container"] });
};

Footer.Copyright = function FooterCopyright(text) {
  return Component({ type: "p", inner: text, cssClass: ["footer__copyright"] });
};
