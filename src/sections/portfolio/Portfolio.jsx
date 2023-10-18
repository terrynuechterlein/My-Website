import "./portfolio.css";
import PortfolioProjects from "./PortfolioProjects";
import data from "./data";
import { useState } from "react";

const Portfolio = () => {
  const [projects] = useState(data);
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <p>Here are some projects I have completed (You can see more projects i'm working on on my Github) </p>
      <div className="container portfolio__container">
        <PortfolioProjects projects={projects}/>
      </div>
    </section>
  );
};

export default Portfolio;
