import Component from "./components/component";

import cardContainer from "./containers/cardContainer";
import footerContainer from "./containers/footerContainer";
import headerContainer from "./containers/headerContainer";

import "./global.scss";

export default function App() {
  const AppWrapper = Component({ type: "div", id: "app" });
  const Main = Component({ type: "main", id: "main", cssClass: ["container"] });

  const Heading = Component({
    type: "h1",
    inner: "Random Quote Generator",
    cssClass: ["heading"],
  });
  const Button = Component({
    type: "button",
    inner: "Get Quote",
    cssClass: ["button"],
  });

  Main.appendChild(Heading);
  Main.appendChild(cardContainer());
  Main.appendChild(Button);

  AppWrapper.appendChild(headerContainer());
  AppWrapper.appendChild(Main);
  AppWrapper.appendChild(footerContainer());

  return AppWrapper;
}
