import dao from "../assets/dao.svg";
import discord from "../assets/discord.svg";
import discuss from "../assets/discuss.svg";
import governance from "../assets/governance.svg";
import tally from "../assets/tally.svg";
import agora from "../assets/agora.svg";

type BoxData = {
  icon: string;
  text: string;
  color: string;
  backgroundColor: string;
  borderColor: string;
  link: string;
};

const standardBoxData: BoxData[] = [
  {
    icon: dao,
    text: "Delegate $ENS",
    color: "#007C23",
    backgroundColor: "#C5DDCC",
    borderColor: "#007C23",
    link: "https://delegate.ens.domains",
  },
  {
    icon: discuss,
    text: "Join the forum",
    color: "#F53293",
    backgroundColor: "#F2C4DA",
    borderColor: "#F53293",
    link: "https://discuss.ens.domains/",
  },
  {
    icon: tally,
    text: "Vote on Tally",
    color: "#674D49",
    backgroundColor: "rgba(103, 77, 73, 0.1)",
    borderColor: "#674D49",
    link: "https://tally.ensdao.org",
  },
  {
    icon: governance,
    text: "Documentation",
    color: "#0080BC",
    backgroundColor: "#CEE1E8",
    borderColor: "#0080BC",
    link: "https://docs.ens.domains/v/governance/",
  },
  {
    icon: discord,
    text: "Chat on Discord",
    color: "#093C52",
    backgroundColor: "rgba(9, 60, 82, 0.1)",
    borderColor: "#093C52",
    link: "https://chat.ens.domains/",
  },
  {
    icon: agora,
    text: "Vote on Agora",
    color: "#011A25",
    backgroundColor: "rgba(1, 26, 37, 0.1)",
    borderColor: "#011A25",
    link: "https://ens.mirror.xyz/",
  },
];

const StandardBox = ({
  color,
  backgroundColor,
  text,
  icon,
  borderColor,
  link,
}: BoxData) => {
  return (
    <a
      className="box"
      style={
        {
          "--background": backgroundColor,
          "--border": borderColor,
        } as React.CSSProperties
      }
      href={link}
      target={"_blank"}
    >
      <div>
        <div>
          <img src={icon} />
        </div>
        <div>
          <div
            className="bottom-text"
            style={{ "--text": color } as React.CSSProperties}
          >
            {text}
          </div>
        </div>
      </div>
    </a>
  );
};

function MainItems() {
  return (
    <main>
      <div className="content">
        <div className="content-grid">
          {standardBoxData.map((boxData) => (
            <StandardBox key={boxData.text} {...boxData} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default MainItems;
