import Component from "../component";

import "./card.scss";

export default function Card() {
  return Component({ type: "div", cssClass: ["card"] });
}

Card.Container = function CardContainer() {
  return Component({ type: "div", cssClass: ["container"] });
};

Card.Text = function CardText(text) {
  return Component({
    type: "blockquote",
    inner: `"${text}"`,
    cssClass: ["card__text"],
  });
};

Card.Author = function CardAuthor(author) {
  return Component({ type: "span", inner: author, cssClass: ["card__author"] });
};
