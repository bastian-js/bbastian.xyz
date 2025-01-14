import Buttons from "../components/Socials/Buttons.tsx";
import Header from "../components/Header.tsx";

function Socials() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <Buttons
        text="Discord"
        icon="fa-brands fa-discord"
        link="https://discord.gg/SNgPncNQx5"
        height="80px"
      />
      <Buttons
        text="Twitch"
        icon="fa-brands fa-twitch"
        link="https://twitch.tv/knuddelghg"
        height="80px"
      />
      <Buttons
        text="Twitter"
        icon="fa-brands fa-twitter"
        link="https://twitter.com/knuddelghg"
        height="80px"
      />
    </>
  );
}

export default Socials;
