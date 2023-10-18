import Headshot from "../../assets/Headshot.png";
import clouds from "../../assets/clouds.mp4";
import data from "./data";
import "./header.css";

const Header = () => {
  return (
    <header id="header">
            <video src={clouds} autoPlay loop muted className="header__backgroundVideo" />
      <div className="container header__container">
        <div className="header__profile">
          <img src={Headshot} alt="Headshot" />
        </div>
        <h3>Terry Nuechterlein</h3>
        <p>Junior developer eager to learn and grow</p>

        <div className="header__cta">
          <a href="#contact" className="btn primary">
            Lets Talk!
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
