import Component from "./components/component";

import cardContainer from "./containers/cardContainer";
import footerContainer from "./containers/footerContainer";
import headerContainer from "./containers/headerContainer";
import data from "./constants/data";

import "./global.scss";

export default function App() {
  // Initializes the static data
  let quote = data[0].quote;
  let author = data[0].author;

  // Creates local components
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

  // Aappends all the components to the main app
  Main.appendChild(Heading);
  Main.appendChild(cardContainer(quote, author));
  Main.appendChild(Button);

  AppWrapper.appendChild(headerContainer());
  AppWrapper.appendChild(Main);
  AppWrapper.appendChild(footerContainer());

  // Event handler for on click [randomize the static data and replaces it]
  function handleClick(event) {
    event.preventDefault();

    const random = Math.floor(Math.random() * data.length);

    quote = data[random].quote;
    author = data[random].author;

    const cardText = document.querySelector(".card__text");
    const cardAuthor = document.querySelector(".card__author");
    cardText.innerText = `"${quote}"`;
    cardAuthor.innerText = `"${author}"`;
  }

  Button.addEventListener("click", handleClick);

  return AppWrapper;
}
