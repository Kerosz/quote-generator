import Footer from "../components/Footer";

export default function () {
  const FooterSection = Footer();
  const FooterContainer = Footer.Container();
  const Copyright = Footer.Copyright(
    "This project was build to learn the basic of Javascript / Git and Github / Webpack and the Command Line."
  );

  FooterContainer.appendChild(Copyright);
  FooterSection.appendChild(FooterContainer);

  return FooterSection;
}
