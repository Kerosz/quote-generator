import Card from "../components/Card";

export default function (quote, author) {
  const CardWrapper = Card();

  const CardText = Card.Text(quote);
  const CardAuthor = Card.Author(author);

  CardWrapper.appendChild(CardText);
  CardWrapper.appendChild(CardAuthor);

  return CardWrapper;
}
