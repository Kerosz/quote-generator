import Footer from "../components/Footer";

export default function () {
  const FooterSection = Footer();
  const FooterContainer = Footer.Container();
  const Copyright = Footer.Copyright("Hello from the footer");

  FooterContainer.appendChild(Copyright);
  FooterSection.appendChild(FooterContainer);

  return FooterSection;
}
