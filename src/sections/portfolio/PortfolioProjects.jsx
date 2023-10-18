import Project from "./Project";

const PortfolioProjects = ({projects}) => {
  return (
    <div className="portfolio__projects">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default PortfolioProjects;
