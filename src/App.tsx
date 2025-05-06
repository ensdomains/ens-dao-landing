import "./App.css";
import DAOLogo from "./assets/DAOLogo.svg";
import MainItems from "./components/MainItems";

const headerLinks = [
  {
    text: "Basics",
    link: "https://basics.ensdao.org",
  },
  {
    text: "Agora",
    link: "https://agora.ensdao.org",
  },
  {
    text: "Tally",
    link: "https://tally.ensdao.org",
  },
  {
    text: "Forum",
    link: "https://discuss.ens.domains/",
  },
  {
    text: "Docs",
    link: "https://docs.ens.domains/v/governance/",
  },
];

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={DAOLogo} />
        <div className="header-items">
          {headerLinks.map((link) => (
            <a href={link.link}>{link.text}</a>
          ))}
        </div>
      </div>
      <MainItems />
    </div>
  );
}

export default App;
