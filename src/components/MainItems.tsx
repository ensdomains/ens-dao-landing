import dao from "../assets/dao.svg";
import discord from "../assets/discord.svg";
import discuss from "../assets/discuss.svg";
import governance from "../assets/governance.svg";
import agora from "../assets/agora.svg";
import tally from "../assets/tally.svg";

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
    color: "#A764FC",
    backgroundColor: "rgba(180, 120, 255, 0.1)",
    borderColor: "#D6B6FF",
    link: "https://delegate.ens.domains",
  },
  {
    icon: discuss,
    text: "Join the forum",
    color: "#DE7224",
    backgroundColor: "rgba(238, 148, 83, 0.1)",
    borderColor: "#F8D1B6",
    link: "https://discuss.ens.domains/",
  },
  {
    icon: tally,
    text: "Vote on Tally",
    color: "#00CBB5",
    backgroundColor: "rgba(98, 244, 228, 0.2)",
    borderColor: "#62F4E4",
    link: "https://tally.ensdao.org/",
  },
  {
    icon: governance,
    text: "Documentation",
    color: "#4D90F1",
    backgroundColor: "rgba(77, 144, 241, 0.1)",
    borderColor: "#B0D0FF",
    link: "https://docs.ens.domains/dao/",
  },
  {
    icon: discord,
    text: "Chat on Discord",
    color: "#854BFF",
    backgroundColor: "#E1DAF7",
    borderColor: "#C0B2EA",
    link: "https://chat.ens.domains/",
  },
  {
    icon: agora,
    text: "Vote on Agora",
    color: "#2C2C32",
    backgroundColor: "#E8E7EF",
    borderColor: "#D2CFE4",
    link: "https://agora.ensdao.org/",
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
          <img
            style={{ width: icon === governance ? "40px" : "initial" }}
            src={icon}
          />
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
