import data from "./data.js";
import Card from "../../components/Card";
import "./work_experience.css";

const WorkExperience = () => {
  return (
    <section id="work-experience">
      <h2>Work Experience</h2>
      <div className="container work-experience__container">
        {data.map((item) => (
          <Card key={item.id} className="work-experience light">
            <div className="work-experience__icon">{item.icon}</div>
            <div className="work-experience__details">
              <h4>{item.title}</h4>
              <h6>{item.subtitle}</h6>
              <h6>{item.duties}</h6>
              <div>{item.desc}</div>
              <h6>{item.secondSection}</h6>
              <p>{item.secondSection_desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
