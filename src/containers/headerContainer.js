import Header from "../components/Header";

export default function () {
  const HeaderSection = Header();
  const HeaderContainer = Header.Container();

  const Branding = Header.Branding("Kerosz");
  const SocialGroup = Header.Group();
  const Github = Header.Social("Github", "https://github.com/Kerosz");
  const Code = Header.Social(
    "See Code",
    "https://github.com/Kerosz/quote-generator"
  );
  const Twitter = Header.Social("Twitter", "https://twitter.com/chirila_");

  SocialGroup.appendChild(Github);
  SocialGroup.appendChild(Code);
  SocialGroup.appendChild(Twitter);

  HeaderContainer.appendChild(Branding);
  HeaderContainer.appendChild(SocialGroup);

  HeaderSection.appendChild(HeaderContainer);

  return HeaderSection;
}
