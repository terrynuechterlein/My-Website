import TerryLogo from "../../assets/TerryLogo.png";
import data from "./data";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={TerryLogo} alt="TerryLogo" />
        </a>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              {" "}
              <a href={item.link}>{item.title}</a>{" "}
            </li>
          ))}
        </ul>
        {/* <button id="theme__icon">
          {" "}
          <FaPaintBrush/>
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
