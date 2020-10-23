import Card from "../components/Card";

export default function () {
  const CardWrapper = Card();

  const CardText = Card.Text("Hello from the card");
  const CardAuthor = Card.Author("Andrei C");

  CardWrapper.appendChild(CardText);
  CardWrapper.appendChild(CardAuthor);

  return CardWrapper;
}
