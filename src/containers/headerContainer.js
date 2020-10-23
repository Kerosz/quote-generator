import Header from "../components/Header";

export default function () {
  const HeaderSection = Header();
  const HeaderContainer = Header.Container();

  const Branding = Header.Branding("Kerosz");
  const SocialGroup = Header.Group();
  const Github = Header.Social("Github", "https://github.com/Kerosz");
  const Twitter = Header.Social("Twitter", "https://twitter.com/chirila_");

  SocialGroup.appendChild(Github);
  SocialGroup.appendChild(Twitter);

  HeaderContainer.appendChild(Branding);
  HeaderContainer.appendChild(SocialGroup);

  HeaderSection.appendChild(HeaderContainer);

  return HeaderSection;
}
